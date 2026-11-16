const CRLF = '\r\n';

function escapeText(value = '') {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\r?\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;');
}

function splitFullName(fullName = '') {
  const parts = String(fullName).trim().split(/\s+/).filter(Boolean);
  const prefix = parts.length > 1 && /\.$/.test(parts[0]) ? parts.shift() : '';
  const family = parts.length > 1 ? parts.pop() : '';
  const given = parts.join(' ');

  return { prefix, given, family };
}

export function buildVCard(config) {
  const { profile, contact } = config;
  const { prefix, given, family } = splitFullName(profile.fullName);
  const phone = String(contact.phone ?? '').replace(/[^\d+]/g, '');

  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escapeText(family)};${escapeText(given)};;${escapeText(prefix)};`,
    `FN:${escapeText(profile.fullName)}`,
    profile.company ? `ORG:${escapeText(profile.company)}` : null,
    profile.title ? `TITLE:${escapeText(profile.title)}` : null,
    phone ? `TEL;TYPE=CELL,VOICE:${phone}` : null,
    contact.email ? `EMAIL;TYPE=INTERNET:${contact.email}` : null,
    contact.website ? `URL:${contact.website}` : null,
    contact.address ? `ADR;TYPE=WORK:;;${escapeText(contact.address)};;;;` : null,
    profile.bio ? `NOTE:${escapeText(profile.bio)}` : null,
    `REV:${new Date().toISOString()}`,
    'END:VCARD',
  ].filter(Boolean);

  return `${lines.join(CRLF)}${CRLF}`;
}

export function downloadVCard(config) {
  const slug = config.profile.slug || config.profile.fullName || 'contact';
  const fileName = `${String(slug).replace(/[^\w-]+/g, '-')}.vcf`;
  const blob = new Blob([buildVCard(config)], {
    type: 'text/vcard;charset=utf-8',
  });
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = fileName;
  link.rel = 'noopener';
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
}

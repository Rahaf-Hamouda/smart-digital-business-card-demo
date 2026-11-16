export function buildBookingUrl(config, { service } = {}) {
  const phone = String(config.contact.whatsapp ?? '').replace(/\D/g, '');
  const message = [
    config.booking.greeting,
    config.booking.request,
    service ? `الخدمة المطلوبة: ${service}.` : null,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

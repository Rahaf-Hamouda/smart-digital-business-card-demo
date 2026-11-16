import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { QRCodeSVG } from 'qrcode.react';
import { Check, Copy, Link2, QrCode, Share2, X } from 'lucide-react';
import { ActionBadge } from '@/shared/ui/ActionBadge';
import { profileConfig } from '@/shared/config/profileConfig';
import { copyText } from '../lib/copyToClipboard';

export function QrShareModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionBadge
        variant="outline"
        layout="stacked"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="مشاركة البطاقة عبر رمز QR أو نسخ الرابط"
        icon={<QrCode className="h-5 w-5" />}
        label="مشاركة"
      />
      {open ? <ShareDialog onClose={() => setOpen(false)} /> : null}
    </>
  );
}

function ShareDialog({ onClose }) {
  const [copyState, setCopyState] = useState('idle');
  const [canShare, setCanShare] = useState(false);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const timerRef = useRef(null);

  const shareUrl = useMemo(
    () => profileConfig.site.url?.trim() || window.location.href,
    [],
  );
  const displayUrl = shareUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    setCanShare(typeof navigator.share === 'function');
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(timerRef.current);
      previouslyFocused?.focus?.();
    };
  }, [onClose]);

  const handleCopy = async () => {
    const copied = await copyText(shareUrl);
    setCopyState(copied ? 'copied' : 'error');
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopyState('idle'), 2400);
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: profileConfig.site.title,
        text: profileConfig.site.description,
        url: shareUrl,
      });
    } catch {
      // The share sheet was dismissed — nothing to do.
    }
  };

  const copyClasses =
    copyState === 'copied'
      ? 'bg-emerald-50 text-emerald-600 ring-emerald-100'
      : copyState === 'error'
        ? 'bg-rose-50 text-rose-600 ring-rose-100'
        : 'bg-white text-purple-700 ring-purple-100 hover:bg-purple-50';

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-slate-900/45 backdrop-blur-[3px]"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-card-title"
        tabIndex={-1}
        className="relative max-h-[calc(100dvh-2rem)] w-full max-w-[22rem] animate-scale-in overflow-y-auto rounded-[1.75rem] border border-purple-100 bg-white shadow-2xl shadow-purple-950/25 focus:outline-none"
      >
        <div className="relative overflow-hidden bg-gradient-to-l from-purple-800 via-purple-600 to-sky-500 px-5 pb-14 pt-5 text-white">
          <div
            aria-hidden="true"
            className="absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/10 blur-md"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-16 right-4 h-36 w-36 rounded-full border border-white/15"
          />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <h2 id="share-card-title" className="text-base font-extrabold">
                شارك البطاقة
              </h2>
              <p className="mt-1 text-[11.5px] leading-5 text-white/80">
                امسح الرمز بكاميرا هاتفك أو انسخ الرابط.
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="إغلاق النافذة"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>

        <div className="relative -mt-9 px-5 pb-5">
          <div className="mx-auto w-fit rounded-3xl bg-gradient-to-br from-purple-200/80 via-white to-sky-200/80 p-[1.5px] shadow-lg shadow-purple-950/10">
            <div
              role="img"
              aria-label="رمز QR لرابط البطاقة"
              className="rounded-[calc(1.5rem-1px)] bg-white p-3"
            >
              <QRCodeSVG
                value={shareUrl}
                size={184}
                level="M"
                marginSize={2}
                bgColor="#ffffff"
                fgColor="#3b0764"
                title="رابط البطاقة"
                className="block h-auto w-[10.5rem]"
              />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-purple-700 to-sky-500 text-[11px] font-extrabold text-white">
              {profileConfig.profile.initials}
            </span>
            <p className="text-[11.5px] font-bold text-slate-600">
              {profileConfig.profile.fullName}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl border border-purple-100 bg-purple-50/50 p-1.5 ps-3">
            <Link2 className="h-4 w-4 shrink-0 text-purple-500" />
            <span className="min-w-0 flex-1">
              <span className="block text-[10px] font-bold text-purple-700">
                رابط البطاقة
              </span>
              <span
                dir="ltr"
                title={shareUrl}
                className="block truncate text-end text-[11.5px] font-semibold text-slate-700"
              >
                {displayUrl}
              </span>
            </span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="نسخ رابط البطاقة"
              className={`flex shrink-0 items-center gap-1 rounded-xl px-2.5 py-2 text-[11px] font-extrabold ring-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 ${copyClasses}`}
            >
              {copyState === 'copied' ? (
                <Check className="h-3.5 w-3.5" strokeWidth={2.8} />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
              {copyState === 'copied'
                ? 'تم النسخ'
                : copyState === 'error'
                  ? 'تعذّر النسخ'
                  : 'نسخ'}
            </button>
          </div>
          <span role="status" aria-live="polite" className="sr-only">
            {copyState === 'copied'
              ? 'تم نسخ رابط البطاقة'
              : copyState === 'error'
                ? 'تعذّر نسخ الرابط'
                : ''}
          </span>

          {canShare ? (
            <button
              type="button"
              onClick={handleNativeShare}
              className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-2xl border border-purple-700/20 bg-gradient-to-l from-purple-700 via-purple-600 to-sky-500 px-4 py-3 text-[12.5px] font-extrabold text-white shadow-lg shadow-purple-700/25 transition-all duration-300 hover:shadow-xl hover:shadow-purple-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              <Share2 className="h-4 w-4" />
              مشاركة عبر التطبيقات
            </button>
          ) : null}
        </div>
      </div>
    </div>,
    document.body,
  );
}

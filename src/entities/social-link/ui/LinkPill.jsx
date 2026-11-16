import { ArrowLeft } from 'lucide-react';

const ACCENTS = {
  purple: 'bg-purple-50 text-purple-700 ring-purple-100 group-hover:bg-purple-100/80',
  sky: 'bg-sky-50 text-sky-600 ring-sky-100 group-hover:bg-sky-100/80',
  lavender: 'bg-violet-50 text-violet-700 ring-violet-100 group-hover:bg-violet-100/80',
  slate: 'bg-slate-50 text-slate-600 ring-slate-100 group-hover:bg-slate-100/80',
};

export function LinkPill({ icon, title, subtitle, href, accent = 'purple' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-2.5 transition-all duration-300 hover:border-purple-200 hover:bg-purple-50/30 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 focus-visible:ring-offset-2"
    >
      <span
        aria-hidden="true"
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 transition-colors duration-300 ${
          ACCENTS[accent] ?? ACCENTS.purple
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1 text-start">
        <span className="block truncate text-[12.5px] font-extrabold text-slate-800">
          {title}
        </span>
        <span className="mt-0.5 block truncate text-[11px] font-medium text-slate-500">
          {subtitle}
        </span>
      </span>
      <ArrowLeft
        aria-hidden="true"
        className="h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-x-0.5 group-hover:text-purple-500"
      />
    </a>
  );
}

const ACCENTS = {
  purple: 'bg-purple-50 text-purple-700 ring-purple-100',
  sky: 'bg-sky-50 text-sky-600 ring-sky-100',
  lavender: 'bg-violet-50 text-violet-700 ring-violet-100',
  indigo: 'bg-indigo-50 text-indigo-600 ring-indigo-100',
};

export function ServiceCard({ icon, title, note, accent = 'purple' }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-lift">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -end-5 -top-5 h-16 w-16 rounded-full bg-purple-100/60 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span
        className={`mb-2.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ${
          ACCENTS[accent] ?? ACCENTS.purple
        }`}
      >
        {icon}
      </span>
      <h3 className="text-[13px] font-extrabold leading-5 text-slate-800">{title}</h3>
      <p className="mt-1 text-[11.5px] leading-5 text-slate-500">{note}</p>
    </article>
  );
}

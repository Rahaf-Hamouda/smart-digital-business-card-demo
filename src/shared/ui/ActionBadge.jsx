const BASE =
  'group relative inline-flex select-none items-center justify-center rounded-2xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60';

const VARIANTS = {
  primary:
    'border border-purple-700/20 bg-gradient-to-l from-purple-700 via-purple-600 to-sky-500 text-white shadow-lg shadow-purple-700/25 hover:shadow-xl hover:shadow-purple-700/30 active:scale-[0.97]',
  soft:
    'border border-purple-100 bg-white text-purple-800 shadow-sm hover:border-purple-200 hover:bg-purple-50/60 hover:shadow-md active:scale-[0.97]',
  sky:
    'border border-sky-100 bg-sky-50 text-sky-800 hover:border-sky-200 hover:bg-sky-100/70 active:scale-[0.97]',
  outline:
    'border border-purple-100 bg-purple-50/60 text-purple-800 hover:border-purple-200 hover:bg-purple-100/70 active:scale-[0.97]',
  ghost: 'text-slate-600 hover:bg-slate-100/70 active:scale-[0.97]',
};

const ICONS = {
  primary: 'bg-white/15 text-white ring-1 ring-white/20 group-hover:bg-white/20',
  soft: 'bg-purple-50 text-purple-700 ring-1 ring-purple-100',
  sky: 'bg-white text-sky-600 ring-1 ring-sky-100',
  outline: 'bg-white text-purple-700 ring-1 ring-purple-100',
  ghost: 'bg-slate-100 text-slate-600',
};

const LAYOUTS = {
  inline: 'gap-2 px-4 py-2.5 text-sm',
  stacked: 'min-h-[4.75rem] flex-col gap-2 px-1.5 py-3 text-[12.5px] leading-none',
};

export function ActionBadge({
  as: Tag = 'button',
  variant = 'primary',
  layout = 'inline',
  icon,
  label,
  className = '',
  ...rest
}) {
  const classes = [
    BASE,
    VARIANTS[variant] ?? VARIANTS.primary,
    LAYOUTS[layout] ?? LAYOUTS.inline,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      className={classes}
      {...(Tag === 'button' ? { type: 'button' } : {})}
      {...rest}
    >
      {icon ? (
        <span
          aria-hidden="true"
          className={`flex items-center justify-center rounded-xl ${
            layout === 'stacked' ? 'h-9 w-9' : 'h-8 w-8'
          } ${ICONS[variant] ?? ICONS.primary}`}
        >
          {icon}
        </span>
      ) : null}
      <span className="whitespace-nowrap">{label}</span>
    </Tag>
  );
}

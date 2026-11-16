import { BadgeCheck, MapPin, Sparkles } from 'lucide-react';
import { profileConfig } from '@/shared/config/profileConfig';

export function ProfileHeader() {
  const { profile } = profileConfig;
  const { availabilityLabel } = profile;

  return (
    <header className="relative">
      <div className="relative h-32 overflow-hidden bg-gradient-to-l from-purple-800 via-purple-600 to-sky-500 sm:h-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.22),transparent_46%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(255,255,255,0.09)_50%,transparent_65%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -start-10 h-40 w-40 rounded-full border border-white/15"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-10 -start-1 h-24 w-24 rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -top-12 end-8 h-28 w-28 rotate-45 rounded-3xl border border-white/10"
        />

        <div className="relative flex h-full items-start justify-between px-4 pt-3.5 sm:px-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-2.5 py-1 text-[10.5px] font-bold text-white ring-1 ring-white/25 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              {profile.isAvailable ? (
                <span className="absolute inline-flex h-full w-full animate-dot rounded-full bg-sky-300" />
              ) : null}
              <span
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                  profile.isAvailable ? 'bg-sky-100' : 'bg-white/60'
                }`}
              />
            </span>
            {availabilityLabel}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-950/20 px-2.5 py-1 text-[10px] font-medium text-white ring-1 ring-white/15 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            بطاقة ذكية
          </span>
        </div>
      </div>

      <div className="px-5 sm:px-6">
        <div className="relative -mt-12 flex justify-center">
          <div className="relative">
            <div className="rounded-full bg-gradient-to-br from-purple-200 via-white to-sky-200 p-[3px] shadow-[0_18px_40px_-18px_rgba(76,29,149,0.6)]">
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-gradient-to-br from-purple-700 via-purple-600 to-sky-500">
                {profile.avatarUrl ? (
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.fullName} — الصورة الشخصية`}
                    className="h-full w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                ) : (
                  <span className="select-none -translate-y-0.5 text-4xl font-extrabold leading-none text-white/95">
                    {profile.initials}
                  </span>
                )}
              </div>
            </div>

            {profile.verified ? (
              <span
                title="حساب موثّق"
                aria-label="حساب موثّق"
                className="absolute -bottom-0.5 -end-0.5 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-white bg-gradient-to-br from-sky-500 to-purple-600 shadow-md"
              >
                <BadgeCheck className="h-4 w-4 text-white" strokeWidth={2.6} aria-hidden="true" />
              </span>
            ) : null}
          </div>
        </div>

        <div className="mt-3 text-center">
          <h1 className="text-balance text-[1.4rem] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl">
            {profile.fullName}
          </h1>
          <p className="mt-1 text-[13px] font-bold text-purple-700">{profile.title}</p>
          <p className="mt-1.5 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 text-[11.5px] font-medium text-slate-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-sky-500" aria-hidden="true" />
            <span>{profile.company}</span>
            <span aria-hidden="true" className="text-slate-300">
              ·
            </span>
            <span>{profile.location}</span>
          </p>
          <p className="mx-auto mt-3 max-w-[21rem] text-balance text-[12.5px] leading-6 text-slate-500">
            {profile.bio}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-3 divide-x divide-x-reverse divide-purple-100/80 rounded-2xl border border-purple-100/80 bg-gradient-to-l from-purple-50/70 to-sky-50/50 py-2.5">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5 px-1.5">
              <span className="num text-[15px] font-extrabold leading-tight text-purple-800">
                {stat.value}
              </span>
              <span className="text-[10px] font-medium text-slate-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

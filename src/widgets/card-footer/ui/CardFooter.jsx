import { ArrowUpLeft, Clock3, MapPin } from 'lucide-react';
import { profileConfig } from '@/shared/config/profileConfig';

export function CardFooter() {
  const { profile, contact, workingHours, designer } = profileConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-7 animate-fade-up border-t border-purple-100/80 pt-5 anim-d4">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-2xl border border-slate-100 bg-white/80 p-3">
          <div className="flex items-center gap-1.5 text-purple-700">
            <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-[10.5px] font-extrabold">ساعات العمل</span>
          </div>
          <p className="mt-1.5 text-[11.5px] font-bold text-slate-700">{workingHours.days}</p>
          <p className="mt-0.5 text-[10.5px] font-medium leading-4 text-slate-500">
            {workingHours.time}
          </p>
        </div>

        <a
          href={contact.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl border border-slate-100 bg-white/80 p-3 transition-all duration-300 hover:border-sky-200 hover:bg-sky-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:ring-offset-2"
        >
          <div className="flex items-center gap-1.5 text-sky-700">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-[10.5px] font-extrabold">العيادة</span>
            <ArrowUpLeft
              aria-hidden="true"
              className="ms-auto h-3 w-3 opacity-40 transition-opacity group-hover:opacity-100"
            />
          </div>
          <p className="mt-1.5 truncate text-[11.5px] font-bold text-slate-700">{profile.location}</p>
          <p
            title={contact.address}
            className="mt-0.5 line-clamp-2 text-[10.5px] font-medium leading-4 text-slate-500"
          >
            {contact.address}
          </p>
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 border-t border-dashed border-purple-100/80 pt-3.5">
        <p className="text-[10px] font-medium text-slate-500">
          © <span className="num">{year}</span> {profile.company}
        </p>
        <p className="text-[10px] font-medium text-slate-500">
          صُمّمت بواسطة{' '}
          <span className="text-gradient font-extrabold">{designer.name}</span>
        </p>
      </div>
    </footer>
  );
}

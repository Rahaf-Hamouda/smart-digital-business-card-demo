import { HeartPulse, Layers, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { ServiceCard } from '@/entities/service-item';
import { profileConfig } from '@/shared/config/profileConfig';

const ICONS = {
  sparkles: Sparkles,
  layers: Layers,
  shield: ShieldCheck,
  heart: HeartPulse,
};

const ACCENTS = ['purple', 'sky', 'lavender', 'indigo'];

export function ServicesSection() {
  const { services } = profileConfig;

  return (
    <section aria-labelledby="services-heading" className="mt-7 animate-fade-up anim-d2">
      <div className="mb-3 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-3.5 w-1 rounded-full bg-gradient-to-b from-purple-600 to-sky-400"
        />
        <h2 id="services-heading" className="text-[13px] font-extrabold text-slate-900">
          الخدمات والاختصاصات
        </h2>
        <span className="ms-auto rounded-full bg-purple-50 px-2 py-0.5 text-[10.5px] font-bold text-purple-700 ring-1 ring-purple-100/70">
          {services.length} خدمات
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {services.map((service, index) => {
          const Icon = ICONS[service.icon] ?? Stethoscope;

          return (
            <ServiceCard
              key={service.id}
              title={service.title}
              note={service.note}
              accent={ACCENTS[index % ACCENTS.length]}
              icon={<Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />}
            />
          );
        })}
      </div>
    </section>
  );
}

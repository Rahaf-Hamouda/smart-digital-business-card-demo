import { Globe, Instagram, Linkedin, Link2, MapPin } from 'lucide-react';
import { LinkPill } from '@/entities/social-link';
import { profileConfig } from '@/shared/config/profileConfig';

const ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  globe: Globe,
  map: MapPin,
};

export function SocialLinksList() {
  const { links } = profileConfig;

  return (
    <section aria-labelledby="links-heading" className="mt-7 animate-fade-up anim-d3">
      <div className="mb-3 flex items-center gap-2">
        <span
          aria-hidden="true"
          className="h-3.5 w-1 rounded-full bg-gradient-to-b from-sky-500 to-purple-500"
        />
        <h2 id="links-heading" className="text-[13px] font-extrabold text-slate-900">
          تابعني وتواصل
        </h2>
      </div>

      <div className="space-y-2">
        {links.map((link) => {
          const Icon = ICONS[link.icon] ?? Link2;

          return (
            <LinkPill
              key={link.id}
              href={link.href}
              title={link.title}
              subtitle={link.subtitle}
              accent={link.accent}
              icon={<Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />}
            />
          );
        })}
      </div>
    </section>
  );
}

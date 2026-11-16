import { ProfileHeader } from '@/widgets/profile-header';
import { QuickActionsBar } from '@/widgets/quick-actions';
import { ServicesSection } from '@/widgets/services-grid';
import { SocialLinksList } from '@/widgets/links-list';
import { CardFooter } from '@/widgets/card-footer';
import { profileConfig } from '@/shared/config/profileConfig';

export function ProfileCardPage() {
  const { designer } = profileConfig;

  return (
    <main className="relative flex min-h-dvh items-start justify-center overflow-hidden bg-slate-50 px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:items-center sm:px-4 sm:py-10">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-7rem] h-80 w-80 -translate-x-1/2 animate-float rounded-full bg-purple-300/35 blur-[100px] sm:h-[26rem] sm:w-[26rem]" />
        <div className="absolute bottom-[-6rem] right-[-4rem] h-72 w-72 animate-float-delayed rounded-full bg-sky-300/30 blur-[90px]" />
        <div className="absolute left-[-5rem] top-1/2 h-64 w-64 rounded-full bg-violet-300/25 blur-[90px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-70" />
      </div>

      <div className="relative w-full max-w-md">
        <article className="animate-fade-up overflow-hidden rounded-[2rem] border border-purple-100 bg-white/90 shadow-card ring-1 ring-white/60 backdrop-blur-md">
          <ProfileHeader />

          <div className="px-5 pb-6 sm:px-6">
            <QuickActionsBar />
            <ServicesSection />
            <SocialLinksList />
            <CardFooter />
          </div>
        </article>

        <p className="mt-4 text-center text-[10px] font-medium tracking-wide text-slate-500">
          {designer.tagline} · تعمل على جميع الأجهزة بدون تطبيق
        </p>
      </div>
    </main>
  );
}

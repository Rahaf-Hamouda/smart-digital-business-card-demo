import { SaveContactButton } from '@/features/save-vcard';
import { BookWhatsappButton } from '@/features/book-appointment';
import { QrShareModal } from '@/features/share-qr';

export function QuickActionsBar() {
  return (
    <section
      aria-label="إجراءات سريعة"
      className="mt-5 grid animate-fade-up grid-cols-3 gap-2 anim-d1"
    >
      <SaveContactButton />
      <BookWhatsappButton />
      <QrShareModal />
    </section>
  );
}

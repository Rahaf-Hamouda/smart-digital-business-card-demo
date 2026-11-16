/*
 * إعدادات البطاقة — عدّل هذا الملف فقط لتخصيص البطاقة لأي عميل.
 * جميع البيانات هنا تجريبية لغرض العرض فقط ولا تخص شخصاً حقيقياً.
 * الحقول النصية عربية افتراضياً، وأيقونات الخدمات والروابط تُختار من المفاتيح المتاحة
 * في widgets/services-grid و widgets/links-list.
 */
export const profileConfig = {
  site: {
    // اتركه فارغاً ليُستخدم رابط الصفحة الحالي تلقائياً داخل رمز QR
    url: '',
    title: 'د. نور الشام — بطاقة رقمية (نموذج)',
    description: 'نسخة تجريبية من بطاقة رقمية ذكية لطبيبة أسنان — بيانات توضيحية فقط.',
  },

  profile: {
    fullName: 'د. نور الشام',
    shortName: 'د. نور',
    slug: 'demo-doctor-card',
    initials: 'ن',
    // رابط صورة مربعة؛ اتركه فارغاً لعرض الحرف الأول بتدرّج الهوية
    avatarUrl: '',
    title: 'استشارية طب وتجميل الأسنان',
    company: 'عيادة تجريبية',
    location: 'دمشق – سوريا',
    bio: 'هذه بطاقة توضيحية تعرض شكل البطاقة الرقمية الذكية وتجربتها الكاملة، وجميع البيانات الظاهرة هنا تجريبية.',
    isAvailable: true,
    availabilityLabel: 'متاحة للاستشارات',
    verified: true,
    stats: [
      { value: '+12', label: 'سنوات الخبرة' },
      { value: '4.9', label: 'تقييم المراجعين' },
      { value: '+1800', label: 'حالة ناجحة' },
    ],
  },

  contact: {
    phone: '+963 900 000 000',
    whatsapp: '963900000000',
    email: 'demo@example.com',
    website: 'https://example.com',
    address: 'عنوان تجريبي، دمشق، سوريا',
    mapUrl: 'https://maps.google.com/?q=Damascus',
  },

  booking: {
    greeting: 'مرحباً،',
    request: 'أرغب بحجز موعد استشارة. هل يمكنكم إخباري بالمواعيد المتاحة؟',
  },

  services: [
    {
      id: 'smile-design',
      title: 'تصميم الابتسامة',
      note: 'معاينة رقمية للنتيجة قبل بدء العلاج',
      icon: 'sparkles',
    },
    {
      id: 'clear-aligners',
      title: 'تقويم شفاف',
      note: 'تخطيط ثلاثي الأبعاد بدون أسلاك معدنية',
      icon: 'layers',
    },
    {
      id: 'implants',
      title: 'زراعة الأسنان',
      note: 'زرعات سويسرية بضمان طويل الأمد',
      icon: 'shield',
    },
    {
      id: 'gum-care',
      title: 'تجميل وعلاج اللثة',
      note: 'عناية متكاملة بصحة الفم واللثة',
      icon: 'heart',
    },
  ],

  links: [
    {
      id: 'instagram',
      title: 'إنستغرام',
      subtitle: '@demo.clinic · أحدث الحالات والنصائح',
      href: 'https://instagram.com/',
      icon: 'instagram',
      accent: 'purple',
    },
    {
      id: 'linkedin',
      title: 'لينكدإن',
      subtitle: 'السيرة المهنية والشهادات العلمية',
      href: 'https://linkedin.com/in/',
      icon: 'linkedin',
      accent: 'sky',
    },
    {
      id: 'website',
      title: 'الموقع وحجز المواعيد',
      subtitle: 'example.com',
      href: 'https://example.com',
      icon: 'globe',
      accent: 'lavender',
    },
    {
      id: 'map',
      title: 'الموقع على الخريطة',
      subtitle: 'دمشق – سوريا · عنوان تجريبي',
      href: 'https://maps.google.com/?q=Damascus',
      icon: 'map',
      accent: 'sky',
    },
  ],

  workingHours: {
    days: 'السبت – الخميس',
    time: '10:00 ص – 7:00 م',
  },

  designer: {
    name: 'Aura Card',
    tagline: 'بطاقة رقمية ذكية',
  },
};

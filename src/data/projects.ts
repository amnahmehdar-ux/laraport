export interface WorkProject {
  id: string;
  client: string;
  clientInitials: string;
  projectTitle: string;
  projectTitleAr: string;
  category: string;
  categoryAr: string;
  year: string;
  challenge: string;
  challengeAr: string;
  excerpt: string;
  excerptAr: string;
  fullCopy: string;
  fullCopyAr: string;
  impact: string;
  impactAr: string;
  impactMetric: string;
  accentColor: 'lime' | 'coral';
  imageUrl: string;
  instagramUrl: string;
}

export const projects: WorkProject[] = [
 {
    id: 'medical-fakeeh',
    client: 'Medical Fakeeh',
    clientInitials: 'MF',
    projectTitle: 'Healthcare Content & Awareness Campaigns',
    projectTitleAr: 'صناعة محتوى وحملات توعوية صحية',
    category: 'Healthcare & Content Creation',
    categoryAr: 'كتابة محتوى صحي وتوعوي',
    year: '2026',
    challenge:
      'Translating complex medical information into engaging, accessible social media content, awareness posts, and health campaign scripts to build patient trust and drive digital engagement.',
    challengeAr:
      'صياغة محتوى طبي وتوعوي مبسط وموثوق لمنصات التواصل، وتحويل المفاهيم الطبية إلى رسائل توعوية وسيناريوهات إبداعية تعزز ثقة المراجعين وترفع التفاعل مع العيادات.',
    excerpt: 'Simplifying healthcare into human, trust-building stories.',
    excerptAr: 'تبسيط الرسالة الطبية إلى محتوى إنساني يبني الثقة ويعزز الوعي.',
    fullCopy:
      'Developed educational healthcare copy, awareness campaigns (including breast cancer awareness and general wellness), clinic service highlights, and engaging captions aligned with Medical Fakeeh’s tone of voice and digital presence.',
    fullCopyAr:
      'إعداد ونشر محتوى توعوي متخصص شمل حملات التوعية الصحية، وتسليط الضوء على الخدمات والعيادات التخصصية، وصياغة نصوص تفاعلية موجهة للمراجعين تتوافق مع هوية مديكال فقيه الرقمية.',
    impact: '',
    impactAr: '',
    impactMetric: '',
    accentColor: 'lime',
    imageUrl: '/project1.png',
    instagramUrl: 'https://www.instagram.com/medicalfakeeh/',
  },
  {
    id: 'edge-finance',
    client: 'Edge Finance',
    clientInitials: 'EF',
    projectTitle: 'Financial Solutions & Corporate Copywriting',
    projectTitleAr: 'صناعة محتوى وحلول تمويلية للشركات والأفراد',
    category: 'Fintech & Financial Copywriting',
    categoryAr: 'كتابة محتوى مالي وتسويقي',
    year: '2024',
    challenge:
      'Crafting professional, clear, and trustworthy financial content for SMEs and individuals, simplifying innovative financing products, commercial loans, and regulatory highlights under Saudi Central Bank supervision.',
    challengeAr:
      'صياغة محتوى مالي احترافي وموثوق للشركات والمؤسسات والأفراد، وتبسيط الحلول والمنتجات التمويلية المبتكرة وتسهيل التمويل التجاري بدون رهن بأسلوب واضح ومقنع.',
    excerpt: 'Demystifying financial solutions into clear, empowering narratives.',
    excerptAr: 'خطتك القادمة لا توقفها.. حلول تمويلية تفتح آفاقاً جديدة لأعمالك.',
    fullCopy:
      'Developed institutional social media posts, financing product breakdowns (commercial & contractor financing), educational carousels, and high-trust marketing copy tailored to business owners and corporate decision-makers.',
    fullCopyAr:
      'إعداد نصوص المنشورات المؤسسية والحملات التسويقية لحلول تمويل المقاولين والتمويل التجاري، والتركيز على موثوقية الشركة الخاضعة لإشراف البنك المركزي السعودي مع صياغة رسائل موجهة لرواد الأعمال والشركات.',
    impact: 'Fintech Positioning & Trust',
    impactAr: 'تعزيز الثقة وحضور العلامة',
    impactMetric: '100% Trust',
    accentColor: 'lime',
    imageUrl: '/project3.png',
    instagramUrl: 'https://www.instagram.com/p/DaNmjznNDdc/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  },
 {
    id: 'darakson-sa',
    client: 'Darakson KSA',
    clientInitials: 'DK',
    projectTitle: 'Car Rental App Campaign & Social Copywriting',
    projectTitleAr: 'حملات تسويقية وكتابة محتوى لتطبيق تأجير سيارات',
    category: 'App Marketing & Social Copy',
    categoryAr: 'تسويق تطبيقات وكتابة إعلانية',
    year: '2024',
    challenge:
      'Creating punchy, action-driven social media copy and video hooks to highlight competitive pricing, nationwide branches, and seamless car rental booking via the mobile app.',
    challengeAr:
      'صياغة نصوص إعلانية ورسائل تسويقية تفاعلية وسريعة تركز على الحلول العملية، وتبرز المزايا التنافسية مثل الأسعار وسهولة الاستلام وسرعة الحجز عبر التطبيق.',
    excerpt: 'Turning everyday road trips into seamless booking experiences.',
    excerptAr: 'مشاويرك ما تنتظر.. كلمات تخاطب السائق بذكاء وسرعة.',
    fullCopy:
      'Crafted short-form promotional copy, hook-driven captions, travel and rental packages storytelling, and seasonal promotional campaigns designed to convert viewers into app users and active bookings.',
    fullCopyAr:
      'إعداد نصوص الحملات الترويجية والعروض الموسمية، وصياغة عبارات جذابة (Hooks) للمنشورات والفيديوهات، والتركيز على تسهيل تجربة الاستئجار وتوجيه المتابعين لتحميل التطبيق.',
    impact: 'App Conversions & Reach',
    impactAr: 'تحميلات وزيادة الوصول',
    impactMetric: '2K+ Followers',
    accentColor: 'lime',
    imageUrl: '/project2.png',
    instagramUrl: 'https://www.instagram.com/p/Dbz2j6Zm-A9/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  },
  {
    id: 'salama-insurance',
    client: 'Salama Insurance',
    clientInitials: 'SI',
    projectTitle: 'Marine & Cargo Insurance Campaign Copy',
    projectTitleAr: 'حملات التأمين البحري والشحن التجاري',
    category: 'Insurance & Corporate Copywriting',
    categoryAr: 'كتابة محتوى تأميني وتسويق مؤسسي',
    year: '2024',
    challenge:
      'Translating comprehensive logistics and cargo insurance policies into crisp, reassuring social media copy highlighting end-to-end maritime shipment safety.',
    challengeAr:
      'صياغة نصوص ورسائل تسويقية موثوقة لحلول التأمين البحري، وترسيخ رسالة الأمان التجاري وحماية الشحنات من الميناء وحتى الوصول للوجهة بأسلوب موجز ومقنع.',
    excerpt: 'From port to destination, safeguarding every voyage with clarity.',
    excerptAr: 'من الميناء للوجهة شحنتك بأمان.. حماية تجارية تصنع راحة البال.',
    fullCopy:
      'Produced visual campaign copy, insurance product explainers, and trust-centric messaging tailored for business owners, importers, and logistics enterprises.',
    fullCopyAr:
      'كتابة نصوص إعلانية وتوعوية لخدمات التأمين التجاري والبحري، والتركيز على تبسيط الشروط وتوضيح التغطية التأمينية لحماية البضائع وقطاع الأعمال.',
    impact: 'Corporate Reach & Reassurance',
    impactAr: 'تعزيز الثقة وتغطية الأعمال',
    impactMetric: '100% Secure',
    accentColor: 'lime',
    imageUrl: '/project4.png',
    instagramUrl: 'https://www.instagram.com/p/Dc-hoCoIG9a/?utm_source=ig_web_copy_link&rpxt=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  },
  {
    id: 'fakieh-farms',
    client: 'Fakieh Farms',
    clientInitials: 'FF',
    projectTitle: 'National Days & FMCG Social Campaigns',
    projectTitleAr: 'حملات المناسبات الوطنية والمنتجات الاستهلاكية',
    category: 'FMCG & National Campaigns',
    categoryAr: 'صناعة محتوى سلع استهلاكية ومناسبات',
    year: '2024',
    challenge:
      'Developing inspiring storytelling for international youth occasions, corporate sponsorships, and consumer retail promotions across Saudi Arabia.',
    challengeAr:
      'كتابة محتوى ملهم للمناسبات والأيام الوطنية والشبابية، وصياغة نصوص الحملات الترويجية والعروض لمنتجات الدواجن الطازجة بأسلوب قريب ومؤثر.',
    excerpt: 'Connecting heritage and national pride with everyday quality.',
    excerptAr: 'طموح الشباب بداية كل إنجاز.. سرد وطني يلامس القلوب.',
    fullCopy:
      'Scripted celebratory social posts, exhibition sponsorships (Middle East Poultry Expo), promotional discount copy, and consumer engagement messaging for over 50K followers.',
    fullCopyAr:
      'صياغة نصوص الحملات الترويجية، ومشاركات المعارض والمؤتمرات الكبرى، والمنشورات التفاعلية للمناسبات الوطنية التي تخاطب قاعدة واسعة من المستهلكين.',
    impact: 'Mass Audience Engagement',
    impactAr: 'تفاعل واسع مع الجمهور',
    impactMetric: '50K+ Followers',
    accentColor: 'coral',
    imageUrl: '/project5.png',
    instagramUrl: 'https://www.instagram.com/p/Db7yrI9FDZI/?utm_source=ig_web_copy_link&dlrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  },
  {
    id: 'padel-district',
    client: 'Padel District',
    clientInitials: 'PD',
    projectTitle: 'Sports Lifestyle & Indoor Padel Club Content',
    projectTitleAr: 'صناعة محتوى رياضي ونمط حياة لنادي بادل',
    category: 'Sports & Lifestyle Marketing',
    categoryAr: 'تسويق رياضي وصناعة محتوى',
    year: '2024',
    challenge:
      'Capturing the vibrant energy of exclusive indoor padel courts, cafe lifestyle, community tournaments, and booking call-to-actions across Jeddah and Riyadh.',
    challengeAr:
      'إبراز طاقة الملاعب المغلقة ونمط الحياة الرياضي الذي يجمع بين متعة البادل وأجواء الكافيه، مع تحفيز الحجوزات وتغطية البطولات والفعاليات في جدة والرياض.',
    excerpt: 'Padel Better: Where athletic energy meets vibrant community life.',
    excerptAr: 'العب بحماس وعيش الأجواء.. محتوى رياضي ينبض بالحيوية.',
    fullCopy:
      'Created engaging community posts, tournament highlights, lifestyle photography concepts, and dynamic story updates that connect padel enthusiasts with court bookings and social club vibes.',
    fullCopyAr:
      'إنتاج محتوى تفاعلي للبطولات والفعاليات الرياضية، وصياغة نصوص حيوية تعكس تجربة النادي والضيافة، وتوجيه المتابعين لحجز الملاعب عبر التطبيق والروابط المباشرة.',
    impact: 'Community & Court Bookings',
    impactAr: 'تفاعل مجتمعي ونمو الحجوزات',
    impactMetric: '9.1K+ Followers',
    accentColor: 'coral',
    imageUrl: '/project6.png',
    instagramUrl: 'https://www.instagram.com/p/Dd4CCrggYZp/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  },
];

export const capabilities = [
  { en: 'Content Writing', ar: 'كتابة المحتوى' },
  { en: 'Creative Storytelling', ar: 'السرد القصصي الإبداعي' },
  { en: 'Photography', ar: 'التصوير الفوتوغرافي' },
  { en: 'Video Editing', ar: 'مونتاج الفيديو' },
  { en: 'Social Media Strategy', ar: 'استراتيجيات التواصل الاجتماعي' },
  { en: 'Video Scriptwriting', ar: 'كتابة سيناريو الفيديو' },
  { en: 'Copywriting', ar: 'الكتابة الإعلانية' },
];

export const clientLogos: { en: string; ar: string }[] = [
  { en: 'NovaSkin', ar: 'نوفا سكين' },
  { en: 'Mashreq Bank', ar: 'بنك المشرق' },
  { en: 'Falafel Syndicate', ar: 'فلافل سينديكيت' },
  { en: 'TechWave Summit', ar: 'قمة تك ويف' },
  { en: 'Lumen Films', ar: 'لومن فيلمز' },
  { en: 'Urban Nomad', ar: 'أوربان نوماد' },
  { en: 'MENA Broadcast Co.', ar: 'شركة بث الشرق الأوسط' },
  { en: 'Zaytoun Studios', ar: 'استوديوهات زيتون' },
];

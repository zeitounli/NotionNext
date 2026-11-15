// ═══════════════════════════════════════════════════════════════════════════
// ✨ MAGNETLIFE CONFIGURATION ✨
// پیکربندی اختصاصی سایت مگنتا لایف
// ═══════════════════════════════════════════════════════════════════════════

const BLOG = {
  // 🌐 تنظیمات پایه API و اتصال به نوشن
  API_BASE_URL: process.env.API_BASE_URL || 'https://app.notion.com/api/v3',
  
  // 🔑 شناسه صفحه اصلی نوشن شما (به‌روزرسانی شده)
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '75d9ff6f9d0c83bfa77f01080e367462',

  // 🎨 تنظیمات ظاهری و برند
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', // قالب انتخابی: hexo, nobelium, typography, simple
  LANG: process.env.NEXT_PUBLIC_LANG || 'fa-IR', // زبان سایت: fa-IR (فارسی), en-US (انگلیسی)
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024, // سال شروع فعالیت
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // آدرس‌های .html
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // حالت نمایش: light, dark, auto
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // ساعات حالت تاریک

  // 👤 اطلاعات نویسنده و برند
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'MagnetLife', // نام شما
  BIO: process.env.NEXT_PUBLIC_BIO || 'دریچه‌ای به اقتصاد دیجیتال، فناوری و روان‌شناسی ترید', // بیوگرافی
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://magnetlife.pages.dev', // آدرس سایت
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'مگنتا لایف, ترید, ارز دیجیتال, مدیریت سرمایه, اقتصاد دیجیتال', // کلمات کلیدی
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // آیکون سایت

  // 📱 تنظیمات PWA (اپلیکیشن وب پیش‌رونده)
  PWA_ENABLE: process.env.NEXT_PUBLIC_PWA_ENABLE || false,
  PWA_NAME: process.env.NEXT_PUBLIC_PWA_NAME || '',
  PWA_SHORT_NAME: process.env.NEXT_PUBLIC_PWA_SHORT_NAME || '',
  PWA_ICON: process.env.NEXT_PUBLIC_PWA_ICON || '',
  PWA_ICON_192: process.env.NEXT_PUBLIC_PWA_ICON_192 || '',
  PWA_ICON_512: process.env.NEXT_PUBLIC_PWA_ICON_512 || '',
  PWA_ICON_192_MASKABLE: process.env.NEXT_PUBLIC_PWA_ICON_192_MASKABLE || '',
  PWA_ICON_512_MASKABLE: process.env.NEXT_PUBLIC_PWA_ICON_512_MASKABLE || '',
  PWA_THEME_COLOR: process.env.NEXT_PUBLIC_PWA_THEME_COLOR || '',
  PWA_BACKGROUND_COLOR: process.env.NEXT_PUBLIC_PWA_BACKGROUND_COLOR || '',

  // 📜 اطلاعات حقوقی و قانونی
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',

  // 📡 تنظیمات RSS (خوراک خبری)
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,
  RSS_FULL_CONTENT: process.env.RSS_FULL_CONTENT || true,

  // ⚙️ تنظیمات پیشرفته و ماژول‌های سایت (از پوشه conf)
  ...require('./conf/comment.config'), // تنظیمات کامنت
  ...require('./conf/contact.config'), // اطلاعات تماس
  ...require('./conf/post.config'), // تنظیمات مقاله و لیست
  ...require('./conf/analytics.config'), // آمار بازدید
  ...require('./conf/image.config'), // تنظیمات تصاویر
  ...require('./conf/font.config'), // فونت‌ها
  ...require('./conf/right-click-menu'), // منوی راست‌کلیک
  ...require('./conf/code.config'), // استایل کدها
  ...require('./conf/animation.config'), // انیمیشن‌ها
  ...require('./conf/widget.config'), // ویجت‌ها (چت، پت، موزیک)
  ...require('./conf/ad.config'), // تبلیغات
  ...require('./conf/plugin.config'), // پلاگین‌های شخص ثالث
  ...require('./conf/ai.config'), // تنظیمات هوش مصنوعی
  ...require('./conf/performance.config'), // بهینه‌سازی سرعت
  ...require('./conf/top-tag.config'), // تنظیمات تگ‌های بالا

  // 🛠 تنظیمات پیشرفته (لایه‌بندی و توسعه)
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // 📜 اسکریپت‌ها و استایل‌های خارجی
  CUSTOM_EXTERNAL_JS: [],
  CUSTOM_EXTERNAL_CSS: [],

  // 📋 منوها و کپی‌رایت
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  // 📈 پلاگین رشد (اختیاری)
  ...require('./conf/techgrow.config'),

  // 💬 چیدمان و ظاهر
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'به مگنتا لایف خوش آمدید, اینجا خانه دانش و فناوری است, با ما رشد کنید 🚀',
  GREETING_WORDS_TYPE_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_TYPE_SPEED || 200,
  GREETING_WORDS_BACK_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_BACK_SPEED || 100,

  // 🔄 ریدایرکت‌ها
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,
  INNER_PAGE_URL_PARENT_PATH: process.env.NEXT_PUBLIC_INNER_PAGE_URL_PARENT_PATH || false
}

module.exports = BLOG

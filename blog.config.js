// ═══════════════════════════════════════════════════════════════════════════
// ✨ MAGNETLIFE CONFIGURATION ✨
// ═══════════════════════════════════════════════════════════════════════════

const BLOG = {
  // 🌐 تنظیمات پایه API و اتصال به نوشن
  API_BASE_URL: process.env.API_BASE_URL || 'https://app.notion.com/api/v3',
  
  // 🔑 شناسه صفحه اصلی نوشن شما
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '75d9ff6f9d0c83bfa77f01080e367462',

  // 🎨 تنظیمات ظاهری و برند
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo',
  LANG: process.env.NEXT_PUBLIC_LANG || 'fa-IR',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // 👤 اطلاعات نویسنده و برند
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'MagnetLife',
  BIO: process.env.NEXT_PUBLIC_BIO || 'دریچه‌ای به اقتصاد دیجیتال، فناوری و روان‌شناسی ترید',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://magnetlife.pages.dev',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'مگنتا لایف, ترید, ارز دیجیتال, مدیریت سرمایه, اقتصاد دیجیتال',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  // 📱 تنظیمات PWA
  PWA_ENABLE: process.env.NEXT_PUBLIC_PWA_ENABLE || false,
  // ... (بقیه تنظیمات PWA مثل قبل)

  // 📡 تنظیمات RSS
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true,
  RSS_FULL_CONTENT: process.env.RSS_FULL_CONTENT || true,

  // ⚙️ تنظیمات پیشرفته
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/ai.config'),
  ...require('./conf/performance.config'),
  ...require('./conf/top-tag.config'),

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

  // 📈 پلاگین رشد
  ...require('./conf/techgrow.config'),

  // 💬 چیدمان و ظاهر
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'به مگنتا لایف خوش آمدید, اینجا خانه دانش و فناوری است, با ما رشد کنید 🚀',
  GREETING_WORDS_TYPE_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_TYPE_SPEED || 200,
  GREETING_WORDS_BACK_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_BACK_SPEED || 100,

  // 🔄 ریدایرکت‌ها
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,
  INNER_PAGE_URL_PARENT_PATH: process.env.NEXT_PUBLIC_INNER_PAGE_URL_PARENT_PATH || false,

  // 🚫 فیلتر کردن محتوای اضافی (پاکسازی چینی‌ها)
  // فقط مطالبی که توی نوشن نوشتی و تگ 'Persian' یا 'منتشر شده' دارن رو نشون بده
  // این یه فیلتر ساده‌ست که از نمایش محتوای پیش‌فرض جلوگیری می‌کنه
  CUSTOM_FILTER: process.env.CUSTOM_FILTER || '', // اگه خواستی دستی تنظیم کنی
}
module.exports = BLOG

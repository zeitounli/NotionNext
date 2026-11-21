// ═══════════════════════════════════════════════════════════════════════════
// ✨ TRIX CONFIGURATION ✨
// ═══════════════════════════════════════════════════════════════════════════

const BLOG = {
  // 🌐 تنظیمات پایه API و اتصال به نوشن
  API_BASE_URL: process.env.API_BASE_URL || 'https://app.notion.com/api/v3',
  
  // 🔑 شناسه دیتابیس (جدول) نوشن شما
  // به فرمت ساده برگشتیم چون دیگه چندزبانه نمی‌خوایم
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    '41d9ff6f9d0c80f2adb3d2b85cdf2425',

  // 🎨 تنظیمات ظاهری و برند
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'TRIX',
  THEME: process.env.NEXT_PUBLIC_THEME || 'nobelium',
  LANG: process.env.NEXT_PUBLIC_LANG || 'en-US', // ✅ انگلیسی شد
  
  // 🛠 رفع خطای بیلد (مقدار پیش‌فرض 86400 ثانیه = 1 روز)
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 86400,

  SINCE: process.env.NEXT_PUBLIC_SINCE || 2024,
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  // 👤 اطلاعات نویسنده و برند 
  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'TRIX Team',
  BIO: process.env.NEXT_PUBLIC_BIO || 'برترین مرجع آموزش ترید، روانشناسی بازار و مدیریت سرمایه.',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://trix.vercel.app',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'آموزش ترید, مدیریت سرمایه, روانشناسی ترید, TRIX, معامله گری',
  
  // 🖼️ لوگوی سایت
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || 'https://i.imgur.com/fPU4I4E.png',

  // 📱 تنظیمات PWA
  PWA_ENABLE: process.env.NEXT_PUBLIC_PWA_ENABLE || false,
  
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
  CUSTOM_EXTERNAL_CSS: ['/custom.css'],

  // 📋 منوها و کپی‌رایت
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,

  // 📈 پلاگین رشد
  ...require('./conf/techgrow.config'),

  // 💬 چیدمان و ظاهر
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'به TRIX خوش آمدید, اینجا خانه دانش ترید است, با ما رشد کنید 🚀',
  GREETING_WORDS_TYPE_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_TYPE_SPEED || 200,
  GREETING_WORDS_BACK_SPEED: process.env.NEXT_PUBLIC_GREETING_WORDS_BACK_SPEED || 100,

  // 🔄 ریدایرکت‌ها
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,
  INNER_PAGE_URL_PARENT_PATH: process.env.NEXT_PUBLIC_INNER_PAGE_URL_PARENT_PATH || false,

  // 🚫 فیلتر کردن محتوای اضافی
  CUSTOM_FILTER: process.env.CUSTOM_FILTER || '',
}
module.exports = BLOG

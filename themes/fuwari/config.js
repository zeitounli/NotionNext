/**
 * Fuwari 主题专用配置
 * تنظیمات اختصاصی قالب Fuwari برای TRIX
 */

const CONFIG = {
  // ---------------------------------------------------------------------------
  // ناوبری (منوی دسکتاپ و موبایل)
  // ---------------------------------------------------------------------------
  /** نمایش «خانه» */
  FUWARI_MENU_INDEX: true,
  /** نمایش «آرشیو» */
  FUWARI_MENU_ARCHIVE: true,
  /** نمایش «دسته‌بندی» */
  FUWARI_MENU_CATEGORY: true,
  /** نمایش «برچسب‌ها» */
  FUWARI_MENU_TAG: true,
  /** نمایش «جستجو» */
  FUWARI_MENU_SEARCH: true,

  // ---------------------------------------------------------------------------
  // کارت‌های لیست مقالات در صفحه اصلی
  // ---------------------------------------------------------------------------
  /** نمایش تصویر کاور سمت راست */
  FUWARI_POST_LIST_COVER: true,
  /** در صورت نبود کاور، از بنر سایت استفاده شود */
  FUWARI_POST_LIST_COVER_DEFAULT: false,
  /** بزرگ‌نمایی هنگام هاور */
  FUWARI_POST_LIST_COVER_HOVER_ENLARGE: true,
  /** نمایش خلاصه مقاله */
  FUWARI_POST_LIST_SUMMARY: true,
  /** نمایش برچسب‌ها در کارت */
  FUWARI_POST_LIST_TAG: true,
  /** عرض ستون کاور در دسکتاپ (پیکسل) */
  FUWARI_POST_LIST_COVER_COL_WIDTH: 280,

  // ---------------------------------------------------------------------------
  // موبایل
  // ---------------------------------------------------------------------------
  /** منوی همبرگری سمت راست */
  FUWARI_MOBILE_MENU: true,

  // ---------------------------------------------------------------------------
  // بخش هدر (Hero)
  // ---------------------------------------------------------------------------
  /** فعال‌سازی بخش Hero */
  FUWARI_HERO_ENABLE: true,
  /** آدرس تصویر پس‌زمینه سفارشی (خالی = استفاده از کاور نوشن) */
  FUWARI_HERO_BG_IMAGE: '',
  /** متن حق نشر گوشه پایین راست */
  FUWARI_HERO_CREDIT_TEXT: '',
  /** لینک حق نشر */
  FUWARI_HERO_CREDIT_LINK: '',

  // ---------------------------------------------------------------------------
  // ویجت‌های سایدبار
  // ---------------------------------------------------------------------------
  /** اطلاعیه */
  FUWARI_WIDGET_NOTICE: true,
  /** آخرین مقالات */
  FUWARI_WIDGET_LATEST_POSTS: true,
  /** لیست دسته‌بندی‌ها */
  FUWARI_WIDGET_CATEGORY_LIST: true,
  /** لیست برچسب‌ها */
  FUWARI_WIDGET_TAG_LIST: true,
  /** مسیر صفحه پروفایل */
  FUWARI_PROFILE_PATH: '/about',
  /** کارت تماس/ارتباط */
  FUWARI_WIDGET_CONTACT: true,
  /** تبلیغات سایدبار */
  FUWARI_WIDGET_AD: false,
  /** تبلیغات WWAds */
  FUWARI_WIDGET_WWADS: true,
  /** تبلیغات AdSense */
  FUWARI_WIDGET_ADSENSE: false,
  /** کارت پلاگین */
  FUWARI_WIDGET_PLUGIN_AREA: true,
  /** کارت آمار بازدید */
  FUWARI_WIDGET_ANALYTICS: true,
  /** انتخابگر رنگ در نوار بالا */
  FUWARI_WIDGET_THEME_COLOR_SWITCHER: true,
  /** رنگ پیش‌فرض برند (0-360) */
  FUWARI_THEME_COLOR_HUE: 52,
  /** قفل کردن رنگ برند */
  FUWARI_THEME_COLOR_FIXED: false,
  /** دکمه رفتن به نظرات */
  FUWARI_WIDGET_TO_COMMENT: true,
  /** دکمه حالت تاریک */
  FUWARI_WIDGET_DARK_MODE: true,
  /** فهرست مطالب مقاله */
  FUWARI_ARTICLE_TOC: true,

  // ---------------------------------------------------------------------------
  // کارت تماس (سایدبار، قابل چرخش)
  // ---------------------------------------------------------------------------
  /** عنوان روی کارت */
  FUWARI_CONTACT_TITLE: 'ارتباط با TRIX',
  /** توضیحات روی کارت */
  FUWARI_CONTACT_DESCRIPTION: 'برای مشاوره و همکاری با ما در تماس باشید.',
  /** برچسب گوشه کارت */
  FUWARI_CONTACT_FRONT_BADGE: 'پشتیبانی',
  /** آدرس مقصد */
  FUWARI_CONTACT_URL: 'https://t.me/trix_team',
  /** متن دکمه */
  FUWARI_CONTACT_TEXT: 'مشاهده',
  /** فعال‌سازی کارت چرخشی */
  FUWARI_CONTACT_FLIP_CARD: true,
  /** عنوان پشت کارت */
  FUWARI_CONTACT_BACK_TITLE: 'نحوه پاسخگویی',
  /** توضیحات پشت کارت */
  FUWARI_CONTACT_BACK_DESCRIPTION: 'سوالات، پیشنهادات و درخواست همکاری خود را ارسال کنید.',
  /** متن دکمه پشت کارت */
  FUWARI_CONTACT_BACK_TEXT: 'ورود',

  // ---------------------------------------------------------------------------
  // افکت‌های سراسری
  // ---------------------------------------------------------------------------
  /** اسکرول نرم */
  FUWARI_EFFECT_LENIS: false,
  /** نشانگر ماوس سفارشی */
  FUWARI_EFFECT_CURSOR_DOT: false,

  // ---------------------------------------------------------------------------
  // صفحه مقاله
  // ---------------------------------------------------------------------------
  /** نمایش کاور مقاله */
  FUWARI_ARTICLE_COVER_HERO: false,
  /** اطلاعات متا (تاریخ، دسته، برچسب) */
  FUWARI_ARTICLE_META: true,
  /** نوار اشتراک‌گذاری */
  FUWARI_ARTICLE_SHARE: true,
  /** حق نشر مقاله */
  FUWARI_ARTICLE_COPYRIGHT: true,
  /** بخش نظرات */
  FUWARI_ARTICLE_COMMENT: true,
  /** مقاله قبلی/بعدی */
  FUWARI_ARTICLE_ADJACENT: true
}

export default CONFIG

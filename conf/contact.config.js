/**
 * 社交按钮相关的配置同意放这
 * تنظیمات شبکه‌های اجتماعی و اطلاعات تماس
 */
module.exports = {
  // 🌐 آدرس سایت شما
  CONTACT_WEBSITE: process.env.NEXT_PUBLIC_LINK || 'https://magnetlife.pages.dev',
  
  // 🖼️ آدرس لوگوی سایت (ممکنه توی بعضی قالب‌ها استفاده بشه)
  CONTACT_LOGO: process.env.NEXT_PUBLIC_LOGO || 'https://i.imgur.com/fPU4I4E.png',

  // ✉️ ایمیل تماس
  CONTACT_EMAIL:
    (process.env.NEXT_PUBLIC_CONTACT_EMAIL &&
      btoa(
        unescape(encodeURIComponent(process.env.NEXT_PUBLIC_CONTACT_EMAIL))
      )) ||
    '', // آدرس ایمیل شما

  // 📱 شبکه‌های اجتماعی (هر کدوم رو خواستی پر کن، بقیه رو خالی بذار)
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', 
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', 
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/zeitounli', // آدرس گیت‌هاب شما
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // آدرس تلگرام شما
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', 
  CONTACT_ORCID: process.env.NEXT_PUBLIC_CONTACT_ORCID || '', 
  CONTACT_CSDN: process.env.NEXT_PUBLIC_CONTACT_CSDN || '', 
  CONTACT_JUEJIN: process.env.NEXT_PUBLIC_CONTACT_JUEJIN || '', 
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', 
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || '', 
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', 
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', 
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', 
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '' 
}

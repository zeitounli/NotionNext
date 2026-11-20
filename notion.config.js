// این فایل به سایت می‌گه که دیتابیس اصلی کجاست
module.exports = {
  // اینجا باید آیدی جدول (Database) رو بذاریم، نه صفحه
  // چون آیدی جدولت رو نداریم، فعلاً از تنظیمات پیش‌فرض استفاده می‌کنیم
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '4199ff6f9d0c80a48d89ead95afe28f0',
  // این خط باعث می‌شه اگه خطای oops پیش اومد، کرش نکنه
  ENABLE_SAFE_MODE: true,
}

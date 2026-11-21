// بالای فایل - این خط رو اضافه کن (کنار بقیه import ها)
import faIR from './lang/fa-IR'

// ... بقیه import ها ...

// پایین فایل - داخل آبجکت export default، این خط رو اضافه کن
export default {
  // ... بقیه زبان‌ها ...
  'fa-IR': faIR,  // ✅ این باید INSIDE آبجکت باشه، نه بیرونش
}

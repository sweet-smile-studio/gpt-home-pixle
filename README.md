# Maedeh Planner v3 — Fixed

## تغییرات اصلاح‌شده

1. **زوم غیرفعال** — viewport با `maximum-scale=1, user-scalable=no`
2. **Topbar ثابت** — `flex-wrap:nowrap` + `min-height` ثابت در همه صفحات
3. **پس‌زمینه Settings** — `--custom-bg` پویا با گرادیان بر پایه رنگ انتخابی
4. **رنگ فونت/دکمه/Container** — همه به CSS Variables متصل + فیلد **رنگ متن** در Settings
5. **منوی همبرگری سایز یکسان** — `flex-shrink:0` + `min-width/min-height` ثابت
6. **منوی همبرگری از راست** — `inset:12px 12px 12px auto` + `transform:translateX(calc(100% + 20px))`
7. **عادت‌ها بدون پرش** — toggle سلولی بدون رندر کامل صفحه
8. **آنالیز خلق هفته/ماه** — نمودار خطی Mood + میله‌ای Energy
9. **ردیاب آب معکوس** — ۸/۸ پر → با کلیک یکی کم می‌شود (منطق "نوشیدن")
10. **لیبل‌های محور X** — در نمودارهای `drawBars`
11. **autoGrow event-text** — در اولین رندر اعمال می‌شود
12. **Service Worker** — نسخه cache به v3.0.1 بروزرسانی شد

## نصب

1. پوشه `icons` را با `icon-192.png` و `icon-512.png` پر کنید.
2. روی GitHub Pages یا هر هاست استاتیک آپلود کنید.
3. برای Firebase، فایل `js/firebase-config.js` را پر کنید.

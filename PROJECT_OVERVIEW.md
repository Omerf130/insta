# 🚀 פרוייקט Landing Page - אינסטלציה ודודי שמש

## 📋 סקירה כללית

דף נחיתה מקצועי ומודרני לעסק אינסטלציה והתקנת דודי שמש, בעברית בלבד עם תמיכה מלאה ב-RTL.

## ✅ מה בוצע

### 🎨 טכנולוגיות
- ✅ **React.js** עם TypeScript
- ✅ **SCSS** (לא modules)
- ✅ **Vite** כ-bundler
- ✅ רכיבים פונקציונליים בלבד
- ✅ תמיכה מלאה ב-RTL

### 🎨 ערכת צבעים
- **Primary**: `#008BFF`
- **Secondary**: `#5A9CB5`
- גוונים נוספים לניגודיות וקריאות

### 📱 רכיבים שנוצרו

#### 1. Hero (`src/components/Hero/`)
- כותרת ראשית חזקה
- תת-כותרת עם דגש על ניסיון ואמינות
- 2 כפתורי CTA: "התקשר עכשיו" + "שלח הודעה בוואטסאפ"
- רקע gradient מעוצב עם אנימציות

#### 2. Services (`src/components/Services/`)
- 6 שירותים עיקריים:
  - תיקוני אינסטלציה
  - פתיחת סתימות
  - התקנת דודי שמש
  - תיקון דודי שמש
  - אינסטלציה חדשה
  - שירות חירום 24/7
- Grid responsive
- אנימציות hover

#### 3. WhyChooseMe (`src/components/WhyChooseMe/`)
- 6 יתרונות מרכזיים:
  - ניסיון 15+ שנה
  - זמינות 24/7
  - אחריות מלאה
  - שירות אמין
  - מחירים הוגנים
  - ציוד מתקדם
- אייקונים SVG מותאמים אישית

#### 4. Gallery (`src/components/Gallery/`)
- גלריית תמונות responsive
- תמונות placeholder מ-Unsplash
- אפקט hover עם overlay
- תגיות קטגוריות

#### 5. Testimonials (`src/components/Testimonials/`)
- 6 המלצות לקוחות (טקסט עברי אותנטי)
- דירוגים בכוכבים
- אווטרים עם אות ראשונה
- מיקום ותאריך

#### 6. Contact (`src/components/Contact/`)
- טופס יצירת קשר עם שדות:
  - שם מלא
  - מספר טלפון
  - הודעה
- **ולידציה מלאה** ב-React state:
  - בדיקת שם (מינימום 2 תווים)
  - בדיקת טלפון (9-10 ספרות)
  - בדיקת הודעה (מינימום 10 תווים)
- הודעות שגיאה בעברית
- הודעת הצלחה לאחר שליחה
- חלק מידע עם פרטי התקשרות מעוצב

#### 7. Footer (`src/components/Footer/`)
- 4 עמודות מידע:
  - אודות
  - קישורים מהירים
  - רשימת שירותים
  - פרטי התקשרות
- כפתורי רשתות חברתיות
- זכויות יוצרים
- ניווט חלק לסקשנים

#### 8. FloatingButtons (`src/components/FloatingButtons/`)
- **כפתור WhatsApp**: גלוי בכל הגדלים
- **כפתור טלפון**: גלוי רק במובייל וטאבלט (מוסתר בדסקטופ)
- אנימציית pulse
- Tooltips
- מופיע לאחר גלילה

### 🎭 אנימציות ואפקטים
- ✅ Fade-in על גלילה
- ✅ Hover effects על כרטיסים
- ✅ Smooth transitions
- ✅ Pulse animation על כפתור WhatsApp
- ✅ Gradient backgrounds

### 📱 Responsive Design
- ✅ **Desktop** (1200px+)
- ✅ **Tablet** (768px - 1024px)
- ✅ **Mobile** (320px - 767px)
- Media queries מפורטים בכל component

### 🔧 תצורה

#### קבצי תצורה שנוצרו:
- `package.json` - תלויות ו-scripts
- `tsconfig.json` - תצורת TypeScript
- `vite.config.ts` - תצורת Vite
- `.eslintrc.cjs` - תצורת ESLint
- `.gitignore` - קבצים להתעלמות
- `index.html` - נקודת כניסה HTML
- `src/main.tsx` - נקודת כניסה React

### 🌐 SEO ו-Accessibility
- ✅ Meta tags בעברית
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Alt texts
- ✅ RTL support מלא
- ✅ Google Fonts (Heebo)

## 🚀 התחלה מהירה

### התקנה
```bash
npm install
```

### הרצה בפיתוח
```bash
npm run dev
```
הפרויקט יפתח ב: `http://localhost:5173`

### בנייה לפרודקשן
```bash
npm run build
```
הקבצים ייבנו בתיקיית `dist/`

### תצוגה מקדימה של build
```bash
npm run preview
```

## 📞 עדכון פרטי התקשרות

כדי לעדכן מספרי טלפון ו-WhatsApp, ערוך את הקבצים הבאים:

1. **Hero**: `src/components/Hero/Hero.tsx`
   - שורה 7: `tel:+972-50-123-4567`
   - שורה 11: `https://wa.me/972501234567`

2. **Contact**: `src/components/Contact/Contact.tsx`
   - שורה 161: `tel:+972-50-123-4567`
   - שורה 173: `https://wa.me/972501234567`

3. **Footer**: `src/components/Footer/Footer.tsx`
   - שורה 21: `https://wa.me/972501234567`
   - שורה 28: `tel:+972-50-123-4567`
   - שורה 113: `tel:+972-50-123-4567`

4. **FloatingButtons**: `src/components/FloatingButtons/FloatingButtons.tsx`
   - שורה 22: `https://wa.me/972501234567`
   - שורה 26: `tel:+972-50-123-4567`

## 🎨 התאמה אישית

### שינוי צבעים
ערוך את `src/index.scss`:
```scss
:root {
  --primary-color: #008BFF;    // צבע ראשי
  --secondary-color: #5A9CB5;  // צבע משני
  // ...
}
```

### הוספת תמונות
החלף את ה-URLs ב-`src/components/Gallery/Gallery.tsx` בתמונות אמיתיות מהגלריה שלך.

### עדכון טקסטים
כל הטקסטים בעברית ונמצאים בתוך הקומפוננטות המתאימות.

## 📂 מבנה הפרויקט

```
insta/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.scss
│   │   ├── FloatingButtons/
│   │   │   ├── FloatingButtons.tsx
│   │   │   └── FloatingButtons.scss
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.scss
│   │   ├── Gallery/
│   │   │   ├── Gallery.tsx
│   │   │   └── Gallery.scss
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.scss
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   └── Services.scss
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.tsx
│   │   │   └── Testimonials.scss
│   │   └── WhyChooseMe/
│   │       ├── WhyChooseMe.tsx
│   │       └── WhyChooseMe.scss
│   ├── App.tsx
│   ├── main.tsx
│   └── index.scss
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ✨ תכונות מיוחדות

### 1. Floating Buttons
- כפתור WhatsApp: תמיד גלוי
- כפתור טלפון: מוסתר בדסקטופ (>1024px)
- מופיעים רק לאחר גלילה 300px

### 2. Form Validation
הטופס כולל ולידציה מלאה:
- בדיקה בזמן אמת
- הודעות שגיאה מפורטות
- ניקוי שגיאות בעת הקלדה
- הודעת הצלחה אחרי שליחה

### 3. Smooth Scroll
כל הקישורים בעמוד גוללים בצורה חלקה לסקשן המתאים.

### 4. Animations
- Cards: `translateY` on hover
- Images: `scale` effect
- Icons: rotation ו-scale
- Fade-in: על סקרול

## 🔒 אבטחה ונגישות

- ✅ `rel="noopener noreferrer"` על קישורים חיצוניים
- ✅ ARIA labels על כפתורים
- ✅ Semantic HTML5
- ✅ Keyboard navigation
- ✅ Focus states

## 📱 תאימות דפדפנים

תומך בכל הדפדפנים המודרניים:
- Chrome
- Firefox
- Safari
- Edge

## 🎯 הערות נוספות

1. **אין Backend**: הטופס מדפיס את הנתונים ל-console. תצטרך להוסיף אינטגרציה עם backend או שירות כמו EmailJS.

2. **תמונות**: התמונות בגלריה הן מ-Unsplash. החלף אותן בתמונות אמיתיות.

3. **מספרי טלפון**: עדכן את המספרים בכל הקומפוננטות.

4. **Google Fonts**: הפרויקט משתמש בפונט Heebo מ-Google Fonts.

## 🐛 תיקון בעיות

אם אתה נתקל בבעיות:

1. וודא שהתקנת את כל התלויות:
```bash
npm install
```

2. נקה את ה-cache:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

3. בדוק שאין שגיאות linting:
```bash
npm run lint
```

## 📚 למידה נוספת

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [SCSS Documentation](https://sass-lang.com/documentation)

---

**הצלחה עם הפרויקט! 🚀**


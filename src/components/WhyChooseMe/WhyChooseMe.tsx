import React from 'react';
import './WhyChooseMe.scss';

interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const WhyChooseMe: React.FC = () => {
  const advantages: Advantage[] = [
    {
      id: 1,
      title: 'ניסיון של מעל 15 שנה',
      description: 'ניסיון עשיר בכל סוגי עבודות האינסטלציה והתקנת דודי שמש',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'זמינות 24/7',
      description: 'שירות חירום מהיר ומקצועי בכל שעות היום והלילה',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      id: 3,
      title: 'אחריות מלאה',
      description: 'אחריות מקיפה על כל עבודה וחלקי החילוף המותקנים',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'שירות אמין ומקצועי',
      description: 'עבודה מדויקת, נקייה ומקצועית עם התחשבות בלקוח',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )
    },
    {
      id: 5,
      title: 'מחירים הוגנים',
      description: 'תמחור שקוף וצודק ללא הפתעות במהלך העבודה',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    },
    {
      id: 6,
      title: 'ציוד מתקדם',
      description: 'שימוש בכלים וציוד מתקדמים לעבודה מהירה ויעילה',
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="why-choose-me section bg-light" id="why-choose-me">
      <div className="container">
        <h2 className="section-title">למה לבחור בנו?</h2>
        <div className="advantages-grid">
          {advantages.map((advantage) => (
            <div key={advantage.id} className="advantage-card fade-in">
              <div className="advantage-icon">{advantage.icon}</div>
              <h3 className="advantage-title">{advantage.title}</h3>
              <p className="advantage-description">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;


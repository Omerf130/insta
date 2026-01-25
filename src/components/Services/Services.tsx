import React from 'react';
import './Services.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface DetailedFeature {
  id: number;
  text: string;
  category: 'quality' | 'speed' | 'warranty' | 'responsibility';
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: 'התקנת דודי שמש',
      description: 'התקנה מקצועית של דודי שמש חדשים מכל הסוגים והדגמים',
      icon: '☀️'
    },
    {
      id: 2,
      title: 'תיקון דודי שמש',
      description: 'תיקון תקלות, החלפת חלקים פגומים ואחזקה שוטפת',
      icon: '🔧'
    },
    {
      id: 3,
      title: 'שדרוג והחלפת דודים',
      description: 'שדרוג מערכות קיימות והחלפת דודי שמש ישנים בחדשים',
      icon: '🔄'
    },
    {
      id: 4,
      title: 'אחזקה ותחזוקה',
      description: 'אחזקה תקופתית, ניקוי והחלפת אנודה למניעת קורוזיה',
      icon: '🛠️'
    },
    {
      id: 5,
      title: 'שירותי אינסטלציה',
      description: 'תיקון דליפות, פתיחת סתימות והתקנת מערכות אינסטלציה',
      icon: '🚰'
    },
    {
      id: 6,
      title: 'שירות חירום 24/7',
      description: 'זמינות מיידית לתקלות דחופות בכל שעה - דודים ואינסטלציה',
      icon: '🚨'
    }
  ];

  const detailedFeatures: DetailedFeature[] = [
    // Quality Features
    { id: 1, text: 'ציפוי אמאייל - המומחי החלידה של החלקים הפנימיים, מונע הצטברות יחידים ומים במניעה של הצטברות אבנית.', category: 'quality' },
    { id: 2, text: 'שכבת בידוד - בעובד שלי מ"מ ואת 3 מ"מ, מעשירה על הטמפרטורה, ומאפשרת לחימום מים חמים לשרוך זמן רב.', category: 'speed' },
    { id: 3, text: 'חזוק וציבות - דודי השמש מיוצרים מחומרים חזקים ועמדים, המאפשרים לעמוד בפני כל מזג האויר.', category: 'warranty' },
    { id: 4, text: 'אחריות - דודי השמש שלנו מגיעים עליכם עם אחריות מלאה. לכל מקרה של שאלה או תקלה.', category: 'responsibility' },
    { id: 5, text: 'המוצרים שלנו הינם בעלי תו תקן בטיחותי ואחראים 4 שנים', category: 'quality' },
    { id: 6, text: 'דודי שמש במגוון נפחים 80-200 ליטר', category: 'quality' },
    { id: 7, text: 'דודי חשמל במגוון נפחים 30-200 ליטר', category: 'quality' },
    { id: 8, text: 'הדודים שלנו מיוצרים מחומרים איכותיים המבטיחים עלילה תקינה ובטיחותית של דוד השמש לטמרת רבת', category: 'quality' },
    { id: 9, text: 'התקנה ותיקון של דוד שמש והשמש', category: 'quality' },
    { id: 10, text: 'קולט שמש וקולטים סולאריים', category: 'quality' },
    { id: 11, text: 'מאת חום ובר קרבול (באביר המותקן בציצת ההסמל לשמור על טמפי מריבית של 50°C)', category: 'quality' },
    { id: 12, text: 'בדודים שלנו מחולקים פורקי לחץ שמבטים על הדוד והקולט מפיציץ בגרידה והלחץ עולה.', category: 'quality' },
  ];

  const getFeatureColor = (index: number) => {
    const colors = [
      '#2196F3', // Blue
      '#FF5722', // Red
      '#4CAF50', // Green
      '#9C27B0', // Purple
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">השירותים שלנו</h2>
        <p className="services-intro">
          מתמחים בהתקנה ותיקון דודי שמש, עם שירותי אינסטלציה נוספים
        </p>
        
        {/* Solar Water Heater Services - Primary */}
        <div className="services-category">
          <h3 className="category-title">
            <span className="category-icon">☀️</span>
            דודי שמש - שירותים מקצועיים
          </h3>
          <div className="services-grid">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="service-card service-card-primary fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Plumbing Services - Secondary */}
        <div className="services-category services-category-secondary">
          <h3 className="category-title">
            <span className="category-icon">🔧</span>
            שירותי אינסטלציה נוספים
          </h3>
          <div className="services-grid">
            {services.slice(4).map((service) => (
              <div key={service.id} className="service-card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Features Checklist */}
        <div className="services-category">
          <h3 className="category-title">
            <span className="category-icon">📋</span>
            מאפיינים ויתרונות
          </h3>
          <div className="features-checklist">
            {detailedFeatures.map((feature, index) => (
              <div key={feature.id} className="feature-item fade-in">
                <div 
                  className="feature-check" 
                  style={{ backgroundColor: getFeatureColor(index) }}
                >
                  ✓
                </div>
                <p className="feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import './Services.scss';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
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
      </div>
    </section>
  );
};

export default Services;


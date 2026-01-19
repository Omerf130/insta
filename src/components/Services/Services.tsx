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
      title: 'תיקוני אינסטלציה',
      description: 'תיקון דליפות, החלפת ברזים, תיקון מערכות הסקה ועוד',
      icon: '🔧'
    },
    {
      id: 2,
      title: 'פתיחת סתימות',
      description: 'פתיחת סתימות בכיורים, אסלות, ביוב ועמודי ניקוז',
      icon: '🚰'
    },
    {
      id: 3,
      title: 'התקנת דודי שמש',
      description: 'התקנה מקצועית של דודי שמש חדשים מכל הסוגים',
      icon: '☀️'
    },
    {
      id: 4,
      title: 'תיקון דודי שמש',
      description: 'תיקון תקלות, החלפת חלקים ואחזקה שוטפת',
      icon: '🔨'
    },
    {
      id: 5,
      title: 'אינסטלציה חדשה',
      description: 'התקנת מערכות אינסטלציה למבנים חדשים ושיפוצים',
      icon: '🏗️'
    },
    {
      id: 6,
      title: 'שירות חירום 24/7',
      description: 'זמינות מיידית לתקלות דחופות בכל שעה',
      icon: '🚨'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">השירותים שלנו</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import './Testimonials.scss';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'דוד כהן',
      location: 'תל אביב',
      rating: 5,
      text: 'שירות מעולה! הגיע במהירות, אבחן את הבעיה תוך דקות וטיפל בדליפה בצורה מקצועית. ממליץ בחום!',
      date: 'לפני שבועיים'
    },
    {
      id: 2,
      name: 'רחל לוי',
      location: 'רמת גן',
      rating: 5,
      text: 'התקין לנו דוד שמש חדש. עבודה מדויקת, נקייה ומקצועית. המחיר היה הוגן והשירות מצוין. תודה רבה!',
      date: 'לפני חודש'
    },
    {
      id: 3,
      name: 'משה אברהם',
      location: 'חולון',
      rating: 5,
      text: 'קיבלנו שירות מהיר ואמין בשעות הלילה. פתר לנו בעיית סתימה חמורה. איש מקצוע אמיתי!',
      date: 'לפני שלושה שבועות'
    },
    {
      id: 4,
      name: 'שרה גולדברג',
      location: 'גבעתיים',
      rating: 5,
      text: 'ממליצה בחום! טיפל בתיקון המערכת ההסקה שלנו בצורה מצוינת. מקצועי, אדיב ובעל סבלנות.',
      date: 'לפני חודשיים'
    },
    {
      id: 5,
      name: 'יוסי מזרחי',
      location: 'בת ים',
      rating: 5,
      text: 'שירות אמין ומהיר! הגיע תוך 30 דקות, תיקן את הברז והחליף חלקים פגומים. מאוד מרוצה!',
      date: 'לפני 3 שבועות'
    },
    {
      id: 6,
      name: 'מרים כץ',
      location: 'ראשון לציון',
      rating: 5,
      text: 'עבודה מקצועית ברמה גבוהה. התקין מערכת אינסטלציה חדשה בדירה שלנו. הכל עובד מצוין!',
      date: 'לפני חודש וחצי'
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="testimonial-stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="testimonials section bg-light" id="testimonials">
      <div className="container">
        <h2 className="section-title">מה הלקוחות שלנו אומרים</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card fade-in">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-location">{testimonial.location}</p>
                </div>
              </div>
              {renderStars(testimonial.rating)}
              <p className="testimonial-text">{testimonial.text}</p>
              <span className="testimonial-date">{testimonial.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


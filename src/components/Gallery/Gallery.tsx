import React from 'react';
import './Gallery.scss';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const Gallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'התקנת דוד שמש חדש',
      category: 'דודי שמש',
      imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'תיקון מערכת הסקה',
      category: 'אינסטלציה',
      imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'התקנת כיור מעוצב',
      category: 'אינסטלציה',
      imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'שיפוץ מערכת דוד שמש',
      category: 'דודי שמש',
      imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'התקנת אמבטיה מפוארת',
      category: 'אינסטלציה',
      imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'תיקון דליפות צנרת',
      category: 'אינסטלציה',
      imageUrl: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <h2 className="section-title">גלריית עבודות</h2>
        <p className="gallery-subtitle">עבודות שביצענו לאחרונה</p>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item fade-in">
              <div className="gallery-image-wrapper">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-content">
                    <span className="gallery-category">{item.category}</span>
                    <h3 className="gallery-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


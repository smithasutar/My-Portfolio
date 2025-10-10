import { useState } from 'react';
import './Experience.css';

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Web Developer",
    description: "Worked at Civiconnect and developed responsive web applications using React, JavaScript, and modern CSS frameworks. Focused on creating intuitive user interfaces.",
    icon: "👩🏻‍💻"
  },
  {
    id: 2,
    title: "Technical Analyst",
    description: "Worked at the Ontario Ministry of Transportation and programmed in C# to implement application. Implemented RESTful APIs and microservices architecture.",
    icon: "📶"
  },
  {
    id: 3,
    title: "Full-Stack",
    description: "End-to-end development of web applications from database design to frontend implementation. Experienced in both client and server-side technologies.",
    icon: "💻"
  },
  {
    id: 4,
    title: "Mobile",
    description: "Developed cross-platform mobile applications using React Native. Created native-like experiences for Android Studio.",
    icon: "📱"
  }
];

export function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = experienceData.length;
  const maxIndex = totalItems - itemsPerPage;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? maxIndex : prev - 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const visibleItems = experienceData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">My Experience</h2>
        
        <div className="carousel-container">
          <button 
            className="carousel-btn prev-btn" 
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            ‹
          </button>
          
          <div className="carousel-track">
            {visibleItems.map((item) => (
              <div key={item.id} className="experience-card">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            ))}
          </div>
          
          <button 
            className="carousel-btn next-btn" 
            onClick={nextSlide}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
        
        <div className="carousel-dots">
          {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to position ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

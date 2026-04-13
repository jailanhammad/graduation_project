import React from 'react';
import './reviewscard.css';
import room6 from "../assets/gallery/room6.png";
import client from "../assets/reviews/client.png";
import boy from "../assets/reviews/boy.png";
import girl from "../assets/reviews/girl.png";
import ahmed from "../assets/reviews/ahmed.png";

const ReviewsCard = () => {


  const testimonialsData = [
    {
      id: 1,
      name: 'Mohamed Ahmed',
      car: 'Mercedes Glc200 2020',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
      text: 'An outstanding experience from start to finish. The team is professional and helped me choose the perfect vehicle. Their transparency was key for me.',
    },
    {
      id: 2,
      name: 'Ahmed Waleed',
      car: 'Tiguan R Line 2024',
      avatar: ahmed,
      rating: 5,
      text: 'I never expected car buying to be this seamless. They handled all procedures swiftly and with great care. Highly recommend Hammad Motors.',
    },
    {
      id: 3,
      name: 'Ahmed Amer',
      car: 'Bmw 320 2019',
      avatar: boy,
      rating: 5,
      text: 'Refined, professional, and transparent. Hammad Motors sets the gold standard for luxury car acquisition. The seamless process and the immaculate condition of the vehicle exceeded all my expectations.',
    },
    {
      id: 4,
      name: 'Tasneem Mohamed',
      car: 'Mercedes C180 2023',
      avatar: girl,
      rating: 5,
      text: 'I went in to explore options and walked out with my dream car! A professional team that truly cares about every detail for client comfort.',
    }
  ];


  return (
    <>


<div className="main-container-999">
<img src={room6} alt="" />      
<section className="hero-section-999">
        <div className="hero-overlay-999">
          <div className="hero-content-999">
            <h1 className="hero-title-999">What Our Customers Say</h1>
            <p className="hero-subtitle-999">Real experiences. Real trust. Real results.</p>
          </div>
        </div>
      </section>

      <section className="reviews-section-999">
        <div className="rating-summary-999">
          <span className="star-icon-999">⭐</span>
          <p>4.9 / 5 Average Rating</p>
          <span className='text-999'>Based on 850+ Happy Customers</span>
        </div>

        <div className="stats-container-999">
          <div className="stat-card-999">
            <h2>92%</h2>
            <div className="stars-999">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="stat-card-999">
            <h2>6%</h2>
            <div className="stars-999">⭐⭐⭐⭐</div>
          </div>
          <div className="stat-card-999">
            <h2>2%</h2>
            <div className="stars-999">⭐⭐⭐</div>
          </div>
        </div>
      </section>
    </div>


    <div className="customer-happiness-container">
      <div className="customer-happiness-content">
        <div className="customer-happiness-text-section">
          <h2 className="customer-happiness-title">Our Clients are Very Happy</h2>
          <div className="customer-happiness-description">
            <p>
              A special delivery moment at Hammad Motors as the clients proudly receive their
              new car. Smiles, celebration ribbons, and a warm showroom atmosphere capture
              the excitement of starting a new journey.
            </p>
          </div>
        </div>
        <div className="customer-happiness-image-section">
          <div className="customer-happiness-image-wrapper">
            <img src={client} alt="Happy clients receiving a car" />
          </div>
        </div>
      </div>
    </div>


    <section className="testimonials-section-888">
      <div className="container-888">
        <div className="testimonials-header-888">
          <h4 className="subtitle-888"> Customer Reviews</h4>
          <h2 className="title-888"> What our customers say</h2>
          <div className="title-line-888"></div>
        </div>

        <div className="testimonials-grid-888">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card-888"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header-888">
                <img src={testimonial.avatar} alt={testimonial.name} className="avatar-888" />
                <div className="client-info-888">
                  <h4 className="client-name-888">{testimonial.name}</h4>
                  <p className="client-car-888">{testimonial.car}</p>
                </div>
                
                <div className="stars-888">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < testimonial.rating ? '#ff3b3b' : '#444', marginRight: '2px' }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-body-888">
                <p className="client-quote-888">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


 </>
  );
};

export default ReviewsCard;
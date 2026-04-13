import React from 'react';
import './reviewscard.css';
import { Star, MessageSquareQuote } from 'lucide-react';
import room6 from "../assets/gallery/room6.png";

const ReviewsCard = () => {

    const reviewsData = [
        {
          id: 1,
          customer: "AHMED MANSOUR",
          model: "PORSCHE 911 GT3",
          text: "The best experience I've ever had buying a supercar. The team at Hammad Motors knows exactly what a car enthusiast needs.",
        },
        {
          id: 2,
          customer: "KHALED OMAR",
          model: "LAMBORGHINI HURACAN",
          text: "Professionalism, speed, and absolute transparency. They delivered my car right to my doorstep in perfect condition.",
        },
        {
          id: 3,
          customer: "YASMEEN ALI",
          model: "RANGE ROVER AUTOBIOGRAPHY",
          text: "Premium service for premium cars. Hammad Motors is definitely the first choice for luxury in the region.",
        }
      ];
  const stats = [
    { id: 1, percent: "92%", stars: 5 },
    { id: 2, percent: "6%", stars: 4 },
    { id: 3, percent: "2%", stars: 3 },
  ];

  return (
    <>

    <div className="hm-reviews-page">
      <img 
        src={room6} 
        className="hm-background-img" 
        alt="Showroom" 
      />

      <div className="hm-overlay-content">
{/*         
      <header className="hm-header-section">
          <h1 className="hm-main-title">
            What Our <span className="hm-red-word">Customers</span> Say
          </h1>
          <p className="hm-tagline">Real experiences. Real trust. Real results.</p>
        </header> */}

        <div className="hm-stats-wrapper">
          <div className="hm-rating-summary">
            <Star className="hm-star-gold" size={22} fill="currentColor" />
            <span>4.9 / 5 Average Rating</span>
          </div>
          <p className="hm-happy-text">Based on 850+ Happy Customers</p>

          <div className="hm-stats-grid">
            {stats.map((item) => (
              <div key={item.id} className="hm-stat-item">
                <span className="hm-percent-number">{item.percent}</span>
                <div className="hm-gold-stars-row">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>


<section className="hm-reviews-wrapper">
<div className="hm-section-title">
  <h2>What Our <span className="hm-text-red">Drivers</span> Say</h2>
  <div style={{width: '60px', height: '4px', background: '#ff0000', margin: '10px auto'}}></div>
</div>

<div className="hm-feedback-grid">
  {reviewsData.map((item) => (
    <div key={item.id} className="hm-review-card">
      <MessageSquareQuote className="hm-quote-icon" />            
      <div className="hm-stars-row">
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
        <Star size={16} fill="currentColor" />
      </div>

      <p className="hm-comment-text">"{item.text}"</p>

      <div className="hm-client-box">
        <div className="hm-client-info">
          <h4>{item.customer}</h4>
          <span>{item.model}</span>
        </div>
      </div>
    </div>
  ))}
</div>

<div className="hm-action-area">
  <button className="hm-btn-primary">Leave a Review</button>
</div>
</section>
 </>
  );
};

export default ReviewsCard;
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './reviewscard.css';

import room6 from "../assets/gallery/room6.png";
import client from "../assets/reviews/client.png";
import boy from "../assets/reviews/boy.png";
import girl from "../assets/reviews/girl.png";
import ahmed from "../assets/reviews/ahmed.png";
import send from "../assets/contact/send.svg";

const ReviewsCard = () => {

  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
  const [t, setT] = useState({});

  const fetchTranslations = async (currentLang) => {
    const { data, error } = await supabase
      .from('reviews_page')
      .select(`key, ${currentLang}`);

    if (!error && data) {
      const transMap = {};
      data.forEach(item => {
        transMap[item.key] = item[currentLang];
      });
      setT(transMap);
    }
  };

  useEffect(() => {
    fetchTranslations(lang);

    const observer = new MutationObserver(() => {
      const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
      setLang(currentLang);
      fetchTranslations(currentLang);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    return () => observer.disconnect();
  }, [lang]);

  const [reviewData, setReviewData] = useState({
    client_name: '',
    car_model: '',
    rating: 5,
    comment: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('reviews').insert([reviewData]);
      if (error) throw error;

      alert(t.alert_success || "Review posted successfully!");
      
      setReviewData({
        client_name: '',
        car_model: '',
        rating: 5,
        comment: ''
      });
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const testimonialsData = [
    { id: 1, name: t.review1_name, car: 'Mercedes Glc200 2020', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', rating: 5, text: t.review1_text },
    { id: 2, name: t.review2_name, car: 'Tiguan R Line 2024', avatar: ahmed, rating: 5, text: t.review2_text },
    { id: 3, name: t.review3_name, car: 'Bmw 320 2019', avatar: boy, rating: 5, text: t.review3_text },
    { id: 4, name: t.review4_name, car: 'Mercedes C180 2023', avatar: girl, rating: 5, text: t.review4_text }
  ];

  return (
    <>
      <div className="main-container-999">
        <img src={room6} alt="" />      
        <section className="hero-section-999">
          <div className="hero-overlay-999">
            <div className="hero-content-999">
              <h1 className="hero-title-999">{t.hero_title || "What Our Customers Say"}</h1>
              <p className="hero-subtitle-999">{t.hero_subtitle || "Real experiences. Real trust. Real results."}</p>
            </div>
          </div>
        </section>

        <section className="reviews-section-999">
          <div className="rating-summary-999">
            <span className="star-icon-999">⭐</span>
            <p>{t.avg_rating || "4.9 / 5 Average Rating"}</p>
            <span className='text-999'>{t.happy_customers || "Based on 850+ Happy Customers"}</span>
          </div>

          <div className="stats-container-999">
            <div className="stat-card-999"><h2>92%</h2><div className="stars-999">⭐⭐⭐⭐⭐</div></div>
            <div className="stat-card-999"><h2>6%</h2><div className="stars-999">⭐⭐⭐⭐</div></div>
            <div className="stat-card-999"><h2>2%</h2><div className="stars-999">⭐⭐⭐</div></div>
          </div>
        </section>
      </div>

      <div className="customer-happiness-container">
        <div className="customer-happiness-content">
          <div className="customer-happiness-text-section">
            <h2 className="customer-happiness-title">{t.happy_title || "Our Clients are Very Happy"}</h2>
            <div className="customer-happiness-description">
              <p>{t.happy_desc || "A special delivery moment at Hammad Motors..."}</p>
            </div>
          </div>
          <div className="customer-happiness-image-section">
            <div className="customer-happiness-image-wrapper">
              <img src={client} alt="Happy clients" />
            </div>
          </div>
        </div>
      </div>

      <section className="testimonials-section-888">
        <div className="container-888">
          <div className="testimonials-header-888">
            <h4 className="subtitle-888">{t.reviews_subtitle || "Customer Reviews"}</h4>
            <h2 className="title-888">{t.reviews_title || "What our customers say"}</h2>
            <div className="title-line-888"></div>
          </div>

          <div className="testimonials-grid-888">
            {testimonialsData.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-card-888" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-header-888">
                  <img src={testimonial.avatar} alt={testimonial.name} className="avatar-888" />
                  <div className="client-info-888">
                    <h4 className="client-name-888">{testimonial.name}</h4>
                    <p className="client-car-888">{testimonial.car}</p>
                  </div>
                  <div className="stars-888">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: i < testimonial.rating ? '#ff3b3b' : '#444', marginRight: '2px' }}>★</span>
                    ))}
                  </div>
                </div>
                <div className="card-body-888"><p className="client-quote-888">"{testimonial.text}"</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="leave-review-section-333">
        <div className="review-title-box-333">
          <h2>{t.form_title || "Tell us about your experience"}</h2>
        </div>

        <form className="review-form-333" onSubmit={handleSubmit}>
          <div className="input-wrapper-333">
            <label>{t.label_name || "Name"}</label>
            <input type="text" placeholder={t.placeholder_name || "Your Name"} required
              value={reviewData.client_name}
              onChange={(e) => setReviewData({...reviewData, client_name: e.target.value})}
            />
          </div>
          <div className="input-wrapper-333">
            <label>{t.label_car || "Car Model"}</label>
            <input type="text" placeholder={t.placeholder_car || "e.g. Mercedes C180"}
              value={reviewData.car_model}
              onChange={(e) => setReviewData({...reviewData, car_model: e.target.value})}
            />
          </div>
          <div className="input-wrapper-333 full-width-333">
            <label>{t.label_rating || "Rating"}</label>
            <select value={reviewData.rating}
              onChange={(e) => setReviewData({...reviewData, rating: parseInt(e.target.value)})}
            >
              {[5,4,3,2,1].map(num => <option key={num} value={num}> ⭐ {num} {t.stars_text || "Stars"}</option>)}
            </select>
          </div>
          <div className="input-wrapper-333 full-width-333">
            <label>{t.label_message || "Message"}</label>
            <textarea placeholder={t.placeholder_message || "How can we help?"} required
              value={reviewData.comment}
              onChange={(e) => setReviewData({...reviewData, comment: e.target.value})}
            ></textarea>
          </div>
          <div className="submit-wrapper-333">
            <button type="submit" className="submit-review-btn-333" disabled={loading}>
              {loading ? (t.loading_text || "Sending...") : (t.btn_send || "Send Message")}
              <img src={send} style={{width: '18px'}} alt="send icon" />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReviewsCard;
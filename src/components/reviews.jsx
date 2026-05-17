import React, { useState, useEffect } from 'react';
import './reviews.css';
import { supabase } from '../supabase';
import revpic from "../assets/home/rev-pic.svg";
import girl from "../assets/home/girl.svg";
import { Link } from "react-router-dom";

const Reviews = () => {
    const [uiData, setUiData] = useState({});
    const [cardReviews, setCardReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchReviewsData = async () => {
        const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        
        const { data: dbData, error } = await supabase
            .from('reviews_v2')
            .select(`id, key, en_name, ar_name, en_text, ar_text, rating, image_url`)
            .order('display_order', { ascending: true });

        if (!error && dbData) {
            const transMap = {};
            const dynamicCards = [];

            dbData.forEach(item => {
                const localizedName = item[`${currentLang}_name`] || item.en_name;
                const localizedText = item[`${currentLang}_text`] || item.en_text;

                if (item.key === 'header' || item.key === 'ui') {
                    transMap[item.key] = { name: localizedName, text: localizedText };
                } 
                else {
                    dynamicCards.push({
                        id: item.id,
                        name: localizedName,
                        text: localizedText,
                        rating: item.rating || 5,
                        image: item.image_url || (dynamicCards.length % 2 === 0 ? revpic : girl)
                    });
                }
            });

            setUiData(transMap);
            setCardReviews(dynamicCards);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchReviewsData();
        const observer = new MutationObserver(() => fetchReviewsData());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    if (loading) return null;

    const defaultReviews = [
        { 
            id: 'd1', 
            name: document.documentElement.dir === 'rtl' ? 'محمد علي' : 'Mohamed Ali', 
            text: document.documentElement.dir === 'rtl' ? 'خدمة ممتازة وفريق عمل محترف للغاية!' : 'Great service! The team was very professional and helped me find the perfect car.', 
            rating: 5, 
            image: revpic 
        },
        { 
            id: 'd2', 
            name: document.documentElement.dir === 'rtl' ? 'سلمى أحمد' : 'Salma Ahmed', 
            text: document.documentElement.dir === 'rtl' ? 'شراء سيارتي الأولى كان سهلاً للغاية.' : 'Buying my first car was easy and stress-free. Everything was clear.', 
            rating: 5, 
            image: girl 
        }
    ];

    const displayReviews = cardReviews.length > 0 ? cardReviews : defaultReviews;
    const defaultHeaderName = document.documentElement.dir === 'rtl' ? 'آراء عملائنا' : 'What our customers say';
    const defaultHeaderSub = document.documentElement.dir === 'rtl' ? 'تقييمات العملاء' : 'CUSTOMER REVIEWS';
    const defaultUiName = document.documentElement.dir === 'rtl' ? 'عرض الكل' : 'View All';

    return ( 
        <section className="reviews-section">
            <div className="responsive-container">
                <div className="reviews-header">
                    <div className="header-text">
                        <span className="sub-label">{uiData.header?.text || defaultHeaderSub}</span>
                        <h2 className="section-title-8">{uiData.header?.name || defaultHeaderName}</h2>
                    </div>
                </div>

                <div className="reviews-grid">
                    {displayReviews.map((rev) => (
                        <div className="review-card" key={rev.id}>
                            <div className="card-header">
                                <div className="user-info">
                                    <img src={rev.image} alt="avatar" className="avatar"/>
                                    <div className="name-stars">
                                        <h3>{rev.name}</h3>
                                        <div className="stars">{"★".repeat(rev.rating)}</div>
                                    </div>
                                </div>
                                <i className="fas fa-quote-right quote-icon"></i>
                            </div>
                            <p className="review-text">{rev.text}</p>
                        </div>
                    ))}
                </div>

                <div className="view-all-container">
                    <Link to="/Reviews" className="view-all-link">
                        {uiData.ui?.name || defaultUiName} <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
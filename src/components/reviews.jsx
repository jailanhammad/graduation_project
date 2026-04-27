import React, { useState, useEffect } from 'react';
import './reviews.css';
import { supabase } from '../supabase';
import revpic from "../assets/home/rev-pic.svg";
// import white from "../assets/home/white-arrow.svg";
// import black from "../assets/home/black-arrow.svg";
import girl from "../assets/home/girl.svg";
import { Link } from "react-router-dom";

const Reviews = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchReviewsData = async () => {
        const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        const { data: dbData, error } = await supabase
            .from('reviews_v2')
            .select(`key, ${currentLang}_name, ${currentLang}_text`);

        if (!error && dbData) {
            const transMap = {};
            dbData.forEach(item => {
                transMap[item.key] = {
                    name: item[`${currentLang}_name`],
                    text: item[`${currentLang}_text`]
                };
            });
            setData(transMap);
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

    return ( 
        <section className="reviews-section">
            <div className="responsive-container">
                <div className="reviews-header">
                    <div className="header-text">
                        <span className="sub-label">{data.header?.text}</span>
                        <h2 className="section-title-8">{data.header?.name}</h2>
                    </div>
                    {/* <div className="nav-arrows">
                        <button className="arrow-btn-white">
                            <i className="fas fa-arrow-left"><img src={white} alt="arrow" className="white"/></i>
                        </button>
                        <button className="arrow-btn-black">
                            <i className="fas fa-arrow-right"><img src={black} alt="arrow" className="black"/></i>
                        </button>
                    </div> */}
                </div>

                <div className="reviews-grid">
                    <div className="review-card">
                        <div className="card-header">
                            <div className="user-info">
                                <img src={revpic} alt="avatar" className="avatar"/>
                                <div className="name-stars">
                                    <h3>{data.rev1?.name}</h3>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <i className="fas fa-quote-right quote-icon"></i>
                        </div>
                        <p className="review-text">{data.rev1?.text}</p>
                    </div>

                    <div className="review-card">
                        <div className="card-header">
                            <div className="user-info">
                                <img src={girl} alt="avatar" className="avatar"/>
                                <div className="name-stars">
                                    <h3>{data.rev2?.name}</h3>
                                    <div className="stars">★★★★★</div>
                                </div>
                            </div>
                            <i className="fas fa-quote-right quote-icon"></i>
                        </div>
                        <p className="review-text">{data.rev2?.text}</p>
                    </div>
                </div>

                <div className="view-all-container">
                    <Link to="/Reviews" className="view-all-link">
                        {data.ui?.name} <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
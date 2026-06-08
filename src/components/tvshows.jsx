import React, { useState, useEffect } from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import img from "../assets/gallery/front.png";
import thumb from "../assets/gallery/thumb.png";

import tv1 from "../assets/gallery/tv1.png";
import tv2 from "../assets/gallery/tv2.png";
import tv3 from "../assets/gallery/tv3.png";
import tv4 from "../assets/gallery/tv4.png";

import Reviews from '../components/reviews';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import Nav from './nav';

const translations = {
    en: {
        gallery: "OUR GALLERY",
        subtitle: "Explore the Power. Experience the Detail.",
        allCars: "All Cars",
        interior: "Interior",
        exterior: "Exterior",
        showroom: "Showroom",
        tvShows: "Tv Shows",
        cinematic: "Cinematic Showcase",
        videoSupport: "Your browser does not support the video tag.",
        youtubeLink: "Watch Full Video on YouTube",
        mediaDesc: "A special media appearance on ON TV featuring Mr. Mahmoud Hammad, owner of Hammad Motors, in conversation with TV host Ahmed Salem, discussing the automotive market in Egypt and the role of Hammad Motors in delivering exceptional automotive experiences to customers."
    },
    ar: {
        gallery: "معرضنا",
        subtitle: "اكتشف القوة. عِش تفاصيل الفخامة.",
        allCars: "كل السيارات",
        interior: "التصميم الداخلي",
        exterior: "التصميم الخارجي",
        showroom: "صالة العرض",
        tvShows: "البرامج التلفزيونية",
        cinematic: "العرض السينمائي",
        videoSupport: "متصفحك لا يدعم تشغيل الفيديو.",
        youtubeLink: "شاهد الفيديو الكامل على يوتيوب",
        mediaDesc: "ظهور إعلامي خاص على قناة ON TV يستضيف الأستاذ محمود حماد، صاحب حماد موتورز، في حوار مع الإعلامي أحمد سالم، لمناقشة سوق السيارات في مصر ودور حماد موتورز في تقديم تجارب استثنائية للعملاء."
    }
};

const Tvshows = () => {

  const [t, setT] = useState(document.documentElement.dir === 'rtl' ? translations.ar : translations.en);

    useEffect(() => {
        const updateLang = () => {
            const isRtl = document.documentElement.dir === 'rtl';
            setT(isRtl ? translations.ar : translations.en);
        };

        updateLang();

        const observer = new MutationObserver(updateLang);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Nav />
            <section className="gal-hero-wrapper">
                <div className="gal-hero-bg">
                    <img src={hero} alt="Range Rover Hero" className="gal-hero-img" />
                </div>
                <div className="gal-hero-overlay">
                    <div className="gal-hero-text">
                        <h1 className="gal-main-title">{t.gallery}</h1>
                        <p className="gal-main-subtitle">{t.subtitle}</p>
                    </div>
                </div>
            </section>

            <div className="gal-container">
                <div className="gal-nav-container">
                    <nav className="gal-filter-nav">
                        <button className="gal-filter-btn">
                            <Link to="/Gallery">{t.allCars}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Interior">{t.interior}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Exterior">{t.exterior}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Showroom">{t.showroom}</Link>
                        </button>
                        <button className="gal-filter-btn active">
                            <Link to="/Tv-shows">{t.tvShows}</Link>
                        </button>
                    </nav>
                </div>

                <section className="gal-main-section">
                    <h2 className="gal-section-heading">{t.tvShows}</h2>

                    <div className="gallery-content">
                        <div className="gallery-top">
                            <img src={tv1} alt="gallery" />
                            <img src={tv2} alt="gallery" />
                        </div>

                        <div className="gallery-top">
                            <img src={tv3} alt="gallery" />
                            <img src={tv4} alt="gallery" />
                        </div>

                        <p className="gallery-text">{t.mediaDesc}</p>

                        <div className="gal-video-wrapper">
                            <video controls poster={thumb} className="gal-video-player">
                            </video>  
                        </div>

                        <a 
                            href="https://www.youtube.com/watch?v=o5MzxZ5xf9w&t=1s" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="video-link"
                        >
                            {t.youtubeLink}
                        </a>
                    </div>
                </section>

                <section className="gal-video-section">
                    <h2 className="gal-section-heading">{t.cinematic}</h2>
                    <div className="gal-video-wrapper">
                        <video controls poster={img} className="gal-video-player">
                            {t.videoSupport}
                        </video>
                    </div>
                </section>
            </div>

            <Reviews />
            <Footer />    
        </>
    );
}
 
export default Tvshows;
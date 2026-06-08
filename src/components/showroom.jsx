import React, { useState, useEffect } from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import img from "../assets/gallery/front.png";
import room1 from "../assets/gallery/room1.png";
import room2 from "../assets/gallery/room2.png";
import room3 from "../assets/gallery/room3.png";
import room4 from "../assets/gallery/room4.png";
import room5 from "../assets/gallery/room5.png";
import room6 from "../assets/gallery/room6.png";
import video from '../assets/gallery/hammadvideo.mp4';

import Reviews from '../components/reviews';
import Footer from '../components/footer';
import CarImg from './carimg';
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
        address1: "15 Ibrahim Elnaggar St.",
        address2: "12 Ammar Ibn Yasser St."
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
        address1: "١٥ شارع إبراهيم النجار",
        address2: "١٢ شارع عمار بن ياسر"
    }
};

const Showroom = () => {

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
                        <button className="gal-filter-btn active">
                            <Link to="/Showroom">{t.showroom}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Tv-shows">{t.tvShows}</Link>
                        </button>
                    </nav>
                </div>

                <section className="gal-main-section">
                    <h2 className="gal-section-heading">{t.showroom}</h2>
                    <div className="gal-grid">
                        <CarImg img={room1} span={t.address1} />
                        <CarImg img={room2} span={t.address2} />
                        <CarImg img={room3} span={t.address1} />
                        <CarImg img={room4} span={t.address1} />
                        <CarImg img={room5} span={t.address2} />
                        <CarImg img={room6} span={t.address2} />
                    </div>
                </section>

                <section className="gal-video-section">
                    <h2 className="gal-section-heading">{t.cinematic}</h2>
                    <div className="gal-video-wrapper">
                        <video controls poster={img} className="gal-video-player">
                            <source src={video} type="video/mp4"/>
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

export default Showroom;
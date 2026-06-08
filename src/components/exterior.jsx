import React, { useState, useEffect } from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import img from "../assets/gallery/front.png";
import bmw1 from "../assets/gallery/bmw1.png";
import bmw2 from "../assets/gallery/bmw2.png";
import bmw3 from "../assets/gallery/bmw3.png";
import m1 from "../assets/gallery/m1.png";
import m2 from "../assets/gallery/m2.png";
import m3 from "../assets/gallery/m3.png";
import r1 from "../assets/gallery/r1.png";
import r2 from "../assets/gallery/r2.png";
import r3 from "../assets/gallery/r3.png";
import h1 from "../assets/gallery/h1.png";
import h2 from "../assets/gallery/h2.png";
import h3 from "../assets/gallery/h3.png";
import t1 from "../assets/gallery/t1.png";
import t2 from "../assets/gallery/t2.png";
import t3 from "../assets/gallery/t3.png";
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
        bmw318: "Bmw 318",
        c180: "Mercedes C180",
        cn7: "Elantra Cn7",
        evoque: "Range Rover Evouqe",
        tucson: "Hyundai Tucson"
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
        bmw318: "بي إم دبليو 318",
        c180: "مرسيدس C180",
        cn7: "إلنترا Cn7",
        evoque: "رينج روفر إيفوك",
        tucson: "هيونداي توسان"
    }
};

const Exterior = () => {

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
                        <button className="gal-filter-btn active">
                            <Link to="/Exterior">{t.exterior}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Showroom">{t.showroom}</Link>
                        </button>
                        <button className="gal-filter-btn">
                            <Link to="/Tv-shows">{t.tvShows}</Link>
                        </button>
                    </nav>
                </div>

                <section className="gal-main-section">
                    <h2 className="gal-section-heading">{t.exterior}</h2>
                    <div className="gal-grid">
                        <CarImg img={bmw1} span={t.bmw318} />
                        <CarImg img={bmw2} span={t.bmw318} />
                        <CarImg img={bmw3} span={t.bmw318} />

                        <CarImg img={m1} span={t.c180} />
                        <CarImg img={m2} span={t.c180} />
                        <CarImg img={m3} span={t.c180} />

                        <CarImg img={h1} span={t.cn7} />
                        <CarImg img={h2} span={t.cn7} />
                        <CarImg img={h3} span={t.cn7} />

                        <CarImg img={r1} span={t.evoque} />
                        <CarImg img={r2} span={t.evoque} />
                        <CarImg img={r3} span={t.evoque} />

                        <CarImg img={t1} span={t.tucson} />
                        <CarImg img={t2} span={t.tucson} />
                        <CarImg img={t3} span={t.tucson} />
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

export default Exterior;
import React, { useState, useEffect } from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import img from "../assets/gallery/front.png";
import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";
import img7 from "../assets/gallery/img7.png";
import img8 from "../assets/gallery/img8.png";
import img9 from "../assets/gallery/img9.png";
import in1 from "../assets/gallery/in1.png";
import in2 from "../assets/gallery/in2.png";
import in3 from "../assets/gallery/in3.png";
import img13 from "../assets/gallery/img13.png";
import img14 from "../assets/gallery/img14.png";
import img15 from "../assets/gallery/img15.png";

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
        c200: "Mercedes C200",
        evoque: "Range Rover Evouqe",
        c180: "Mercedes C180",
        cla200: "Mercedes CLA200",
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
        c200: "مرسيدس C200",
        evoque: "رينج روفر إيفوك",
        c180: "مرسيدس C180",
        cla200: "مرسيدس CLA200",
        tucson: "هيونداي توسان"
    }
};

const Interior = () => {
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
                    <img src={hero} alt="Hero" className="gal-hero-img" />
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
                        <button className="gal-filter-btn active">
                            <Link to="/Interior">{t.interior}</Link>
                        </button>
                        <button className="gal-filter-btn">
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
                    <h2 className="gal-section-heading">{t.interior}</h2>
                    <div className="gal-grid">
                        <CarImg img={img1} span={t.c200} />
                        <CarImg img={img2} span={t.c200} />
                        <CarImg img={img3} span={t.c200} />
                        <CarImg img={img4} span={t.evoque} />
                        <CarImg img={img5} span={t.evoque} />
                        <CarImg img={img6} span={t.evoque} />
                        <CarImg img={img7} span={t.c180} />
                        <CarImg img={img8} span={t.c180} />
                        <CarImg img={img9} span={t.c180} />
                        <CarImg img={in1} span={t.cla200} />
                        <CarImg img={in2} span={t.cla200} />
                        <CarImg img={in3} span={t.cla200} />
                        <CarImg img={img13} span={t.tucson} />
                        <CarImg img={img14} span={t.tucson} />
                        <CarImg img={img15} span={t.tucson} />
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

export default Interior;
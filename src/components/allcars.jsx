import React, { useState, useEffect } from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import velar from "../assets/gallery/velar.png";
import mercedes from "../assets/gallery/mercedes.png";
import glc from "../assets/gallery/glc.png";
import bmw from "../assets/gallery/bmw.png";
// import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import tosan from "../assets/gallery/tosan.png";
import rangler from "../assets/gallery/rangler.png";
import cn7 from "../assets/gallery/cn7.png";
import c180 from "../assets/gallery/c180.png";
import jeep from "../assets/gallery/jeep.png";
import cetro from "../assets/gallery/cetro.png";
import evouqe from "../assets/gallery/evouqe.png";
import cap from "../assets/gallery/cap.png";
import captiva from "../assets/gallery/captiva.png";
import c200 from "../assets/gallery/c200.png";
import s from "../assets/gallery/s.png";

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
        s450: "Mercedes S450",
        velar: "Range Rover Velar",
        c180: "Mercedes C180",
        glc200: "Glc 200",
        bmw318: "Bmw 318",
        c200: "Mercedes C200",
        evouqe: "Range Rover Evouqe",
        cabriolet: "Mercedes C180 Cabriolet",
        jeepGrand: "Jeep Grand Cherokkee",
        tucson: "Hyundai Tucson",
        cn7: "Elantra Cn7",
        wrangler: "Jeep Wrangler",
        captiva: "Chevrolet Captiva",
        cetroen: "Cetroen C5"
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
        s450: "مرسيدس S450",
        velar: "رينج روفر فيلار",
        c180: "مرسيدس C180",
        glc200: "جي إل سي 200",
        bmw318: "بي إم دبليو 318",
        c200: "مرسيدس C200",
        evouqe: "رينج روفر إيفوك",
        cabriolet: "مرسيدس C180 كابريوليه",
        jeepGrand: "جيب جراند شيروكي",
        tucson: "هيونداي توسان",
        cn7: "إلنترا Cn7",
        wrangler: "جيب رانجلر",
        captiva: "شيفروليه كابتيفا",
        cetroen: "سيتروين C5"
    }
};

const AllCars = () => {
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
                    <button className="gal-filter-btn active">
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
                    <button className="gal-filter-btn">
                        <Link to="/Tv-shows">{t.tvShows}</Link>
                    </button>
                </nav>
            </div>

            <section className="gal-main-section">
                <h2 className="gal-section-heading">{t.allCars}</h2>

                <div className="gal-grid">
                    <CarImg img={s} span={t.s450} />
                    <CarImg img={velar} span={t.velar} />
                    <CarImg img={mercedes} span={t.c180} />
                    <CarImg img={glc} span={t.glc200} />
                    <CarImg img={bmw} span={t.bmw318} />
                    <CarImg img={c200} span={t.c200} />
                    <CarImg img={evouqe} span={t.evouqe} />
                    <CarImg img={c180} span={t.c180} />
                    <CarImg img={cap} span={t.cabriolet} />
                    <CarImg img={jeep} span={t.jeepGrand} />
                    <CarImg img={tosan} span={t.tucson} />
                    <CarImg img={cn7} span={t.cn7} />
                    <CarImg img={rangler} span={t.wrangler} />
                    <CarImg img={captiva} span={t.captiva} />
                    <CarImg img={cetro} span={t.cetroen} />
                </div>
            </section>

            <section className="gal-video-section">
                <h2 className="gal-section-heading">{t.cinematic}</h2>
                <div className="gal-video-wrapper">
                    <video controls poster={img} className="gal-video-player">
                        {/* <source src={video} type="video/mp4"/> */}
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
 
export default AllCars;
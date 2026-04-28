import React, { useEffect, useState } from 'react';
import './vehicleshero.css';
import vehicleVideo from '../assets/vehicles/vd.mp4';
import { supabase } from '../supabase';

const Vehicleshero = (props) => {
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    const [content, setContent] = useState({
        h5_ar: props.h5 || "المخزون", 
        h5_en: props.h5 || "Inventory",
        title_ar: "استكشف مجموعتنا المتميزة",
        title_en: "Explore Our Premium Collection",
        desc_ar: "تصفح أحدث سياراتنا الجديدة والمستعملة. الجودة مضمونة.",
        desc_en: "Browse our latest new and pre-owned vehicles. Quality guaranteed."
    });

    useEffect(() => {
        const fetchContent = async () => {
            const { data } = await supabase
                .from('vehicles_page_content')
                .select('*')
                .eq('section_key', 'vehicles_hero')
                .single();
            if (data) setContent(data);
        };
        fetchContent();
    }, []);

    return ( 
        <main className="hmv-page-wrapper" dir={isArabic ? "rtl" : "ltr"}>
            <section className="hmv-hero-section">
                <video autoPlay loop muted playsInline className="hmv-video-bg">
                    <source src={vehicleVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hmv-video-overlay"></div>
                
                <div className="hmv-hero-container">
                    <div className="hmv-hero-text hmv-animate-up">
                        <h5>{isArabic ? content.h5_ar : content.h5_en}</h5>
                        <h1>{isArabic ? content.title_ar : content.title_en}</h1>
                        <p>{isArabic ? content.desc_ar : content.desc_en}</p>
                    </div>
                </div>
            </section>
        </main>  
    );
}

export default Vehicleshero;
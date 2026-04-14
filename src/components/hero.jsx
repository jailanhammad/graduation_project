import React, { useEffect, useState } from 'react';
import './nav.css';
import heroo from "../assets/home/heroo.svg";
import { useLanguage } from '../LanguageContext';
import { supabase } from '../supabase'; 

const Hero = () => {
    const { isArabic } = useLanguage();
    const [heroData, setHeroData] = useState({
        title: "",
        subTitle: ""
    });

    useEffect(() => {
        const fetchHeroData = async () => {
            const { data, error } = await supabase
                .from('website_sections')
                .select('*')
                .eq('section_key', 'hero_section')
                .single();

            if (data) {
                setHeroData({
                    title: isArabic ? data.title_ar : data.title_en,
                    subTitle: isArabic ? data.description_ar : data.description_en
                });
            }
        };

        fetchHeroData();
    }, [isArabic]); 

    return ( 
        <section className="hero">
            <div className="hero-content">
                <div className="car-wrapper">
                    <img src={heroo} className='hero-car' alt="hero car"/>
                </div>
                
                <div className="hero-footer">
                    <p className="sub-text">{heroData.subTitle}</p>
                    <h2 className="brand-name">{heroData.title}</h2>
                </div>
            </div>
        </section>
    );
}

export default Hero;
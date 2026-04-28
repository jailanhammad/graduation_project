import React, { useEffect, useState } from 'react';
import './nav.css';
import heroo from "../assets/home/heroo.svg";
import { supabase } from '../supabase'; 
import ShinyText from './ShinyText';
import LightRays from './LightRays';

const Hero = () => {

    const [heroData, setHeroData] = useState(null);
const [lang, setLang] = useState(
    document.documentElement.dir === 'rtl' ? 'ar' : 'en'
);

const fetchHeroData = async (currentLang) => {
    const { data } = await supabase
        .from('website_sections')
        .select('*')
        .eq('section_key', 'hero_section')
        .single();

    if (data) {
        setHeroData({
            title: data[`${currentLang === 'ar' ? 'title_ar' : 'title_en'}`],
            desc: data[`${currentLang === 'ar' ? 'description_ar' : 'description_en'}`]
        });
    }
};

useEffect(() => {
    fetchHeroData(lang);

    const observer = new MutationObserver(() => {
        const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        setLang(newLang);
        fetchHeroData(newLang);
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir']
    });

    return () => observer.disconnect();
}, [lang]);

    return ( 
        <section className="hero" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ff0000" 
                    raysSpeed={1}
                    lightSpread={4}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>

            <div className="hero-content">
                <div className="car-wrapper">
                    <img src={heroo} className='hero-car' alt="hero car"/>
                </div>
                
                <div className="hero-footer">
                    <p className="sub-text">
                    {heroData?.desc}
                    </p>

                    {heroData && (
                        <ShinyText 
                            text={heroData?.title}
                            disabled={false} 
                            speed={3} 
                            className="brand-name" 
                            delay={0}
                            color="#ED1C24"
                            shineColor="#370000"
                            spread={120}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Hero;
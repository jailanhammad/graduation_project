import React, { useEffect, useState } from 'react';
import './nav.css';
import heroo from "../assets/home/heroo.svg";
import { useLanguage } from '../LanguageContext';
import { supabase } from '../supabase'; 
import ShinyText from './ShinyText';
import LightRays from './LightRays';

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
        <section className="hero" style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100vh' }}>


<div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ff0000" // تقدري تغيريه لـ #ffffff لو عايزاه أبيض
                    raysSpeed={1}
                    lightSpread={0.5}
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
                    <p className="sub-text">{heroData.subTitle}</p>
                    {/* <h2 className="brand-name">{heroData.title}</h2> */}

                    
                <ShinyText 
                    text={heroData.title} 
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

                </div>
            </div>
        </section>
    );
}

export default Hero;
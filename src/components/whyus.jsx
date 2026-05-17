import React, { useEffect, useState } from 'react';
import './whyus.css';
import qualityIcon from "../assets/home/quality.svg";
import bestIcon from "../assets/home/best.svg";
import supportIcon from "../assets/home/support.svg";
import { supabase } from '../supabase';
import BorderGlow from './BorderGlow';

const Whyus = () => {
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

    const [features, setFeatures] = useState([]);
    
    useEffect(() => {
        const fetchFeatures = async () => {
            const { data } = await supabase
                .from('why_us_features')
                .select('*')
                .order('display_order', { ascending: true });
            if (data) setFeatures(data);
        };
        fetchFeatures();
    }, []);

    const iconMap = {
        quality: qualityIcon,
        financing: bestIcon,
        support: supportIcon
    };

    const sectionTitle = isArabic ? "لماذا تختار حماد موتورز" : "Why Choose Hammad Motors";
    const sectionSubtitle = isArabic ? "التميز ليس مجرد معيار، بل هو نقطة انطلاقنا." : "Excellence is not just a standard, it's our starting point.";

    return ( 
        <section className="why-choose-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className="responsive-container">
                <div className="section-header-7">
                    <h2 className="title">{sectionTitle}</h2>
                    <p className="subtitle">{sectionSubtitle}</p>
                </div>

                <div className="features-grid-2">
                    {features.map((feature) => (
                        <BorderGlow
                            key={feature.id}
                            edgeSensitivity={30}
                            glowColor="40 80 80"
                            backgroundColor="#170f0f"
                            borderRadius={28}
                            glowRadius={40}
                            glowIntensity={1}
                            coneSpread={25}
                            animated={false}
                            colors={['#d32f2f', '#170f0f', '#d32f2f']}
                        >
                            <div className="feature-card">
                                <div className="icon-wrapper">
                                    <img src={iconMap[feature.feature_key]} alt="icon" />
                                </div>
                                <h3>{isArabic ? feature.title_ar : feature.title_en}</h3>
                                <p>{isArabic ? feature.desc_ar : feature.desc_en}</p>
                            </div>
                        </BorderGlow>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Whyus;
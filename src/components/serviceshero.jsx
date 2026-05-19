import React, { useEffect, useState } from 'react';
import './serviceshero.css';
import serviceshero from "../assets/services/serviceshero.svg";
import { supabase } from '../supabase'; 

const Serviceshero = () => {
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    const [heroData, setHeroData] = useState({
        tag: isArabic ? "رعاية احترافية" : "Professional Care",
        title: isArabic ? "خدماتـ<span>ـنا</span>" : "Our <span>Services</span>",
        desc: isArabic 
            ? "نحن نقدم حلولاً كاملة للسيارات—من البيع والتمويل إلى الفحص الفني الخبير ودعم ما بعد البيع." 
            : "We provide complete car solutions—from sales and financing to expert inspection and after-sales support.",
        btn: isArabic ? "عرض جميع الخدمات" : "View All Services",
        bg: serviceshero 
    });

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const { data, error } = await supabase
                    .from('services_hero')
                    .select('*')
                    .eq('id', 1)
                    .single();

                if (data) {
                    setHeroData({
                        tag: isArabic ? data.tag_ar : data.tag_en,
                        title: isArabic ? data.title_ar : data.title_en,
                        desc: isArabic ? data.desc_ar : data.desc_en,
                        btn: isArabic ? data.btn_ar : data.btn_en,
                        bg: data.bg_url && data.bg_url.trim() !== "" ? data.bg_url : serviceshero
                    });
                }
                if (error) console.error("Error loading services hero:", error);
            } catch (err) {
                console.error(err);
            }
        };

        fetchHeroData();
    }, [isArabic]); 

    const scrollToServices = () => {
        const nextSection = document.getElementById('services-list');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (  
        <section className="hms-hero" dir={isArabic ? "rtl" : "ltr"}>
            <div className="hms-hero-bg">
                <img src={heroData.bg} alt="Hammad Motors" />
                <div className="hms-overlay"></div>
            </div>

            <div className="hms-container">
                <div className="hms-content-box hms-animate-left">
                    <div className="hms-tag-line">{heroData.tag}</div>
                    <h1 dangerouslySetInnerHTML={{ __html: heroData.title }}></h1>
                    <p>{heroData.desc}</p>
                    <div className="hms-hero-btns" style={{ alignSelf: 'flex-start' }}>
                        <button className="hms-btn-primary" onClick={scrollToServices}>
                            {heroData.btn}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Serviceshero;
import React, { useEffect, useState } from 'react';
import './serviceshero.css';
import serviceshero from "../assets/services/serviceshero.svg";

const Serviceshero = () => {
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    const scrollToServices = () => {
        const nextSection = document.getElementById('services-list');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const t = {
        tag: isArabic ? "رعاية احترافية" : "Professional Care",
        title: isArabic ? "خدماتـ<span>ـنا</span>" : "Our <span>Services</span>",
        desc: isArabic 
            ? "نحن نقدم حلولاً كاملة للسيارات—من البيع والتمويل إلى الفحص الفني الخبير ودعم ما بعد البيع." 
            : "We provide complete car solutions—from sales and financing to expert inspection and after-sales support.",
        btn: isArabic ? "عرض جميع الخدمات" : "View All Services"
    };


    return (  
        <section className="hms-hero" dir={isArabic ? "rtl" : "ltr"}>
            <div className="hms-hero-bg">
                <img src={serviceshero} alt="Hammad Motors" />
                <div className="hms-overlay"></div>
            </div>

            <div className="hms-container">
    <div 
        className="hms-content-box hms-animate-left" 
        style={{ 
        marginRight: '35px',
        }}
    >
        <div className="hms-tag-line">{t.tag}</div>
        <h1 dangerouslySetInnerHTML={{ __html: t.title }}></h1>
        <p>{t.desc}</p>
        <div className="hms-hero-btns" style={{ alignSelf: 'flex-start' }}>
            <button className="hms-btn-primary" onClick={scrollToServices}>
                {t.btn}
            </button>
        </div>
    </div>
</div>
        </section>
    );
}
 
export default Serviceshero;
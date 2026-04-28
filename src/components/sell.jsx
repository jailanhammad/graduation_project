import './sell.css';
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import sell from "../assets/services/sell.svg";
import check from "../assets/services/check.svg";
import whatsapp from "../assets/services/wp.svg";

const Sell = () => {
    const [data, setData] = useState(null);
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        const fetchData = async () => {
            try {
                const { data: sectionData, error } = await supabase.from('sell_section').select('*').single();
                if (sectionData && !error) setData(sectionData);
            } catch (err) {
                console.log("Supabase error or empty table:", err);
            }
        };

        fetchData();

        const animObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('hms-show');
            });
        }, { threshold: 0.2 });

        const hiddenElements = document.querySelectorAll('.hms-hidden');
        hiddenElements.forEach((el) => animObserver.observe(el));

        return () => observer.disconnect();
    }, []);

    const defaultData = {
        title_en: 'Get A Fair Price For Your Car',
        title_ar: 'احصل على سعر عادل لسيارتك',
        subtitle_en: 'Sell To Us Today',
        subtitle_ar: 'بع لنا سيارتك اليوم',
        description_en: 'We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of options.',
        description_ar: 'نحن ملتزمون بتزويد عملائنا بخدمة استثنائية، وأسعار تنافسية، ومجموعة واسعة من الخيارات.',
        badge_text: '100%',
        badge_sub_en: 'Trusted Service',
        badge_sub_ar: 'خدمة موثوقة',
        features_en: [
            'Instant Car Valuation – Get a fair offer in minutes',
            'No Hidden Fees – 100% transparent process',
            'Hassle-Free – We handle all paperwork',
            'Quick Payment – Get paid on the spot'
        ],
        features_ar: [
            'تقييم فوري للسيارة - احصل على عرض عادل في دقائق',
            'لا توجد رسوم خفية - عملية شفافة بنسبة 100%',
            'بدون متاعب - نحن نتولى جميع الأوراق',
            'دفع سريع - استلم مستحقاتك فوراً'
        ],
        whatsapp_text_en: 'Send Your Car',
        whatsapp_text_ar: 'أرسل تفاصيل سيارتك'
    };

    const finalData = data || defaultData;

    return (  
        <section className="hms-sell-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className="hms-sell-container">
                
                <div className="hms-sell-image-wrapper hms-reveal-left">
                    <img src={sell} alt="Get a fair price" className="hms-main-img" />
                    <div className="hms-trusted-badge">
                        <h2>{finalData.badge_text}</h2>
                        <p>{isArabic ? finalData.badge_sub_ar : finalData.badge_sub_en}</p>
                    </div>
                </div>

                <div className="hms-sell-content hms-reveal-right" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                    <h2 className="hms-sell-title">{isArabic ? finalData.title_ar : finalData.title_en}</h2>
                    <h3 className="hms-sell-subtitle">{isArabic ? finalData.subtitle_ar : finalData.subtitle_en}</h3>
                    <p className="hms-sell-description">
                        {isArabic ? finalData.description_ar : finalData.description_en}
                    </p>

                    <ul className="hms-sell-features">
                        {(isArabic ? finalData.features_ar : finalData.features_en).map((feature, index) => (
                            <li key={index}>
                                <i className="fas fa-check-circle">
                                    <img src={check} alt="check icon" />
                                </i> 
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a 
                    href="https://wa.me/201000444401?text=Hello%20Hammad%20Motors,%20I%20want%20to%20offer%20my%20car%20for%20sale." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hms-whatsapp-link"
                    >
                        <button className="hms-whatsapp-btn hms-hidden hms-from-bottom">
                            {isArabic ? finalData.whatsapp_text_ar : finalData.whatsapp_text_en} 
                            <i className="fab fa-whatsapp">
                                <img src={whatsapp} alt="whatsapp icon" />
                            </i>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Sell;
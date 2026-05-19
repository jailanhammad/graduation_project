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
                const { data: sectionData, error } = await supabase
                    .from('sell_section')
                    .select('*')
                    .eq('id', 1)
                    .single();

                if (sectionData && !error) {
                    let parsedFeaturesEn = sectionData.features_en;
                    let parsedFeaturesAr = sectionData.features_ar;

                    if (typeof sectionData.features_en === 'string') {
                        try { parsedFeaturesEn = JSON.parse(sectionData.features_en); } catch(e) { parsedFeaturesEn = []; }
                    }
                    if (typeof sectionData.features_ar === 'string') {
                        try { parsedFeaturesAr = JSON.parse(sectionData.features_ar); } catch(e) { parsedFeaturesAr = []; }
                    }

                    setData({
                        ...sectionData,
                        features_en: Array.isArray(parsedFeaturesEn) ? parsedFeaturesEn : [],
                        features_ar: Array.isArray(parsedFeaturesAr) ? parsedFeaturesAr : []
                    });
                }
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

        return () => {
            observer.disconnect();
            animObserver.disconnect();
        };
    }, []);

    const defaultData = {
        title_en: 'Get A Fair Price For Your Car',
        title_ar: 'احصل على سعر عادل لسيارتك',
        subtitle_en: 'Sell To Us Today',
        subtitle_ar: 'بع لنا سيارتك اليوم',
        description_en: 'We are committed to providing our customers with exceptional service, competitive pricing, and a wide range of options.',
        description_ar: 'نحن ملتزمون بتزويد عملائنا بخدمة استثنائية، وأسعار تنسيقية، ومجموعة واسعة من الخيارات.',
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
            'لا توجد رسوم خفية - عملية شفافية بنسبة 100%',
            'بدون متاعب - نحن نتولى جميع الأوراق',
            'دفع سريع - استلم مستحقاتك فوراً'
        ],
        whatsapp_text_en: 'Send Your Car',
        whatsapp_text_ar: 'أرسل تفاصيل سيارتك'
    };

    const finalData = data || defaultData;
    const currentFeatures = isArabic ? finalData.features_ar : finalData.features_en;

    const whatsappMessage = isArabic 
        ? encodeURIComponent(`مرحباً حماد موتورز، أريد عرض سيارتي للبيع.`)
        : encodeURIComponent(`Hello Hammad Motors, I want to offer my car for sale.`);

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
                        {Array.isArray(currentFeatures) && currentFeatures.map((feature, index) => (
                            <li key={index}>
                                <i className="fas fa-check-circle">
                                    <img src={check} alt="check icon" />
                                </i> 
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a 
                        href={`https://wa.me/201000444401?text=${whatsappMessage}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hms-whatsapp-link"
                    >
                        <button className="hms-whatsapp-btn" style={{ opacity: 1, visibility: 'visible', display: 'flex', alignItems: 'center', gap: '10px' }}>
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
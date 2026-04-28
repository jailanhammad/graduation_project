import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import './finance.css';
import money from "../assets/services/money.svg";
import fast from "../assets/services/fast.svg";
import up from "../assets/services/up.svg";

const Finance = () => {
    const [mainData, setMainData] = useState(null);
    const [features, setFeatures] = useState([]);
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        const fetchFinanceData = async () => {
            const { data: section } = await supabase.from('finance_section').select('*').single();
            const { data: feats } = await supabase.from('finance_features').select('*').order('display_order');
            
            if (section) setMainData(section);
            if (feats) setFeatures(feats);
        };

        fetchFinanceData();
        return () => observer.disconnect();
    }, []);

    const d = mainData || {
        title_en: 'Installments & Financing', title_ar: 'التقسيط والتمويل',
        subtitle_en: 'Drive your dream car today with our flexible installment options.',
        subtitle_ar: 'قد سيارة أحلامك اليوم مع خيارات التقسيط المرنة التي نقدمها.',
        label_en: 'Flexible Payment Plans', label_ar: 'خطط دفع مرنة',
        down_payment_text_en: 'Starting from', down_payment_text_ar: 'يبدأ من',
        down_payment_value: '10%',
        down_payment_suffix_en: 'Down Payment', down_payment_suffix_ar: 'مقدم'
    };

    const icons = [money, fast, up]; 

    return (  
        <section className="hms-fin-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className="hms-fin-container">
                
                <div className="hms-fin-header hms-reveal-up" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                    <h1>{isArabic ? d.title_ar : d.title_en}</h1>
                    <p className="hms-fin-subtitle">
                        {isArabic ? d.subtitle_ar : d.subtitle_en}
                    </p>
                    <h4 className="hms-fin-label">{isArabic ? d.label_ar : d.label_en}</h4>
                </div>

                <div className="hms-fin-grid">
                    {features.length > 0 ? features.map((item, index) => (
                        <div key={item.id} className="hms-fin-card hms-reveal-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                            <div className="hms-fin-icon">
                                <i><img src={icons[index % 3]} alt="icon" /></i>
                            </div>
                            <h3>{isArabic ? item.title_ar : item.title_en}</h3>
                        </div>
                    )) : (
                        <p style={{color: '#fff'}}>Loading features...</p>
                    )}
                </div>

                <div className="hms-fin-footer hms-reveal-up" style={{ animationDelay: '0.8s' }}>
                    <p>
                        {isArabic ? d.down_payment_text_ar : d.down_payment_text_en} 
                        <span> {d.down_payment_value} </span> 
                        {isArabic ? d.down_payment_suffix_ar : d.down_payment_suffix_en}
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Finance;
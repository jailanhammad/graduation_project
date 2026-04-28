import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import './weoffer.css';
import ServiceItem from './serviceitem';

import car from '../assets/services/car.svg';
import settings from '../assets/services/settings.svg';
import insurance from '../assets/services/insurance.svg';
import carbg from '../assets/services/carbg.svg';
import insurancebg from '../assets/services/insurancebg.svg';
import settingsbg from '../assets/services/settingsbg.svg';

const Weoffer = () => {
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const isArabic = lang === 'ar';

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        const fetchOffers = async () => {
            try {
                const { data, error } = await supabase
                    .from('we_offer')
                    .select('*')
                    .order('display_order', { ascending: true });
                if (error) throw error;
                setOffers(data || []);
            } catch (err) {
                console.error("Fetch error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
        return () => observer.disconnect();
    }, []);

    const getLocalAssets = (index) => {
        const mainImgs = [car, settings, insurance];
        const bgImgs = [carbg, settingsbg, insurancebg];
        return {
            main: mainImgs[index % 3],
            bg: bgImgs[index % 3]
        };
    };

    return (  
        <section id="services-list" className="hmo-services-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className="hmo-container" >
                <h5 className="hmo-sub-label" style={{ 
                textAlign: isArabic ? 'right' : 'left', 
                direction: isArabic ? 'rtl' : 'ltr' 
            }}>
                    {isArabic ? "ما نقدمه" : "What We Offer"}
                </h5>
                
                <div className="hmo-grid" style={{ direction: isArabic ? 'rtl' : 'ltr' }}>
                    {loading ? (
                        <div style={{color: '#fff', textAlign: 'center', width: '100%'}}>Loading...</div>
                    ) : (
                        offers.map((item, index) => {
                            const assets = getLocalAssets(index);
                            return (
                                <ServiceItem 
                                    key={item.id}
                                    title={isArabic ? item.title_ar : item.title_en}
                                    desc={isArabic ? item.description_ar : item.description_en}
                                    img={item.main_img_url} 
                                    bgImg={item.bg_img_url} 
                                    fallbackIcon={assets.main} 
                                    fallbackBg={assets.bg}   
                                    delay={`${0.1 + index * 0.2}s`}
                                />
                            );
                        })
                                            )}
                </div>
            </div>
        </section>
    );
}

export default Weoffer;
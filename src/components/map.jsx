import React, { useState, useEffect } from 'react';
import './map.css';
import { supabase } from '../supabase';

const Map = () => {
    const [t, setT] = useState({});
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

    const fetchMapData = async (currentLang) => {
        const { data } = await supabase.from('map_ui').select(`key, ${currentLang}`);
        if (data) {
            const map = {};
            data.forEach(item => map[item.key] = item[currentLang]);
            setT(map);
        }
    };

    useEffect(() => {
        fetchMapData(lang);
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
            fetchMapData(newLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, [lang]);

    const isRtl = lang === 'ar';

    return (
        <>
            <section className="directions-section">
                <div className="container-9">
                    <h3 style={{ textAlign: isRtl ? 'right' : 'left' }}>{t.title}</h3>
                    <div className="map-wrapper">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.157813247474!2d31.3813889!3d30.1041667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817d6928e185b%3A0x6b7774e1d1f0b0a!2sHammad%20Motors!5e0!3m2!1sen!2seg!4v1712080000000!5m2!1sen!2seg" 
                            width="100%" 
                            height="450" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                        
                        <div className="map-overlay-btn" style={{ 
                            right: isRtl ? 'auto' : '20px', 
                            left: isRtl ? '20px' : 'auto' 
                        }}>
                            <a 
                                href="https://www.google.com/maps/search/?api=1&query=Hammad+Motorz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="send-btn"
                                style={{
                                    textDecoration: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    backgroundColor: '#ED1C24'
                                }}
                            >
                                {t.btn_text}
                                <i className="fas fa-map-marker-alt"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Map;
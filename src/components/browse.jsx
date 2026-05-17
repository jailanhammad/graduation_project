import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './browse.css';
import { Link } from "react-router-dom";

const Browse = () => {
    const [categories, setCategories] = useState([]);
    const [lang, setLang] = useState(
        document.documentElement.dir === 'rtl' ? 'ar' : 'en'
    );
    const isArabic = lang === 'ar';

    const fetchCategories = async () => {
        const { data, error } = await supabase
            .from('browse_types')
            .select('*')
            .order('id', { ascending: true });
        
        if (!error && data) {
            setCategories(data);
        }
    };

    useEffect(() => {
        fetchCategories();

        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });

        return () => observer.disconnect();
    }, []);

    const t = {
        title: isArabic ? "تصفح حسب النوع" : "Browse by Type",
        carsLabel: isArabic ? "سيارات" : "Cars",
        comingSoon: isArabic ? "قريباً" : "Coming Soon"
    };

    return ( 
        <section className="browse-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className="container-4">
                <h2 className="section-title-4">{t.title}</h2>
                
                <div className="type-grid">
                    {categories.map((cat, index) => {
                        const isComingSoon = Number(cat.car_count) === 0;
                        const currentName = isArabic ? cat.name_ar : cat.name_en;
                        
                        return (
                            <div 
                                className="type-card" 
                                key={cat.id} 
                                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                            >
                                <img src={cat.image_url} alt={currentName} className="type-bg" />
            
                                <Link to={isComingSoon ? "#" : "/Vehicles"} style={{ pointerEvents: isComingSoon ? 'none' : 'auto' }}>
                                    <div className="type-overlay">
                                        <span className="car-count">
                                            {isComingSoon ? t.comingSoon : `${cat.car_count} ${t.carsLabel}`}
                                        </span>
                                        <h3 className="car-name">{currentName}</h3>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
 
export default Browse;
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { supabase } from '../supabase';
import './featured.css';
import next from "../assets/home/next.svg";

const Featured = () => {
    const [vehicles, setVehicles] = useState([]);
    const [lang, setLang] = useState(
        document.documentElement.dir === 'rtl' ? 'ar' : 'en'
    );

    const isArabic = lang === 'ar';

    const fetchFeaturedVehicles = async () => {
        const { data, error } = await supabase
            .from('featured_vehicles')
            .select('*')
            .order('id', { ascending: false });
        
        if (!error && data) {
            setVehicles(data);
        }
    };

    useEffect(() => {
        fetchFeaturedVehicles();

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

    const labels = {
        title: isArabic ? "سيارات مميزة" : "Featured Vehicles",
        viewAll: isArabic ? "عرض كل المخزون" : "View All Inventory",
        view: isArabic ? "عرض التفاصيل" : "View Details"
    };

    return ( 
        <section className="featured-vehicles">
            <div className="section-header-0">
                <h2 className="section-title">{labels.title}</h2>
                <div className='view-2'>
                    <Link to="/Vehicles" className="view-all-2">
                        {labels.viewAll}
                    </Link>
                    <img src={next} className='next-icon' alt="next"/>
                </div>
            </div>

            <div className="container-3">
                <div className="vehicle-grid-2">
                    {vehicles.map((vehicle) => (
                        <div className="vehicle-card" key={vehicle.id}>
                            <div className="card-image-wrap">
                                <img src={vehicle.image} className='vehicle-img' alt={isArabic ? vehicle.name_ar : vehicle.name_en} />
                            </div>
                            <div className="card-content">
                                <h3>{isArabic ? vehicle.name_ar : vehicle.name_en}</h3>
                                <div className="specs">
                                    <span>{isArabic ? vehicle.km_ar : vehicle.km_en}</span><br />
                                    <span>{isArabic ? vehicle.category_ar : vehicle.category_en}</span><br />
                                    <span>{isArabic ? vehicle.transmission_ar : vehicle.transmission_en}</span><br />
                                </div>
                                <div className="price-row">
                                    <span className="price">{isArabic ? vehicle.price_ar : vehicle.price_en}</span>
                                </div>
                                <Link to="/View-Details" className="view-details-btn-2">
                                    {labels.view}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Featured;
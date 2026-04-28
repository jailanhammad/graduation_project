import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './featured.css';
import next from "../assets/home/next.svg";
import mercedes from "../assets/vehicles/mercedes.svg";
import rover from "../assets/vehicles/rover.svg";
import c180 from "../assets/vehicles/c180.svg";
import bmw from "../assets/vehicles/318.svg";

const Featured = () => {

    const [lang, setLang] = useState(
        document.documentElement.dir === 'rtl' ? 'ar' : 'en'
    );

    const isArabic = lang === 'ar';

    useEffect(() => {
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
        title: isArabic ? "سيارات مميزة" : "Featured Vehicles",
        viewAll: isArabic ? "عرض كل المخزون" : "View All Inventory",
        carname: isArabic ? "مرسيدس سي ١٨٠ ٢٠٢٣" : "Mercedes C180 2023",
        category: isArabic ? "افينجارد بلس" : "Avantgarde Plus",
        km: isArabic ? "٥٠ الف كيلو" : "50,000 km",
        automatic: isArabic ? "أوتوماتيك" : "Automatic",
        price: isArabic ? "٢،٨٠٠،٠٠٠ ج.م" : "2,800,000 LE",
        view: isArabic ? "عرض التفاصيل" : "View Details",

        carname2: isArabic ? "رينج روفر ايفوك ٢٠٢٠"  : "Range Rover Evouqe 2020",
        category2: isArabic ? "P200 SE" : "P200 SE",
        km2: isArabic ? "٧٠ الف كيلو" : "70,000 km",
        price2: isArabic ? "٢،٦٥٠،٠٠٠ ج.م" : "2,650,000 LE",

        carname3: isArabic ? "مرسيدس سي ١٨٠ ٢٠١٨" : "Mercedes C180 2018",
        km3: isArabic ? "١٢٠ الف كيلو" : "120,000 km",
        price3: isArabic ? "١،٩٥٠،٠٠٠ ج.م" : "1,950,000 LE",

        carname4: isArabic ? "بي ام دبليو ٣١٨ ٢٠١٨": "Bmw 318 2018",
        category4: isArabic ? "لاكشري" : "Luxury",
        km4: isArabic ? "١٠٠ الف كيلو" : "100,000 km",
        price4: isArabic ? "١،٣٥٠،٠٠٠ ج.م" : "1,350,000 LE",
    };

    return ( 
        <section className="featured-vehicles">

            <div className="section-header-0">
                <h2 className="section-title">{t.title}</h2>
                
                <div className='view-2'>
                    <Link to="/Vehicles" className="view-all-2">
                        {t.viewAll}
                    </Link>
                    <img src={next} className='next-icon' alt="next"/>
                </div>
            </div>

            <div className="container-3">
                <div className="vehicle-grid-2">

                    <div className="vehicle-card">
                        <div className="card-image-wrap">
                            <img src={mercedes} className='vehicle-img' alt="Mercedes" />
                        </div>
                        <div className="card-content">
                            <h3>{t.carname}</h3>
                            <div className="specs">
                                <span>{t.km}</span><br />
                                <span>{t.category}</span><br />
                                <span>{t.automatic}</span><br />
                            </div>
                            <div className="price-row">
                                <span className="price">{t.price}</span>
                            </div>
                            <Link to="/View-Details" className="view-details-btn-2">
                                {t.view}
                            </Link>
                        </div>
                    </div>


                    <div className="vehicle-card">
                        <div className="card-image-wrap">
                            <img src={rover} className='vehicle-img' alt="Range Rover" />
                        </div>
                        <div className="card-content">
                            <h3>{t.carname2}</h3>
                            <div className="specs">
                                <span>{t.km2}</span><br />
                                <span>{t.category2}</span><br />
                                <span>{t.automatic}</span><br />
                            </div>
                            <div className="price-row">
                                <span className="price">{t.price2}</span>
                            </div>
                            <Link to="/View-Details" className="view-details-btn-2">
                                {t.view}
                            </Link>
                        </div>
                    </div>

                    <div className="vehicle-card">
                        <div className="card-image-wrap">
                            <img src={c180} className='vehicle-img' alt="Mercedes" />
                        </div>
                        <div className="card-content">
                            <h3>{t.carname3}</h3>
                            <div className="specs">
                                <span>{t.km3}</span><br />
                                <span>{t.category}</span><br />
                                <span>{t.automatic}</span><br />
                            </div>
                            <div className="price-row">
                                <span className="price">{t.price3}</span>
                            </div>
                            <Link to="/View-Details" className="view-details-btn-2">
                                {t.view}
                            </Link>
                        </div>
                    </div>

                    <div className="vehicle-card">
                        <div className="card-image-wrap">
                            <img src={bmw} className='vehicle-img' alt="BMW" />
                        </div>
                        <div className="card-content">
                            <h3>{t.carname4}</h3>
                            <div className="specs">
                                <span>{t.km4}</span><br />
                                <span>{t.category4}</span><br />
                                <span>{t.automatic}</span><br />
                            </div>
                            <div className="price-row">
                                <span className="price">{t.price4}</span>
                            </div>
                            <Link to="/View-Details" className="view-details-btn-2">
                                {t.view}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Featured;
// import React, { useEffect, useState } from 'react';
// import './carsection.css';
// import { Link } from "react-router-dom";
// import { useLanguage } from '../LanguageContext';
// import { supabase } from '../supabase'; 
// import car1 from "../assets/home/car1.svg";
// import car2 from "../assets/home/car2.svg";
// import up from "../assets/home/up.svg";

// const Cars = () => {
//     const { isArabic } = useLanguage();
//     const [ctaData, setCtaData] = useState([]); 

//     useEffect(() => {
//         const fetchCTA = async () => {
//             const { data, error } = await supabase
//                 .from('home_cta_sections')
//                 .select('*')
//                 .order('type', { ascending: true }); 
//             if (data) setCtaData(data);
//         };

//         fetchCTA();

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('hms-active');
//                 }
//             });
//         }, { threshold: 0.2 });

//         const cards = document.querySelectorAll('.hms-reveal-left, .hms-reveal-right');
//         cards.forEach(card => observer.observe(card));

//         return () => observer.disconnect();
//     }, []);

//     const getCard = (type) => ctaData.find(item => item.type === type) || {};

//     const buyCard = getCard('buy');
//     const sellCard = getCard('sell');

//     return (
//         <section className="cta-section">
//             <div className="container-2">
                
//                 <div className="cta-card hms-reveal-left">
//                     <img src={buyCard.image_url || car1} className='car-img' alt="Buy" />
//                     <div className="cta-overlay">
//                         <h3>{isArabic ? buyCard.title_ar : buyCard.title_en}</h3>
//                         <p>{isArabic ? buyCard.sub_title_ar : buyCard.sub_title_en}</p>
//                         <button className="cta-btn">
//                             <Link to={buyCard.btn_link || "/Vehicles"}>
//                                 {isArabic ? buyCard.btn_text_ar : buyCard.btn_text_en}
//                             </Link>
//                             <img src={up} className='up-icon' alt="up" /> 
//                         </button>
//                     </div>
//                 </div>

//                 <div className="cta-card card-right hms-reveal-right">
//                     <img src={sellCard.image_url || car2} className='car-img' alt="Sell" />
//                     <div className="cta-overlay">
//                         <h3 className='h3'>{isArabic ? sellCard.title_ar : sellCard.title_en}</h3>
//                         <p>{isArabic ? sellCard.sub_title_ar : sellCard.sub_title_en}</p>
//                         <button className="cta-btn">
//                             <Link to={sellCard.btn_link || "/Services"}>
//                                 {isArabic ? sellCard.btn_text_ar : sellCard.btn_text_en}
//                             </Link>
//                             <img src={up} className='up-icon' alt="up" /> 
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default Cars;

import React, { useEffect, useState } from 'react';
import './carsection.css';
import { Link } from "react-router-dom";
import { supabase } from '../supabase'; 
import car1 from "../assets/home/car1.svg";
import car2 from "../assets/home/car2.svg";
import up from "../assets/home/up.svg";

const Cars = () => {

    // ✅ اللغة من dir
    const [lang, setLang] = useState(
        document.documentElement.dir === 'rtl' ? 'ar' : 'en'
    );

    const isArabic = lang === 'ar';

    // ✅ الداتا
    const [ctaData, setCtaData] = useState([]); 

    // ✅ جلب الداتا مرة واحدة
    const fetchCTA = async () => {
        const { data } = await supabase
            .from('home_cta_sections')
            .select('*')
            .order('type', { ascending: true }); 

        if (data) setCtaData(data);
    };

    useEffect(() => {
        fetchCTA();

        // 👇 مراقبة تغيير اللغة
        const observerLang = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
        });

        observerLang.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });

        // 👇 animation observer (زي ما هو)
        const observerAnim = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hms-active');
                }
            });
        }, { threshold: 0.2 });

        const cards = document.querySelectorAll('.hms-reveal-left, .hms-reveal-right');
        cards.forEach(card => observerAnim.observe(card));

        return () => {
            observerLang.disconnect();
            observerAnim.disconnect();
        };
    }, []);

    const getCard = (type) => ctaData.find(item => item.type === type) || {};

    const buyCard = getCard('buy');
    const sellCard = getCard('sell');

    return (
        <section className="cta-section">
            <div className="container-2">
                
                <div className="cta-card hms-reveal-left">
                    <img src={buyCard.image_url || car1} className='car-img' alt="Buy" />
                    <div className="cta-overlay">
                        <h3>
                            {isArabic ? buyCard.title_ar : buyCard.title_en}
                        </h3>
                        <p>
                            {isArabic ? buyCard.sub_title_ar : buyCard.sub_title_en}
                        </p>
                        <button className="cta-btn">
                            <Link to={buyCard.btn_link || "/Vehicles"}>
                                {isArabic ? buyCard.btn_text_ar : buyCard.btn_text_en}
                            </Link>
                            <img src={up} className='up-icon' alt="up" /> 
                        </button>
                    </div>
                </div>

                <div className="cta-card card-right hms-reveal-right">
                    <img src={sellCard.image_url || car2} className='car-img' alt="Sell" />
                    <div className="cta-overlay">
                        <h3 className='h3'>
                            {isArabic ? sellCard.title_ar : sellCard.title_en}
                        </h3>
                        <p>
                            {isArabic ? sellCard.sub_title_ar : sellCard.sub_title_en}
                        </p>
                        <button className="cta-btn">
                            <Link to={sellCard.btn_link || "/Services"}>
                                {isArabic ? sellCard.btn_text_ar : sellCard.btn_text_en}
                            </Link>
                            <img src={up} className='up-icon' alt="up" /> 
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Cars;
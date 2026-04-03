import React, { useEffect } from 'react';
import './carsection.css';
import { Link } from "react-router-dom";
import { useLanguage } from '../LanguageContext';
import car1 from "../assets/home/car1.svg";
import car2 from "../assets/home/car2.svg";
import up from "../assets/home/up.svg";

const Cars = () => {



    const { isArabic } = useLanguage();

    const t = {
        buytitle: isArabic ? <>هل تبحث عن<br/>سيارة؟</> : <>Are You Looking <br/> For a Car?</>,
        selltitle: isArabic ? <>هل تريد<br/>بيع سيارة؟</> : <>Do You Want to <br/> Sell a Car?</>,
        description: isArabic 
            ? "نحن ملتزمون بتقديم خدمة استثنائية لعملائنا." 
            : "We are committed to providing our customers with exceptional service.",
        btntext: isArabic ? "ابدأ الآن" : "Get Started"
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hms-active');
                }
            });
        }, { threshold: 0.2 });

        const cards = document.querySelectorAll('.hms-reveal-left, .hms-reveal-right');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <>
    



<section className="cta-section">
            <div className="container-2">
                
                <div className="cta-card hms-reveal-left">
                    <img src={car1} className='car-img' alt="Buy" />
                    <div className="cta-overlay">
                        <h3>{t.buytitle}</h3>
                        <p>{t.description}</p>
                        <button className="cta-btn">
                        <Link to="/Vehicles">{t.btntext}</Link>
                        <img src={up} className='up-icon' alt="up" /> 
                        </button>
                    </div>
                </div>

                <div className="cta-card card-right hms-reveal-right">
                    <img src={car2} className='car-img' alt="Sell" />
                    <div className="cta-overlay">
                        <h3 className='h3'>{t.selltitle}</h3>
                        <p>{t.description}</p>
                        <button className="cta-btn">
                        <Link to="/Services">{t.btntext}</Link>
                        <img src={up} className='up-icon' alt="up" /> 
                        </button>
                    </div>
                </div>

            </div>
</section>

        </>
      );
}
 
export default Cars;
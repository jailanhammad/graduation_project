import React from 'react';
import './nav.css';
import heroo from "../assets/home/heroo.svg";
import { useLanguage } from '../LanguageContext';

const Hero = () => {


    const { isArabic, toggleLanguage } = useLanguage();


    const t = {
    
        brand: isArabic ? "حماد موتورز" : "HAMMAD MOTORS",
       
        herosub: isArabic ? "امتلك الطريق مع" : "Own the Road with",
       
    };

    
    return ( 
        <>
        
        
        
        

<section className="hero">

<div className="hero-content">
    <div className="car-wrapper">
    <img src={heroo} className='hero-car'/>
    </div>
    
    <div className="hero-footer">
        <p className="sub-text">{t.herosub}</p>
        <h2 className="brand-name">{t.brand}</h2>
    </div>


</div>
</section>


        
        
        
        </>
     );
}
 
export default Hero;
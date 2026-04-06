import React, { useState, useEffect } from 'react';import './nav.css';
import { Link } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import phone from "../assets/home/phone.svg";
import email from "../assets/home/email.svg";
import { useLanguage } from '../LanguageContext';
import login from "../assets/home/login.svg";
import music from "../assets/home/music.svg";
import dark from "../assets/home/darkmood.svg";
import translate from "../assets/home/translate.svg";
import hero from "../assets/home/porsche.svg";
import h1 from "../assets/home/h1.svg";
import m from "../assets/home/m.svg";
import h2 from "../assets/home/h2.svg";
import heroo from "../assets/home/heroo.svg";

const Nav = () => {


    const { isArabic, toggleLanguage } = useLanguage();
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);


    const t = {
        phone: "+02 01000444401",
        email: "mahmoud@hammadmotors.com",
        login: isArabic ? "تسجيل الدخول" : "Login",
        brand: isArabic ? "حماد موتورز" : "HAMMAD MOTORS",
        home: isArabic ? "الرئيسية" : "Home",
        about: isArabic ? "من نحن" : "About",
        contact: isArabic ? "اتصل بنا" : "Contact",
        vehicles: isArabic ? "السيارات" : "Vehicles",
        menu: isArabic ? "القائمة" : "Menu",
        close: isArabic ? "إغلاق" : "Close",
        herosub: isArabic ? "امتلك الطريق مع" : "Own the Road with",
        // Dropdown
        services: isArabic ? "خدماتنا" : "Services",
        reviews: isArabic ? "الآراء" : "Reviews",
        brands: isArabic ? "الماركات" : "Brands",
        mostsold: isArabic ? "الأكثر مبيعاً" : "Most sold",
        installments: isArabic ? "تقسيط" : "Installments",
        testdrive: isArabic ? "تجربة قيادة" : "Test drive",
        servicecenter: isArabic ? "مركز الخدمة" : "Service center",
        recommended: isArabic ? "مقترح لك" : "Recommended",
        gallery: isArabic ? "المعرض" : "Gallery"
    };



useEffect(() => {
    const checkStatus = (e) => {
        setIsMusicPlaying(e.detail);
    };
    window.addEventListener('music-status', checkStatus);
    return () => window.removeEventListener('music-status', checkStatus);
}, []);



    return ( 

<>

<header class="header">
    
    <div class="top-bar">

        <div class="container">

            <div class="contact-info">

                <div className='phone-div'>
                <img src={phone} className='small-icon'/>
                <span><i class="fas fa-phone"></i> {t.phone}</span>
                </div>

                <div className='phone-div'>
                <img src={email} className='small-icon' />
                <span><i class="fas fa-envelope"></i>{t.email}</span>
                </div>

            </div>

            <div class="utility-icons">

    
            <button 
                onClick={() => window.dispatchEvent(new Event('toggle-music'))}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
                {isMusicPlaying ? (
                    <i className="fas fa-music">
                        <img src={music}  className='small-icon' />
                    </i>
                ) : (
                    <i className="fas fa-volume-mute">
                        <img src={music}  className='small-icon' />
                    </i>
                )}
            </button>

            <img src={dark}  className='small-icon' />

         
                <i className="fas fa-globe" onClick={toggleLanguage} >
                <img src={translate}  className='small-icon'/>
                </i> 
            
            </div>


            <div className='login-div'>

            <img src={login} className='small-icon' />
            <a href="#" class="login-btn"><i class="fas fa-user"></i> 
            <Link to="/Login">{t.login}</Link>
            </a>

            </div>

        </div>
    </div>

    <nav class="main-nav">
        
        
        <div class="container">
            <div className='word-logo'>
            <img src={logo} className='logo-svg'/>
            <h1 className='word-logo-text'>{t.brand}</h1>
            </div>
     


            <input type="checkbox" id="menu-toggle" class="menu-toggle"/>
            <label for="menu-toggle" class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul class="nav-links">
                <li><a href="#" class="active" >
                <Link to="/">{t.home}</Link>
                </a></li>
                <li><a href="#">
                <Link to="/About-us">{t.about}</Link>
                </a></li>
                
                <li><a href="#">
                <Link to="/Contact-us">{t.contact}</Link>
                </a></li>
                <li><a href="#" >                    
                <Link to="/Vehicles">{t.vehicles}</Link>
                </a></li>


                <li class="dropdown">
                <a href="#">{t.menu} <i class="fas fa-caret-down"></i></a>

                <ul class="dropdown-content">
                    
                    <li><a href="#brands">
                    <Link to="/">{t.home}</Link>
                    </a></li>
                    <li><a href="#brands">
                    <Link to="/About-us">{t.about}</Link>
                    </a></li>
                    <li><a href="#brands">                    
                    <Link to="/Contact-us">{t.contact}</Link>
                    </a></li>
                    <li><a href="#brands">                    
                    <Link to="/Vehicles">{t.vehicles}</Link>
                    </a></li>
                    <li><a href="#services">                    
                    <Link to="/Services">{t.services}</Link>
                    </a></li>                    
                    <Link to="/Reviews">{t.reviews}</Link>
                    <li><a href="#brands">{t.brands}</a></li>
                    <li><a href="#most-sold">{t.mostsold}</a></li>
                    <li><a href="#installments">{t.installments}</a></li>
                    <li><a href="#test-drive">{t.testdrive}</a></li>
                    <li><a href="#service-center">{t.servicecenter}</a></li>
                    <li><a href="#recommended">{t.recommended}</a></li>
                    <li><a href="#gallery">{t.gallery}</a></li>

                <li class="mobile-close-li">

        <label for="menu-toggle" class="close-menu">
            <i class="fas fa-times"></i> {t.close}
        </label>
    </li>
                </ul>
                </li>

            </ul>
        </div>
        
    </nav>
    
</header>




<section class="hero">

            <div class="hero-content">
                <div class="car-wrapper">
                <img src={heroo} className='hero-car'/>
                </div>
                
                <div class="hero-footer">
                    <p class="sub-text">{t.herosub}</p>
                    <h2 class="brand-name">{t.brand}</h2>
                </div>


            </div>
</section>


</>

     );
}


 
export default Nav;
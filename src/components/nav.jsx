import React, { useState, useEffect } from 'react';import './nav.css';
import logo from "../assets/home/logo.svg";
import phone from "../assets/home/phone.svg";
import email from "../assets/home/email.svg";
import { useLanguage } from '../LanguageContext';
import login from "../assets/home/login.svg";
import music from "../assets/home/music.svg";
import dark from "../assets/home/darkmood.svg";
import translate from "../assets/home/translate.svg";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {


    const location = useLocation(); 

    const isActive = (path) => location.pathname === path;

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

<header className="header">
    
    <div className="top-bar">

        <div className="container-0">

            <div className="contact-info">

                <div className='phone-div'>
                <img src={phone} className='small-icon'/>
                <span><i class="fas fa-phone"></i> {t.phone}</span>
                </div>

                <div className='phone-div'>
                <img src={email} className='small-icon' />
                <span><i class="fas fa-envelope"></i>{t.email}</span>
                </div>

            </div>

            <div className="utility-icons">

    
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
            <a href="#" className="login-btn"><i className="fas fa-user"></i> 
            <Link to="/Login">{t.login}</Link>
            </a>

            </div>

        </div>
    </div>

    <nav className="main-nav">
        
        
        <div className="container">
            <div className='word-logo'>
            <img src={logo} className='logo-svg'/>
            <h1 className='word-logo-text'>{t.brand}</h1>
            </div>
     


            <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
            <label for="menu-toggle" className="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul className="nav-links">

                <li>
                <Link to="/"  className={`nav-link ${isActive('/') ? 'active' : ''}`}>{t.home}</Link>
                </li>
                <li>
                <Link to="/About-us" className={`nav-link ${isActive('/About-us') ? 'active' : ''}`}>{t.about}</Link>
                </li>
                
                <li>
                <Link to="/Contact-us"  className={`nav-link ${isActive('/Contact-us') ? 'active' : ''}`}>{t.contact}</Link>
                </li>
                <li>                  
                <Link to="/Vehicles" className={`nav-link ${isActive('/Vehicles') ? 'active' : ''}`}>{t.vehicles}</Link>
                </li>



                <li className="dropdown">
                <span className="menu-btn">
                    {t.menu}
                </span>
                <ul class="dropdown-content">
                    
                    <li>
                    <Link to="/" className="nav-link">{t.home}</Link>
                    </li>


                    <li>
                    <Link to="/About-us" className="nav-link">{t.about}</Link>
                    </li>


                    <li>                  
                    <Link to="/Contact-us" className="nav-link">{t.contact}</Link>
                    </li>


                    <li>                   
                    <Link to="/Vehicles" className="nav-link">{t.vehicles}</Link>
                    </li>


                    <li>                   
                    <Link to="/Services" className="nav-link">{t.services}</Link>
                    </li>  


                    <li>
                    <Link to="/Reviews" className="nav-link">{t.reviews}</Link>
                    </li>  


                    <li>
                    <Link to="/Brands" className="nav-link"> {t.brands}</Link>
                    </li>


                    <li>
                    <Link to="/Most-sold" className="nav-link">{t.mostsold}</Link>
                    </li>


                    <li>
                    <Link to="/Installments" className="nav-link"> {t.installments}</Link>
                    </li>


                    <li>
                    <Link to="/Test-drive" className="nav-link"> {t.testdrive}</Link>
                    </li>


                    <li>
                    <Link to="/Service-center" className="nav-link"> {t.servicecenter}</Link>
                    </li>


                    <li>
                    <Link to="/Recommended" className="nav-link"> {t.recommended}</Link>
                    </li>


                    <li>
                    <Link to="/Gallery" className="nav-link"> {t.gallery}</Link>
                    </li>

                <li className="mobile-close-li">

        <label for="menu-toggle" className="close-menu">
            <i className="fas fa-times"></i> {t.close}
        </label>
    </li>
                </ul>
                </li>

            </ul>
        </div>
        
    </nav>
    
</header>

</>

     );
}


 
export default Nav;
import React, { useState, useEffect } from 'react';
import './nav.css';
import { supabase } from '../supabase';
import logo from "../assets/home/logo.svg";
import phoneIcon from "../assets/home/phone.svg";
import emailIcon from "../assets/home/email.svg";
import loginIcon from "../assets/home/login.svg"; 
import music from "../assets/home/music.svg";
import translate from "../assets/home/translate.svg";
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const [t, setT] = useState({}); 
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const location = useLocation(); 

    const isActive = (path) => location.pathname === path;

    const fetchNavData = async (currentLang) => {
        const { data, error } = await supabase
            .from('navbar_v2')
            .select(`key, ${currentLang}`);
    
        if (!error && data) {
            const transMap = {};
            data.forEach(item => {
                transMap[item.key] = item[currentLang];
            });
            setT(transMap);
        }
    };

    const toggleLanguagee = () => {
        const newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        fetchNavData(newLang);
    };

    useEffect(() => {
        fetchNavData(lang);

        const checkStatus = (e) => setIsMusicPlaying(e.detail);
        window.addEventListener('music-status', checkStatus);
        
        const observer = new MutationObserver(() => {
            const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(currentLang);
            fetchNavData(currentLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        return () => {
            window.removeEventListener('music-status', checkStatus);
            observer.disconnect();
        };
    }, [lang]);

    return ( 
        <header className="header">
            <div className="top-bar">
                <div className="container-0">
                    <div className="contact-info">
                        <div className='phone-div'>
                            <img src={phoneIcon} className='small-icon' alt="phone"/>
                            <span><i className="fas fa-phone"></i> {t.phone || "+02 01000444401"}</span>
                        </div>
                        <div className='phone-div'>
                            <img src={emailIcon} className='small-icon' alt="email" />
                            <span><i className="fas fa-envelope"></i>{t.email || "mahmoud@hammadmotors.com"}</span>
                        </div>
                    </div>

                    <div className="utility-icons">
                        <button 
                            onClick={() => window.dispatchEvent(new Event('toggle-music'))}
                            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            <i className={isMusicPlaying ? "fas fa-music" : "fas fa-volume-mute"}>
                                <img src={music} className='small-icon' alt="music" />
                            </i>
                        </button>

                        <i className="fas fa-globe" onClick={toggleLanguagee} style={{ cursor: 'pointer' }}>
                            <img src={translate} className='small-icon' alt="translate" />
                        </i>
                    </div>

                    <div className='login-div'>
                        <img src={loginIcon} className='small-icon' alt="login" />
                        <span className="login-btn">
                            <Link to="/Login">{t.login || "Login"}</Link>
                        </span>
                    </div>
                </div>
            </div>

            <nav className="main-nav">
                <div className="container">
                    <div className='word-logo'>
                        <img src={logo} className='logo-svg' alt="logo"/>
                        <h1 className='word-logo-text'>{t.brand || "HAMMAD MOTORS"}</h1>
                    </div>

                    <input type="checkbox" id="menu-toggle" className="menu-toggle"/>
                    <label htmlFor="menu-toggle" className="hamburger">
                        <span></span><span></span><span></span>
                    </label>

                    <ul className="nav-links">
                        <div className='class-mobile'>
                            <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>{t.home}</Link></li>
                            <li><Link to="/About-us" className={`nav-link ${isActive('/About-us') ? 'active' : ''}`}>{t.about}</Link></li>
                            <li><Link to="/Contact-us" className={`nav-link ${isActive('/Contact-us') ? 'active' : ''}`}>{t.contact}</Link></li>
                            <li><Link to="/Vehicles" className={`nav-link ${isActive('/Vehicles') ? 'active' : ''}`}>{t.vehicles}</Link></li>
                        </div>

                        <li className="dropdown" >
                            <span className="menu-btn">{t.menu}</span>
                            <ul className="dropdown-content">
                                <li><Link to="/" className="nav-link">{t.home}</Link></li>
                                <li><Link to="/About-us" className="nav-link">{t.about}</Link></li>
                                <li><Link to="/Contact-us" className="nav-link">{t.contact}</Link></li>
                                <li><Link to="/Vehicles" className="nav-link">{t.vehicles}</Link></li>
                                <li><Link to="/Services" className="nav-link">{t.services}</Link></li>  
                                <li><Link to="/Reviews" className="nav-link">{t.reviews}</Link></li>  
                                <li><Link to="/Gallery" className="nav-link">{t.gallery}</Link></li>
                                <li><Link to="/Most-Sold" className="nav-link">{t.mostsold}</Link></li>
                                <li><Link to="/Installments" className="nav-link">{t.installments}</Link></li>
                                <li><Link to="/Test-Drive" className="nav-link">{t.testdrive}</Link></li>
                                <li><Link to="/Coming-Soon" className="nav-link">{t.ComingSoon}</Link></li>
                                <li><Link to="/Recommended" className="nav-link">{t.recommended}</Link></li>
                                <li><Link to="/App" className="nav-link">{t.App}</Link></li>
                                <li className="mobile-close-li">
                                    <label htmlFor="menu-toggle" className="close-menu">
                                        <i className="fas fa-times"></i> {t.close}
                                    </label>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
     );
}

export default Nav;
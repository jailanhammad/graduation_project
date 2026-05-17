import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './footer.css';
import { supabase } from '../supabase';
import logo from "../assets/home/logo.svg";
import fb from "../assets/home/fb.svg";
import ig from "../assets/home/ig.svg";
import twitt from "../assets/home/twitt.svg";
import wp from "../assets/home/wp.svg";
import loc from "../assets/home/loc.svg";
import mobile2 from "../assets/home/mobile2.svg";
import email2 from "../assets/home/email2.svg";

const Footer = () => {
    const [t, setT] = useState({});
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

    const fetchFooterData = async (currentLang) => {
        const { data, error } = await supabase
            .from('footer_v2')
            .select(`key, ${currentLang}`);
    
        if (!error && data) {
            const transMap = {};
            data.forEach(item => {
                transMap[item.key] = item[currentLang];
            });
            setT(transMap);
        }
    };

    useEffect(() => {
        fetchFooterData(lang);
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
            fetchFooterData(newLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, [lang]);

    const isRtl = lang === 'ar';

    return (
        <footer className="footer-section" style={{ textAlign: isRtl ? 'right' : 'left' }}>
            <div className="responsive-container">
                <div className="footer-grid">
                    
                    <div className="footer-col branding">
                        <div className="footer-logo">
                            <img src={logo} className='logo-svg' alt="logo"/>
                            <span className="logo-text">{t.brand}</span>
                        </div>
                        <p className="footer-desc">{t.desc}</p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/hammad4motors" target="_blank" rel="noreferrer">
                                <i className="fab"><img src={fb} className='fb-svg' alt="Facebook" /></i>
                            </a>
                            <a href="https://www.instagram.com/hammad_motors" target="_blank" rel="noreferrer">
                                <i className="fab"><img src={ig} className='fb-svg' alt="Instagram" /></i>
                            </a>
                            <a href="https://twitter.com/YourUsername" target="_blank" rel="noreferrer">
                                <i className="fab"><img src={twitt} className='fb-svg' alt="Twitter" /></i>
                            </a>
                            <a href={`https://wa.me/201000444401?text=Hello Hammad Motors!`} rel="noreferrer" target="_blank">
                                <i className="fab"><img src={wp} className='fb-svg' alt="WhatsApp" /></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.col1Title}</h4>
                        <ul className="footer-links">
                            <li><Link to="/About-us">{t.about}</Link></li>
                            <li><Link to="/Vehicles">{t.allVehicles}</Link></li>
                            <li><Link to="/Services">{t.services}</Link></li>
                            <li><Link to="/Contact-us">{t.contact}</Link></li>
                            <li><a href="#">{t.privacy}</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.col2Title}</h4>
                        <ul className="contact-list">
                            <li>
                                <i className="fas"><img src={loc} className='fb-svg' alt="loc"/></i>
                                {t.address}
                            </li>
                            <li>
                                <i className="fas"><img src={mobile2} className='fb-svg' alt="phone"/></i> 
                                {t.phone}
                            </li>
                            <li>
                                <i className="fas"><img src={email2} className='fb-svg' alt="email"/></i> 
                                {t.email}
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="col-title">{t.col3Title}</h4>
                        <p className="newsletter-text">{t.newsletterText}</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder={t.placeholder} required 
                                   style={{ textAlign: isRtl ? 'right' : 'left' }} />
                            <button type="submit" className="btn-subscribe">{t.subscribe}</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
                    <p>&copy; {t.copyright}</p>
                    <div className="bottom-links">
                        <a href="#">{t.terms}</a>
                        <a href="#">{t.privacy}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
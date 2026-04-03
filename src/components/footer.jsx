import React from 'react';
import './footer.css';
import logo from "../assets/home/logo.svg";
import fb from "../assets/home/fb.svg";
import ig from "../assets/home/ig.svg";
import twitt from "../assets/home/twitt.svg";
import wp from "../assets/home/wp.svg";
import loc from "../assets/home/loc.svg";
import mobile2 from "../assets/home/mobile2.svg";
import email2 from "../assets/home/email2.svg";
import { useLanguage } from '../LanguageContext';

const Footer = () => {


    const { isArabic } = useLanguage();

    const t = {
        brand: isArabic ? "حماد موتورز" : "HAMMAD MOTORS",
        desc: isArabic 
            ? "شريكك الموثوق للعثور على السيارة المثالية. نقدم مجموعة واسعة من السيارات الفاخرة مع خدمة استثنائية." 
            : "Your trusted partner for finding the perfect vehicle. We offer a wide range of premium cars with exceptional service.",
        
        col1Title: isArabic ? "روابط سريعة" : "Quick Links",
        about: isArabic ? "من نحن" : "About Us",
        allVehicles: isArabic ? "كل السيارات" : "All Vehicles",
        services: isArabic ? "خدماتنا" : "Our Services",
        contact: isArabic ? "اتصل بنا" : "Contact Us",
        privacy: isArabic ? "سياسة الخصوصية" : "Privacy Policy",

        col2Title: isArabic ? "معلومات الاتصال" : "Contact Info",
        address: isArabic ? "١٥ عمار بن ياسر، مصر الجديدة" : "15 Ammar ibn yasser, Masr El Gdida",
        phone: "+02 01000444401",

        col3Title: isArabic ? "النشرة الإخبارية" : "Newsletter",
        newsletterText: isArabic ? "اشترك في نشرتنا الإخبارية للحصول على أحدث التحديثات والعروض." : "Subscribe to our newsletter for the latest updates and offers.",
        placeholder: isArabic ? "عنوان بريدك الإلكتروني" : "Your Email Address",
        subscribe: isArabic ? "اشترك الآن" : "Subscribe Now",

        copyright: isArabic ? "٢٠٢٦ حماد موتورز. جميع الحقوق محفوظة." : " 2026 Hammad Motors. All rights reserved.",
        terms: isArabic ? "الشروط والأحكام" : "Terms & Conditions"
    };

    return (
        <>
        
        
        <footer class="footer-section">
    <div class="responsive-container">
        <div class="footer-grid">
            
            <div class="footer-col branding">
                <div class="footer-logo">
                <img src={logo} className='logo-svg'/>
                    <span class="logo-text">{t.brand}</span>
                </div>
                <p class="footer-desc">
                {t.desc}
                </p>
                <div class="social-links">
                    <a href="#"><i class="fab">
                    <img src={fb} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={ig} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={twitt} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={wp} className='fb-svg'/>
                    </i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4 class="col-title">{t.col1Title}</h4>
                <ul class="footer-links">
                    <li><a href="#">{t.about}</a></li>
                    <li><a href="#">{t.allVehicles}</a></li>
                    <li><a href="#">{t.services}</a></li>
                    <li><a href="#">{t.contact}</a></li>
                    <li><a href="#">{t.privacy}</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 class="col-title">{t.col2Title}</h4>
                <ul class="contact-list">
                    <li><i class="fas fa-map-marker-alt">
                    <img src={loc} className='fb-svg'/>
                    </i>{t.address}</li>
                    <li><i class="fas fa-phone-alt">
                    <img src={mobile2} className='fb-svg'/>
                    </i> {t.phone}</li>
                    <li><i class="fas fa-envelope">
                    <img src={email2} className='fb-svg'/>
                    </i> mahmoud@hammadmotors.com</li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 class="col-title">{t.col3Title}</h4>
                <p class="newsletter-text">{t.newsletterText}</p>
                <form class="newsletter-form">
                    <input type="email" placeholder={t.placeholder} required/>
                    <button type="submit" class="btn-subscribe">{t.subscribe}</button>
                </form>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy;{t.copyright}</p>
            <div class="bottom-links">
                <a href="#">{t.terms}</a>
                <a href="#">{t.privacy}</a>
            </div>
        </div>
    </div>
</footer>
        
        
        </>
      );
}
 
export default Footer;
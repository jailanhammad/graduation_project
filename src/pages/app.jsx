import React, { useState, useEffect } from 'react';
import './app.css';
import { FaApple, FaGooglePlay, FaVrCardboard, FaAndroid } from 'react-icons/fa';
import app from "../assets/app/app.svg";
import Nav from '../components/nav';
import Footer from '../components/footer';

const DownloadApp = () => {

  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

  const t = {
    en: {
      tag: "Revolutionizing Car Shopping",
      titlePart1: "EXPERIENCE HAMMAD MOTORS ",
      titlePart2: "ON THE GO",
      arTitle: "Next-Gen AR Feature",
      arDesc: "Preview any supercar in your own driveway using our advanced Augmented Reality technology.",
      appDesc: "Download our official app to book test drives, track your orders, and explore our premium collection in 3D.",
      appStore: <><b>App Store <br/> coming soon </b></>,
      googlePlay: <>Get it on <br/> <b>Google Play</b></>,
      pureApk: <>Get it on <br/> <b>PureApk</b></>
    },
    ar: {
      tag: "حدث ثوري في عالم شراء السيارات",
      titlePart1: "عِش تجربة حماد موتورز ",
      titlePart2: "أينما كنت",
      arTitle: "ميزة الواقع المعزز (AR) من الجيل القادم",
      arDesc: "شاهد أي سيارة خارقة في ممر منزلك مباشرة باستخدام تقنية الواقع المعزز المتقدمة لدينا.",
      appDesc: "قم بتنزيل تطبيقنا الرسمي لحجز تجارب القيادة، وتتبع طلباتك، واستكشاف مجموعتنا المميزة بتقنية ثلاثية الأبعاد.",
      appStore: <><b>App Store <br/> قريباً جداً </b></>,
      googlePlay: <>احصل عليه من <br/> <b>Google Play</b></>,
      pureApk: <>احصل عليه من <br/> <b>PureApk</b></>
    }
  }[lang];

  useEffect(() => {
    const updateLang = () => {
      setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    };

    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />

      <div className="app-page-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="app-container">
          
          <div className="app-content">
            <p className="app-tag">{t.tag}</p>
            <h1 className="app-title">
              {t.titlePart1}<span>{t.titlePart2}</span>
            </h1>
            
            <div className="ar-feature-box">
              <div className="ar-icon">
                <FaVrCardboard />
              </div>
              <div className="ar-text">
                <h3>{t.arTitle}</h3>
                <p>{t.arDesc}</p>
              </div>
            </div>

            <p className="app-description">
              {t.appDesc}
            </p>

            <div className="download-buttons">

              <button className="store-btn" style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                <FaApple className="btn-icon" />
                <span>{t.appStore}</span>
              </button>
              
              <a 
                href="https://play.google.com/store/apps?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-store-link"
              >
                <button className="store-btn">
                  <FaGooglePlay className="btn-icon" />
                  <span>{t.googlePlay}</span>
                </button>
              </a>

              <a 
                href="https://apkpure.com/hammad-motors/com.hammad.motors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-store-link"
              >
                <button className="store-btn">
                  <FaAndroid className="btn-icon" />
                  <span>{t.pureApk}</span>
                </button>
              </a>
            </div>
          </div>
          
          <div className="app-visual">
              <img src={app} alt="Mobile-App" />             
          </div>

          <div className="glow-effect"></div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default DownloadApp;
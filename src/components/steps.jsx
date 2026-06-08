import React, { useState, useEffect } from 'react';
import './steps.css';
import car from "../assets/installments/car.svg";
import paper from "../assets/installments/paper.svg";
import approved from "../assets/installments/approved.svg";
import next from "../assets/installments/next.svg";
import wp from "../assets/installments/wp.svg";

const Steps = () => {
  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

  const t = {
    en: {
      mainTitle: "Simple 4-Step Process",
      ctaBtn: "Get Approved Now",
      waMessage: "Hello Hammad Motors, I would like to inquire about the available financing and installment plans.",
      steps: [
        {
          number: '01',
          title: 'Choose Car',
          desc: 'Select your dream vehicle from our premium collection',
          icon: car,
        },
        {
          number: '02',
          title: 'Apply',
          desc: 'Complete our simple online application in minutes',
          icon: paper,
        },
        {
          number: '03',
          title: 'Get Approved',
          desc: 'Receive instant approval decision',
          icon: approved,
        },
        {
          number: '04',
          title: 'Drive Away',
          desc: 'Pick up your keys and hit the road',
          icon: next,
        }
      ]
    },
    ar: {
      mainTitle: "عملية بسيطة من 4 خطوات",
      ctaBtn: "احصل على الموافقة الآن",
      waMessage: "مرحباً حماد موتورز، أود الاستفسار عن خطط التمويل والتقسيط المتاحة.",
      steps: [
        {
          number: '٠١',
          title: 'اختر سيارتك',
          desc: 'اختر سيارة أحلامك من مجموعتنا المميزة',
          icon: car,
        },
        {
          number: '٠٢',
          title: 'قدم طلبك',
          desc: 'أكمل طلبك البسيط عبر الإنترنت في دقائق',
          icon: paper,
        },
        {
          number: '٠٣',
          title: 'احصل على الموافقة',
          desc: 'استلم قرار الموافقة الفوري على طلبك',
          icon: approved,
        },
        {
          number: '٠٤',
          title: 'انطلق بسيارتك',
          desc: 'استلم مفاتيحك وابدأ رحلتك على الطريق',
          icon: next,
        }
      ]
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
    <section className="steps-section" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <h2 className="steps-main-title">{t.mainTitle}</h2>
      
      <div className="steps-container">
        <div className="steps-line"></div>
        
        {t.steps.map((step, index) => (
          <div className="step-card" key={index} style={{ '--delay': `${index * 0.2}s` }}>
            <div className="icon-wrapper-00">
              <span className="step-number-bg">{step.number}</span>
              <div className="icon-box-00">
                <span className="actual-icon-00">
                  <img src={step.icon} alt="icons" className='steps-icon' />        
                </span>
              </div>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>

      <a 
        href={`https://wa.me/201000444401?text=${encodeURIComponent(t.waMessage)}`}                    
        target="_blank" 
        rel="noopener noreferrer"
        className="hms-whatsapp-link"
      >
        <button className="cta-button">
          {t.ctaBtn}
          <i className="fab fa-whatsapp">
            <img src={wp} alt="whatsapp icon" />
          </i>
        </button>
      </a>
    </section>
  );
};

export default Steps;
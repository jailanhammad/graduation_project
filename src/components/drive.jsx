import React, { useState, useEffect } from 'react';
import './drive.css';

const Drive = () => {
  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

  const t = {
    en: {
      heroTitlePart1: "Book Your",
      heroTitlePart2: " Test Drive Now",
      heroSubtitle: "Don’t Just Watch. Drive the Future.",
      experienceTitle: "The Experience",
      feat1: "Precision handling on professional circuits.",
      feat2: "One-on-one briefing with lead engineers.",
      feat3: "Post-drive performance analytics report.",
      labelModel: "Vehicle Model (Optional)",
      placeholderModel: "e.g. Mercedes C180 2023",
      labelName: "Full Name",
      placeholderName: "e.g. Ahmed Mohamed",
      labelDate: "Date",
      labelEmail: "Email Address",
      submitBtn: "Request Drive"
    },
    ar: {
      heroTitlePart1: "احجز تجربة",
      heroTitlePart2: " قيادتك الآن",
      heroSubtitle: "لا تكتفِ بالمشاهدة.. قُد المستقبل.",
      experienceTitle: "التجربة",
      feat1: "تحكم دقيق على مسارات احترافية.",
      feat2: "جلسة تعريفية فردية مع كبار المهندسين.",
      feat3: "تقرير تحليل الأداء بعد القيادة.",
      labelModel: "موديل السيارة (اختياري)",
      placeholderModel: "مثال: مرسيدس C180 موديل 2023",
      labelName: "الاسم بالكامل",
      placeholderName: "مثال: أحمد محمد",
      labelDate: "التاريخ",
      labelEmail: "البريد الإلكتروني",
      submitBtn: "طلب تجربة قيادة"
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="td-container" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="td-hero">
          <div className="td-hero-overlay"></div>
          <div className="td-hero-content">
            <h1 className="reveal-text">
              {t.heroTitlePart1}<span className='text-accent'>{t.heroTitlePart2}</span>
            </h1>
            <p className="fade-in-delayed">{t.heroSubtitle}</p>
          </div>
        </div>

        <div className="td-content-wrapper">
          <div className="td-card">
            <div className="td-info-panel">
              <h2>{t.experienceTitle}</h2>
              <div className="td-feature-item">
                <span>01</span>
                <p>{t.feat1}</p>
              </div>
              <div className="td-feature-item">
                <span>02</span>
                <p>{t.feat2}</p>
              </div>
              <div className="td-feature-item">
                <span>03</span>
                <p>{t.feat3}</p>
              </div>
            </div>

            <div className="td-form-panel">
              <form className="td-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="td-label">{t.labelModel}</label>
                  <input 
                    type="text" 
                    className="td-input" 
                    placeholder={t.placeholderModel} 
                  />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label className="td-label">{t.labelName}</label>
                    <input type="text" className="td-input" placeholder={t.placeholderName} />
                  </div>
                  <div className="input-group">
                    <label className="td-label">{t.labelDate}</label>
                    <input type="date" className="td-input" />
                  </div>
                </div>

                <div className="input-group">
                  <label className="td-label">{t.labelEmail}</label>
                  <input type="email" className="td-input" placeholder="mahmoud@hammadmotors.com" />
                </div>

                <button type="submit" className="td-submit-btn">
                  {t.submitBtn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drive;
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { supabase } from '../supabase';
import './comingsoon.css';
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

const CountdownTimer = ({ targetDate, lang }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeftObj = { days: 0, hours: 0, minutes: 0 };

      if (difference > 0) {
        timeLeftObj = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        };
      }
      return timeLeftObj;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNum = (num) => String(num).padStart(2, '0');

  return (
    <div className="countdown-timer">
      <div className="time-unit">
        <span>{formatNum(timeLeft.days)}</span>
        {lang === 'ar' ? 'يوم' : 'D'}
      </div>
      <div className="time-unit">
        <span>{formatNum(timeLeft.hours)}</span>
        {lang === 'ar' ? 'ساعة' : 'H'}
      </div>
      <div className="time-unit">
        <span>{formatNum(timeLeft.minutes)}</span>
        {lang === 'ar' ? 'دقيقة' : 'M'}
      </div>
    </div>
  );
};

const ComingSoon = () => {

  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en'); 
  const [hero, setHero] = useState(null);
  const [upcomingCars, setUpcomingCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadingText = lang === 'ar' ? 'جاري تحميل مستقبل السرعة...' : 'LOADING FUTURE OF SPEED...';

  const fetchComingSoonData = async () => {
    try {
      setLoading(true);
      
      const { data: heroData, error: heroError } = await supabase
        .from('coming_soon_hero')
        .select('*')
        .eq('id', 1)
        .single();
        
      if (heroData) setHero(heroData);
      if (heroError) console.error("Hero fetch error:", heroError.message);

      const { data: carsData, error: carsError } = await supabase
        .from('coming_soon_cars')
        .select('*')
        .order('id', { ascending: true });
        
      if (carsData) setUpcomingCars(carsData);
      if (carsError) console.error("Cars fetch error:", carsError.message);

    } catch (err) {
      console.error("Error loading coming soon data:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComingSoonData();
    
    const updateLang = () => {
      setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    };

    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    return () => observer.disconnect();
  }, []);

  const handleNotify = (carName) => {
    Swal.fire({
      title: lang === 'ar' ? 'تم الانضمام لقائمة الانتظار! 🏎️' : 'Waitlist Joined! 🏎️',
      html: lang === 'ar' 
        ? `أنت الآن في قائمة انتظار كبار الشخصيات VIP. <br/> سنقوم بإشعارك فور وصول <b>${carName}</b> إلى صالة العرض لدينا.`
        : `You're now on the VIP waitlist. <br/> We'll notify you the moment the <b>${carName}</b> hits our floor.`,
      icon: 'success',
      background: '#111', 
      color: '#fff',
      confirmButtonText: lang === 'ar' ? 'ممتاز' : 'GREAT',
      confirmButtonColor: '#e31b23', 
      customClass: {
        popup: 'ms-swal-popup',
        title: 'ms-swal-title',
        confirmButton: 'ms-swal-button'
      }
    });
  };

  if (loading) {
    return (
      <div style={{ background: '#000', color: '#fff', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif', letterSpacing: '1px' }}>
        {loadingText}
      </div>
    );
  }

  return (
    <>
      <Nav />
      
      <div className="coming-soon-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="bg-overlay-00"></div>
        
        <header className="cs-header">
          <span className="badge-new">
            {lang === 'ar' ? (hero?.badge_ar || 'الجيل القادم') : (hero?.badge_en || 'Next Generation')}
          </span>

          <h1 className="cs-title">
            {lang === 'ar' ? (hero?.title_ar || 'قريباً جداً') : (hero?.title_en || 'COMING SOON')}
          </h1>

          <p className="cs-desc">
            {lang === 'ar' 
              ? (hero?.desc_ar || 'كن أول من يختبر مستقبل السرعة في حماد موتورز.') 
              : (hero?.desc_en || 'Be the first to experience the future of speed at Hammad Motors.')
            }
          </p>
        </header>

        <div className="cs-grid">
          {upcomingCars.map(car => (
            <div key={car.id} className="cs-card">
              <div className="cs-card-inner">
                <div className="cs-image-box">
                  <img src={car.img_url} alt={lang === 'ar' ? car.name_ar : car.name_en} className="car-silhouette" />
                  <div className="reveal-overlay"></div>
                </div>

                <div className="cs-info">
                  <div className="specs-line">
                    {lang === 'ar' ? car.specs_ar : car.specs_en}
                  </div>
                  <h3>
                    {lang === 'ar' ? car.name_ar : car.name_en}
                  </h3>
                  
                  <CountdownTimer targetDate={car.release_date} lang={lang} />

                  <div className="cs-actions">
                    <button className="notify-btn" onClick={() => handleNotify(lang === 'ar' ? car.name_ar : car.name_en)}>
                      {lang === 'ar' ? 'أعلمني عند الوصول' : 'Notify Me When Arrives'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Whyus />
      <Reviews />
      <Footer />
    </>
  );
};

export default ComingSoon;
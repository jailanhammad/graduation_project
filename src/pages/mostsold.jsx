import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import './mostsold.css';
import { supabase } from '../supabase'; 
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

import renegade from "../assets/mostsold/renegade.png";
import sunny from "../assets/mostsold/sunny.png";
import bmw from "../assets/mostsold/bmw320.png";

const MostSold = () => {
  const [topSellers, setTopSellers] = useState([]);
  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

  const t = {
    en: {
      tagline: "Hammad Motors Choice",
      title_part1: "MOST",
      title_part2: "SOLD",
      best_seller: "Best Seller",
      notify_btn: "Notify Me When Arrives",
      swal_title: "Waitlist Joined! 🏎️",
      swal_html_1: "You're now on the VIP waitlist. <br/> We'll notify you the moment the <b>",
      swal_html_2: "</b> hits our floor.",
      swal_btn: "GREAT"
    },
    ar: {
      tagline: "اختيار حماد موتورز",
      title_part1: "الأكثر",
      title_part2: "مبيعاً",
      best_seller: "الأكثر مبيعاً",
      notify_btn: "أبلغني عند الوصول",
      swal_title: "تم الانضمام لقائمة الانتظار! 🏎️",
      swal_html_1: "أنت الآن في قائمة انتظار الـ VIP. <br/> سنقوم بإشعارك فور وصول سيارة <b>",
      swal_html_2: "</b> إلى صالة العرض لدينا.",
      swal_btn: "رائع"
    }
  }[lang];

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const { data, error } = await supabase
          .from('best_sellers') 
          .select('*')
          .order('id', { ascending: true });

        if (data) {
          const mappedCars = data.map(car => {
            let carImage = car.image_url || sunny; 
            if (!car.image_url) {
                if (Number(car.id) === 2) carImage = bmw;
                if (Number(car.id) === 3) carImage = renegade;
            }
            return { ...car, image: carImage };
          });
          setTopSellers(mappedCars);
        }
        if (error) console.error(error);
      } catch (err) { console.error(err); }
    };

    fetchTopSellers();

    const observer = new MutationObserver(() => {
      setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
    
    return () => observer.disconnect();
  }, []);

  const handleNotify = (carName) => {
    Swal.fire({
      title: t.swal_title,
      html: `${t.swal_html_1}${carName}${t.swal_html_2}`,
      icon: 'success',
      background: '#111', 
      color: '#fff',
      confirmButtonText: t.swal_btn,
      confirmButtonColor: '#e31b23', 
      customClass: {
        popup: 'ms-swal-popup',
        confirmButton: 'ms-swal-button'
      }
    });
  };

  return (
    <>
      <Nav />
      <div className="ms-container">
        <header className="ms-header">
          <p className="ms-tagline">{t.tagline}</p>
          <h2 className="ms-title">{t.title_part1} <span>{t.title_part2}</span></h2>
          <div className="ms-line"></div>
        </header>

        <div className="ms-grid">
          {topSellers.map((car, index) => (
            <div key={car.id} className="ms-card">
              <div className="ms-rank">
                {lang === 'ar' ? `${t.best_seller} #${index + 1}` : `#${index + 1} ${t.best_seller}`}
              </div>
              
              <div className="ms-img-holder">
                <img src={car.image} alt={car.name} />
              </div>

              <div className="ms-details">
                <h3>{car.name}</h3>
                <div className="ms-stats">
                  <span className="ms-rating">⭐ {car.rating}</span>
                  <span className="ms-units">{car.sold_count}</span>
                </div>
                <p className="ms-price">{car.price}</p>
                
                <button className="ms-notify-btn" onClick={() => handleNotify(car.name)}>
                  {t.notify_btn}
                </button>            
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

export default MostSold;
import React, { useState, useEffect } from 'react';
import './recommended.css';
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import { supabase } from '../supabase'; 
import { Link } from 'react-router-dom';


const Recommended = () => {
  const [filter, setFilter] = useState('All');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

  const t = {
    en: {
      subtitle: "Premium Selection",
      titlePart1: "RECOMMENDED ",
      titlePart2: "VEHICLES",
      loadingText: "Loading Premium Fleet...",
      noVehicles: "No vehicles available in this category yet.",
      currency: "EGP",
      tabs: [
        { id: 'All', label: 'All' },
        { id: 'Sedan', label: 'Sedan' },
        { id: 'SUV', label: 'SUV' },
        { id: 'Luxury', label: 'Luxury' }
      ]
    },
    ar: {
      subtitle: "مجموعة مميزة",
      titlePart1: "السيارات ",
      titlePart2: "الموصى بها",
      loadingText: "جاري تحميل الأسطول المميز...",
      noVehicles: "لا توجد سيارات متاحة في هذه الفئة حالياً.",
      currency: "جنيه",
      tabs: [
        { id: 'All', label: 'الكل' },
        { id: 'Sedan', label: 'سيدان' },
        { id: 'SUV', label: 'SUV' },
        { id: 'Luxury', label: 'فاخرة' }
      ]
    }
  }[lang];

  useEffect(() => {

    const updateLang = () => {
      setLang(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    };

    const observer = new MutationObserver(updateLang);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

    const fetchRecommendedCars = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('recommended_cars') 
          .select('*')
          .order('id', { ascending: false });

        if (error) {
          console.error("Error fetching recommended cars:", error.message);
        } else {
          setCars(data || []);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedCars();
    return () => observer.disconnect();
  }, []);

  const filteredCars = filter === 'All' 
    ? cars 
    : cars.filter(car => car.category === filter);

  return (
    <>
      <Nav />
      
      <div className="rec-wrapper" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <header className="rec-header">
          <p className="subtitle-09">{t.subtitle}</p>
          <h2 className="title-09">{t.titlePart1}<span>{t.titlePart2}</span></h2>
          
          <div className="filter-tabs">
            {t.tabs.map(cat => (
              <button 
                key={cat.id} 
                className={filter === cat.id ? 'tab active' : 'tab'} 
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </header>

        {loading ? (
          <div className="loading-container" style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
            <p>{t.loadingText}</p>
          </div>
        ) : (
          <div className="rec-grid">
            {filteredCars.length > 0 ? (
              filteredCars.map(car => (
                <div key={car.id} className="modern-card">
                  <div className="card-top">
                    <span className="car-type">{car.category}</span>
                    <span className="car-speed">{car.state}</span>
                  </div>
                  
                  <div className="car-img-box">
                    <img src={car.image_url} alt={car.name} />
                    <div className="glow-effect"></div>
                  </div>

                  <div className="card-content-09">
                    <h3>{car.name}</h3>
                    <div className="card-footer">
                      <span className="price-tag">
                        {lang === 'ar' ? `${car.price} ${t.currency}` : `${car.price} ${t.currency}`}
                      </span>
                      <Link to="/Vehicles">
                      <button className="icon-btn-09" style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }}>→</button>
                      </Link>

                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ color: '#777', textAlign: 'center', gridColumn: '1/-1', padding: '40px' }}>
                {t.noVehicles}
              </div>
            )}
          </div>
        )}
      </div>

      <Whyus />
      <Reviews />
      <Footer />
    </>
  );
};

export default Recommended;
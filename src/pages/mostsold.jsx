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
            
            return {
              id: car.id,
              name: car.name,
              price: car.price,
              soldCount: car.sold_count, 
              rating: car.rating,
              image: carImage
            };
          });
          setTopSellers(mappedCars);
        }
        if (error) console.error(error);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTopSellers();
  }, []);

  const handleNotify = (carName) => {
    Swal.fire({
      title: 'Waitlist Joined! 🏎️',
      html: `You're now on the VIP waitlist. <br/> We'll notify you the moment the <b>${carName}</b> hits our floor.`,
      icon: 'success',
      background: '#111', 
      color: '#fff',
      confirmButtonText: 'GREAT',
      confirmButtonColor: '#e31b23', 
      customClass: {
        popup: 'ms-swal-popup',
        title: 'ms-swal-title',
        confirmButton: 'ms-swal-button'
      }
    });
  };

  return (
    <>
      <Nav />

      <div className="ms-container">
        <header className="ms-header">
          <p className="ms-tagline">Hammad Motors Choice</p>
          <h2 className="ms-title">MOST <span>SOLD</span></h2>
          <div className="ms-line"></div>
        </header>

        <div className="ms-grid">
          {topSellers.map((car, index) => (
            <div key={car.id} className="ms-card">
              <div className="ms-rank">#{index + 1} Best Seller</div>
              
              <div className="ms-img-holder">
                <img src={car.image} alt={car.name} />
              </div>

              <div className="ms-details">
                <h3>{car.name}</h3>
                <div className="ms-stats">
                  <span className="ms-rating">⭐ {car.rating}</span>
                  <span className="ms-units">{car.soldCount}</span>
                </div>
                <p className="ms-price">{car.price}</p>
                <button 
                  className="ms-notify-btn" 
                  onClick={() => handleNotify(car.name)}
                >
                  Notify Me When Arrives
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
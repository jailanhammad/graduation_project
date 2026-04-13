import React, { useState, useEffect } from 'react';
import './comingsoon.css';
import sport from "../assets/comingsoon/sport.png";
import b320 from "../assets/comingsoon/320.png";
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

const ComingSoon = () => {

  const upcomingCars = [
    {
      id: 1,
      img: sport,
      name: 'Range Rover Sport',
      releaseDate: '2026-07-01', 
      specs: '0-100: 3.0s | 523 – 626 HP',
      category: 'Luxury Car'
    },
    {
      id: 2,
      img: b320,
      name: 'Bmw 320',
      releaseDate: '2026-08-15',
      specs: '2.0L Turbo | 184 HP',
      category: 'Sport Car'
    }
  ];

  const handleNotify = (carName) => {
    alert(`🔥 Success! We'll notify you the moment the ${carName} hits our floor.`);
  };

  return (

    <>
    
<Nav />
  
    <div className="coming-soon-wrapper">
      <div className="bg-overlay-00">
      </div>
      
      <header className="cs-header">
        <span className="badge-new">Next Generation</span>
        <h1 className="cs-title">COMING <span>SOON</span></h1>
        <p className="cs-desc">Be the first to experience the future of speed at <br /> Hammad Motors.</p>
      </header>

      <div className="cs-grid">
        {upcomingCars.map(car => (
          <div key={car.id} className="cs-card">
            <div className="cs-card-inner">
              <div className="cs-image-box">
                <img src={car.img} alt={car.name} className="car-silhouette" />
                <div className="reveal-overlay"></div>
              </div>

              <div className="cs-info">
                <div className="specs-line">{car.specs}</div>
                <h3>{car.name}</h3>
                
                <div className="countdown-timer">
                  <div className="time-unit"><span>12</span>D</div>
                  <div className="time-unit"><span>05</span>H</div>
                  <div className="time-unit"><span>44</span>M</div>
                </div>

                <div className="cs-actions">
                  <button className="notify-btn" onClick={() => handleNotify(car.name)}>Notify Me When Arrives</button>
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
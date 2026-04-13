import React, { useState } from 'react';
import './recommended.css';
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import velar from "../assets/gallery/velar.png";
import evouqe from "../assets/gallery/evouqe.png";
import mercedes from "../assets/gallery/mercedes.png";
import tosan from "../assets/gallery/tosan.png";

import s from "../assets/gallery/s.png";
import c200 from "../assets/gallery/c200.png";
import glc from "../assets/gallery/glc.png";
import bmw from "../assets/vehicles/318.svg";

const Recommended = () => {
  const [filter, setFilter] = useState('All');

  const cars = [
    { id: 1, name: 'Mercedes S450', price: '6,000,000', category: 'Luxury', image: s, state: 'Used' },
    { id: 2, name: 'Range Rover Velar', price: '4,500,000', category: 'Luxury', image: velar, state: 'Used' },
    { id: 3, name: 'Range Rover Evouqe', price: '2,550,000', category: 'SUV', image: evouqe, state: 'Used' },
    { id: 4, name: 'Mercedes Glc300', price: '4,000,000', category: 'SUV', image: glc, state: 'Used' },

    { id: 5, name: 'Mercedes C200', price: '2,450,000', category: 'Sedan', image: c200, state: 'Used' },
    { id: 6, name: 'Bmw 318', price: '1,350,000', category: 'Sedan', image: bmw, state: 'Used' },
    { id: 7, name: 'Mercedes C180', price: '3,000,000', category: 'Sedan', image: mercedes, state: 'Used' },
    { id: 8, name: 'Hyundai Tucson', price: '1,800,000', category: 'SUV', image: tosan, state: 'Used' },


  ];

  const filteredCars = filter === 'All' ? cars : cars.filter(car => car.category === filter);

  return (

    <>
<Nav />
    
    
    <div className="rec-wrapper">
      <header className="rec-header">
        <p className="subtitle-09">Premium Selection</p>
        <h2 className="title-09">RECOMMENDED <span>VEHICLES</span></h2>
        
        <div className="filter-tabs">
          {['All', 'Sedan', 'SUV', 'Luxury'].map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? 'tab active' : 'tab'} 
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="rec-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="modern-card">
            <div className="card-top">
              <span className="car-type">{car.category}</span>
              <span className="car-speed">{car.state}</span>
            </div>
            
            <div className="car-img-box">
              <img src={car.image} alt={car.name} />
              <div className="glow-effect"></div>
            </div>

            <div className="card-content-09">
              <h3>{car.name}</h3>
              <div className="card-footer">
                <span className="price-tag">{car.price}</span>
                <button className="icon-btn-09">→</button>
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

export default Recommended;
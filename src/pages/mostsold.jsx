import React from 'react';
import Swal from 'sweetalert2';
import './mostsold.css';
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

import renegade from "../assets/mostsold/renegade.png";
import sunny from "../assets/mostsold/sunny.png";
import bmw from "../assets/mostsold/bmw320.png";


const MostSold = () => {

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

  const topSellers = [
    {
      id: 1,
      name: 'Nissan Sunny',
      price: '650,000',
      soldCount: '15 Units Sold',
      rating: 5,
      image: sunny,

    },
    {
      id: 2,
      name: 'BMW 320',
      price: '1,400,000',
      soldCount: '10 Units Sold',
      rating: 4.9,
      image: bmw,

    },
    {
      id: 3,
      name: 'Jeep Renegade',
      price: '870,000',
      soldCount: '7 Units Sold',
      rating: 4.8,
      image: renegade,
    }
  ];

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
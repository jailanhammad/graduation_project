import React from 'react';
import './cardetails.css';
import Vehicleshero from '../components/vehicleshero';
import Nav from '../components/nav';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

import range1 from "../assets/home/range1.svg";
import range2 from "../assets/home/range2.svg";
import range3 from "../assets/home/range3.svg";
import range4 from "../assets/home/range4.svg";
import range5 from "../assets/home/range5.svg";
import range6 from "../assets/home/range6.svg";
import range7 from "../assets/home/range7.svg";
import range8 from "../assets/home/range8.svg";
import range9 from "../assets/home/range9.svg";
import range10 from "../assets/home/range10.svg";

const CarDetails = () => {
    const images = [range1, range2, range3, range4, range5, range6, range7, range8, range9, range10];


  return (

    <>

<Nav />
<Vehicleshero  h5="Range Rover"/>

    <div className="car-dash-main-wrapper">

            
<div className="car-dash-images-section">
        <h2 className="car-dash-main-heading">Car <span className="car-dash-text-accent">Images</span></h2>
  
  <div className="car-dash-images-scroll-wrapper">
    
        {images.map((img, i) => (
      <div key={i} className="car-dash-single-item-container">
        <img src={img} alt={`car-view-${i}`} className="car-dash-actual-img" />
      </div>
    ))}
    
  </div>
</div>
      
      <div className="car-dash-stats-container">
        <div className="car-dash-stat-box">
          <span className="car-dash-stat-icon">⏱️</span>
          <p className="car-dash-stat-tag">Top Speed</p>
          <p className="car-dash-stat-info">315 km/h</p>
        </div>
        <div className="car-dash-stat-box">
          <span className="car-dash-stat-icon">⚡</span>
          <p className="car-dash-stat-tag">0-100 km/h</p>
          <p className="car-dash-stat-info">3.2s</p>
        </div>
        <div className="car-dash-stat-box">
          <span className="car-dash-stat-icon">⚙️</span>
          <p className="car-dash-stat-tag">Power</p>
          <p className="car-dash-stat-info">630HP</p>
        </div>
        <div className="car-dash-stat-box">
          <span className="car-dash-stat-icon">🚗</span>
          <p className="car-dash-stat-tag">Engine</p>
          <p className="car-dash-stat-info">4.0L V8</p>
        </div>
      </div>

      <h2 className="car-dash-main-heading">Technical <span className="car-dash-text-accent">Specifications</span></h2>
      <div className="car-dash-specs-layout">
        <div className="car-dash-info-panel">
          <h3 className="car-dash-panel-title">Engine</h3>
          <ul className="car-dash-details-list">
            <li><span className="car-dash-label-dim">Type:</span> Inline 4-Turbo</li>
            <li><span className="car-dash-label-dim">CC:</span> 1,997 cc</li>
            <li><span className="car-dash-label-dim">HP:</span> 200 hp @ 5.5k</li>
          </ul>
        </div>
        <div className="car-dash-info-panel">
          <h3 className="car-dash-panel-title">Performance</h3>
          <ul className="car-dash-details-list">
            <li><span className="car-dash-label-dim">0-100:</span> 8.5 sec</li>
            <li><span className="car-dash-label-dim">Consumption:</span> 7.7 L</li>
          </ul>
        </div>
        <div className="car-dash-info-panel">
          <h3 className="car-dash-panel-title">Dimensions</h3>
          <ul className="car-dash-details-list">
            <li><span className="car-dash-label-dim">Length:</span> 4,371 mm</li>
            <li><span className="car-dash-label-dim">Tank:</span> 67 L</li>
          </ul>
        </div>
      </div>

      <h2 className="car-dash-main-heading">Performance <span className="car-dash-text-accent">Metrics</span></h2>
      <div className="car-dash-metrics-grid">
        <div className="car-dash-metric-card">
          <p className="car-dash-metric-name">Power-to-Weight</p>
          <p className="car-dash-metric-num" >308 HP/ton</p>
        </div>
        <div className="car-dash-metric-card gold-border">
          <p className="car-dash-metric-name">Torque Distribution</p>
          <p className="car-dash-metric-num" >Variable</p>
        </div>
      </div>

      <h2 className="car-dash-main-heading">Available <span className="car-dash-text-accent">Colors</span></h2>
      <div className="car-dash-colors-area">
        <div className="car-dash-swatch-card">
          <div className="car-dash-color-view" style={{backgroundColor: '#fff'}}></div>
          <span>White</span>
        </div>
        <div className="car-dash-swatch-card">
          <div className="car-dash-color-view" style={{backgroundColor: '#000', border: '1px solid #333'}}></div>
          <span>Black</span>
        </div>
        <div className="car-dash-swatch-card">
          <div className="car-dash-color-view" style={{backgroundColor: '#444'}}></div>
          <span>Gray</span>
        </div>
        <div className="car-dash-swatch-card">
          <div className="car-dash-color-view" style={{backgroundColor: '#ccc'}}></div>
          <span>Silver</span>
        </div>
      </div>
    </div>


<Whyus />
<Reviews />
<Footer />
    </>

  );
};

export default CarDetails;
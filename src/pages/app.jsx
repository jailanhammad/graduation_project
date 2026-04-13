import React from 'react';
import './app.css';
import { FaApple, FaGooglePlay, FaVrCardboard } from 'react-icons/fa';
import app from "../assets/app/app.svg";
import Nav from '../components/nav';
import Footer from '../components/footer';

const DownloadApp = () => {
  return (
    <>

<Nav />

    <div className="app-page-wrapper">
      <div className="app-container">
        
        <div className="app-content">
          <p className="app-tag">Revolutionizing Car Shopping</p>
          <h1 className="app-title">EXPERIENCE HAMMAD MOTORS <span>ON THE GO</span></h1>
          
          <div className="ar-feature-box">
            <div className="ar-icon">
              <FaVrCardboard />
            </div>
            <div className="ar-text">
              <h3>Next-Gen AR Feature</h3>
              <p>Preview any supercar in your own driveway using our advanced Augmented Reality technology.</p>
            </div>
          </div>

          <p className="app-description">
            Download our official app to book test drives, track your orders, 
            and explore our premium collection in 3D.
          </p>

          <div className="download-buttons">
            <button className="store-btn">
              <FaApple className="btn-icon" />
              <span>Download on the <br/> <b>App Store</b></span>
            </button>
            <button className="store-btn">
              <FaGooglePlay className="btn-icon" />
              <span>Get it on <br/> <b>Google Play</b></span>
            </button>
          </div>
        </div>
        
        <div className="app-visual">
            <img src={app} alt="Mobile-App" />             
        </div>

        <div className="glow-effect"></div>

      </div>
    </div>


<Footer />
    </>

  );
};

export default DownloadApp;
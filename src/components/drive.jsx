import React from 'react';
import './drive.css';


const Drive = () => {
  return (

    <>

    
    <div className="td-container">
      <div className="td-hero">
        <div className="td-hero-overlay"></div>
        <div className="td-hero-content">
          <h1 className="reveal-text">Book Your<span className='text-accent'> Test Drive Now</span></h1>
          <p className="fade-in-delayed">Don’t Just Watch. Drive the Future.</p>
        </div>
      </div>

      <div className="td-content-wrapper">
        <div className="td-card">
          <div className="td-info-panel">
            <h2>The Experience</h2>
            <div className="td-feature-item">
              <span>01</span>
              <p>Precision handling on professional circuits.</p>
            </div>
            <div className="td-feature-item">
              <span>02</span>
              <p>One-on-one briefing with lead engineers.</p>
            </div>
            <div className="td-feature-item">
              <span>03</span>
              <p>Post-drive performance analytics report.</p>
            </div>
          </div>

          <div className="td-form-panel">
          <form className="td-form">
          <div className="input-group">
            <label className="td-label">Vehicle Model (Optional)</label>
            <input 
                type="text" 
                className="td-input" 
                placeholder="e.g. Mercedes C180 2023 " 
                />
                </div>

            <div className="input-row">
                <div className="input-group">
                <label className="td-label">Full Name</label>
                <input type="text" className="td-input" placeholder="e.g. Ahmed Mohamed" />
                </div>
                <div className="input-group">
                <label className="td-label">Date</label>
                <input type="date" className="td-input" />
                </div>
            </div>

            <div className="input-group">
                <label className="td-label">Email Address</label>
                <input type="email" className="td-input" placeholder="mahmoud@hammadmotors.com" />
            </div>

            <button type="submit" className="td-submit-btn">
                Request Drive
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
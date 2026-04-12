import React from 'react';
import './steps.css';
import car from "../assets/installments/car.svg";
import paper from "../assets/installments/paper.svg";
import approved from "../assets/installments/approved.svg";
import next from "../assets/installments/next.svg";
import wp from "../assets/installments/wp.svg";

const Steps = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Car',
      desc: 'Select your dream vehicle from our premium collection',
      icon: car,
    },
    {
      number: '02',
      title: 'Apply',
      desc: 'Complete our simple online application in minutes',
      icon: paper,

    
    },
    {
      number: '03',
      title: 'Get Approved',
      desc: 'Receive instant approval decision',
      icon: approved,
    },
    {
      number: '04',
      title: 'Drive Away',
      desc: 'Pick up your keys and hit the road',
      icon: next,
    }
  ];

  return (
    <section className="steps-section">
      <h2 className="steps-main-title">Simple 4-Step Process</h2>
      
      <div className="steps-container">
        <div className="steps-line"></div>
        
        {steps.map((step, index) => (
          <div className="step-card" key={index} style={{ '--delay': `${index * 0.2}s` }}>
            <div className="icon-wrapper">
              <span className="step-number-bg">{step.number}</span>
              <div className="icon-box">
            <span className="actual-icon">
            <img src={step.icon} alt="icons" className='steps-icon' />        
            </span>
              </div>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
          </div>
        ))}
      </div>


                <a 
                    href="https://wa.me/201000444401?text=Hello%20Hammad%20Motors,%20I%20would%20like%20to%20inquire%20about%20the%20available%20financing%20and%20installment%20plans."                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hms-whatsapp-link"
                >
                    <button className="cta-button" style={{ transitionDelay: '800ms' }}>
                    Get Approved Now<i className="fab fa-whatsapp">
                        <img src={wp} alt="check icon" /></i>
                    </button>
                </a>
    </section>
  );
};

export default Steps;
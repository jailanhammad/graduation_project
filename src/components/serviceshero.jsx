import React from 'react';
import './serviceshero.css';
import serviceshero from "../assets/services/serviceshero.svg";

const Serviceshero = () => {


    const scrollToServices = () => {
        const nextSection = document.getElementById('services-list');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (  
        <>
        
        
        <section className="hms-hero">
            <div className="hms-hero-bg">
                <img src={serviceshero} alt="Hammad Motors Services" />
                <div className="hms-overlay"></div>
            </div>

            <div className="hms-container">
                <div className="hms-content-box hms-animate-left">
                    <div className="hms-tag-line">Professional Care</div>
                    <h1>Our <span>Services</span></h1>
                    <p>
                        We provide complete car solutions—from sales and financing 
                        to expert inspection and after-sales support.
                    </p>
                    <div className="hms-hero-btns">
                        <button className="hms-btn-primary" onClick={scrollToServices}>View All Services</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="services-list" style={{ padding: '100px 0', background: '#0a0a0a' }}>
        </section>

        
        
        
        </>
    );
}
 
export default Serviceshero;
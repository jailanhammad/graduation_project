import './sell.css';
import React, { useEffect } from 'react';
import sell from "../assets/services/sell.svg";
import check from "../assets/services/check.svg";
import whatsapp from "../assets/services/wp.svg";


const Sell = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('hms-show');
                }
            });
        }, { threshold: 0.2 });

        const hiddenElements = document.querySelectorAll('.hms-hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return (  
        <>
        
        <section className="hms-sell-section">
            <div className="hms-sell-container">
                
                <div className="hms-sell-image-wrapper hms-reveal-left">
                    <img src={sell} alt="Get a fair price" className="hms-main-img" />
                    <div className="hms-trusted-badge">
                        <h2>100%</h2>
                        <p>Trusted Service</p>
                    </div>
                </div>

                <div className="hms-sell-content hms-reveal-right">
                    <h2 className="hms-sell-title">Get A Fair Price For Your Car</h2>
                    <h3 className="hms-sell-subtitle">Sell To Us Today</h3>
                    <p className="hms-sell-description">
                        We are committed to providing our customers with exceptional service, 
                        competitive pricing, and a wide range of options.
                    </p>

                    <ul className="hms-sell-features">
                        <li><i className="fas fa-check-circle">
                            <img src={check} alt="check icon" />
                        </i> Instant Car Valuation – Get a fair offer in minutes</li>
                        <li><i className="fas fa-check-circle">
                        <img src={check} alt="check icon" />
                        </i> No Hidden Fees – 100% transparent process</li>
                        <li><i className="fas fa-check-circle">            
                        <img src={check} alt="check icon" />
                        </i> Hassle-Free – We handle all paperwork</li>
                        <li><i className="fas fa-check-circle">
                        <img src={check} alt="check icon" />
                        </i> Quick Payment – Get paid on the spot</li>
                    </ul>





                <a 
                    href="https://wa.me/201000444401?text=Hello%20Hammad%20Motors,%20I%20am%20interested%20in%20selling%20my%20car." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hms-whatsapp-link"
                >
                    <button className="hms-whatsapp-btn hms-hidden hms-from-bottom">
                        Send Your Car <i className="fab fa-whatsapp">
                        <img src={whatsapp} alt="check icon" /></i>
                    </button>
                </a>





                </div>

            </div>
        </section>


        
        </>
    );
}
 
export default Sell;
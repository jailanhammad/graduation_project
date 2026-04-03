import React from 'react';
import './weoffer.css';
import car from '../assets/services/car.svg';
import settings from '../assets/services/settings.svg';
import insurance from '../assets/services/insurance.svg';
import ServiceItem from './serviceitem';
import carbg from '../assets/services/carbg.svg';
import insurancebg from '../assets/services/insurancebg.svg';
import settingsbg from '../assets/services/settingsbg.svg';


const Weoffer = () => {


    return (  
        <>


        <section id="services-list" className="hmo-services-section">
            <div className="hmo-container">
                <h5 className="hmo-sub-label">What We Offer</h5>
                
                <div className="hmo-grid">
                    <ServiceItem 
                        img={car}
                        iconClass="fas fa-car" 
                        title="Car Sales" 
                        desc="Browse our wide selection of certified vehicles."
                        delay="0.1s"
                        bgImg={carbg}
                    />
                    <ServiceItem 
                        img={settings}
                        iconClass="fas fa-cog" 
                        title="Car Service" 
                        desc="Professional maintenance and repairs."
                        delay="0.3s"
                        bgImg={settingsbg}

                    />
                    <ServiceItem 
                        img={insurance}
                        iconClass="fas fa-shield-alt" 
                        title="Car Insurance" 
                        desc="Get the best coverage for your vehicle."
                        delay="0.5s"
                        bgImg={insurancebg}

                    />
                </div>
            </div>
        </section>


        </>
    );
}
 
export default Weoffer;
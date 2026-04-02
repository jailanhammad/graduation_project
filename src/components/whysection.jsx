import React from 'react';
import './whysection.css';
import offers from "../assets/about/offers.svg";
import price from "../assets/about/price.svg";
import daimond from "../assets/about/daimond.svg";
import car from "../assets/about/car.svg";

const Whysection = () => {
    return ( 
        <>
        
        
        
        <section class="benefits-section">
    <div class="responsive-container">
        <div class="benefits-header">
            <span class="sub-label">WE'RE HERE FOR WHATEVER YOU NEED</span>
            <h2 class="section-title">Why Choose Us?</h2>
        </div>

        <div class="benefits-grid">
            <div class="benefit-item">
                <div class="benefit-icon">
                    <i class="fas fa-percentage">
                        <img src={offers}/>
                    </i> </div>
                <div class="benefit-info">
                    <h3>Special Financing Offers</h3>
                    <p>Drive your dream car today with our flexible financing plans. Enjoy low interest rates and tailored payment solutions.</p>
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">
                    <i class="fas fa-tag">
                    <img src={price}/>
                    </i>
                </div>
                <div class="benefit-info">
                    <h3>Transparent Pricing</h3>
                    <p>No hidden fees, no surprises — just clear, competitive prices you can trust every single time.</p>
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">
                    <i class="fas fa-handshake">
                    <img src={daimond}/>
                    </i>
                </div>
                <div class="benefit-info">
                    <h3>Trusted Car Dealership</h3>
                    <p>With decades of experience, we've built a reputation for honesty, reliability, and excellence in the car market.</p>
                </div>
            </div>

            <div class="benefit-item">
                <div class="benefit-icon">
                    <i class="fas fa-user-heart">
                    <img src={car}/>
                    </i>
                </div>
                <div class="benefit-info">
                    <h3>Customer-Centered Service</h3>
                    <p>Our team is dedicated to helping you every step of the way, from choosing the right car to after-sales support.</p>
                </div>
            </div>
        </div>
    </div>
</section>
        
        
        
        
        </>
     );
}
 
export default Whysection;
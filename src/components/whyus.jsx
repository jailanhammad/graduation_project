import React from 'react';
import './whyus.css';
import quality from "../assets/home/quality.svg";
import best from "../assets/home/best.svg";
import support from "../assets/home/support.svg";

const Whyus = () => {
    return ( 
        <>
        
        
        
        <section class="why-choose-section">
    <div class="responsive-container">
        <div class="section-header-7">
            <h2 class="title">Why Choose Hammad Motors</h2>
            <p class="subtitle">Excellence is not just a standard, it's our starting point.</p>
        </div>

        <div class="features-grid-2">
            <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-shield"></i> 
                    <img src={quality}/>
                </div>
                <h3>Premium Quality</h3>
                <p>Every vehicle undergoes a rigorous 150-point inspection to ensure perfection.</p>
            </div>

            <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-medal">
                    <img src={best}/>
                    </i>
                </div>
                <h3>Best Financing</h3>
                <p>Exclusive financing rates and tailored packages to suit your lifestyle.</p>
            </div>

            <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-globe">
                    <img src={support}/>
                    </i>
                </div>
                <h3>Global Support</h3>
                <p>With multiple branches and global shipping, we deliver excellence everywhere.</p>
            </div>
        </div>
    </div>
</section>
        
        
        
        
        </>
     );
}
 
export default Whyus;
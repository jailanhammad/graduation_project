import React from 'react';
import './vehicleshero.css';
import vehicleVideo from '../assets/vehicles/vd.mp4';

const Vehicleshero = () => {
    return ( 
        <>
        
        
        
    <main class="hmv-page-wrapper">
   
        
<section class="hmv-hero-section">
<video autoPlay loop muted playsInline className="hmv-video-bg">
                    <source src={vehicleVideo} type="video/mp4" />
                    Your browser does not support the video tag.
</video>
    <div class="hmv-video-overlay"></div>
    
    <div class="hmv-hero-container">
        <div class="hmv-hero-text hmv-animate-up">
            <h5>Inventory</h5>
            <h1>Explore Our Premium Collection</h1>
            <p>Browse our latest new and pre-owned vehicles. Quality guaranteed.</p>
        </div>
    </div>
</section>
        
      </main>  
        
        
        
        </>
     );
}
 
export default Vehicleshero;
import React from 'react';
import './map.css';

const Map = () => {
    return (
        <>
        
        <section class="directions-section">
    <div class="container-9">
        <h3>Get Directions</h3>
        <div class="map-wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.157813247474!2d31.3813889!3d30.1041667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817d6928e185b%3A0x6b7774e1d1f0b0a!2sHammad%20Motors!5e0!3m2!1sen!2seg!4v1712080000000!5m2!1sen!2seg" 
                width="100%" 
                height="450" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
            <div class="map-overlay-btn">
            <a 

            href="https://www.google.com/maps/search/?api=1&query=Hammad+Motorz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="send-btn"
            style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: '#ED1C24'
        }}
            >
            Open in Google Maps 
            <i className="fas fa-map-marker-alt"></i>
            </a>
            </div>
            
        </div>
    </div>
</section>
        
        
        </>
      );
}
 
export default Map;
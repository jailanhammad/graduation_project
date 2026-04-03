import React from 'react';
import './contacthero.css';
import contacthero from "../assets/contact/hero.svg";

const Contacthero = () => {
    return ( 
        <>
        
        
<section class="contact-hero">
    <div class="hero-overlay">
        <img src={contacthero} className='contacthero-img'/>
    </div>
    <div class="hero-content">
        <h1 class="animate-up">Contact Us</h1>
        <p class="animate-up delay-1">One Message Away from Your Dream Car</p>
    </div>
</section>
        

        
        
        </>
     );
}
 
export default Contacthero;
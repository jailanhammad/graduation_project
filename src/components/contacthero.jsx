import React from 'react';
import './contacthero.css';
import contacthero from "../assets/contact/hero.svg";
import Particles from './Particles';

const Contacthero = () => {
    return ( 
        <>
        
        
<section class="contact-hero">
    <div class="hero-overlay">




<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={["#ff0000"]}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover
    alphaParticles={false}
    disableRotation={false}
    pixelRatio={1}
/>
</div>
        {/* <img src={contacthero} className='contacthero-img'/> */}
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
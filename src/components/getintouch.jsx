import React from 'react';
import './getintouch.css';
import mobile from "../assets/contact/mobile.svg";
import time from "../assets/contact/time.svg";
import loc from "../assets/contact/loc.svg";
import email from "../assets/contact/email.svg";
import send from "../assets/contact/send.svg";

const Getintouch = () => {



    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! Congratulations, we will contact you soon.");
        e.target.reset();
    };

    return (  
        <>
        
   

<section class="get-in-touch">

            <div className='get-coloumn'>

            <div class="section-title-9">
            <h2>Get In Touch</h2>
            <p>Have questions? We are here to help. Reach out to our team today.</p>
            </div>
            <div className='rows'>

        <form class="contact-form" onSubmit={handleFormSubmit}>

            
                        <div class="input-box">
                            <label>Name</label>
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div class="input-box">
                            <label>Phone</label>
                            <input type="tel" placeholder="Phone Number" required />
                        </div>
                        <div class="input-box">
                            <label>Email</label>
                            <input type="email" placeholder="email@example.com" required />
                        </div>
                        <div class="input-box">
                            <label>Message</label>
                            <textarea placeholder="How can we help?" rows="4" required></textarea>
                        </div>
                        <button type="submit" class="send-btn">Send Message
                        <img src={send} className='send'/>
                        </button>
        </form>


        <div class="contact-wrapper">


        <div class="info-container">
            <div class="info-item">
                <div class="icon-box"><i class="fas fa-phone">
                <img src={mobile}/>
                </i></div>
                <div class="info-text">
                    <h4>Phone</h4>
                    <span>+02 01000444401</span>
                    <span>+02 01000024471</span>
                </div>
            </div>

            <div class="info-item">
                <div class="icon-box"><i class="fas fa-map-marker-alt">
                <img src={loc}/>
                </i></div>
                <div class="info-text">
                    <h4>Address</h4>
                    <span>Branch 1: 15 Ibrahim El-Naggar St., Heliopolis</span>
                    <span>Branch 2: 12 Ammar Ibn Yasser St., Heliopolis</span>
                </div>
            </div>

            <div class="info-item">
                <div class="icon-box"><i class="fas fa-envelope">
                    <img src={email}/>
                </i></div>
                <div class="info-text">
                    <h4>Email</h4>
                    <span>mahmoud@hammadmotors.com</span>
                </div>
            </div>

            <div class="info-item">
                <div class="icon-box"><i class="fas fa-envelope">
                    <img src={time}/>
                </i></div>
                <div class="info-text">
                    <h4>Working Hours</h4>
                    <span>Everyday from 12:00 PM to 10:00 AM</span>
                </div>
            </div>
        </div>
        </div>



        </div>

        

        </div>

</section>
        
        </>
    );
}
 
export default Getintouch;
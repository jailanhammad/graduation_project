import React from 'react';
import './footer.css';
import logo from "../assets/home/logo.svg";
import fb from "../assets/home/fb.svg";
import ig from "../assets/home/ig.svg";
import twitt from "../assets/home/twitt.svg";
import wp from "../assets/home/wp.svg";
import loc from "../assets/home/loc.svg";
import mobile2 from "../assets/home/mobile2.svg";
import email2 from "../assets/home/email2.svg";

const Footer = () => {
    return (
        <>
        
        
        <footer class="footer-section">
    <div class="responsive-container">
        <div class="footer-grid">
            
            <div class="footer-col branding">
                <div class="footer-logo">
                <img src={logo} className='logo-svg'/>
                    <span class="logo-text">HAMMAD MOTORS</span>
                </div>
                <p class="footer-desc">
                    Your trusted partner for finding the perfect vehicle. We offer a wide range of premium cars with exceptional service.
                </p>
                <div class="social-links">
                    <a href="#"><i class="fab">
                    <img src={fb} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={ig} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={twitt} className='fb-svg'/>
                    </i></a>
                    <a href="#"><i class="fab">
                    <img src={wp} className='fb-svg'/>
                    </i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4 class="col-title">Quick Links</h4>
                <ul class="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">All Vehicles</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 class="col-title">Contact Info</h4>
                <ul class="contact-list">
                    <li><i class="fas fa-map-marker-alt">
                    <img src={loc} className='fb-svg'/>
                    </i>15 Ammar ibn yasser, Masr El Gdida</li>
                    <li><i class="fas fa-phone-alt">
                    <img src={mobile2} className='fb-svg'/>
                    </i> +02 01000444401</li>
                    <li><i class="fas fa-envelope">
                    <img src={email2} className='fb-svg'/>
                    </i> mahmoud@hammadmotors.com</li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 class="col-title">Newsletter</h4>
                <p class="newsletter-text">Subscribe to our newsletter for the latest updates and offers.</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Your Email Address" required/>
                    <button type="submit" class="btn-subscribe">Subscribe Now</button>
                </form>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Hammad Motors. All rights reserved.</p>
            <div class="bottom-links">
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>
        
        
        </>
      );
}
 
export default Footer;
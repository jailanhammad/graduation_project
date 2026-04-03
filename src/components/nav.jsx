import React from 'react';
import './nav.css';
import { Link } from "react-router-dom";
import logo from "../assets/home/logo.svg";
import phone from "../assets/home/phone.svg";
import email from "../assets/home/email.svg";

import login from "../assets/home/login.svg";
import music from "../assets/home/music.svg";
import dark from "../assets/home/darkmood.svg";
import translate from "../assets/home/translate.svg";
import hero from "../assets/home/porsche.svg";
import h1 from "../assets/home/h1.svg";
import m from "../assets/home/m.svg";
import h2 from "../assets/home/h2.svg";
import heroo from "../assets/home/heroo.svg";

const Nav = () => {
    return ( 

<>

<header class="header">
    
    <div class="top-bar">

        <div class="container">

            <div class="contact-info">

                <div className='phone-div'>
                <img src={phone} className='small-icon'/>
                <span><i class="fas fa-phone"></i> +02 01000444401</span>
                </div>

                <div className='phone-div'>
                <img src={email} className='small-icon' />
                <span><i class="fas fa-envelope"></i> mahmoud@hammadmotors.com</span>
                </div>

            </div>

            <div class="utility-icons">

            <img src={music} className='small-icon' />
            <img src={dark}  className='small-icon' />
            <img src={translate}  className='small-icon'/>

            
            </div>


            <div className='login-div'>

            <img src={login} className='small-icon' />
            <a href="#" class="login-btn"><i class="fas fa-user"></i> 
            <Link to="/Login">Login</Link>
            </a>

            </div>

        </div>
    </div>

    <nav class="main-nav">
        
        
        <div class="container">
            <div className='word-logo'>
            <img src={logo} className='logo-svg'/>
            <h1 className='word-logo-text'>HAMMAD MOTORS</h1>
            </div>
     


            <input type="checkbox" id="menu-toggle" class="menu-toggle"/>
            <label for="menu-toggle" class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <ul class="nav-links">
                <li><a href="#" class="active" >
                <Link to="/">Home</Link>
                </a></li>
                <li><a href="#">
                <Link to="/About-us">About</Link>
                </a></li>
                
                <li><a href="#">
                <Link to="/Contact-us">Contact</Link>
                </a></li>
                <li><a href="#" >                    
                <Link to="/Vehicles">Vehicles</Link>
                </a></li>


                <li class="dropdown">
                <a href="#">Menu <i class="fas fa-caret-down"></i></a>

                <ul class="dropdown-content">
                    
                    <li><a href="#brands">
                    <Link to="/">Home</Link>
                    </a></li>
                    <li><a href="#brands">
                    <Link to="/About-us">About</Link>
                    </a></li>
                    <li><a href="#brands">                    
                    <Link to="/Contact-us">Contact</Link>
                    </a></li>
                    <li><a href="#brands">                    
                    <Link to="/Vehicles">Vehicles</Link>
                    </a></li>
                    <li><a href="#services">                    
                    <Link to="/Services">Services</Link>
                    </a></li>                    
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#brands">Brands</a></li>
                    <li><a href="#most-sold">Most sold</a></li>
                    <li><a href="#installments">Installments</a></li>
                    <li><a href="#test-drive">Test drive</a></li>
                    <li><a href="#service-center">Service center</a></li>
                    <li><a href="#recommended">Recommended</a></li>
                    <li><a href="#gallery">Gallery</a></li>

                <li class="mobile-close-li">

        <label for="menu-toggle" class="close-menu">
            <i class="fas fa-times"></i> Close
        </label>
    </li>
                </ul>
                </li>

            </ul>
        </div>
        
    </nav>
    
</header>




<section class="hero">

            <div class="hero-content">
                <div class="car-wrapper">
                <img src={heroo} className='hero-car'/>
                </div>
                
                <div class="hero-footer">
                    <p class="sub-text">Own the Road with</p>
                    <h2 class="brand-name">HAMMAD MOTORS</h2>
                </div>


            </div>
</section>


</>

     );
}


 
export default Nav;
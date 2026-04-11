import React from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import room1 from "../assets/gallery/room1.png";
import room2 from "../assets/gallery/room2.png";
import room3 from "../assets/gallery/room3.png";
import room4 from "../assets/gallery/room4.png";
import room5 from "../assets/gallery/room5.png";
import room6 from "../assets/gallery/room6.png";


import Menunav from '../components/menunav';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import CarImg from './carimg';
import { Link } from "react-router-dom";


const Showroom = () => {
    return (
        <>
        
<Menunav />
 <section class="gal-hero-wrapper">
    <div class="gal-hero-bg">
    <img src={hero}  alt="Range Rover Hero" class="gal-hero-img" />
    </div>

    <div class="gal-hero-overlay">

        <div class="gal-hero-text">
            <h1 class="gal-main-title">OUR GALLERY</h1>
            <p class="gal-main-subtitle">Explore the Power. Experience the Detail.</p>
        </div>
    </div>
</section>
        


    <div class="gal-container">

    <div className="gal-nav-container">
    <nav className="gal-filter-nav">
        <button className="gal-filter-btn">
        <Link to="/Gallery">All Cars</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Interior">Interior</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Exterior">Exterior</Link>
        </button>
        <button className="gal-filter-btn active">
        <Link to="/Showroom">Showroom</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Tv-shows">Tv Shows</Link>
        </button>
    </nav>
    </div>

        <section class="gal-main-section">

            <h2 class="gal-section-heading">Showroom</h2>

        <div class="gal-grid">

            <CarImg  img={room1} span="15 Ibrahim Elnaggar St." />
            <CarImg  img={room2} span="12 Ammar Ibn Yasser St." />
            <CarImg  img={room3} span="15 Ibrahim Elnaggar St." />
            <CarImg  img={room4} span="15 Ibrahim Elnaggar St." />
            <CarImg  img={room5} span="12 Ammar Ibn Yasser St." />
            <CarImg  img={room6} span="12 Ammar Ibn Yasser St." />


       


        </div>
        </section>


        <section class="gal-video-section">
            <h2 class="gal-section-heading">Cinematic Showcase</h2>
            <div class="gal-video-wrapper">
                <video controls poster={img} class="gal-video-player">
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    </div>


<Reviews />
<Footer />    
        
        
        
        
        </>
      );
}
 
export default Showroom;
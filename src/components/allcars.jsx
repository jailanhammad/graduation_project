import React from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import velar from "../assets/gallery/velar.png";
import mercedes from "../assets/gallery/mercedes.png";
import glc from "../assets/gallery/glc.png";
import bmw from "../assets/gallery/bmw.png";
import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import tosan from "../assets/gallery/tosan.png";
import rangler from "../assets/gallery/rangler.png";
import cn7 from "../assets/gallery/cn7.png";
import c180 from "../assets/gallery/c180.png";
import jeep from "../assets/gallery/jeep.png";
import cetro from "../assets/gallery/cetro.png";
import evouqe from "../assets/gallery/evouqe.png";
import cap from "../assets/gallery/cap.png";
import captiva from "../assets/gallery/captiva.png";
import c200 from "../assets/gallery/c200.png";
import s from "../assets/gallery/s.png";

import Menunav from '../components/menunav';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import CarImg from './carimg';

const AllCars = () => {
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
        <button className="gal-filter-btn active">All Cars</button>
        <button className="gal-filter-btn">Interior</button>
        <button className="gal-filter-btn">Exterior</button>
        <button className="gal-filter-btn">Showroom</button>
        <button className="gal-filter-btn">Events</button>
    </nav>
    </div>

        <section class="gal-main-section">

            <h2 class="gal-section-heading">All Cars</h2>

        <div class="gal-grid">
            <CarImg  img={s} span="Range Rover Velar" />
            <CarImg  img={velar} span="Range Rover Velar" />
            <CarImg  img={mercedes} span="Range Rover Velar" />
            <CarImg  img={glc} span="Range Rover Velar" />
            <CarImg  img={bmw} span="Range Rover Velar" />
            <CarImg  img={c200} span="Range Rover Velar" />
            <CarImg  img={evouqe} span="Range Rover Velar" />
            <CarImg  img={c180} span="Range Rover Velar" />
            <CarImg  img={cap} span="Range Rover Velar" />
            <CarImg  img={jeep} span="Range Rover Velar" />
            <CarImg  img={tosan} span="Range Rover Velar" />
            <CarImg  img={cn7} span="Range Rover Velar" />
            <CarImg  img={rangler} span="Range Rover Velar" />
            <CarImg  img={captiva} span="Range Rover Velar" />
            <CarImg  img={cetro} span="Range Rover Velar" />
         

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
 
export default AllCars;
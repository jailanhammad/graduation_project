import React from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import bmw1 from "../assets/gallery/bmw1.png";
import bmw2 from "../assets/gallery/bmw2.png";
import bmw3 from "../assets/gallery/bmw3.png";
import m1 from "../assets/gallery/m1.png";
import m2 from "../assets/gallery/m2.png";
import m3 from "../assets/gallery/m3.png";
import r1 from "../assets/gallery/r1.png";
import r2 from "../assets/gallery/r2.png";
import r3 from "../assets/gallery/r3.png";
import h1 from "../assets/gallery/h1.png";
import h2 from "../assets/gallery/h2.png";
import h3 from "../assets/gallery/h3.png";
import t1 from "../assets/gallery/t1.png";
import t2 from "../assets/gallery/t2.png";
import t3 from "../assets/gallery/t3.png";

import Reviews from '../components/reviews';
import Footer from '../components/footer';
import CarImg from './carimg';
import { Link } from "react-router-dom";
import Nav from './nav';


const Exterior = () => {
    return (
        <>
        
<Nav />
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
        <button className="gal-filter-btn active">
        <Link to="/Exterior">Exterior</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Showroom">Showroom</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Tv-shows">Tv Shows</Link>
        </button>
    </nav>
    </div>

        <section class="gal-main-section">

            <h2 class="gal-section-heading">Exterior</h2>

        <div class="gal-grid">

            <CarImg  img={bmw1} span="Bmw 318" />
            <CarImg  img={bmw2} span="Bmw 318" />
            <CarImg  img={bmw3} span="Bmw 318" />

            <CarImg  img={m1} span="Mercedes C180" />
            <CarImg  img={m2} span="Mercedes C180" />
            <CarImg  img={m3} span="Mercedes C180" />

            <CarImg  img={h1} span="Elantra Cn7" />
            <CarImg  img={h2} span="Elantra Cn7" />
            <CarImg  img={h3} span="Elantra Cn7" />

            <CarImg  img={r1} span="Range Rover Evouqe" />
            <CarImg  img={r2} span="Range Rover Evouqe" />
            <CarImg  img={r3} span="Range Rover Evouqe" />

            <CarImg  img={t1} span="Hyundai Tucson" />
            <CarImg  img={t2} span="Hyundai Tucson" />
            <CarImg  img={t3} span="Hyundai Tucson" />

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
 
export default Exterior;
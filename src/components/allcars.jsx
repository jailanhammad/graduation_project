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
import { Link } from "react-router-dom";


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
        <button className="gal-filter-btn active">
        <Link to="/Gallery">All Cars</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Interior">Interior</Link>
        </button>
        <button className="gal-filter-btn">
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

            <h2 class="gal-section-heading">All Cars</h2>

        <div class="gal-grid">
            <CarImg  img={s} span="Mercedes S450" />
            <CarImg  img={velar} span="Range Rover Velar" />
            <CarImg  img={mercedes} span="Mercedes C180" />
            <CarImg  img={glc} span="Glc 200" />
            <CarImg  img={bmw} span="Bmw 318" />
            <CarImg  img={c200} span="Mercedes C200" />
            <CarImg  img={evouqe} span="Range Rover Evouqe" />
            <CarImg  img={c180} span="Mercedes C180" />
            <CarImg  img={cap} span="Mercedes C180 Cabriolet" />
            <CarImg  img={jeep} span="Jeep Grand Cherokkee" />
            <CarImg  img={tosan} span="Hyundai Tucson" />
            <CarImg  img={cn7} span="Elantra Cn7" />
            <CarImg  img={rangler} span="Jeep Wrangler" />
            <CarImg  img={captiva} span="Chevrolet Captiva" />
            <CarImg  img={cetro} span="Cetroen C5" />
         

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
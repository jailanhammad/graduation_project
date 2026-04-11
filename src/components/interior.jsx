import React from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";
import img7 from "../assets/gallery/img7.png";
import img8 from "../assets/gallery/img8.png";
import img9 from "../assets/gallery/img9.png";
import in1 from "../assets/gallery/in1.png";
import in2 from "../assets/gallery/in2.png";
import in3 from "../assets/gallery/in3.png";
import img13 from "../assets/gallery/img13.png";
import img14 from "../assets/gallery/img14.png";
import img15 from "../assets/gallery/img15.png";

import Reviews from '../components/reviews';
import Footer from '../components/footer';
import CarImg from './carimg';
import { Link } from "react-router-dom";
import Nav from './nav';


const Interior = () => {
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
        <button className="gal-filter-btn active">
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

            <h2 class="gal-section-heading">Interior</h2>

        <div class="gal-grid">
            <CarImg  img={img1} span="Mercedes C200" />
            <CarImg  img={img2} span="Mercedes C200" />
            <CarImg  img={img3} span="Mercedes C200" />

            <CarImg  img={img4} span="Range Rover Evouqe" />
            <CarImg  img={img5} span="Range Rover Evouqe" />
            <CarImg  img={img6} span="Range Rover Evouqe" />

            <CarImg  img={img7} span="Mercedes C180" />
            <CarImg  img={img8} span="Mercedes C180" />
            <CarImg  img={img9} span="Mercedes C180" />

            <CarImg  img={in1} span="Mercedes CLA200" />
            <CarImg  img={in2} span="Mercedes CLA200" />
            <CarImg  img={in3} span="Mercedes CLA200" />

            <CarImg  img={img13} span="Hyundai Tucson" />
            <CarImg  img={img14} span="Hyundai Tucson" />
            <CarImg  img={img15} span="Hyundai Tucson" />

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
 
export default Interior;
import React from 'react';
import './allcars.css';
import hero from "../assets/gallery/back.svg";
import video from '../assets/gallery/Hammad Video.mp4';
import img from "../assets/gallery/front.png";
import thumb from "../assets/gallery/thumb.png";

import tv1 from "../assets/gallery/tv1.png";
import tv2 from "../assets/gallery/tv2.png";
import tv3 from "../assets/gallery/tv3.png";
import tv4 from "../assets/gallery/tv4.png";
import videoo from "../assets/vd.mp4";

import Reviews from '../components/reviews';
import Footer from '../components/footer';
import { Link } from "react-router-dom";
import Nav from './nav';


const Tvshows = () => {
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
        <button className="gal-filter-btn">
        <Link to="/Exterior">Exterior</Link>
        </button>
        <button className="gal-filter-btn">
        <Link to="/Showroom">Showroom</Link>
        </button>
        <button className="gal-filter-btn active">
        <Link to="/Tv-shows">Tv Shows</Link>
        </button>
    </nav>
    </div>

        <section class="gal-main-section">

            <h2 class="gal-section-heading">Tv Shows</h2>


            <div className="gallery-content">

<div className="gallery-top">
  <img src={tv1} alt="gallery" />
  <img src={tv2} alt="gallery" />
</div>

<div className="gallery-top">
  <img src={tv3} alt="gallery" />
  <img src={tv4} alt="gallery" />
</div>

<p className="gallery-text">
  A special media appearance on ON TV featuring Mr. Mahmoud Hammad,
  owner of Hammad Motors, in conversation with TV host Ahmed Salem,
  discussing the automotive market in Egypt and the role of Hammad Motors
  in delivering exceptional automotive experiences to customers.
</p>

<div class="gal-video-wrapper">
<video controls poster={thumb} class="gal-video-player">
  <source src={videoo} type="video/mp4"/>
</video>  
</div>


<a 
  href="https://www.youtube.com/watch?v=o5MzxZ5xf9w&t=1s" 
  target="_blank" 
  rel="noopener noreferrer"
  className="video-link"
>
Watch Full Video on YouTube
</a>

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
 
export default Tvshows;
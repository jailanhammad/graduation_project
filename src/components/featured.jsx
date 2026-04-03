import React from 'react';
import { Link } from "react-router-dom";
import './featured.css';
import next from "../assets/home/next.svg";
import mercedes from "../assets/vehicles/mercedes.svg";
import rover from "../assets/vehicles/rover.svg";
import c180 from "../assets/vehicles/c180.svg";
import bmw from "../assets/vehicles/318.svg";

const Featured = () => {
    return ( 
        <>
        
        <section class="featured-vehicles">

        <div class="section-header-0">
            <h2 class="section-title">Featured Vehicles</h2>
            <div className='view-2'>
            <a href="#" class="view-all-2">
            <Link to="/Vehicles">View All Inventory</Link>
            <i class="fas fa-arrow-right"></i></a>
            <img src={next}  className='next-icon'/>
            </div>
        </div>

    <div class="container-3">

        <div class="vehicle-grid-2">

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={mercedes} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                    <h3>Mercedes C180 2023</h3>
                    <div class="specs">
                        <span>50,000 km</span>  <br />
                        <span>Avantgarde Plus</span>  <br />
                        <span>Automatic</span>  <br />
                    </div>
                    <div class="price-row">
                        <span class="price">2,800,000 LE</span>
                    </div>
                    <a href="#" class="view-details-btn-2">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={rover} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                <h3>Range Rover Evouqe 2020</h3>
                    <div class="specs">
                        <span>70,000 km</span>  <br />
                        <span>P200 SE</span>  <br />
                        <span>Automatic</span>  <br />
                    </div>
                    <div class="price-row">
                        <span class="price">2,600,000 LE</span>
                    </div>
                    <a href="#" class="view-details-btn-2">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={c180} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                <h3>Mercedes C180 2018</h3>
                    <div class="specs">
                        <span>120,000 km</span>  <br />
                        <span>Avantgarde Plus</span>  <br />
                        <span>Automatic</span>  <br />
                    </div>
                    <div class="price-row">
                        <span class="price">1,950,000 LE</span>
                    </div>
                    <a href="#" class="view-details-btn-2">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={bmw} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                <h3>Bmw 318 2018</h3>
                    <div class="specs">
                        <span>100,000 km</span>  <br />
                        <span>Luxury</span>  <br />
                        <span>Automatic</span>  <br />
                    </div>
                    <div class="price-row">
                        <span class="price">1,350,000 LE</span>
                    </div>
                    <a href="#" class="view-details-btn-2">View Details</a>
                </div>
            </div>

        </div> 

    </div> 
        </section>
        
        
        
        
        
        </>
     );
}
 
export default Featured;
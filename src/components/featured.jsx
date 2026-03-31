import React from 'react';
import './featured.css';
import img1 from "../assets/home/img1.svg";
import img2 from "../assets/home/img2.svg";
import img3 from "../assets/home/img3.svg";
import img4 from "../assets/home/img4.svg";
import next from "../assets/home/next.svg";

const Featured = () => {
    return ( 
        <>
        
        <section class="featured-vehicles">

        <div class="section-header">
            <h2 class="section-title">Featured Vehicles</h2>
            <div className='view'>
            <a href="#" class="view-all">View All Inventory <i class="fas fa-arrow-right"></i></a>
            <img src={next}  className='next-icon'/>
            </div>
        </div>

    <div class="container-3">

        <div class="vehicle-grid-2">

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={img1} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                    <h3>Porsche 911 GT3 RS</h3>
                    <div class="specs">
                        <span>3.8s 0-60</span> | 
                        <span>520 HP</span> | 
                        <span>Automatic</span>
                    </div>
                    <div class="price-row">
                        <span class="price">$225,000</span>
                    </div>
                    <a href="#" class="view-details-btn">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={img2} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                    <h3>Mercedes-AMG GT</h3>
                    <div class="specs">
                        <span>3.7s 0-60</span> | 
                        <span>523 HP</span> | 
                        <span>Automatic</span>
                    </div>
                    <div class="price-row">
                        <span class="price">$145,000</span>
                    </div>
                    <a href="#" class="view-details-btn">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={img3} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                    <h3>Audi RS e-tron GT</h3>
                    <div class="specs">
                        <span>3.1s 0-60</span> | 
                        <span>637 HP</span> | 
                        <span>Electric</span>
                    </div>
                    <div class="price-row">
                        <span class="price">$139,900</span>
                    </div>
                    <a href="#" class="view-details-btn">View Details</a>
                </div>
            </div>

            <div class="vehicle-card">
                <div class="card-image-wrap">
                <img src={img4} className='vehicle-img' alt="Porsche 911 GT3 RS" />
                </div>
                <div class="card-content">
                    <h3>Porsche 911 GT3 RS</h3>
                    <div class="specs">
                        <span>3.8s 0-60</span> | 
                        <span>520 HP</span> | 
                        <span>Automatic</span>
                    </div>
                    <div class="price-row">
                        <span class="price">$225,000</span>
                    </div>
                    <a href="#" class="view-details-btn">View Details</a>
                </div>
            </div>

        </div> 

    </div> 
        </section>
        
        
        
        
        
        </>
     );
}
 
export default Featured;
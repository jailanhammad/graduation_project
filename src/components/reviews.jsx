import React from 'react';
import './reviews.css';
import revpic from "../assets/home/rev-pic.svg";
import white from "../assets/home/white-arrow.svg";
import black from "../assets/home/black-arrow.svg";

const Reviews = () => {
    return ( 
        <>
        
        
        
        
        <section class="reviews-section">
    <div class="responsive-container">
        <div class="reviews-header">
            <div class="header-text">
                <span class="sub-label">CUSTOMER REVIEWS</span>
                <h2 class="section-title-8">What our customers say</h2>
            </div>
            <div class="nav-arrows">
                <button class="arrow-btn-white">
                <i class="fas fa-arrow-left">
                <img src={white} alt="John Doe" class="white"/>
                </i>
                </button>
                <button class="arrow-btn-black">
                <i class="fas fa-arrow-right">
                <img src={black} alt="John Doe" class="black"/>
                </i>
                </button>
            </div>
        </div>

        <div class="reviews-grid">
            <div class="review-card">
                <div class="card-header">
                    <div class="user-info">
                        <img src={revpic} alt="John Doe" class="avatar"/>
                        <div class="name-stars">
                            <h3>John Doe</h3>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>
                    <i class="fas fa-quote-right quote-icon"></i>
                </div>
                <p class="review-text">
                    "Great service! The team was very professional and helped me find the perfect car for my needs. Highly recommended!"
                </p>
            </div>

            <div class="review-card">
                <div class="card-header">
                    <div class="user-info">
                        <img src={revpic} alt="John Doe" class="avatar"/>
                        <div class="name-stars">
                            <h3>John Doe</h3>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>
                    <i class="fas fa-quote-right quote-icon"></i>
                </div>
                <p class="review-text">
                    "Great service! The team was very professional and helped me find the perfect car for my needs. Highly recommended!"
                </p>
            </div>
        </div>

        <div class="view-all-container">
            <a href="#" class="view-all-link">View All <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</section>
        
        
        
        </>
     );
}
 
export default Reviews;
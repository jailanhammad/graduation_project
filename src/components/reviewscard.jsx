import React from 'react';
import './reviewscard.css';
import hero from "../assets/reviews/hero.svg";


const ReviewsCard = () => {
    return ( 
        <>
 
 <section class="reviews-hero">
    <div class="hero-overlay">
        <img src={hero} alt="hero-img" />
    </div>

    <div class="reviews-container">
        <div class="hero-content">
            <h1 class="hero-title">What Our Customers Say</h1>
            <p class="hero-subtitle">Real experiences. Real trust. Real results.</p>
        </div>

        <div class="average-rating">
            <span class="star-icon">★</span>
            <span class="rating-text">4.9 / 5 Average Rating</span>
            <p class="based-on">Based on 850+ Happy Customers</p>
        </div>

        <div class="rating-grid">
            <div class="rating-card">
                <span class="percentage">92%</span>
                <div class="stars">
                    ★★★★★
                </div>
            </div>

            <div class="rating-card">
                <span class="percentage">6%</span>
                <div class="stars">
                    ★★★★
                </div>
            </div>

            <div class="rating-card">
                <span class="percentage">2%</span>
                <div class="stars">
                    ★★★
                </div>
            </div>
        </div>
    </div>
</section>


        
 <section className="web-reviews-section">
    <div className="web-container">
        <div className="web-section-header">
            <span className="web-subtitle">Testimonials</span>
            <h2 className="web-title">What Our Clients Say</h2>
            <div className="web-underline"></div>
        </div>

        <div className="web-reviews-grid">
            {/* Review Card 1 */}
            <div className="web-review-card">
                <div className="web-quote-icon">"</div>
                <div className="web-rating">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="web-review-text">
                    "Finding a reliable car dealer was hard until I found Hammad Motors. The transparency and the quality of the BMW I bought exceeded my expectations."
                </p>
                <div className="web-client-info">
                    <img src="client1.jpg" alt="Client" className="web-client-img" />
                    <div>
                        <h4>Ahmed Mansour</h4>
                        <span>Business Owner</span>
                    </div>
                </div>
            </div>

            {/* Review Card 2 */}
            <div className="web-review-card featured">
                <div className="web-quote-icon">"</div>
                <div className="web-rating">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="web-review-text">
                    "The best installment plans in the market. I got my dream Mercedes with a very smooth process. Professional team and great after-sales service!"
                </p>
                <div className="web-client-info">
                    <img src="client2.jpg" alt="Client" className="web-client-img" />
                    <div>
                        <h4>Sarah Al-Fayed</h4>
                        <span>Interior Designer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</section>
        

<section class="web-review-form-section">
    <div class="web-form-container">
        <div class="web-form-header">
            <h2>Tell us about your experience</h2>
            <p>Your feedback helps us maintain the Hammad Motors excellence.</p>
        </div>

        <form class="web-experience-form">
            <div class="web-form-row">
                <div class="web-input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required/>
                </div>
                <div class="web-input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="email@example.com" required/>
                </div>
            </div>

            <div class="web-input-group">
                <label>How would you rate your experience?</label>
                <div className="web-star-rating">
                    <input type="radio" name="rating" id="star5" /> <label htmlFor="star5">★</label>
                    <input type="radio" name="rating" id="star4" /> <label htmlFor="star4">★</label>
                    <input type="radio" name="rating" id="star3" /> <label htmlFor="star3">★</label>
                    <input type="radio" name="rating" id="star2" /> <label htmlFor="star2">★</label>
                    <input type="radio" name="rating" id="star1" /> <label htmlFor="star1">★</label>
                </div>
            </div>

            <div class="web-input-group">
                <label>Your Review</label>
                <textarea rows="5" placeholder="Share the details of your experience with our cars or service..."></textarea>
            </div>

            <div class="web-input-group">
                <label>Add a Photo (Optional)</label>
                <div class="web-file-upload">
                    <input type="file" id="review-photo" hidden/>
                    <label for="review-photo" class="web-file-label">
                        <span>+</span> Upload Image
                    </label>
                </div>
            </div>

            <button type="submit" class="web-submit-btn">Submit Review</button>
        </form>
    </div>
</section>




        
        </>
     );
}
 
export default ReviewsCard;
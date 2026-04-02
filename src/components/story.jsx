import React from 'react';
import './story.css';
import hammad from "../assets/about/hammad.svg";

import mission from "../assets/about/mission.svg";
import vision from "../assets/about/vision.svg";


const Story = () => {
    return ( 
        <>
        <section class="story-section">
    <div class="responsive-container">
        <div class="story-top-grid">
            <div class="story-content">
                <span class="sub-label">OUR STORY</span>
                <h2 class="main-headline">We Are The Best <br/> In The Auto World</h2>
                
                <div class="story-text">
                    <p><strong>Mr. Mahmoud Hammad</strong> is the founder and visionary leader of Hammad Motors. With over 28 years of experience in the automotive market, he built the company on trust, integrity, and long-term customer relationships.</p>
                    <p>Established in 1998, Hammad Motors has grown from a small local dealership to a premier destination for luxury and performance vehicles.</p>
                </div>

                <div class="stats-row">
                    <div class="stat-box">
                        <span class="stat-number">50k+</span>
                        <span class="stat-desc">Cars Sold</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-number">30+</span>
                        <span class="stat-desc">Years of Experience</span>
                    </div>
                </div>
            </div>

            <div class="story-image-wrapper">
                <img src={hammad} alt="Mr. Mahmoud Hammad" class="founder-img"/>
            </div>
        </div>

        <div class="mission-vision-grid">
            <div class="mv-card">
                <div class="icon-circle"><i class="fas fa-bullseye">
                <img src={mission}/>

                </i></div>
                <h3>Our Mission</h3>
                <p>To provide high-quality vehicles at competitive prices while ensuring a seamless and transparent buying experience for every customer.</p>
            </div>
            <div class="mv-card">
                <div class="icon-circle"><i class="fas fa-eye">
                <img src={vision}/>
                </i></div>
                <h3>Our Vision</h3>
                <p>To be the most trusted and respected car dealership in the region, known for our integrity, innovation, and customer-centric approach.</p>
            </div>
        </div>
    </div>
</section>
        
        </>
     );
}
 
export default Story;
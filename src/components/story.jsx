import React from 'react';
import './story.css';
import hammad from "../assets/about/hammad.svg";

import mission from "../assets/about/mission.svg";
import vision from "../assets/about/vision.svg";
import DotField from './DotField';


const Story = () => {
    return ( 
        <>


<section className="story-section" style={{ position: 'relative', overflow: 'hidden'}}>
  
  <div style={{ 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    zIndex: 1 
  }}>
    <DotField
      dotRadius={1.5}
      dotSpacing={14}
      bulgeStrength={67}
      glowRadius={160}
      sparkle={false}
      waveAmplitude={0}
      cursorRadius={500}
      cursorForce={0.1}
      bulgeOnly
      gradientFrom="#4f0003"
      gradientTo="#ff0000"
      glowColor="#410101"
    />
  </div>

  {/* ٢. المحتوى فوق الخلفية */}
  <div className="responsive-container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="story-top-grid">
      <div className="story-content">
        <span className="sub-label">OUR STORY</span>
        <h2 className="main-headline">We Are The Best <br/> In The Auto World</h2>
        
        <div className="story-text">
          <p><strong>Mr. Mahmoud Hammad</strong> is the founder and visionary leader of Hammad Motors. With over 28 years of experience in the automotive market, he built the company on trust, integrity, and long-term customer relationships.</p>
          <p>Established in 1998, Hammad Motors has grown from a small local dealership to a premier destination for luxury and performance vehicles.</p>
        </div>

        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-number">50k+</span>
            <span className="stat-desc">Cars Sold</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">30+</span>
            <span className="stat-desc">Years of Experience</span>
          </div>
        </div>
      </div>

      <div className="story-image-wrapper">
        <img src={hammad} alt="Mr. Mahmoud Hammad" className="founder-img"/>
      </div>
    </div>

    <div className="mission-vision-grid">
      <div className="mv-card">
        <div className="icon-circle">
          <img src={mission} alt="Mission icon"/>
        </div>
        <h3>Our Mission</h3>
        <p>To provide high-quality vehicles at competitive prices while ensuring a seamless and transparent buying experience for every customer.</p>
      </div>
      <div className="mv-card">
        <div className="icon-circle">
          <img src={vision} alt="Vision icon"/>
        </div>
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
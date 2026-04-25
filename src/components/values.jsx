import React from 'react';
import './values.css';
import trust from "../assets/about/trust.svg";
import trans from "../assets/about/trans.svg";
import inno from "../assets/about/inno.svg";
import quality from "../assets/about/quality.svg";
import customer from "../assets/about/customer.svg";
import ex from "../assets/about/ex.svg";
import DotField from './DotField';


const Values = () => {


    const values = [
        { title: "Trust", desc: "Trust has been the foundation of every deal we make.", icon: "fa-shield-alt" , img: trust},
        { title: "Transparency", desc: "Our customers deserve complete clarity before making any decision.", icon: "fa-eye" ,  img: trans},
        { title: "Innovation", desc: "AR experiences and smart platforms to redefine the car-buying journey.", icon: "fa-lightbulb" ,  img: inno },
        { title: "Quality", desc: "High standards of performance, safety, and value for our customers.", icon: "fa-folder-heart" ,  img: quality },
        { title: "Customer Focus", desc: "Your satisfaction is our top priority.", icon: "fa-users" ,  img: customer },
        { title: "Excellence", desc: "We strive for excellence in every detail.", icon: "fa-star" ,  img: ex }
      ];


    return (
        <>
        




    <section className="values-section" style={{ position: 'relative', overflow: 'hidden' }}>

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


      <div className="responsive-container-001">
        <h2 className="section-title-8">Our Values</h2>
        
        <div className="values-grid">
          {values.map((item, index) => (
            <div 
              className="value-card" 
              key={index} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="icon-circle">
                <i className={`fas ${item.icon}`}>
                <img src={item.img}/>
                </i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

        
        
        
        </>
      );
}
 
export default Values;
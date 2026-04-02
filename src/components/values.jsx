import React from 'react';
import './values.css';
import trust from "../assets/about/trust.svg";
import trans from "../assets/about/trans.svg";
import inno from "../assets/about/inno.svg";
import quality from "../assets/about/quality.svg";
import customer from "../assets/about/customer.svg";
import ex from "../assets/about/ex.svg";

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
        




    <section className="values-section">
      <div className="responsive-container">
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
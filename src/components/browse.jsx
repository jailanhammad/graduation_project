import React from 'react';
import './browse.css';
import suv from "../assets/home/suv.svg";
import sedan from "../assets/home/sedan.svg";
import hybrid from "../assets/home/hybrid.svg";
import convert from "../assets/home/convert.svg";
import hatchback from "../assets/home/hatchback.svg";
import { Link } from "react-router-dom";

const Browse = () => {



        const categories = [
          { name: 'SUV', count: 3, img: suv },
          { name: 'Sedan', count: 7, img: sedan },
          { name: 'Hatchback', count: 1, img: hybrid },
          { name: 'Hybrid', count: 0, img: convert },
          { name: 'Convertible', count: 3, img: hatchback },
        ];

    return ( 
        <>
        
        <section className="browse-section">
      <div className="container-4">
        <h2 className="section-title-4">Browse by Type</h2>
        
        <div className="type-grid">
          {categories.map((cat, index) => (
            <div 
              className="type-card" 
              key={index} 
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <img src={cat.img} alt={cat.name} className="type-bg" />
  
              <Link to="/Vehicles">

              <div className="type-overlay">
                <span className="car-count">{cat.count} Cars</span>
                <h3 className="car-name">{cat.name}</h3>
              </div>

              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
        
        
        
        </>
     );
}
 
export default Browse;

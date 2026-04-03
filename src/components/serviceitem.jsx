import React from 'react';
import './weoffer.css';
import car from '../assets/services/car.svg';
import settings from '../assets/services/settings.svg';
import insurance from '../assets/services/insurance.svg';


const ServiceItem = (props) => {
    return ( 
        <>
        
        
        <div className="hmo-card hmo-animate-fade-up" style={{ animationDelay: props.delay }}>
        {/* This div handles the image hover */}
        <div 
            className="hmo-hover-img" 
            style={{ backgroundImage: `url(${props.bgImg})` }}
        ></div>
        
        {/* This div handles the text/icon */}
        <div className="hmo-card-content">
            <div className="hmo-icon-circle">
                <i className={props.iconClass}>
                    <img src={props.img} />
                </i>
            </div>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
        
        </>
     );
}
 
export default ServiceItem;
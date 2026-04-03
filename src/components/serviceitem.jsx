import React from 'react';
import './weoffer.css';


const ServiceItem = (props) => {
    return ( 
        <>
        
        
        <div className="hmo-card hmo-animate-fade-up" style={{ animationDelay: props.delay }}>
        <div 
            className="hmo-hover-img" 
            style={{ backgroundImage: `url(${props.bgImg})` }}
        ></div>
        
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
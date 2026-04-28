import React from 'react';
import './weoffer.css';

const ServiceItem = (props) => {


    return ( 
        <div className="hmo-card hmo-animate-fade-up" style={{ animationDelay: props.delay }}>
            <div 
                className="hmo-hover-img" 
                style={{ 
                    backgroundImage: `url(${props.bgImg})`,
                    backgroundColor: '#1a1a1a' 
                }}
                onMouseEnter={(e) => {
                    const img = new Image();
                    img.src = props.bgImg;
                    img.onerror = () => { e.target.style.backgroundImage = `url(${props.fallbackBg})`; };
                }}
            ></div>
            
            <div className="hmo-card-content" style={{ textAlign: 'center' }}>
                <div className="hmo-icon-circle" style={{ margin: '0 auto 20px auto', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff' }}>
                    <img 
                        src={props.img} 
                        alt="" 
                        style={{ width: '35px', height: '35px', objectFit: 'contain' }}
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = props.fallbackIcon; 
                        }}
                    />
                </div>
                <h3 style={{ textAlign: 'center' }}>{props.title}</h3>
                <p style={{ textAlign: 'center' }}>{props.desc}</p>
            </div>
        </div>
    );
} 
export default ServiceItem;
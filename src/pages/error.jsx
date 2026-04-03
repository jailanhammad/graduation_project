import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
    return (


        <div className="hme-error-container">
            <div className="hme-error-content hms-reveal-up">
                <h1 className="hme-glitch">404</h1>
                <div className="hme-dead-end">
                    <span></span>
                    <h2>Engine Stall: Page Not Found</h2>
                    <span></span>
                </div>
                <p>
                    The road you're looking for doesn't exist or has been moved. 
                    Let's get you back on the right track.
                </p>
                
                <Link to="/" className="hme-back-home">
                    <button className="hms-btn-primary">Return to Showroom</button>
                </Link>
            </div>
            
            <div className="hme-bg-overlay"></div>
        </div>

        
    );
};

export default Error;
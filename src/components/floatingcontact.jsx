
import React, { useState } from 'react';
import './floatingcontact.css';
import mobile from "../assets/contact/mobile.svg";

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`floating-container ${isOpen ? 'open' : ''}`}>
            <div className="phone-menu">
                <a href="tel:0201000444401" className="phone-link">
                    01000444401
                </a>
                <a href="tel:0201000004471" className="phone-link">
                    01000004471
                </a>
            </div>

            <button 
                className="fab-button" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={mobile} alt="phone" className="fab-icon" />
            </button>
        </div>
    );
};

export default FloatingContact;
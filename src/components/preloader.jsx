import React, { useState, useEffect } from 'react';
import './preloader.css';
import logo from "../assets/home/logo.svg";


const Preloader = () => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        // This event fires when the ENTIRE page (images, CSS, etc.) is fully loaded
        window.addEventListener('load', () => {
            setShow(false);
        });

        // Fallback: If the page takes too long, hide it after 4 seconds anyway
        const backupTimer = setTimeout(() => {
            setShow(false);
        }, 4000);

        return () => {
            window.removeEventListener('load', () => setShow(false));
            clearTimeout(backupTimer);
        };
    }, []);

    if (!show) return null;

    return (
        <div className="preloader-overlay">
        <div className="loader-content">
        <img src={logo} className='logo-preloader'/>
           <h1 className='hammad-preloader'>HAMMAD MOTORS</h1>
            <div className="loader-bar">
                <div className="loader-progress"></div>
            </div>
        </div>
    </div>
    );
};

export default Preloader ;
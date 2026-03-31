import React from 'react';
import './carsection.css';
import car1 from "../assets/home/car1.svg";
import car2 from "../assets/home/car2.svg";

const Cars = () => {
    return (
        <>
    


<section className="cta-section">
    <div className="container-2">
        <div className="cta-card">
            <img src={car1} className='car-img' alt="Buy a car" />
            <div className="cta-overlay">
                <h3>Are You Looking <br/> For a Car?</h3>
                <p>We are committed to providing our customers with exceptional service.</p>
                <button className="cta-btn">
                    Get Started <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>

        <div className="cta-card">
            <img src={car2} className='car-img' alt="Sell a car" />
            <div className="cta-overlay">
                <h3 className='h3'>Do You Want to <br/> Sell a Car?</h3>
                <p>We are committed to providing our customers with exceptional service.</p>
                <button className="cta-btn">
                    Get Started <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    </div>
</section>



        </>
      );
}
 
export default Cars;
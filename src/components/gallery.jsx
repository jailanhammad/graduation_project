import React from 'react';
import './gallery.css';

import range1 from "../assets/home/range1.svg";
import range2 from "../assets/home/range2.svg";
import range3 from "../assets/home/range3.svg";
import range4 from "../assets/home/range4.svg";
import range5 from "../assets/home/range5.svg";
import range6 from "../assets/home/range6.svg";
import range7 from "../assets/home/range7.svg";
import range8 from "../assets/home/range8.svg";
import range9 from "../assets/home/range9.svg";
import range10 from "../assets/home/range10.svg";


const Gallery = () => {
    return ( 
        <>
        
        <section className="interior-360-section">
            <div className='gallery-section'>
            <h2 className="section-title-6">Gallery</h2>

            </div>

    <div className="container-6">

        <div className="viewer-window">
            <div className="panorama-loop">
                <div className="row-img">
                    <img src={range1} className='range' alt="1" />
                    <img src={range2} className='range' alt="2" />
                    <img src={range3} className='range' alt="3" />
                    <img src={range4} className='range' alt="4" />
                    <img src={range5} className='range' alt="5" />
                    <img src={range6} className='range' alt="6" />
                    <img src={range7} className='range' alt="7" />
                    <img src={range8} className='range' alt="8" />
                    <img src={range9} className='range' alt="9" />
                    <img src={range10} className='range' alt="10" />
                </div>
                <div className="row-img">
                    <img src={range1} className='range' alt="1" />
                    <img src={range2} className='range' alt="2" />
                    <img src={range3} className='range' alt="3" />
                    <img src={range4} className='range' alt="4" />
                    <img src={range5} className='range' alt="5" />
                    <img src={range6} className='range' alt="6" />
                    <img src={range7} className='range' alt="7" />
                    <img src={range8} className='range' alt="8" />
                    <img src={range9} className='range' alt="9" />
                    <img src={range10} className='range' alt="10" />
                </div>
            </div>
        </div>

        <p className="scroll-hint">360° Interactive Experience</p>
    </div>
</section>
        
        
        
        </>
     );
}
 
export default Gallery;
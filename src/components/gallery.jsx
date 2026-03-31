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
import back from "../assets/home/back.svg";
import back2 from "../assets/home/back2.svg";

const Gallery = () => {
    return ( 
        <>
        
        
        <section className="interior-360-section">
    <div className="container-6">
        <h2 className="section-title-6">Gallery</h2>

<div className="viewer-window">
            
{/* 
<div className='back-div'>

<img src={back} className='back'/>
<img src={back2} className='back2'/>

</div> */}

<div className="panorama-strip">

            <div className='row-img'>

                <img src={range1} alt="interior 1" className='range'/>
                <img src={range2} alt="interior 1" className='range'/>
                <img src={range3} alt="interior 1" className='range'/>
                <img src={range4} alt="interior 1" className='range'/>
                <img src={range5} alt="interior 1" className='range'/>
                <img src={range6} alt="interior 1" className='range'/>
                <img src={range7} alt="interior 1" className='range'/>
                <img src={range8} alt="interior 1" className='range'/>
                <img src={range9} alt="interior 1" className='range'/>
                <img src={range10} alt="interior 1" className='range'/>

            </div>

            </div>

        </div>

        <p className="scroll-hint">← Scroll to Explore Interior →</p>

    </div>
</section>
        
        
        
        
        </>
     );
}
 
export default Gallery;
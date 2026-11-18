import React from 'react';
import './carimg.css';

const CarImg = (props) => {
    return ( 
        <>
        
            <div class="gal-item">
                <img src={props.img} alt="Car"/>
                <div class="gal-overlay"><span className='span-text'>{props.span}</span></div>
            </div>
    
        
        </>
     );
}
 
export default CarImg;
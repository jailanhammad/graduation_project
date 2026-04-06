import React from 'react';
import './carcard.css'

const Carcard = (props) => {

    const getTagColor = () => {
        if (props.stock === "Sold Out") return "#ED1C24";
        if (props.stock === "used") return "#333";   
    };
    return (  
        <>
        

            
            <article class="hmv-car-card hmv-card-left">
                <div class="hmv-img-wrapper">
                    <img src={props.img} alt={props.alt} />
                    <span class="hmv-tag" style={{ backgroundColor: getTagColor() }}>{props.stock}</span>
                </div>
                <div class="hmv-car-details">
                    <h4>{props.carname} {props.carmodel} </h4>
                    <div class="hmv-spec-row">
                        <span><i class="fas fa-gas-pump"></i>{props.kilometer}</span>
                        <span><i class="fas fa-cog"></i>{props.category}</span>
                    </div>

                    <div class="hmv-action-row">
                        <a href="#" class="btn-outlined">{props.btn1}</a>
                        <a href="#" class="btn-outlined">{props.btn2}</a>
                    </div>
                </div>
            </article>


        </>
    );
}
 
export default Carcard;
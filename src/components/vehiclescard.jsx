import React from 'react';
import './vehiclescard.css'
import mercedes from "../assets/vehicles/mercedes.svg";

import Carcard from '../components/carcard';
import rover from "../assets/vehicles/rover.svg";
import c180 from "../assets/vehicles/c180.svg";
import bmw from "../assets/vehicles/318.svg";
import cn7 from "../assets/vehicles/cn7.svg";
import glc from "../assets/vehicles/glc.svg";
import tucson from "../assets/vehicles/tucson.svg";
import jeep from "../assets/vehicles/jeep.svg";

import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

const Vehiclescard = () => {
    return (  
        <>
        

<main class="hmv-page-wrapper">

<section class="hmv-featured-section">
    <div class="hmv-container">
        
        <div class="hmv-section-header hmv-animate-up">
            <h2>Featured Vehicles</h2>
            <div class="hmv-underline"></div>
        </div>


        <div class="hmv-vehicle-grid">



            <article class="hmv-car-card hmv-card-left">
            <Carcard 
            img={mercedes}
            alt="Mercedes C180 2023"
            stock="Used"
            carname="Mercedes C180 2023" 
            kilometer="50,000 km" 
            category="Avantgarde Plus"
            btn1="View Details"
            btn2="Test Drive"
            />
            </article>

            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={rover}
            alt="Range Rover Evouqe 2020"
            stock="Sold Out"
            carname="Range Rover Evouqe 2020" 
            kilometer="70,000 km" 
            category="P200 SE"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>


            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={c180}
            alt="Mercedes C180 2018"
            stock="Used"
            carname="Mercedes C180 2018" 
            kilometer="120,000 km" 
            category="Avantgarde Plus"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>


            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={bmw}
            alt="Bmw 318 2018"
            stock="Sold Out"
            carname="Bmw 318 2018" 
            kilometer="100,000 km" 
            category="Luxury"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>

            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={cn7}
            alt="Hyundai Elantra Cn7 2022"
            stock="Used"
            carname="Hyundai Elantra Cn7 2022" 
            kilometer="17,000 km" 
            category="Advanced"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>


            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={glc}
            alt="Glc 200 2020"
            stock="Used"
            carname="Glc 200 2020" 
            kilometer="90,000 km" 
            category="Dynamic"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>

            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={tucson}
            alt="Hyundai Tucson 2021"
            stock="Used"
            carname="Hyundai Tucson 2021" 
            kilometer="25,000 km" 
            category="Highline"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>

            <article class="hmv-car-card hmv-card-rotate-in">
            <Carcard
            img={jeep}
            alt="Jeep Wrangler 2011"
            stock="Sold Out"
            carname="Jeep Wrangler 2011" 
            kilometer="150,000 km" 
            category="Rubicon"
            btn1="View Details"
            btn2="Test Drive" 
            />
            </article>



        </div></div></section>

        

</main>     
        
        

<Whyus />
<Reviews />
<Footer />

             
        
        
        
        
        </>
    );
}
 
export default Vehiclescard;
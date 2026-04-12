import React from 'react';
import './installments.css';
import Nav from '../components/nav';

import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';


import hero from "../assets/installments/hero.svg";
import icon1 from "../assets/installments/icon1.svg";
import icon2 from "../assets/installments/icon2.svg";
import icon3 from "../assets/installments/icon3.svg";
import BankCard from '../components/bankcard';
import Steps from '../components/steps';

const Installments = () => {
    return ( 
<>
<div>

<Nav />


    <div className="home">

    <section className="hero">

        <div className="overlay">
        <img src={hero} alt="" className='hero-in' />

        </div>

        <div className="hero-content">
            <h1>Flexible Financing Solutions</h1>
            <p>
            Drive your dream car today with customized financing
            options designed for you
            </p>
        </div>

    </section>

      <section className="cards">


        <BankCard 
        img={icon1}
        title="Low Down Payment"
        paragraph="Start your journey with as little as 10% down"  
        list1="Flexible down payment options"
        list2="No hidden fees"
        list3="Transparent pricing"

        />
        <BankCard 
        img={icon2}
        title="Fast Approval"
        paragraph="Get pre-approved in minutes, not days"  
        list1="24-hour approval"
        list2="Digital documentation"
        list3="Instant decisions"

        />
        <BankCard 
        img={icon3}
        title="Flexible Terms"
        paragraph="Choose terms that fit your lifestyle"  
        list1="12-84 month terms"
        list2="Early payoff options"
        list3="Customizable payments"

        />

      </section>


      <Steps />

    </div>


<Whyus />
<Reviews />
<Footer />


</div>

</>


     );
}
 
export default Installments;
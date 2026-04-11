import React from 'react';
import './services.css';
import Serviceshero from '../components/serviceshero';
import Weoffer from '../components/weoffer';
import Sell from '../components/sell';
import Finance from '../components/finance';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import Nav from '../components/nav';


const Services = () => {


    return (  
        <>
        
        <Nav />
        <Serviceshero />
        <Weoffer />
        <Sell />
        <Finance />
        <Whyus />
        <Reviews />
        <Footer />


        
        </>
    );
}
 
export default Services;
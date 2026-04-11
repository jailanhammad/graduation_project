import React from 'react';
import './contact.css';
import Nav from '../components/nav';
import Contacthero from '../components/contacthero';
import Getintouch from '../components/getintouch';
import Map from '../components/map';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

const Contact = () => {
    return ( 
        <>
        
        
        <Nav />
        <Contacthero />
        <Getintouch />
        <Map />
        <Reviews />
        <Footer />
        
        
        
        </>
     );
}
 
export default Contact;
import React from 'react';
import './contact.css';
import ContactNav from '../components/contactnav';
import Contacthero from '../components/contacthero';
import Getintouch from '../components/getintouch';
import Map from '../components/map';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

const Contact = () => {
    return ( 
        <>
        
        
        <ContactNav />
        <Contacthero />
        <Getintouch />
        <Map />
        <Reviews />
        <Footer />
        
        
        
        </>
     );
}
 
export default Contact;
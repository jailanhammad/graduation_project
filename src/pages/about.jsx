import React from 'react';
import './about.css';
import AboutNav from '../components/aboutnav';
import Story from '../components/story';
import Values from '../components/values';
import Whysection from '../components/whysection';
import Reviews from '../components/reviews';
import Footer from '../components/footer';


const About = () => {
    return ( 
<>
<div>

<AboutNav />
<Story />
<Values />
<Whysection />
<Reviews />
<Footer />


</div>

</>


     );
}
 
export default About;
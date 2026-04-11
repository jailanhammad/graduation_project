import React from 'react';
import './about.css';
import Nav from '../components/nav';
import Story from '../components/story';
import Values from '../components/values';
import Whysection from '../components/whysection';
import Reviews from '../components/reviews';
import Footer from '../components/footer';


const About = () => {
    return ( 
<>
<div>

<Nav />
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
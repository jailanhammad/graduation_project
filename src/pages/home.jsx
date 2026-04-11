import React from 'react';
import './home.css';
import Nav from '../components/nav';
import Search from '../components/search';
import Cars from '../components/carsection';
import Featured from '../components/featured';
import Browse from '../components/browse';
import Gallery from '../components/gallery';
import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';
import Hero from '../components/hero';

const Home = () => {
    return ( 
<>
<div>

<Nav />
<Hero />
<Search />
<Cars />
<Featured />
<Browse />
<Gallery />
<Whyus />
<Reviews />
<Footer />


</div>

</>


     );
}
 
export default Home;
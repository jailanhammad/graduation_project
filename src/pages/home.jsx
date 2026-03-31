import React from 'react';
import './home.css';
import Nav from '../components/nav';
import Search from '../components/search';
import Cars from '../components/carsection';

const Home = () => {
    return ( 
<>
<div>

<Nav />
<Search />
<Cars />

</div>

</>


     );
}
 
export default Home;
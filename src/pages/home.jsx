import React from 'react';
import './home.css';
import Nav from '../components/nav';
import Search from '../components/search';
import Cars from '../components/carsection';
import Featured from '../components/featured';

const Home = () => {
    return ( 
<>
<div>

<Nav />
<Search />
<Cars />
<Featured />

</div>

</>


     );
}
 
export default Home;
import React from 'react';
import './home.css';
import Nav from '../components/nav';
import Search from '../components/search';
import Cars from '../components/carsection';
import Featured from '../components/featured';
import Browse from '../components/browse';

const Home = () => {
    return ( 
<>
<div>

<Nav />
<Search />
<Cars />
<Featured />
<Browse />

</div>

</>


     );
}
 
export default Home;
import React from 'react';
import './vehicles.css';
import Vehicleshero from '../components/vehicleshero';
import Vehiclescard from '../components/vehiclescard';
import Nav from '../components/nav';

const Vehicles = () => {
    return (
        <>

        <Nav />
        <Vehicleshero />
        <Vehiclescard />
        
        
        </>
      );
}
 
export default Vehicles;
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import Carcard from './carcard'; 
import Whyus from './whyus';
import Reviews from './reviews';
import Footer from './footer';
import './vehiclescard.css';

const Vehiclescard = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCars();
    }, []);

    async function fetchCars() {
        setLoading(true);
        const { data, error } = await supabase
            .from('vehiclescards')
            .select('*');
        
        if (error) {
            console.error('Supabase Error:', error.message);
        } else {
            setCars(data);
        }
        setLoading(false);
    }

    return (
        <>
        <main className="hmv-page-wrapper">
            <section className="hmv-featured-section">
                <div className="hmv-container">
                    <div className="hmv-section-header hmv-animate-up">
                        <h2>Featured Vehicles</h2>
                        <div className="hmv-underline"></div>
                    </div>

                    <div className="hmv-vehicle-grid">
                        {loading ? (
                            <p>Loading Inventory...</p>
                        ) : (
                            cars.map((car) => (
                                <Carcard 
                                    key={car.id}
                                    img={car.thumbnail_url} 
                                    alt={car.name_en}
                                    stock={car.is_instock ? car.condition_en : "Sold Out"}
                                    carname={car.name_en}
                                    carmodel={car.year}
                                    kilometer={`${car.mileage?.toLocaleString()} km`} 
                                    category={car.category}
                                    btn1="View Details"
                                    btn2="Test Drive"
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>
            
       
        </main>

            <Whyus />
            <Reviews />
            <Footer />
            </>
    );
}

export default Vehiclescard;
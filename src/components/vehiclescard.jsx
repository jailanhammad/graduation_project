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
    const [fetchError, setFetchError] = useState(null); 

    useEffect(() => {
        fetchCars();
    }, []);

    async function fetchCars() {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('vehiclescards')
                .select('*')
                .order('created_at', { ascending: false }); 
            
            if (error) throw error;
            setCars(data);
        } catch (error) {
            setFetchError('Could not fetch vehicles. Please try again later.');
            console.error('Supabase Error:', error.message);
        } finally {
            setLoading(false);
        }
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

                    {fetchError && <p className="hmv-error-msg">{fetchError}</p>}

                    <div className="hmv-vehicle-grid">
                        {loading ? (
                            <div className="hmv-skeleton-loader">Loading Hammad Motors...</div>
                        ) : (
                            cars.map((car) => (
                                <Carcard 
                                    key={car.id}
                                    img={car.thumbnail_url} 
                                    alt={car.name_en}
                                    stock={!car.is_instock ? "Sold Out" : car.condition_en}
                                    carname={car.name_en}
                                    carmodel={car.year}
                                    kilometer={`${car.mileage?.toLocaleString()} km`} 
                                    category={car.category}
                                    price={`${car.price?.toLocaleString()} EGP`}
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






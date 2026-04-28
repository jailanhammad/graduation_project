import React, { useState, useEffect } from 'react';
import './contacthero.css';
import { supabase } from '../supabase';
import Particles from './Particles';

const Contacthero = () => {
    const [data, setData] = useState({});
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');

    const fetchHeroData = async (currentLang) => {
        const { data: dbData, error } = await supabase
            .from('contact_hero')
            .select(`en_title, ar_title, en_desc, ar_desc`)
            .eq('key', 'hero')
            .single();

        if (!error && dbData) {
            setData({
                title: dbData[`${currentLang}_title`],
                desc: dbData[`${currentLang}_desc`]
            });
        }
    };

    useEffect(() => {
        fetchHeroData(lang);
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
            fetchHeroData(newLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, [lang]);

    return ( 
        <section className="contact-hero">
            <div className="hero-overlay">
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <Particles
                        particleColors={["#ff0000"]}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation={false}
                        pixelRatio={1}
                    />
                </div>
            </div>
            <div className="hero-content">
                <h1 className="animate-up">{data.title}</h1>
                <p className="animate-up delay-1">{data.desc}</p>
            </div>
        </section>
    );
}

export default Contacthero;
import React, { useState, useEffect } from 'react';
import './values.css';
import { supabase } from '../supabase';
import trust from "../assets/about/trust.svg";
import trans from "../assets/about/trans.svg";
import inno from "../assets/about/inno.svg";
import quality from "../assets/about/quality.svg";
import customer from "../assets/about/customer.svg";
import ex from "../assets/about/ex.svg";
import DotField from './DotField';

const Values = () => {
    const [valuesData, setValuesData] = useState([]);
    const [loading, setLoading] = useState(true);

    const iconImages = { v1: trust, v2: trans, v3: inno, v4: quality, v5: customer, v6: ex };

    const fetchValues = async () => {
        const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        
        const { data, error } = await supabase
            .from('values_v2')
            .select(`key, ${currentLang}_title, ${currentLang}_desc, icon_name`)
            .order('id', { ascending: true });

        if (!error && data) {
            const formattedData = data.map(item => ({
                title: item[`${currentLang}_title`],
                desc: item[`${currentLang}_desc`],
                icon: item.icon_name,
                img: iconImages[item.key]
            }));
            setValuesData(formattedData);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchValues();

        const observer = new MutationObserver(() => {
            fetchValues();
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    if (loading) return null;

    return (
        <>
            <section className="values-section" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <DotField
                        dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={160}
                        sparkle={false} waveAmplitude={0} cursorRadius={500} cursorForce={0.1}
                        bulgeOnly gradientFrom="#4f0003" gradientTo="#ff0000" glowColor="#410101"
                    />
                </div>

                <div className="responsive-container-001" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 className="section-title-8">
                        {document.documentElement.dir === 'rtl' ? 'قيمنا' : 'Our Values'}
                    </h2>
                    
                    <div className="values-grid">
                        {valuesData.map((item, index) => (
                            <div 
                                className="value-card" 
                                key={index} 
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="icon-circle">
                                    <i className={`fas ${item.icon}`}>
                                        <img src={item.img} alt={item.title} />
                                    </i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Values;
import React, { useState, useEffect } from 'react';
import './whysection.css';
import { supabase } from '../supabase';
import offers from "../assets/about/offers.svg";
import price from "../assets/about/price.svg";
import daimond from "../assets/about/daimond.svg";
import car from "../assets/about/car.svg";

const Whysection = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchWhyData = async () => {
        const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        const { data: dbData, error } = await supabase
            .from('why_choose_us_v2')
            .select(`key, ${currentLang}_title, ${currentLang}_desc`);

        if (!error && dbData) {
            const transMap = {};
            dbData.forEach(item => {
                transMap[item.key] = {
                    title: item[`${currentLang}_title`],
                    desc: item[`${currentLang}_desc`]
                };
            });
            setData(transMap);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchWhyData();
        const observer = new MutationObserver(() => fetchWhyData());
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, []);

    if (loading) return null;

    return ( 
        <section className="benefits-section">
            <div className="responsive-container">
                <div className="benefits-header">
                    <span className="sub-label">{data.header?.desc}</span>
                    <h2 className="section-title">{data.header?.title}</h2>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <i className="fas fa-percentage"><img src={offers} alt="offers" /></i>
                        </div>
                        <div className="benefit-info">
                            <h3>{data.item1?.title}</h3>
                            <p>{data.item1?.desc}</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <i className="fas fa-tag"><img src={price} alt="price" /></i>
                        </div>
                        <div className="benefit-info">
                            <h3>{data.item2?.title}</h3>
                            <p>{data.item2?.desc}</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <i className="fas fa-handshake"><img src={daimond} alt="trust" /></i>
                        </div>
                        <div className="benefit-info">
                            <h3>{data.item3?.title}</h3>
                            <p>{data.item3?.desc}</p>
                        </div>
                    </div>

                    <div className="benefit-item">
                        <div className="benefit-icon">
                            <i className="fas fa-user-heart"><img src={car} alt="service" /></i>
                        </div>
                        <div className="benefit-info">
                            <h3>{data.item4?.title}</h3>
                            <p>{data.item4?.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whysection;
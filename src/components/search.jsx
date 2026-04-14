import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import './search.css';
import searchIcon from "../assets/home/search.svg";
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

const Search = () => {
    const { isArabic } = useLanguage();
    
    const [allData, setAllData] = useState([]); 
    const [results, setResults] = useState([]); 
    const [loading, setLoading] = useState(false);

    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [condition, setCondition] = useState("all");

    const handleSearch = async () => {
        setLoading(true);
        try {
            let query = supabase.from('vehiclescards').select('*');
    
            if (selectedMake) {
                query = query.or(`name_en.ilike.%${selectedMake}%,name_ar.ilike.%${selectedMake}%`);
            }
            if (selectedModel) {
                query = query.or(`name_en.ilike.%${selectedModel}%,name_ar.ilike.%${selectedModel}%`);
            }
    
            if (condition === "new") {
                query = query.eq('condition_en', 'zero'); 
            } else if (condition === "used") {
                query = query.eq('condition_en', 'used');
            }
    
            const { data, error } = await query;
            if (error) throw error;
    
            setResults(data); 
            
            if(data.length > 0) {
                window.scrollTo({ top: 800, behavior: 'smooth' });
            }
            
        } catch (err) {
            console.error("Search Error:", err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchDefinitions = async () => {
            const { data } = await supabase.from('car_definitions').select('*');
            if (data) setAllData(data);
        };
        fetchDefinitions();
    }, []);

    const uniqueMakes = [...new Set(allData.map(item => isArabic ? item.make_ar : item.make_en))];

    const availableModels = allData.filter(item => 
        (isArabic ? item.make_ar : item.make_en) === selectedMake
    );

    return (
        <div className="search-section">
            <div className="filter-tabs-09">
                {["all", "new", "used"].map(type => (
                    <button 
                        key={type}
                        className={condition === type ? "tab-active-09" : "tab-09"} 
                        onClick={() => setCondition(type)}
                    >
                        {isArabic ? (type === "all" ? "الكل" : type === "new" ? "زيرو" : "مستعمل") : type.toUpperCase()}
                    </button>
                ))}
            </div>

            <div className='row'>
                <div className="search-item">
                    <label>{isArabic ? "الماركة" : "MAKE"}</label>
                    <select value={selectedMake} onChange={(e) => {setSelectedMake(e.target.value); setSelectedModel("");}}>
                        <option value="">{isArabic ? "اختر الماركة" : "Select Make"}</option>
                        {uniqueMakes.map(make => <option key={make} value={make}>{make}</option>)}
                    </select>
                </div>

                <div className="search-item">
                    <label>{isArabic ? "الموديل" : "MODEL"}</label>
                    <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={!selectedMake}>
                        <option value="">{isArabic ? "اختر الموديل" : "Select Model"}</option>
                        {availableModels.map(item => (
                            <option key={item.id} value={isArabic ? item.model_ar : item.model_en}>
                                {isArabic ? item.model_ar : item.model_en}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="search-item">
                    <label>{isArabic ? "السنة" : "YEAR"}</label>
                    <p className="value">2020 - 2026</p>
                </div>

                <button className="search-btn" onClick={handleSearch}>
                    <img src={searchIcon} className="search-icon-img" alt="search" />
                    {isArabic ? "بحث" : "SEARCH"}
                </button>
            </div>

        

<div className="results-grid-container">
    {loading && <p>Searching for your car...</p>}
    
    <div className="cars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {results.map((car) => (
            <Link 
                to={`/Vehicles/${car.id}`} 
                key={car.id} 
                style={{ textDecoration: 'none' }}
            >
                <div className="car-card" style={{ background: '#fff', padding: '15px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
                    <img src={car.thumbnail_url} alt={car.name_en} style={{ width: '100%', borderRadius: '10px' }} />
                    
                    <div className="car-info" style={{ color: '#000', marginTop: '10px' }}>
                        <h3 style={{ fontSize: '18px' }}>
                            {isArabic ? car.name_ar : car.name_en}
                        </h3>
                        <p className="price" style={{ fontWeight: 'bold', color: '#d32f2f' }}>
                            {car.price} EGP
                        </p>
                        <div className="car-tags" style={{ display: 'flex', gap: '10px', fontSize: '12px', color: '#666' }}>
                            <span>{car.year}</span>
                            <span>{isArabic ? car.condition_ar : car.condition_en}</span>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>

    {!loading && results.length === 0 && selectedMake && (
        <p className="no-results" style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>No cars found matching your search.</p>
    )}
</div>
        </div>
    );
}

export default Search;
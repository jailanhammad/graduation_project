import React from 'react';
import './search.css';
import search from "../assets/home/search.svg";

const Search = () => {
    return (
        <>
        
        <div class="search-section">
    <div class="filter-tabs">
        <button class="tab active">All</button>
        <button class="tab">New</button>
        <button class="tab">Used</button>
    </div>

<div className='row'>
    
<div class="search-item">
            <label>Select Makes</label>
            <div class="select-wrapper">
                <select>
                    <option>Audi</option>
                </select>
                <i class="fas fa-chevron-down"></i>
            </div>
</div>


<div class="search-item">
            <label>Select Models</label>
            <div class="select-wrapper">
                <select>
                    <option>Q7</option>
                </select>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>

        <div class="search-item">
            <label>Year</label>
            <p class="value">0 - 2024</p>
        </div>

        <div class="search-item">
            <label>Select Price</label>
            <p class="value">All Prices</p>
        </div>

        <button class="search-btn">
            <img src={search}  className='search-icon' />
            <i class="fas fa-search"></i> Search
        </button>



</div>
    </div>
        
        
        
        
        
        </>
      );
}
 
export default Search;

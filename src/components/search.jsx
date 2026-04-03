import React from 'react';
import './search.css';
import search from "../assets/home/search.svg";
import { useLanguage } from '../LanguageContext';

const Search = () => {


    const { isArabic } = useLanguage();
    
    const t = {
        all: isArabic ? "الكل" : "All",
        new: isArabic ? "جديد" : "New",
        used: isArabic ? "مستعمل" : "Used",
        makes: isArabic ? "اختر الماركة" : "Select Makes",
        models: isArabic ? "اختر الموديل" : "Select Models",
        year: isArabic ? "السنة" : "Year",
        price: isArabic ? "اختر السعر" : "Select Price",
        allprices: isArabic ? "كل الأسعار" : "All Prices",
        searchbtn: isArabic ? "بحث" : "Search",
        audi: isArabic ? "أودي" : "Audi",
        q7: isArabic ? "كيو 7" : "Q7"
    };

    
    return (
        <>
        
        <div class="search-section">
    <div class="filter-tabs">
        <button class="tab active">{t.all}</button>
        <button class="tab">{t.new}</button>
        <button class="tab">{t.used}</button>
    </div>

<div className='row'>
    
<div class="search-item">
            <label>{t.makes}</label>
            <div class="select-wrapper">
                <select>
                    <option>{t.audi}</option>
                </select>
                <i class="fas fa-chevron-down"></i>
            </div>
</div>


<div class="search-item">
            <label>{t.models}</label>
            <div class="select-wrapper">
                <select>
                    <option>{t.q7}</option>
                </select>
                <i class="fas fa-chevron-down"></i>
            </div>
        </div>

        <div class="search-item">
            <label>{t.year}</label>
            <p class="value">0 - 2024</p>
        </div>

        <div class="search-item">
            <label>{t.price}</label>
            <p class="value">{t.allprices}</p>
        </div>

        <button class="search-btn">
            <img src={search}  />
            <i class="fas fa-search"></i> {t.searchbtn}
        </button>



</div>
    </div>
        
        
        
        
        
        </>
      );
}
 
export default Search;

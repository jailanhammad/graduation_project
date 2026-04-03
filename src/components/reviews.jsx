import React from 'react';
import './reviews.css';
import revpic from "../assets/home/rev-pic.svg";
import white from "../assets/home/white-arrow.svg";
import black from "../assets/home/black-arrow.svg";
import girl from "../assets/home/girl.svg";
import { useLanguage } from '../LanguageContext';


const Reviews = () => {



    const { isArabic } = useLanguage();

    const t = {
        subLabel: isArabic ? "آراء العملاء" : "CUSTOMER REVIEWS",
        title: isArabic ? "ماذا يقول عملاؤنا" : "What our customers say",
        viewAll: isArabic ? "عرض الكل" : "View All",
        
        // Review 1
        name1: isArabic ? "محمد علي" : "Mohamed Ali",
        text1: isArabic 
            ? "خدمة رائعة! الفريق كان محترفاً جداً وساعدني في العثور على السيارة المثالية لاحتياجاتي. أنصح بهم بشدة!" 
            : "Great service! The team was very professional and helped me find the perfect car for my needs. Highly recommended!",
            
        // Review 2
        name2: isArabic ? "سلمى أحمد" : "Salma Ahmed",
        text2: isArabic 
            ? "شراء سيارتي الأولى كان سهلاً وخالياً من التوتر. كل شيء كان واضحاً ومنظماً." 
            : "Buying my first car was easy and stress-free. Everything was clear and organized.",
    };


    return ( 
        <>
        
        
        <section class="reviews-section">
    <div class="responsive-container">
        <div class="reviews-header">
            <div class="header-text">
                <span class="sub-label">{t.subLabel}</span>
                <h2 class="section-title-8">{t.title}</h2>
            </div>
            <div class="nav-arrows">
                <button class="arrow-btn-white">
                <i class="fas fa-arrow-left">
                <img src={white} alt="John Doe" class="white"/>
                </i>
                </button>
                <button class="arrow-btn-black">
                <i class="fas fa-arrow-right">
                <img src={black} alt="John Doe" class="black"/>
                </i>
                </button>
            </div>
        </div>

        <div class="reviews-grid">
            <div class="review-card">
                <div class="card-header">
                    <div class="user-info">
                        <img src={revpic} alt="John Doe" class="avatar"/>
                        <div class="name-stars">
                            <h3>{t.name1}</h3>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>
                    <i class="fas fa-quote-right quote-icon"></i>
                </div>
                <p class="review-text">
                    {t.text1}
                </p>
            </div>

            <div class="review-card">
                <div class="card-header">
                    <div class="user-info">
                        <img src={girl} alt="John Doe" class="avatar"/>
                        <div class="name-stars">
                            <h3>{t.name2}</h3>
                            <div class="stars">★★★★★</div>
                        </div>
                    </div>
                    <i class="fas fa-quote-right quote-icon"></i>
                </div>
                <p class="review-text">
                {t.text2}             
                </p>
            </div>
        </div>

        <div class="view-all-container">
            <a href="#" class="view-all-link">{t.viewAll} <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
</section>
        
        
        
        </>
     );
}
 
export default Reviews;
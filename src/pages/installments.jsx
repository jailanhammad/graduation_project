// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabase'; 
// import './installments.css';
// import Nav from '../components/nav';

// import Whyus from '../components/whyus';
// import Reviews from '../components/reviews';
// import Footer from '../components/footer';

// import defaultHero from "../assets/installments/hero.svg"; 
// import icon1 from "../assets/installments/icon1.svg";
// import icon2 from "../assets/installments/icon2.svg";
// import icon3 from "../assets/installments/icon3.svg";
// import BankCard from '../components/bankcard';
// import Steps from '../components/steps';

// const iconMap = {
//     icon1: icon1,
//     icon2: icon2,
//     icon3: icon3
// };

// const Installments = () => {
//     const [heroData, setHeroData] = useState(null);
//     const [cards, setCards] = useState([]);
//     const [, setLoading] = useState(true);
//     const [currentLang, ] = useState('en'); 

//     useEffect(() => {
//         const fetchAllData = async () => {
//             try {
//                 const { data: hero, error: heroErr } = await supabase
//                     .from('installments_hero')
//                     .select('*')
//                     .eq('id', 1)
//                     .single();

//                 if (!heroErr && hero) setHeroData(hero);

//                 const { data: cardsList, error: cardsErr } = await supabase
//                     .from('installments_cards')
//                     .select('*')
//                     .order('display_order', { ascending: true });

//                 if (!cardsErr && cardsList) setCards(cardsList);

//             } catch (err) {
//                 console.error("App Error:", err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAllData();
//     }, []);

//     const title = currentLang === 'ar' ? heroData?.title_ar : heroData?.title_en;
//     const description = currentLang === 'ar' ? heroData?.desc_ar : heroData?.desc_en;
//     const heroImageSrc = heroData?.bg_url ? heroData.bg_url : defaultHero;

//     return ( 
//         <>
//             <div dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
//                 <Nav />

//                 <div className="home-00">
//                     <section className="hero-00">
//                         <div className="overlay-00">
//                             <img src={heroImageSrc} alt="Hero Background" className='hero-in' />
//                         </div>

//                         <div className="hero-content-00">
//                             <h1>{title || 'Flexible Financing Solutions'}</h1>
//                             <p>{description || 'Drive your dream car today with customized financing options designed for you'}</p>
//                         </div>
//                     </section>

//                     <section className="cards-00">
//                         {cards.length === 0 ? (
//                             <p style={{ color: '#fff', textAlign: 'center', width: '100%' }}>No Cards Available</p>
//                         ) : (
//                             cards.map((card) => {
//                                 const cardTitle = currentLang === 'ar' ? card.title_ar : card.title_en;
//                                 const cardParagraph = currentLang === 'ar' ? card.paragraph_ar : card.paragraph_en;
//                                 const cardList = currentLang === 'ar' ? card.list_ar : card.list_en;

//                                 const cardIcon = iconMap[card.icon_name] || icon1;

//                                 return (
//                                     <BankCard 
//                                         key={card.id}
//                                         img={cardIcon}
//                                         title={cardTitle}
//                                         paragraph={cardParagraph}  
//                                         list1={cardList?.[0] || ''}
//                                         list2={cardList?.[1] || ''}
//                                         list3={cardList?.[2] || ''}
//                                     />
//                                 );
//                             })
//                         )}
//                     </section>

//                     <Steps />
//                 </div>

//                 <Whyus />
//                 <Reviews />
//                 <Footer />
//             </div>
//         </>
//     );
// }
 
// export default Installments;


import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './installments.css';
import Nav from '../components/nav';

import Whyus from '../components/whyus';
import Reviews from '../components/reviews';
import Footer from '../components/footer';

import defaultHero from "../assets/installments/hero.svg"; 
import icon1 from "../assets/installments/icon1.svg";
import icon2 from "../assets/installments/icon2.svg";
import icon3 from "../assets/installments/icon3.svg";
import BankCard from '../components/bankcard';
import Steps from '../components/steps';

const iconMap = {
    icon1: icon1,
    icon2: icon2,
    icon3: icon3
};

// قاموس للنصوص الثابتة (Fallbacks)
const translations = {
    en: {
        noCards: "No Cards Available",
        defaultTitle: "Flexible Financing Solutions",
        defaultDesc: "Drive your dream car today with customized financing options designed for you"
    },
    ar: {
        noCards: "لا توجد خيارات متاحة حالياً",
        defaultTitle: "حلول تمويل مرنة",
        defaultDesc: "قُد سيارة أحلامك اليوم مع خيارات تمويل مخصصة مصممة خصيصاً لك"
    }
};

const Installments = () => {
    const [heroData, setHeroData] = useState(null);
    const [cards, setCards] = useState([]);
    const [, setLoading] = useState(true);
    // الحالة الحالية للغة (تتغير تلقائياً مع الموقع)
    const [currentLang, setCurrentLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en'); 

    useEffect(() => {
        const updateLang = () => {
            const isRtl = document.documentElement.dir === 'rtl';
            setCurrentLang(isRtl ? 'ar' : 'en');
        };

        // التحديث عند أول تحميل
        updateLang();

        // مراقبة تغيير اللغة من الـ Nav
        const observer = new MutationObserver(updateLang);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        const fetchAllData = async () => {
            try {
                const { data: hero, error: heroErr } = await supabase
                    .from('installments_hero')
                    .select('*')
                    .eq('id', 1)
                    .single();

                if (!heroErr && hero) setHeroData(hero);

                const { data: cardsList, error: cardsErr } = await supabase
                    .from('installments_cards')
                    .select('*')
                    .order('display_order', { ascending: true });

                if (!cardsErr && cardsList) setCards(cardsList);

            } catch (err) {
                console.error("App Error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
        return () => observer.disconnect();
    }, []);

    // اختيار نصوص الواجهة والبيانات بناءً على اللغة
    const t = translations[currentLang];
    const title = currentLang === 'ar' ? heroData?.title_ar : heroData?.title_en;
    const description = currentLang === 'ar' ? heroData?.desc_ar : heroData?.desc_en;
    const heroImageSrc = heroData?.bg_url ? heroData.bg_url : defaultHero;

    return ( 
        <>
            <Nav />

            {/* تم نقل الـ dir هنا لضمان اتجاه المحتوى الداخلي فقط */}
            <div className="home-00" dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
                <section className="hero-00">
                    <div className="overlay-00">
                        <img src={heroImageSrc} alt="Hero Background" className='hero-in' />
                    </div>

                    <div className="hero-content-00">
                        <h1>{title || t.defaultTitle}</h1>
                        <p>{description || t.defaultDesc}</p>
                    </div>
                </section>

                <section className="cards-00">
                    {cards.length === 0 ? (
                        <p style={{ color: '#fff', textAlign: 'center', width: '100%' }}>{t.noCards}</p>
                    ) : (
                        cards.map((card) => {
                            // جلب البيانات من الأعمدة المترجمة في الجدول
                            const cardTitle = currentLang === 'ar' ? card.title_ar : card.title_en;
                            const cardParagraph = currentLang === 'ar' ? card.paragraph_ar : card.paragraph_en;
                            const cardList = currentLang === 'ar' ? card.list_ar : card.list_en;

                            const cardIcon = iconMap[card.icon_name] || icon1;

                            return (
                                <BankCard 
                                    key={card.id}
                                    img={cardIcon}
                                    title={cardTitle}
                                    paragraph={cardParagraph}  
                                    // التأكد من عرض القائمة بشكل صحيح (Supposing list is an array)
                                    list1={cardList?.[0] || ''}
                                    list2={cardList?.[1] || ''}
                                    list3={cardList?.[2] || ''}
                                />
                            );
                        })
                    )}
                </section>

                <Steps />
            </div>

            <Whyus />
            <Reviews />
            <Footer />
        </>
    );
}
 
export default Installments;
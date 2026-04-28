// import React, { useEffect, useState } from 'react';
// import './gallery.css';
// import { supabase } from '../supabase'; 

// const Gallery = () => {
//     const [lang, setLang] = useState(
//         document.documentElement.dir === 'rtl' ? 'ar' : 'en'
//     );
//     const isArabic = lang === 'ar';

//     useEffect(() => {
//         const observer = new MutationObserver(() => {
//             const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
//             setLang(newLang);
//         });
//         observer.observe(document.documentElement, {
//             attributes: true,
//             attributeFilter: ['dir']
//         });
//         return () => observer.disconnect();
//     }, []);

//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchGallery = async () => {
//             const { data, error } = await supabase
//                 .from('gallery_images')
//                 .select('image_url')
//                 .order('display_order', { ascending: true });

//             if (!error && data) {
//                 setImages(data.map(item => item.image_url));
//             }
//             setLoading(false);
//         };
//         fetchGallery();
//     }, []);

//     const t = {
//         title: isArabic ? "المعرض" : "Gallery",
//         hint: isArabic ? "تجربة تفاعلية بزاوية 360 درجة" : "360° Interactive Experience",
//     };

//     if (loading) return null; 

//     return ( 
//         <section className="interior-360-section" dir={isArabic ? "rtl" : "ltr"}>
//             <div className='gallery-section-2'>
//                 <h2 className="section-title-6">{t.title}</h2>
//             </div>

//             <div className="container-6" dir="ltr"> 
//                 <div className="viewer-window-2">
//                     <div className="panorama-loop">
//                         <div className="row-img">
//                             {images.map((img, i) => <img key={`a-${i}`} src={img} className='range' alt="car-gallery" />)}
//                         </div>
//                         <div className="row-img">
//                             {images.map((img, i) => <img key={`b-${i}`} src={img} className='range' alt="car-gallery" />)}
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <p className="scroll-hint">{t.hint}</p>
//         </section>
//     );
// }

// export default Gallery;


import React, { useEffect, useState } from 'react';
import './gallery.css';

import range1 from "../assets/home/range1.svg";
import range2 from "../assets/home/range2.svg";
import range3 from "../assets/home/range3.svg";
import range4 from "../assets/home/range4.svg";
import range5 from "../assets/home/range5.svg";
import range6 from "../assets/home/range6.svg";
import range7 from "../assets/home/range7.svg";
import range8 from "../assets/home/range8.svg";
import range9 from "../assets/home/range9.svg";
import range10 from "../assets/home/range10.svg";

const Gallery = () => {
    const [lang, setLang] = useState(
        document.documentElement.dir === 'rtl' ? 'ar' : 'en'
    );
    const isArabic = lang === 'ar';

    useEffect(() => {
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['dir']
        });

        return () => observer.disconnect();
    }, []);

    const t = {
        title: isArabic ? "المعرض" : "Gallery",
        hint: isArabic ? "تجربة تفاعلية بزاوية 360 درجة" : "360° Interactive Experience",
    };

    const images = [range1, range2, range3, range4, range5, range6, range7, range8, range9, range10];

    return ( 
        <section className="interior-360-section" dir={isArabic ? "rtl" : "ltr"}>
            <div className='gallery-section-2'>
                <h2 className="section-title-6">{t.title}</h2>
            </div>

            <div className="container-6" dir="ltr"> 
                <div className="viewer-window-2">
                    <div className="panorama-loop">
                        <div className="row-img">
                            {images.map((img, i) => (
                                <img key={`a-${i}`} src={img} className='range' alt="car view" />
                            ))}
                        </div>
                        <div className="row-img">
                            {images.map((img, i) => (
                                <img key={`b-${i}`} src={img} className='range' alt="car view" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <p className="scroll-hint">{t.hint}</p>
        </section>
    );
}

export default Gallery;
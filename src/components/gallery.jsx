import React from 'react';
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
import { useLanguage } from '../LanguageContext';


const Gallery = () => {
    const { isArabic } = useLanguage();

    const t = {
        title: isArabic ? "المعرض" : "Gallery",
        hint: isArabic ? "تجربة تفاعلية بزاوية 360 درجة" : "360° Interactive Experience",
    };

    const images = [range1, range2, range3, range4, range5, range6, range7, range8, range9, range10];

    return ( 
<section className="interior-360-section">
        <div className='gallery-section-2'>
            <h2 className="section-title-6">{t.title}</h2>
        </div>

        <div className="container-6" dir="ltr"> 
            <div className="viewer-window-2">
                <div className="panorama-loop">
                    <div className="row-img">
                        {images.map((img, i) => <img key={i} src={img} className='range' alt="car" />)}
                    </div>
                    <div className="row-img">
                        {images.map((img, i) => <img key={i} src={img} className='range' alt="car" />)}
                    </div>
                </div>
            </div>
        </div>

        <p className="scroll-hint">{t.hint}</p>
    </section>
    );
}
export default Gallery;
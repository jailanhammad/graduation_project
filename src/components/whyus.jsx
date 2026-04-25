import React from 'react';
import './whyus.css';
import quality from "../assets/home/quality.svg";
import best from "../assets/home/best.svg";
import support from "../assets/home/support.svg";
import { useLanguage } from '../LanguageContext';
            import BorderGlow from './BorderGlow';

const Whyus = () => {


    const { isArabic } = useLanguage();

    const t = {
        title: isArabic ? "لماذا تختار حماد موتورز" : "Why Choose Hammad Motors",
        subtitle: isArabic 
            ? "التميز ليس مجرد معيار، بل هو نقطة انطلاقنا." 
            : "Excellence is not just a standard, it's our starting point.",
        
        qTitle: isArabic ? "جودة ممتازة" : "Premium Quality",
        qDesc: isArabic 
            ? "تخضع كل سيارة لفحص دقيق يشمل 150 نقطة لضمان المثالية." 
            : "Every vehicle undergoes a rigorous 150-point inspection to ensure perfection.",
            
        fTitle: isArabic ? "أفضل تمويل" : "Best Financing",
        fDesc: isArabic 
            ? "أسعار تمويل حصرية وباقات مخصصة لتناسب أسلوب حياتك." 
            : "Exclusive financing rates and tailored packages to suit your lifestyle.",
            
        sTitle: isArabic ? "دعم عالمي" : "Global Support",
        sDesc: isArabic 
            ? "من خلال فروعنا المتعددة، نقدم التميز في كل مكان." 
            : "With multiple branches, we deliver excellence everywhere.",
    };

    return ( 
        <>
        
        
        
        <section class="why-choose-section">


    <div class="responsive-container">
        <div class="section-header-7">
            <h2 class="title">{t.title}</h2>
            <p class="subtitle">{t.subtitle}</p>
        </div>

        <div class="features-grid-2">


   
<BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#170f0f"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#d32f2f', '#170f0f', '#d32f2f']}
>
  <div>
 

  <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-shield"></i> 
                    <img src={quality}/>
                </div>
                <h3>{t.qTitle}</h3>
                <p>{t.qDesc}</p>
  </div>


  </div>
</BorderGlow>


   
<BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#170f0f"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#d32f2f', '#170f0f', '#d32f2f']}
>
  <div>
 

  <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-medal">
                    <img src={best}/>
                    </i>
                </div>
                <h3>{t.fTitle}</h3>
                <p>{t.fDesc}</p>
  </div>


  </div>
</BorderGlow>

        
<BorderGlow
  edgeSensitivity={30}
  glowColor="40 80 80"
  backgroundColor="#170f0f"
  borderRadius={28}
  glowRadius={40}
  glowIntensity={1}
  coneSpread={25}
  animated={false}
  colors={['#d32f2f', '#170f0f', '#d32f2f']}
>
  <div>
 

  <div class="feature-card">
                <div class="icon-wrapper">
                    <i class="icon-globe">
                    <img src={support}/>
                    </i>
                </div>
                <h3>{t.sTitle}</h3>
                <p>{t.sDesc}</p>
  </div>

  </div>
</BorderGlow>


         
        </div>
    </div>
</section>
        
        
        
        
        </>
     );
}
 
export default Whyus;
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase'; 
import './story.css';
import hammad from "../assets/about/hammad.svg";
import mission from "../assets/about/mission.svg";
import vision from "../assets/about/vision.svg";
import DotField from './DotField';

const Story = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchStoryData = async () => {
        const currentLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
        
        const { data: translations, error } = await supabase
            .from('story_v2')
            .select(`key, ${currentLang}`);

        if (!error && translations) {
            const transMap = {};
            translations.forEach(item => {
                transMap[item.key] = item[currentLang];
            });
            setData(transMap);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchStoryData();

        const observer = new MutationObserver(() => {
            fetchStoryData();
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });

        return () => observer.disconnect();
    }, []);

    if (loading) return null; 

    return ( 
        <>
            <section className="story-section" style={{ position: 'relative', overflow: 'hidden'}}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
                <DotField
                  dotRadius={1.5} dotSpacing={14} bulgeStrength={67} glowRadius={160}
                  sparkle={false} waveAmplitude={0} cursorRadius={500} cursorForce={0.1}
                  bulgeOnly gradientFrom="#4f0003" gradientTo="#ff0000" glowColor="#410101"
                />
              </div>

              <div className="responsive-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="story-top-grid">
                  <div className="story-content">
                    <span className="sub-label">{data['story_v2.sub_label']}</span>
                    <h2 className="main-headline">{data['story_v2.headline']}</h2>
                    
                    <div className="story-text">
                      <p>{data['story_v2.founder_text1']}</p>
                      <p>{data['story_v2.founder_text2']}</p>
                    </div>

                    <div className="stats-row">
                      <div className="stat-box">
                        <span className="stat-number">50k+</span>
                        <span className="stat-desc">{data['story_v2.stat1_desc']}</span>
                      </div>
                      <div className="stat-box">
                        <span className="stat-number">30+</span>
                        <span className="stat-desc">{data['story_v2.stat2_desc']}</span>
                      </div>
                    </div>
                  </div>

                  <div className="story-image-wrapper">
                    <img src={hammad} alt="Mr. Mahmoud Hammad" className="founder-img"/>
                  </div>
                </div>

                <div className="mission-vision-grid">
                  <div className="mv-card">
                    <div className="icon-circle">
                      <img src={mission} alt="Mission icon"/>
                    </div>
                    <h3>{data['story_v2.mission_title']}</h3>
                    <p>{data['story_v2.mission_desc']}</p>
                  </div>
                  <div className="mv-card">
                    <div className="icon-circle">
                      <img src={vision} alt="Vision icon"/>
                    </div>
                    <h3>{data['story_v2.vision_title']}</h3>
                    <p>{data['story_v2.vision_desc']}</p>
                  </div>
                </div>
              </div>
            </section>
        </>
    );
}
 
export default Story;
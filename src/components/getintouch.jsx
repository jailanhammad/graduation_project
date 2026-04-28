import React, { useState, useEffect } from 'react'; 
import { supabase } from '../supabase'; 
import './getintouch.css';
import mobile from "../assets/contact/mobile.svg";
import time from "../assets/contact/time.svg";
import loc from "../assets/contact/loc.svg";
import emailIcon from "../assets/contact/email.svg"; 
import send from "../assets/contact/send.svg";

const Getintouch = () => {
    const [t, setT] = useState({});
    const [lang, setLang] = useState(document.documentElement.dir === 'rtl' ? 'ar' : 'en');
    const [formData, setFormData] = useState({ full_name: '', phone: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const fetchTranslations = async (currentLang) => {
        const { data } = await supabase.from('contact_page_ui').select(`key, ${currentLang}`);
        if (data) {
            const map = {};
            data.forEach(item => map[item.key] = item[currentLang]);
            setT(map);
        }
    };

    useEffect(() => {
        fetchTranslations(lang);
        const observer = new MutationObserver(() => {
            const newLang = document.documentElement.dir === 'rtl' ? 'ar' : 'en';
            setLang(newLang);
            fetchTranslations(newLang);
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['dir'] });
        return () => observer.disconnect();
    }, [lang]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { error } = await supabase.from('contact_messages').insert([{
                full_name: formData.full_name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                subject: "", 
                status: 'new'
            }]);
            if (error) throw error;
            alert(t.success_msg);
            setFormData({ full_name: '', phone: '', email: '', message: '' });
        } catch (error) {
            alert(t.error_msg);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isRtl = lang === 'ar';

    return (  
        <section className="get-in-touch" style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
            <div className='get-coloumn'>
                <div className="section-title-9" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                    <h2>{t.title}</h2>
                    <p>{t.subtitle}</p>
                </div>
                
                <div className='rows' style={{ display: 'flex', gap: '40px', flexDirection: isRtl ? 'row' : 'row' }}>
                    <form className="contact-form" onSubmit={handleFormSubmit} style={{ flex: 1 }}>
                        <div className="input-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>{t.name_lbl}</label>
                            <input type="text" id="full_name" value={formData.full_name} 
                                   onChange={(e) => setFormData({...formData, full_name: e.target.value})} 
                                   required style={{ width: '100%', textAlign: isRtl ? 'right' : 'left' }} />
                        </div>
                        <div className="input-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>{t.phone_lbl}</label>
                            <input type="tel" id="phone" value={formData.phone} 
                                   onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                                   required style={{ width: '100%', textAlign: isRtl ? 'right' : 'left' }} />
                        </div>
                        <div className="input-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>{t.email_lbl}</label>
                            <input type="email" id="email" value={formData.email} 
                                   onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                   required style={{ width: '100%', textAlign: isRtl ? 'right' : 'left' }} />
                        </div>
                        <div className="input-box" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                            <label style={{ display: 'block', marginBottom: '8px' }}>{t.msg_lbl}</label>
                            <textarea id="message" rows="4" value={formData.message} 
                                      onChange={(e) => setFormData({...formData, message: e.target.value})} 
                                      required style={{ width: '100%', textAlign: isRtl ? 'right' : 'left' }}></textarea>
                        </div>
                        
                        <button type="submit" className="send-btn" disabled={isSubmitting} style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                            {isSubmitting ? t.sending : t.send_btn}
                            <img src={send} className='send' alt="send" style={{ transform: isRtl ? 'rotate(180deg)' : 'none', width: '20px' }}/>
                        </button>
                    </form>

             
                    <div className="contact-wrapper" style={{ flex: 1 }}>
                        <div className="info-container" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            
                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div className="icon-box"><img src={mobile} alt="mobile" style={{ width: '24px' }}/></div>
                                <div className="info-text" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 style={{ margin: 0 }}>{t.phone_title}</h4>
                                    <span style={{ display: 'block', direction: 'ltr' }}>{t.number}</span>
                                    <span style={{ display: 'block', direction: 'ltr' }}>{t.number_2}</span>
                                </div>
                            </div>
                            
                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div className="icon-box"><img src={loc} alt="location" style={{ width: '24px' }}/></div>
                                <div className="info-text" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 style={{ margin: 0 }}>{t.addr_title}</h4>
                                    <span style={{ display: 'block' }}>{t.addr_1}</span>
                                    <span style={{ display: 'block' }}>{t.addr_2}</span>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div className="icon-box"><img src={emailIcon} alt="email" style={{ width: '24px' }}/></div>
                                <div className="info-text" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 style={{ margin: 0 }}>{t.email_title}</h4>
                                    <span style={{ display: 'block' }}>mahmoud@hammadmotors.com</span>
                                </div>
                            </div>

                            <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div className="icon-box"><img src={time} alt="time" style={{ width: '24px' }}/></div>
                                <div className="info-text" style={{ textAlign: isRtl ? 'right' : 'left' }}>
                                    <h4 style={{ margin: 0 }}>{t.hours_title}</h4>
                                    <span style={{ display: 'block' }}>{t.hours_val}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Getintouch;
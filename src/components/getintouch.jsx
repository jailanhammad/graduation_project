import React, { useState } from 'react'; 
import { supabase } from '../supabase'; 
import './getintouch.css';
import mobile from "../assets/contact/mobile.svg";
import time from "../assets/contact/time.svg";
import loc from "../assets/contact/loc.svg";
import emailIcon from "../assets/contact/email.svg"; 
import send from "../assets/contact/send.svg";

const Getintouch = () => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
            const { error: supabaseError } = await supabase
                .from('contact_messages')
                .insert([
                    { 
                        full_name: formData.full_name, 
                        phone: formData.phone, 
                        email: formData.email, 
                        message: formData.message 
                    }
                ]);
    
            if (supabaseError) throw supabaseError;
    
            alert("Message sent! We will contact you soon.");
            
            setFormData({ full_name: '', phone: '', email: '', message: '' });
            
        } catch (error) {
            console.error("Supabase Error:", error.message);
            alert("Could not save your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (  
        <section className="get-in-touch">
            <div className='get-coloumn'>
                <div className="section-title-9">
                    <h2>Get In Touch</h2>
                    <p>Have questions? We are here to help. Reach out to our team today.</p>
                </div>
                
                <div className='rows'>
                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <div className="input-box">
                            <label>Name</label>
                            <input 
                                type="text" id="full_name" placeholder="Your Name" 
                                value={formData.full_name} onChange={handleChange} required 
                            />
                        </div>
                        <div className="input-box">
                            <label>Phone</label>
                            <input 
                                type="tel" id="phone" placeholder="Phone Number" 
                                value={formData.phone} onChange={handleChange} required 
                            />
                        </div>
                        <div className="input-box">
                            <label>Email</label>
                            <input 
                                type="email" id="email" placeholder="email@example.com" 
                                value={formData.email} onChange={handleChange} required 
                            />
                        </div>
                        <div className="input-box">
                            <label>Message</label>
                            <textarea 
                                id="message" placeholder="How can we help?" rows="4" 
                                value={formData.message} onChange={handleChange} required 
                            ></textarea>
                        </div>
                        <button type="submit" className="send-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                            <img src={send} className='send' alt="send icon"/>
                        </button>
                    </form>

                    <div className="contact-wrapper">
                        <div className="info-container">
                            <div className="info-item">
                                <div className="icon-box"><img src={mobile} alt="mobile"/></div>
                                <div className="info-text">
                                    <h4>Phone</h4>
                                    <span>+02 01000444401</span>
                                    <span>+02 01000004471</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><img src={loc} alt="location"/></div>
                                <div className="info-text">
                                    <h4>Address</h4>
                                    <span>Branch 1: 15 Ibrahim El-Naggar St., Heliopolis</span>
                                    <span>Branch 2: 12 Ammar Ibn Yasser St., Heliopolis</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><img src={emailIcon} alt="email"/></div>
                                <div className="info-text">
                                    <h4>Email</h4>
                                    <span>mahmoud@hammadmotors.com</span>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><img src={time} alt="time"/></div>
                                <div className="info-text">
                                    <h4>Working Hours</h4>
                                    <span>Everyday from 12:00 PM to 10:00 AM</span>
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
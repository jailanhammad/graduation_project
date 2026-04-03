import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [isArabic, setIsArabic] = useState(false);

    const toggleLanguage = () => setIsArabic(!isArabic);

    useEffect(() => {
        // This automatically flips the entire website's direction
        document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
        document.documentElement.lang = isArabic ? 'ar' : 'en';
    }, [isArabic]);







    
    return (
        <LanguageContext.Provider value={{ isArabic, toggleLanguage }}>
            <div className={isArabic ? 'rtl-theme' : 'ltr-theme'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
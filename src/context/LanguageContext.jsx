import React, { createContext, useState, useContext } from 'react';
import i18n from 'i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('VDN');

  const changeLanguage = (lang) => {
    console.log('Language being changed to:', lang);
    i18n.changeLanguage(lang)
      .then(() => setLanguage(lang))
      .catch(err => console.error('Error changing language:', err));
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

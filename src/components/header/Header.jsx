import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

const Header = ({ isViewMore }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const languages = [
    { code: 'en', img: '/Group.png' },
    { code: 'ka', img: '/Group.png' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsLanguageOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full h-[100px] pl-[130px] pr-[130px] flex justify-between items-center ${isViewMore ? 'bg-white text-black' : 'bg-[linear-gradient(102.87deg,#FCEED5_6.43%,#FCEED5_78.33%,#FFE7BA_104.24%)] text-[#003459]'} z-50`}>
      <div className="flex items-center gap-[48px]">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-[115px] cursor-pointer" />
          </Link>
          <p className="text-[10px]">{t('Pets For Best')}</p>
        </div>
        
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500">{t('home')}</Link>
          <Link to="/category" className="text-gray-800 hover:text-blue-500">{t('category')}</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500">{t('contact')}</Link>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:block">
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-[#003459] w-[214px] h-[44px] py-[14px] px-[28px] rounded-[57px] flex items-center justify-center text-[#FDFDFD]"
              >
                {t('join_community')}
              </button>
              {isDropdownOpen && (
                <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white shadow-lg rounded border border-gray-300 w-[200px] z-10">
                  <Link to="/profile" className="block px-4 py-2 text-[#003459] hover:bg-gray-200">{user.name || t('profile')}</Link>
                  <Link to="/logout" onClick={handleLogout} className="flex items-center px-4 py-2 text-[#003459] hover:bg-gray-200">
                    <img src="/log-out.png" alt="Logout" className="h-4 w-4 mr-2" />
                    {t('logout')}
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <Link to="/join-community">
              <button className="bg-[#003459] w-[214px] h-[44px] py-[14px] px-[28px] rounded-[57px] flex items-center justify-center text-[#FDFDFD]">
                {t('join_community')}
              </button>
            </Link>
          )}
        </div>

        <div className="relative hidden lg:block">
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center border border-gray-300 rounded p-2 bg-white w-[137px] justify-between"
          >
            <div className="flex items-center">
              <img
                src={languages.find(lang => lang.code === selectedLanguage)?.img}
                alt={selectedLanguage}
                className="h-3 w-3 mr-2"
              />
              {selectedLanguage}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isLanguageOpen && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full">
              {languages.map((language) => (
                <div
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                >
                  <img src={language.img} alt={language.code} className="h-3 w-3 mr-2" />
                  {language.code}
                </div>
              ))}
            </div>
          )}
        </div>

        <button 
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
  <div ref={mobileMenuRef} className="lg:hidden absolute top-[100px] left-0 right-0 bg-white shadow-md z-20">
    <nav className="flex flex-col items-center space-y-4 p-4">
      <Link to="/" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>{t('home')}</Link>
      <Link to="#category" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>{t('category')}</Link>
      <Link to="/contact" className="text-gray-800 hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>{t('contact')}</Link>
      {isAuthenticated && (
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-[#003459] w-full h-[44px] px-[15px] py-[10px] rounded-[57px] text-[#FDFDFD]">
            {t('join_community')}
          </button>
          {isDropdownOpen && (
            <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white shadow-lg rounded border border-gray-300 z-10">
              <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{user.name || t('profile')}</Link>
              <Link to="/logout" onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{t('logout')}</Link>
            </div>
          )}
        </div>
      )}
      {!isAuthenticated && (
        <Link to="/join-community" onClick={() => setIsMobileMenuOpen(false)}>
          <button className="bg-[#003459] w-full h-[44px] px-[15px] py-[10px] rounded-[57px] text-[#FDFDFD]">
            {t('join_community')}
          </button>
        </Link>
      )}
      <div className="relative">
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className="flex items-center border border-gray-300 rounded p-2 bg-white w-full justify-between"
        >
          <div className="flex items-center">
            <img src={languages.find(lang => lang.code === selectedLanguage)?.img} alt={selectedLanguage} className="h-3 w-3 mr-2" />
            {selectedLanguage}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isLanguageOpen && (
          <div className="absolute z-10 bg-white border border-gray-300 rounded mt-1 w-full">
            {languages.map((language) => (
              <div
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
              >
                <img src={language.img} alt={language.code} className="h-3 w-3 mr-2" />
                {language.code}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  </div>
)}

    </header>
  );
};

export default Header;

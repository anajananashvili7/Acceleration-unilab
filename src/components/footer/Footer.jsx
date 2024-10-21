import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail('');
  };

  return (
    <footer className="bg-[#FCEED5] mt-[70px] text-[#003459] py-6 rounded-tl-[40px] rounded-tr-[40px] flex flex-col items-center justify-center font-sf-pro">
      {/* Subscription Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full rounded-[16px] bg-[#003459] p-[12px] h-[136px] mx-auto">
        <h2 className="text-lg font-bold mb-2 md:mb-0 mr-0 md:mr-4 w-full md:w-[28%] text-center md:text-left text-[24px] text-[#FDFDFD] leading-[36px]">
          Register now so you don't miss our programs!
        </h2>
        <form onSubmit={handleSubscribe} className="flex items-center w-full md:w-[60%] bg-[#FFFFFF] rounded-[14px] p-[12px]"> 
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow p-2 rounded-[8px] border border-gray-300 h-[48px]" 
            required
          />
          <button 
            type="submit" 
            className="bg-[#003459] text-[#FDFDFD] py-2 px-4 rounded-[8px] w-[200px] h-[48px] ml-2" 
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Links and Social Icons Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full mt-10 pb-10 px-4 border-b border-[#CCD1D2]">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-[#003459]">
          <Link to="/" className="font-semibold text-[16px] leading-[24px] text-[#00171F]">Home</Link>
          <Link to="/category" className="font-semibold text-[16px] leading-[24px] text-[#00171F]">Category</Link>
          <Link to="/about" className="font-semibold text-[16px] leading-[24px] text-[#00171F]">About</Link>
          <Link to="/contact" className="font-semibold text-[16px] leading-[24px] text-[#00171F]">Contact</Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="#" className="text-[#003459] hover:text-blue-500">
            <img src="/black-facebook.png" alt="Facebook" className="h-6 w-6" />
          </Link>
          <Link to="#" className="text-[#003459] hover:text-blue-500">
            <img src="/black-twitter.png" alt="Twitter" className="h-6 w-6" />
          </Link>
          <Link to="#" className="text-[#003459] hover:text-blue-500">
            <img src="/black-instagram.png" alt="Instagram" className="h-6 w-6" />
          </Link>
          <Link to="#" className="text-[#003459] hover:text-blue-500">
            <img src="/black-youtube.png" alt="YouTube" className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl w-full mt-4 px-4">
        <p className="text-[#003459]">© 2022 Monito. All rights reserved.</p>
        <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-[115px] cursor-pointer" />
          </Link>
          <p className="text-[10px]">Pets For Best</p>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 text-[#003459] mt-4 md:mt-0">
          <Link to="#" className="font-semibold text-[16px] leading-[24px]">Terms of Service</Link>
          <Link to="#" className="font-semibold text-[16px] leading-[24px]">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

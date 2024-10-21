import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; 

const JoinCommunity = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate();
  const { login } = useAuth(); 

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      setError(''); 
      setSuccessMessage(''); 
      const user = JSON.parse(localStorage.getItem('user'));

      if (user && user.email === email && user.password === password) {
        setSuccessMessage('You successfully logged in!');
        
        
        login({ email: user.email, name: user.name }); 
        
        navigate('/'); 
      } else {
        setError('Invalid email or password.');
      }
    } else {
      setError('Please enter valid email and password.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col items-center space-y-4 p-6 w-96">
        {/* Google Sign-In Button */}
        <button className="flex items-center space-x-2 border border-gray-300 rounded p-2 w-full justify-center">
          <img src="/Google.png" alt="Google Icon" className="h-4 w-4" />
          <span>Continue with Google</span>
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {/* Horizontal Lines and OR Text */}
        <div className="flex items-center w-full">
          <hr className="flex-grow border-t border-[#E6E7E8]" />
          <span className="mx-4 text-[#5C5F6A] text-[12px] leading-[24px] font-semibold">OR</span>
          <hr className="flex-grow border-t border-[#E6E7E8]" />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-left mb-1 text-[14px] leading-[24px] text-[#003459] font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-left mb-1 text-[14px] leading-[24px] text-[#003459] font-semibold">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded w-full"
            required
          />
        </div>

        <div className="flex justify-end w-full">
          <span 
            className="text-[#003459] font-semibold text-[12px] leading-[24px] cursor-pointer" 
            onClick={() => navigate('/forgot-password')} 
          >
            Forgot password?
          </span>
        </div>
        
        <button type="submit" className="bg-[#003459] text-white py-2 rounded w-full">
          Log In
        </button>
        
        <span 
          className="text-[#003459] text-[14px] leading-[24px] cursor-pointer" 
          onClick={() => navigate('/sign-up')} 
        >
          Don't have an account? Sign up
        </span>
      </form>
    </div>
  );
};

export default JoinCommunity;



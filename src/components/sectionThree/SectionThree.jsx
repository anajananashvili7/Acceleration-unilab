import React from 'react';

const SectionThree = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1200px] w-[80%] bg-[#003459] rounded-[20px] mt-8 relative overflow-hidden">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <img 
          src="/kiss puppy.png" 
          alt="Puppies" 
          className="max-w-[600px] w-full h-auto rounded-lg z-20" 
        />
        {/* Background Images */}
        <img 
          className="absolute left-0 bottom-0 rounded-[20px] z-10 max-w-full" 
          src="/three section.png" 
          alt="Decorative" 
        />
        <img 
          className="absolute right-0 bottom-0 max-w-[720px] w-auto h-[80%] rounded-[20px] z-0" 
          src="/three-section.png" 
          alt="Decorative" 
        />
      </div>

      {/* Right Section: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 text-[#FCEED5] text-left z-10 font-sf-pro">
        <h2 className="text-[30px] md:text-[40px] leading-[48px] md:leading-[68px] font-bold font-gilroy">One More Friend</h2>
        <div className="text-[24px] md:text-[30px] leading-[36px] md:leading-[60px]">Thousands More Fun!</div>
        <p className="pt-[15px] md:pt-[20px] text-[12px] md:text-[14px] leading-[20px] md:leading-[24px]">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-end pt-[40px] pb-[50px] md:pt-[58px]">
          <button className="border-[#FCEED5] border-[1.5px] bg-transparent text-[#FCEED5] px-4 py-2 rounded-full h-[48px] w-full md:w-[163px] flex items-center justify-center">
            View Intro
            <span className="ml-2 h-6 w-6 flex items-center justify-center border border-[#FCEED5] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="#FCEED5">
                <path d="M12 4L20 20H4L12 4Z" />
              </svg>
            </span>
          </button>
          <button className="text-[#003459] bg-[#FDFDFD] px-4 py-2 rounded-full h-[48px] w-full md:w-[163px] flex items-center justify-center">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;

import React from 'react';

const SectionFive = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1200px] w-[80%] bg-[#FFB775] rounded-[20px] mt-8 relative overflow-hidden px-[10%] pt-[100px] gap-[20px] font-sf-pro">
        {/* Left Section: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-8 text-[#003459] text-left z-10">
          <div className="flex gap-[10px] items-center">
            <h2 className="text-[30px] md:text-[40px] leading-[48px] md:leading-[68px] font-bold">Adoption</h2>
            <img className="w-[40px] h-[40px]" src="/paw.png" alt="Paw" />
          </div>
          <div className="text-[24px] md:text-[30px] leading-[36px] md:leading-[60px] capitalize">We need help. so do they.</div>
          <p className="pt-[15px] md:pt-[20px] text-[12px] md:text-[14px] leading-[20px] md:leading-[24px]">
            Adopt a pet and give it a home,
            it will love you back unconditionally.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-self-end pt-[40px] md:pt-[58px] pb-[50px]">
            <button className="text-[#FDFDFD] bg-[#003459] px-4 py-2 rounded-full h-[48px] w-full md:w-[200px] flex items-center justify-center">
              Explore Now
            </button>
            <button className="border-[#003459] border-[1.5px] bg-transparent text-[#003459] px-4 py-2 rounded-full h-[48px] w-full md:w-[200px] flex items-center justify-center">
              View Intro
              <span className="ml-2 h-6 w-6 flex items-center justify-center border border-[#003459] rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 24 24" fill="#003459">
                  <path d="M12 4L20 20H4L12 4Z" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Section: Images */}
        <div className="w-full md:w-1/2 flex justify-center relative px-6 md:px-8">
          <img src="/handshake.png" alt="Handshake" className="max-w-[600px] w-full h-auto rounded-lg z-10" />
          <img className="absolute left-0 bottom-0 rounded-[20px] h-[100%] max-h-[400px] w-auto" src="/Rectangle 9 (2).png" alt="Decorative" />
          <img className="absolute left-[29%] bottom-0 max-w-[720px] w-[100%] h-auto rounded-[20px]" src="/Rectangle 1 (3).png" alt="Decorative" />
        </div>
      </div>

      {/* Sellers Section */}
      <div className="flex justify-between items-center gap-[10px] mt-8 px-[10%]">
        <div className="flex items-center gap-[10px]">
          <div className="text-[16px] leading-[31px]">Proud to be part of</div>
          <div className="text-[24px] leading-[36px] text-[#003459]">Pet Sellers</div>
        </div>
        <div>
          <button className="border-[#003459] border-[1.5px] bg-transparent text-[#003459] px-4 py-2 text-[12px] rounded-[57px] w-[155px] flex items-center justify-center">
            View all our sellers <span className="ml-2">&gt;</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-wrap mt-4 px-[10%]">
        <img className="w-[88px] h-[64px]" src="/17.png" alt="Seller 1" />
        <img className="w-[88px] h-[64px]" src="/18.png" alt="Seller 2" />
        <img className="w-[88px] h-[64px]" src="/19.png" alt="Seller 3" />
        <img className="w-[88px] h-[64px]" src="/20.png" alt="Seller 4" />
        <img className="w-[88px] h-[64px]" src="/21.png" alt="Seller 5" />
        <img className="w-[88px] h-[64px]" src="/22.png" alt="Seller 6" />
        <img className="w-[88px] h-[64px]" src="/23.png" alt="Seller 7" />
      </div>
    </>
  );
};

export default SectionFive;


import React from 'react';
import { useTranslation } from 'react-i18next';

const SectionOne = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-[130px] relative h-[950px] overflow-hidden bg-[#FCEED5] rounded-bl-[25px] rounded-br-[25px]">
      {/* Text Section */}
      <div className="flex flex-col p-8 lg:p-12 pt-[120px] lg:pt-32 w-full lg:w-1/2">
        <h2 className="text-[40px] lg:text-[60px] leading-[48px] lg:leading-[68px] font-bold pt-8 lg:pt-16">
          {t('section_one_title')}
        </h2>
        <div className="text-[30px] lg:text-[46px] leading-[36px] lg:leading-[60px] pt-4 lg:pt-8">
          {t('section_one_subtitle')}
        </div>
        <p className="pt-4 lg:pt-8 text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] w-full lg:w-4/5">
          {t('section_one_description')}
        </p>
        {/* Buttons */}
        <div className="flex space-x-4 pt-4 lg:pt-8">
          <button className="bg-transparent border-[#003459] border-[1.5px] text-[#003459] px-4 py-2 rounded-full h-[48px] w-auto flex items-center justify-center">
            {t('view_intro')}
            <span className="ml-2 h-6 w-6 flex items-center justify-center border border-[#003459] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="#003459"
              >
                <path d="M12 4L20 20H4L12 4Z" />
              </svg>
            </span>
          </button>
          <button className="bg-[#003459] text-[#FDFDFD] px-4 py-2 rounded-full h-[48px] w-auto flex items-center justify-center">
            {t('explore_now')}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full lg:w-1/2 h-full flex justify-center items-start lg:items-center">
        <img
          src="/hero.png"
          alt="Hero"
          className="absolute top-[10%] lg:top-[20%] max-w-[884px] w-full lg:w-auto left-[50%] transform -translate-x-1/2 z-10"
        />
        <img
          src="/Rectangle 1.png"
          alt="Rectangle 1"
          className="absolute top-[40%] lg:top-[58%] h-[50%] lg:h-[72%] left-[50%] transform -translate-x-1/2 z-5"
        />
        <img
          src="/Rectangle 2.png"
          alt="Rectangle 2"
          className="absolute top-[30%] lg:top-[43%] left-[50%] transform -translate-x-1/2 z-0"
        />
      </div>
    </div>
  );
};

export default SectionOne;

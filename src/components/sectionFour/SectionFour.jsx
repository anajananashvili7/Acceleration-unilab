import React from "react";
import { useNavigate } from "react-router-dom";
import productData from "../../data/productData";

const SectionFour = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-16 md:px-[130px] pt-[60px] font-sf-pro">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[16px] leading-[16px]">Hard to choose right products for your pets?</p>
          <h5 className="text-[24px] leading-[36px] text-[#003459] font-bold pt-[2px]">
            Our Products
          </h5>
        </div>
        <div>
          <button className="border-[#003459] border-[1.5px] bg-transparent text-[#003459] px-4 py-2 rounded-[57px] w-[155px] flex items-center justify-center">
            View more <span className="ml-2">&gt;</span>
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-2 gap-[28px] pt-8 md:grid-cols-2 lg:grid-cols-4">
        {productData.slice(0, 8).map((product) => (
          <div
            key={product.productName}
            className="bg-white border rounded-lg shadow-lg w-full h-[430px] p-2 flex flex-col relative"
          >
            <img src={product.image} alt={product.productName} className="w-full h-auto rounded-t-lg" />
            <div className="mt-2 flex-1">
              <h3 className="font-bold text-[16px] leading-[24px]">{product.productName}</h3>
              <div className="flex mt-1">
                <span className="text-[#667479] text-[12px] leading-[18px]">
                  Product: <span className="font-bold capitalize">{product.category}</span>
                </span>
                <span className="pl-2 pr-2">.</span>
                <span className="text-[#667479] text-[12px] leading-[18px]">
                  Size: <span>{product.size}</span>
                </span>
              </div>
              <div className="mt-2 text-[14px] leading-[20px] text-[#00171F] font-semibold">{product.price}</div>
            </div>

            {/* Free Toy & Free Shaker section */}
            <div className="mt-2 flex items-center text-[14px] h-[10%] w-[100%] rounded-[8px] p-[10px] leading-[20px] bg-[#FCEED5] font-semibold">
              <img src="/present.png" alt="Free Toy" className="inline-block w-5 h-5 mr-1" />
              <span className="text-[#002A48]">Free Toy & Free Shaker</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;



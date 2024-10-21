import React from "react";
import { useNavigate } from "react-router-dom";
import petsData from "../../data/petsData";


const SectionTwo = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/view-more");
  };

  const handlePetClick = (petId) => {
    console.log("Navigating to pet profile:", petId);
    navigate(`/pet-profile/${petId}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="px-4 md:px-[130px] pt-[60px]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[16px] leading-[24px] font-sf-pro">What's new?</p>
          <h5 className="text-[24px] leading-[36px] text-[#003459] pt-[2px] font-sf-pro">
            Take A Look At Some Of Our Pets
          </h5>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[16px] pt-8 md:grid-cols-2 lg:grid-cols-4 md:gap-[28px] font-sf-pro">
        {petsData.slice(0, 8).map((pet) => (
          <div
            key={pet.id}
            onClick={() => handlePetClick(pet.id)} 
            className="bg-white border rounded-lg shadow-lg w-full max-w-[280px] h-[378px] p-2 flex flex-col relative cursor-pointer"
          >
            <img src={pet.image} alt={pet.name} className="w-full h-auto rounded-t-lg" />
            <div className="mt-2 flex-1 font-sf-pro">
              <h3 className="font-bold">{`${pet.id} - ${pet.name}`}</h3>
              <div className="flex mt-1">
                <span className="text-[#667479]">
                  Gene: <span className="font-bold capitalize">{pet.gene}</span>
                </span>
                <span className="pl-2 pr-2">.</span>
                <span className="text-[#667479]">
                  Age: <span>{pet.age}-</span>
                </span>
              </div>
              <div className="mt-2 text-lg font-semibold">{pet.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button
          onClick={handleViewMore}
          className="border-[#003459] border-[1.5px] bg-transparent text-[#003459] px-4 py-2 rounded-[57px] w-[155px] flex items-center justify-center font-sf-pro"
        >
          View more <span className="ml-2">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default SectionTwo;


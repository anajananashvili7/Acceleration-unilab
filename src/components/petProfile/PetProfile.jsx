import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import petsData from '../../data/petsData';
import Chat from '../chat/Chat';
import { useAuth } from '../../context/AuthContext'; 

const PetProfile = () => {
  const { petId } = useParams();
  const navigate = useNavigate();
  const pet = petsData.find(p => p.id === petId);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showLoginMessage, setShowLoginMessage] = useState(false); 
  const { isAuthenticated } = useAuth(); 

  if (!pet) return <div>Pet not found</div>;

  
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const getRandomPets = (num) => {
    const shuffled = petsData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  const randomPets = getRandomPets(4);

  const handlePetClick = (petId) => {
    navigate(`/pet-profile/${petId}`);
    window.scrollTo(0, 0);
  };

  const handleChatClick = () => {
    if (isAuthenticated) {
      setIsChatOpen(true);
      setShowLoginMessage(false);
    } else {
      setShowLoginMessage(true);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center pt-[110px]">
        <img src={pet.image} alt={pet.name} className="w-[565px] h-[476px] object-cover rounded-lg mb-4 md:mb-0 md:mr-6" />
        <div className="flex flex-col justify-between">
          <p className="text-[#99A2A5] text-[14px] leading-[20px]">#{pet.id}</p>
          <h3 className="text-[24px] leading-[36px] text-[#00171F] font-bold">{pet.name}</h3>
          <p className="text-[20px] leading-[32px] text-[#002A48] font-semibold">{pet.price}</p>
          <div className="flex space-x-2">
            <button className="bg-[#003459] text-white w-[141px] h-[44px] px-[28px] rounded-[57px]">
              Contact Us
            </button>
            <button className="w-[212px] h-[44px] px-[24px] rounded-[57px] text-[#002A48] border-2 border-[#002A48] flex items-center"
              onClick={handleChatClick}>
              <img src="/Vector.png" alt="Chat Icon" className="mr-2" />
              Chat with Monito
            </button>
          </div>
          {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} pet={pet} />}
          {showLoginMessage && (
            <p className="text-red-500 mt-2">
              Please log in to your account to chat with Monito.
            </p>
          )}
          <div className="flex flex-col space-y-4">
            {[{ label: "Gender", value: pet.gene },
              { label: "SKU", value: pet.id },
              { label: "Age", value: pet.age },
              { label: "Size", value: pet.breed },
              { label: "Color", value: pet.color },
              { label: "Vaccinated", value: pet.vaccinated ? 'Yes' : 'No' },
              { label: "Dewormed", value: pet.dewormed ? 'Yes' : 'No' },
              { label: "Certification", value: pet.cert },
              { label: "Microchip", value: pet.microchip ? 'Yes' : 'No' },
              { label: "Location", value: pet.location },
              { label: "Published Date", value: pet.publishedDate },
              { label: "Additional Information", value: pet.additionalInfo },
            ].map((item, index) => (
              <div key={index} className="flex justify-between px-4 border-b border-[#EBEEEF] py-2">
                <span className="text-[#667479] text-[14px] leading-[20px] font-medium">{item.label}:</span>
                <span className="text-[#667479] text-[14px] leading-[20px] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Slider Section */}
      <div className="pt-[100px] px-0 md:px-[200px] lg:px-[130px] sm:px-[16px]">
        <h3 className="font-semibold text-[#00171F] pb-[10px] text-[24px] leading-[36px]">Our lovely customers</h3>
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {[...Array(8)].map((_, index) => (
            <img 
              key={index}
              src={`/customer-${(index % 4) + 1}.png`} 
              className="flex-shrink-0 pr-[10px]" 
              alt={`Customer ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Random Pets Section */}
      <div className="pt-[100px] px-0 md:px-[200px] lg:px-[130px] sm:px-[16px]">
        <p className="text-[16px] text-center leading-[24px]">What's new?</p>
        <h5 className="text-[24px] text-center leading-[36px] text-[#003459] pt-[2px] font-semibold capitalize">
          See more puppies
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[28px] pt-8 place-items-center">
          {randomPets.map((pet) => (
            <div
              key={pet.id}
              onClick={() => handlePetClick(pet.id)}
              className="bg-white border rounded-lg shadow-lg w-full max-w-[280px] h-[378px] p-2 flex flex-col relative cursor-pointer"
            >
              <img src={pet.image} alt={pet.name} className="w-full h-auto rounded-t-lg" />
              <div className="mt-2 flex-1">
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
      </div>
    </>
  );
};

export default PetProfile;

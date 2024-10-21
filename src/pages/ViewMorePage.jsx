import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import petsData from "../data/petsData";

const ITEMS_PER_PAGE = 15; 

const ViewMorePage = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(""); 
  const [genderFilter, setGenderFilter] = useState({ male: false, female: false }); 
  const [colorFilter, setColorFilter] = useState([]); 
  const [priceRange, setPriceRange] = useState({ min: "", max: "" }); 
  const [breedFilter, setBreedFilter] = useState([]); 

  const handleGenderChange = (e) => {
    const { name, checked } = e.target;
    setGenderFilter({
      ...genderFilter,
      [name]: checked,
    });
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setColorFilter((prev) =>
      checked ? [...prev, value] : prev.filter((color) => color !== value)
    );
  };

  
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBreedChange = (e) => {
    const { value, checked } = e.target;
    setBreedFilter((prev) =>
      checked ? [...prev, value] : prev.filter((breed) => breed !== value)
    );
  };

  
  const filteredPets = petsData.filter((pet) => {
    const matchesName = pet.name.toLowerCase().includes(filter.toLowerCase());
    const matchesGender =
      (genderFilter.male && pet.gene === "male") ||
      (genderFilter.female && pet.gene === "female") ||
      (!genderFilter.male && !genderFilter.female); 

    const matchesColor =
      colorFilter.length === 0 || colorFilter.includes(pet.color);

    
    const petPrice = parseFloat(pet.price.replace(/[^0-9.-]+/g, ""));
    const matchesPrice =
      (!priceRange.min || petPrice >= parseFloat(priceRange.min)) &&
      (!priceRange.max || petPrice <= parseFloat(priceRange.max));

    const matchesBreed = breedFilter.length === 0 || breedFilter.includes(pet.breed);

    return (
      matchesName &&
      matchesGender &&
      matchesColor &&
      matchesPrice &&
      matchesBreed
    );
  });

 
  const totalPages = Math.ceil(filteredPets.length / ITEMS_PER_PAGE);

  
  const displayedPets = filteredPets.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePetClick = (petId) => {
    navigate(`/pet-profile/${petId}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); 
  };

  return (
    <>
       <div className="flex flex-col md:flex-row items-center justify-between mx-auto max-w-[1200px] w-[80%] bg-[#003459] rounded-[20px] mt-[120px] relative overflow-hidden">
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <img 
          src="/puppies.png" 
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
      <div className="w-full md:w-1/2 flex flex-col justify-center px-[130px] md:px-8 text-[#FCEED5] text-left z-10">
        <h2 className="text-[30px] md:text-[40px] leading-[48px] md:leading-[68px] font-bold">One More Friend</h2>
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


    <div className="flex flex-col md:flex-row px-[16px] md:px-[130px]">
  {/* Filter Section */}
  <div className="flex-none w-full md:w-auto pr-4 flex flex-col">
    <h5 className="text-[24px] leading-[36px] text-[#003459] pt-[100px]">Filter</h5>

    {/* Gender Filter */}
    <div className="flex flex-col mt-4">
      <p className="text-[#003459] text-[16px] leading-[24px] font-semibold">Gender</p>
      <div className="flex flex-col">
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            name="male"
            checked={genderFilter.male}
            onChange={handleGenderChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="flex items-center mt-2">
          <input
            type="checkbox"
            name="female"
            checked={genderFilter.female}
            onChange={handleGenderChange}
            className="mr-2"
          />
          Female
        </label>
      </div>
    </div>

    {/* Color Filter */}
    <div className="flex flex-col mt-4">
      <p className="text-[#003459] text-[16px] leading-[24px] font-semibold">Color</p>
      <div className="flex flex-col">
        {["red", "apricot", "black", "blackandwhite", "silver", "tan"].map((color) => (
          <label key={color} className="flex items-center mt-2">
            <input
              type="checkbox"
              value={color}
              checked={colorFilter.includes(color)}
              onChange={handleColorChange}
              className="mr-2"
            />
            <img src={`/${color}.png`} alt={color} className="h-4 w-4 mr-2" />
            {color}
          </label>
        ))}
      </div>
    </div>

    {/* Price Filter */}
    <div className="flex flex-col mt-4">
      <p className="text-[#003459] text-[16px] leading-[24px] font-semibold">Price</p>
      <div className="flex flex-col">
        <input
          type="number"
          name="min"
          placeholder="Min"
          value={priceRange.min}
          onChange={handlePriceChange}
          className="border rounded-md p-2 w-full mt-2"
        />
        <input
          type="number"
          name="max"
          placeholder="Max"
          value={priceRange.max}
          onChange={handlePriceChange}
          className="border rounded-md p-2 w-full mt-2"
        />
      </div>
    </div>

    {/* Breed Filter */}
    <div className="flex flex-col mt-4">
      <p className="text-[#003459] text-[16px] leading-[24px] font-semibold">Breed</p>
      <div className="flex flex-col">
        {["small", "medium", "large"].map((breed) => (
          <label key={breed} className="flex items-center mt-2">
            <input
              type="checkbox"
              value={breed}
              checked={breedFilter.includes(breed)}
              onChange={handleBreedChange}
              className="mr-2"
            />
            {breed}
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Cards Section */}
  <div className="flex-grow">
    <h5 className="text-[24px] leading-[36px] text-[#003459] pt-[100px]">All Available Pets</h5>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px] pt-8">
      {displayedPets.map((pet) => (
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
</div>





      {/* Pagination Controls */}
      <div className="flex justify-center pt-8 w-full">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded-lg ${
              currentPage === index + 1 ? "bg-[#003459] text-white" : "bg-gray-200 text-[#003459]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default ViewMorePage;


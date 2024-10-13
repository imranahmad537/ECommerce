import React from "react";
import e_img1 from '../assets/e_img1.png'


const Enhance = () => {
  return (
    <div className="flex justify-center my-8 pt-40">
    <div className="w-10/12 md:w-9/12 bg-black text-white p-6 rounded-md shadow-md" style={{ height: '450px' }}>
      <div className="flex h-full">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center pl-6">
          <h4 className="text-black-700 mb-2">Categories</h4>
          <h2 className="font-bold text-4xl mb-4 leading-tight">Enhance Your Music Experience</h2>
  
          <div className="flex space-x-4 mb-4 overflow-x-auto"> {/* Added overflow-x-auto to prevent wrapping */}
            {["23 hours", "5 days", "29 min", "25 seconds"].map((time, index) => (
              <div key={index} className="flex items-center justify-center p-4 w-20 h-20 text-center  bg-white text-black rounded-full">
                {time}
              </div>
            ))}
          </div>
  
          <div className="mt-2">
            <button className="bg-[#008001] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
  
        {/* Right Side - Image */}
        <div className="flex-none ml-6 flex items-center justify-center">
          <div className="relative">
            <img
              src={e_img1}
              alt="Offer"
              className="h-64 object-cover rounded-md"
            />
            <div className="absolute inset-0 bg-white opacity-20 rounded-md" style={{ mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
  

  );
};

export default Enhance;

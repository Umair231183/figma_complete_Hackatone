import React from "react";

const Button = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <button
        className="
          w-[170px] h-[56px] 
          md:w-[200px] md:h-[60px] 
          lg:w-[220px] lg:h-[64px] 
          bg-[#4E4D93] 
          hover:bg-[#797777] 
          duration-1000 
          text-slate-50 
          text-sm md:text-base lg:text-lg 
          rounded-lg shadow-md 
          focus:outline-none focus:ring-2 focus:ring-[#797777] focus:ring-offset-2
        "
      >
        View Collection
      </button>
    </div>
  );
};

export default Button;

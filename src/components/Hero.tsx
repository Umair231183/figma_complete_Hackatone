import Button from "@/components/Button";
import React from "react";
import Image from "next/image";
import chairImage from "@/app/img/chair.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-10 md:w-full h-auto md:h-[584px] px-4 md:px-11 md:mt-20">
      {/* Text Section */}
      <div className="flex flex-col justify-evenly bg-[#2A254B] text-slate-50 w-full md:w-[50%] px-5 py-8 md:px-10 md:py-0">
        <div className="w-full max-w-[450px] mb-6 text-3xl leading-relaxed md:mb-5">
          <h2>The Furniture brand for the future, with timeless designs</h2>
        </div>
        <div className="flex flex-col justify-between md:flex-col mt-10 md:mt-0">
          {/* Button Section */}
          <div className="text-center md:text-left">
            <Button />
          </div>
          {/* Description Text Section */}
          <div className="w-full max-w-[602px] mt-10 text-sm md:mt-20 md:text-xl md:leading-loose text-center md:text-left">
            <p>
              A new era in eco-friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors, and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:w-[50%] flex justify-center">
        <Image
          src={chairImage}
          alt="Chair Image"
          className="w-full md:w-auto h-auto md:h-[584px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;

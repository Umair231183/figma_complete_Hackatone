import Image from "next/image";
import aboutTwoImg from "@/app/img/about-2.png";
import React from "react";

const AboutTwo = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F9F9F9] mt-16 md:h-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <Image
          src={aboutTwoImg}
          alt="About Us"
          className="w-full h-[300px] sm:h-[400px] md:h-[550px] object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 px-6 md:px-10 py-10 md:py-14 flex flex-col justify-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl text-[#4E4D93] font-serif font-light">
          From a studio in London to a global brand with over 400 outlets
        </h3>

        <div className="flex flex-col gap-6 mt-6">
          <p className="text-sm sm:text-base text-slate-500">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-sm sm:text-base text-slate-500 font-serif">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 px-6 py-3 w-fit bg-[#4E4D93] hover:bg-[#797777] duration-300 text-slate-50 text-center mx-auto md:mx-0">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;

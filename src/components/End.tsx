import Image from "next/image";
import lastImg from "@/app/img/last.png";
import React from "react";

const End = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-6 w-full overflow-hidden">
      {/* Text Section */}
      <div className="px-5 py-10 md:px-10 md:py-14 flex-shrink-0 md:max-w-[620px] w-full">
        <h3 className="text-xl md:text-2xl text-[#4E4D93] font-serif font-light leading-tight">
          From a studio in London to a global brand with over 400 outlets
        </h3>
        <div className="flex flex-col gap-6 mt-6">
          <p className="text-sm md:text-base text-slate-500">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-sm md:text-base text-slate-500 font-serif">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="mt-8 px-5 py-3 w-full md:w-[170px] bg-[#4E4D93] hover:bg-[#797777] duration-1000 text-slate-50 text-center rounded-lg">
          Get in touch
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center items-center mt-8 md:mt-0 md:w-auto">
        <Image
          src={lastImg}
          alt="lastImg"
          className="h-auto w-full md:h-full md:w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default End;

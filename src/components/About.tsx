import React from "react";
import Button from "./Button";
import Image from "next/image";
import aboutImg from "@/app/img/about-1.png";

const About = () => {
  return (
    <div className="px-5 md:px-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between mt-20 mb-24">
        <div className="max-w-full md:max-w-[600px] mb-6 md:mb-0 leading-loose font-extralight font-serif">
          <h1 className="text-2xl md:text-3xl text-center md:text-left">
            A brand built on the love of craftsmanship, quality, and outstanding
            customer service
          </h1>
        </div>
        <div className="flex justify-center md:justify-start">
          <Button />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Text Content */}
        <div className="flex flex-col justify-between p-6 bg-[#2A254B] text-slate-50 w-full md:w-[634px] h-auto md:h-[478px] font-serif font-extralight">
          <div className="space-y-4 mb-5 text-2xl md:text-3xl leading-relaxed">
            <h2 className="text-center md:text-left">
              The Furniture brand for the future, with timeless designs
            </h2>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div className="mt-10 text-center md:text-left">
              <Button />
            </div>
            <div className="mt-6 md:mt-10 text-sm md:text-base leading-loose">
              <p className="text-center md:text-left">
                A new era in eco-friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors, and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[634px] h-[300px] md:h-[478px]">
          <Image
            src={aboutImg}
            alt="About Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

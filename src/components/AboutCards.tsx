import Image from "next/image";
import deliveryImage from "@/app/img/delivery.png";
import checkImage from "@/app/img/check.png";
import purchaseImg from "@/app/img/purchase.png";
import sprutImg from "@/app/img/Sprout.png";
import React from "react";

const AboutCards = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-16 px-4 md:px-10 lg:px-20 leading-loose text-slate-500">
      <div className="text-center text-3xl text-slate-500 font-serif">
        <h3>What makes our brand different</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src={deliveryImage}
              alt="Delivery"
              className="object-contain"
            />
          </div>
          <h3 className="text-slate-800 text-xl mt-4">Next day as standard</h3>
          <p className="text-sm mt-2">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src={checkImage}
              alt="Made by true artisans"
              className="object-contain"
            />
          </div>
          <h3 className="text-slate-800 text-xl mt-4">Made by true artisans</h3>
          <p className="text-sm mt-2">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src={purchaseImg}
              alt="Unbeatable prices"
              className="object-contain"
            />
          </div>
          <h3 className="text-slate-800 text-xl mt-4">Unbeatable prices</h3>
          <p className="text-sm mt-2">
            For our materials and quality, you won’t find better prices anywhere
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
            <Image
              src={sprutImg}
              alt="Recycled packaging"
              className="object-contain"
            />
          </div>
          <h3 className="text-slate-800 text-xl mt-4">Recycled packaging</h3>
          <p className="text-sm mt-2">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;

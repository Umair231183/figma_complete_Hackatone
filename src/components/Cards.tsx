import Image from "next/image";
import deliveryImage from "@/app/img/delivery.png";
import checkImage from "@/app/img/check.png";
import purchaseImg from "@/app/img/purchase.png";
import sprutImg from "@/app/img/Sprout.png";
import React from "react";

const Cards = () => {
  return (
    <div className="mt-16 px-4 lg:px-10 text-slate-500">
      <div className="text-center text-3xl text-slate-500 font-serif mb-10">
        <h3>What makes our brand different</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-24 h-24 mb-4">
            <Image src={deliveryImage} alt="Delivery" />
          </div>
          <h3 className="text-slate-800 text-xl font-semibold mb-2">
            Next day as standard
          </h3>
          <p className="text-sm leading-6">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-24 h-24 mb-4">
            <Image src={checkImage} alt="Artisans" />
          </div>
          <h3 className="text-slate-800 text-xl font-semibold mb-2">
            Made by true artisans
          </h3>
          <p className="text-sm leading-6">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-24 h-24 mb-4">
            <Image src={purchaseImg} alt="Unbeatable Prices" />
          </div>
          <h3 className="text-slate-800 text-xl font-semibold mb-2">
            Unbeatable prices
          </h3>
          <p className="text-sm leading-6">
            For our materials and quality, you won’t find better prices
            anywhere.
          </p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg">
          <div className="w-24 h-24 mb-4">
            <Image src={sprutImg} alt="Recycled Packaging" />
          </div>
          <h3 className="text-slate-800 text-xl font-semibold mb-2">
            Recycled packaging
          </h3>
          <p className="text-sm leading-6">
            We use 100% recycled packaging to ensure our footprint is
            manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;

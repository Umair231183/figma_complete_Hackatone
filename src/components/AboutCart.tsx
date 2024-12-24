import Image from "next/image";
import aboutProduct from "@/app/img/about-3.png";
import aboutImg from "@/app/img/about-4.png";
import React from "react";

const AboutCart = () => {
  return (
    <div className="bg-[#F9F9F9] px-6 md:px-12 lg:px-24 font-serif font-extralight">
      {/* Header */}
      <div className="py-8 md:py-16 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Your Shopping Cart
        </h1>
      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-6 border-b pb-6">
        {/* Table Header */}
        <div className="hidden md:flex justify-between border-b-2 pb-2 text-gray-600">
          <span className="w-1/3">Product</span>
          <span className="w-1/3 text-center">Quantity</span>
          <span className="w-1/3 text-right">Total</span>
        </div>

        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <Image
              src={aboutProduct}
              alt="Graystone Vase"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded"
            />
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="font-bold text-lg">Graystone Vase</div>
              <p className="text-sm text-gray-600 max-w-[250px]">
                A timeless ceramic vase with a tri-color grey glaze.
              </p>
              <div className="text-base font-medium">£85</div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center">1</div>
          <div className="w-full md:w-1/3 text-right font-bold">£85</div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <Image
              src={aboutImg}
              alt="Basic White Vase"
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover rounded"
            />
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="font-bold text-lg">Basic White Vase</div>
              <p className="text-sm text-gray-600 max-w-[250px]">
                Beautiful and simple, this is one for the classics.
              </p>
              <div className="text-base font-medium">£85</div>
            </div>
          </div>
          <div className="w-full md:w-1/3 text-center">1</div>
          <div className="w-full md:w-1/3 text-right font-bold">£85</div>
        </div>
      </div>

      {/* Subtotal and Taxes */}
      <div className="text-center md:text-right my-6 leading-8">
        <div className="text-lg">
          Subtotal: <span className="font-bold">£170</span>
        </div>
        <div className="text-sm text-gray-500">
          Taxes and shipping are calculated at checkout.
        </div>
      </div>

      {/* Checkout Button */}
      <div className="text-center md:text-right py-6">
        <button className="bg-[#4E4D93] px-8 py-3 text-white font-medium rounded hover:bg-[#797777] transition duration-300">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default AboutCart;

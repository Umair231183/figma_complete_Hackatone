import Image from "next/image";
import sofaImg from "@/app/img/sofa.png";
import sChair from "@/app/img/s-chair.png";
import wChair from "@/app/img/w-chair.png";
import React from "react";
import Button from "./Button";

const Products = () => {
  return (
    <div className="flex flex-col gap-8 mt-32 mx-10">
      <div className="text-4xl font-sans font-light">
        <h3>Our popular Products</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:flex md:gap-4">
        <div className="flex flex-col gap-8 w-full md:w-[630px] h-[375px] font-light transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={sofaImg} alt="sofaImg" />
          </div>
          <div className="leading-loose text-xl">
            <p>The Popular suede sofa</p>
            <p>£980</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:w-[300px] h-[462px] font-light transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={sChair} alt="sChair" />
          </div>
          <div className="leading-loose text-xl">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full md:w-[300px] h-[462px] font-light transform transition-transform duration-300 hover:scale-105">
          <div>
            <Image src={wChair} alt="wChair" />
          </div>
          <div className="leading-loose text-xl">
            <p>The Dandy chair</p>
            <p>£250</p>
          </div>
        </div>
      </div>
      <div className="text-center my-10">
        <Button />
      </div>
    </div>
  );
};

export default Products;

import Image from "next/image";
import photoImg from "@/app/img/Photo.png";
import photo1Img from "@/app/img/Photo (1).png";
import parentImg from "@/app/img/Parent.png";
import lampImg from "@/app/img/lamp.png";
import React from "react";
import Button from "./Button";

const Ceramics = () => {
  return (
    <div className="flex flex-col gap-12 mt-24 px-6 md:px-16 lg:px-24">
      {/* Title */}
      <div className="text-4xl font-sans font-light text-center">
        <h3>New Ceramics</h3>
      </div>

      {/* Grid of Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {[
          { img: photoImg, title: "The Dandy chair", price: "£250" },
          { img: photo1Img, title: "Rustic vase set", price: "£155" },
          { img: parentImg, title: "The silky vase", price: "£125" },
          { img: lampImg, title: "The lucky lamp", price: "£399" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 w-full max-w-[300px] transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center leading-loose text-xl font-light">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <Button />
      </div>
    </div>
  );
};

export default Ceramics;

import React from "react";
import Button from "./Button";

const AboutSignUp = () => {
  return (
    <div className="h-auto bg-[#F9F9F9] px-4 sm:px-8 md:px-16 py-8 md:py-12">
      <div className="grid place-content-center h-auto min-h-[300px] bg-[#FFFFFF] shadow-lg rounded-lg">
        <div className="flex flex-col gap-10 items-center px-6 sm:px-10 md:px-14 py-8">
          {/* Heading Section */}
          <div className="flex flex-col gap-6 text-[#4E4D93] items-center text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-light">
              Join the club and get the benefits
            </h3>
            <p className="font-sans font-light w-full max-w-md sm:max-w-lg md:max-w-[460px]">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
          </div>

          {/* Input Section */}
          <div className="w-full max-w-md sm:max-w-lg md:max-w-[454px] flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] px-4 py-3 flex-grow rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E4D93]"
            />
            <button className="px-6 py-3 bg-[#4E4D93] hover:bg-[#797777] duration-300 text-white text-center rounded-md w-full sm:w-auto">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSignUp;

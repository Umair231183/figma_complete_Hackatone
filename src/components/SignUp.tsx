import React from "react";
import Button from "./Button";

const SignUp = () => {
  return (
    <div className="h-auto bg-[#F9F9F9] px-8 py-12 md:px-16 md:py-16">
      <div className="grid place-content-center h-auto min-h-[364px] bg-[#FFFFFF] w-full">
        <div className="flex flex-col gap-12 md:gap-20 items-center px-6 md:px-14">
          <div className="flex flex-col gap-6 md:gap-10 text-[#4E4D93] items-center text-center">
            <h3 className="text-3xl md:text-4xl font-sans font-light">
              Join the club and get the benefits
            </h3>
            <p className="font-sans font-light w-full max-w-[460px] text-center">
              Sign up for our newsletter and receive exclusive offers on new
              ranges, sales, pop-up stores, and more.
            </p>
          </div>
          <div className="w-full max-w-[454px] flex items-center gap-2">
            <input
              type="text"
              placeholder="your@email.com"
              className="bg-[#F9F9F9] px-4 py-2 flex-grow rounded-md focus:outline-none"
            />
            <span className="px-4 py-2 bg-[#4E4D93] hover:bg-[#797777] duration-300 text-slate-50 text-center cursor-pointer rounded-md">
              Signup
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

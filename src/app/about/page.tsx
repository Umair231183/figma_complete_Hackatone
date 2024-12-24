import About from "@/components/About";
import AboutCards from "@/components/AboutCards";
import AboutSignUp from "@/components/AboutSignUp";
import AboutTwo from "@/components/AboutTwo";
import React from "react";

const page = () => {
  return (
    <div>
      <About />
      <AboutTwo />

      <AboutSignUp />
    </div>
  );
};

export default page;

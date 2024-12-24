import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2A254B]">
      {/* Flexbox for layout, wrapped in responsive classes */}
      <div className="text-slate-50 flex flex-col md:flex-row gap-10 md:gap-36 font-extralight font-serif p-14 leading-loose">
        {/* Menu */}
        <div className="flex-1">
          <ul>
            <li>Menu</li>
            <li>New arrivals</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>
        {/* Categories */}
        <div className="flex-1">
          <ul>
            <li>Categories</li>
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
            <li>Crockery</li>
          </ul>
        </div>
        {/* Our company */}
        <div className="flex-1">
          <ul>
            <li>Our company</li>
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>
        {/* Join our mailing list */}
        <div className="w-full max-w-[454px] font-light font-serif">
          <h4>Join our mailing list</h4>
          <div className="flex">
            <input
              type="text"
              placeholder="your@email.com"
              className="bg-slate-50 px-8 py-4 flex-grow mb-4 md:mb-0"
            />
            <span className="px-4 py-6 rounded-none bg-[#4E4D93] hover:bg-[#797777] duration-200 text-slate-50 text-center">
              Signup
            </span>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and social media links */}
      <div className="border-t border-gray-300 mx-10">
        <div className="text-slate-50 flex flex-col md:flex-row py-10 justify-between items-center font-serif font-extralight">
          <div>Copyright 2022 Avion LTD</div>
          <div className="flex gap-10 text-xl mt-4 md:mt-0">
            <FaLinkedin />
            <FaFacebook />
            <AiFillInstagram />
            <FaSkype />
            <FaTwitter />
            <FaPinterest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

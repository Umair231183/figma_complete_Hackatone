"use client";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Menu toggle state

  return (
    <div>
      <header className="mx-4 md:mx-5">
        {/* Top Bar */}
        <div className="flex justify-between items-center border-b border-slate-300 p-4">
          {/* Search Icon (Medium and Above) */}
          <div className="hidden md:block">
            <CiSearch className="text-slate-600 text-xl cursor-pointer hover:text-slate-900 transition duration-300" />
          </div>

          {/* Logo */}
          <div className="text-slate-950 text-2xl md:text-3xl font-bold">
            Avion
          </div>

          {/* Right Section */}
          <div className="flex gap-3 items-center">
            {/* Cart Icon (Medium and Above) */}
            <Link href="/cart">
              <IoCartOutline className="hidden md:block text-2xl text-slate-600 cursor-pointer hover:text-slate-900 transition duration-300" />
            </Link>

            {/* Account Icon (Medium and Above) */}
            <Link href="/about">
              <MdAccountCircle className="hidden md:block text-2xl text-slate-600 cursor-pointer hover:text-slate-900 transition duration-300" />
            </Link>

            {/* Menu Icon (Small Screens) */}
            <IoMdMenu
              className="block md:hidden text-2xl text-slate-600 cursor-pointer hover:text-slate-900 transition duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>

        {/* Dropdown Menu (Small Screens) */}
        <div
          className={`${
            menuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden bg-white shadow-md md:hidden transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link
                href="/"
                className="text-slate-600 text-lg cursor-pointer hover:text-slate-900 transition duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-600 text-lg cursor-pointer hover:text-slate-900 transition duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="text-slate-600 text-lg cursor-pointer hover:text-slate-900 transition duration-300"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links (Medium and Above) */}
        <div className="hidden md:block">
          <ul className="flex justify-center gap-10 mt-4">
            <li>
              <Link
                href="/"
                className="text-slate-500 text-lg cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-slate-500 text-lg cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className="text-slate-500 text-lg cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out"
              >
                Cart
              </Link>
            </li>
          </ul>

          {/* Additional Categories under Navigation */}
          <ul className="flex justify-center gap-10 mt-4 bg-slate-100 p-5">
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Plant Pots
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Ceramics
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Tables
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Chairs
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Crockery
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Tableware
            </li>
            <li className="text-slate-900 cursor-pointer hover:text-slate-900 transition-all duration-300 ease-in-out">
              Cutlery
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;

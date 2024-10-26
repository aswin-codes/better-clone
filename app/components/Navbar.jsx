import Link from "next/link";
import React from "react";
import { HamburgerIcon, Logo, PhoneIcon } from "./Icons";
import "../globals.css";

const Navbar = ({ toggleModal, isSection1 }) => {
  return (
    <div
      className={`w-full fixed z-40 transition-colors duration-300 ${isSection1 ? "bg-primary text-white" : "bg-white text-black"
        } flex justify-between py-6 px-8`}
    >
      <div className="flex gap-10 items-center">
        <Link href={"/"}>
          <Logo size={1} />
        </Link>
        <div className="lg:flex gap-14 hidden">
          <Link href={"/about-us"}> <div className="nav-items">About Us</div></Link>
          <div className="nav-items">Mortgage</div>
          <Link href={"/start"}> <div className="nav-items">Start</div></Link>
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <PhoneIcon isSection1={isSection1}/>
        <div className="hidden sm:block nav-items cursor-pointer">Sign in</div>
        <div className="cursor-pointer text-black bg-activeGreen hover:bg-transparent hover:text-white transition-all duration-150 ease-in-out md:px-3 md:py-3 p-2 md:text-base text-sm rounded-full">
          Get Started
        </div>
        <div className="block lg:hidden cursor-pointer" onClick={toggleModal}>
          <HamburgerIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

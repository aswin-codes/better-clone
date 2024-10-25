import React from "react";
import { Close, Logo, Phone, PhoneIcon, UserIcon } from "./Icons";

const MenuModal = ({ isVisible, onClose }) => {
    return (
        <div
            className={`fixed top-0 z-50 left-0 h-full w-full bg-white flex justify-between flex-col z-50 transform transition-transform duration-300 ease-in-out py-6 px-10 ${isVisible ? "translate-x-0" : "-translate-x-full"
                }`}
        >
            <div>
                <div className="flex items-center justify-between w-full mb-5">
                    <div className="text-black"><Logo size={1.2} /></div>
                    <div onClick={onClose} className="cursor-pointer text-black"><Close /></div>
                </div>
                <div className="mt-5 text-base text-black cursor-pointer font-thin ">About Us</div>
                <div className="mt-5  text-black cursor-pointer">Mortgage</div>
                <div className="mt-5  text-black cursor-pointer">Start</div>
                <div className="bg-successGreen rounded-full mt-3 text-black cursor-pointer flex items-center justify-center gap-3 py-2 ">
                    <Phone />
                    <p> Call us anytime at <span className="underline">1234567890</span></p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center bg-activeGreen rounded-full py-3 cursor-pointer group hover:bg-primary duration-200 ease-in-out transition-all ">
                    <p className="text-black text-base font-bold group-hover:text-white duration-200 ease-in-out transition-all ">Get Started</p>
                    <p className="text-black text-sm group-hover:text-white duration-200 ease-in-out transition-all ">3 min | No credit impact</p>
                </div>
                <div className="flex gap-2 text-black items-center justify-center border border-gray-300 py-5 rounded-full hover:border-primary hover:border-2 transition-all duration-200 ease-in-out mt-4 cursor-pointer">
                    <p>Sign in</p>
                    <span><UserIcon/></span>
                </div>
            </div>
        </div>
    );
};

export default MenuModal;

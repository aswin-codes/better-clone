import React from 'react';
import { HomeIcon, Logo, MortgageIcon, PhoneOutlineIcon, CashIcon, CircleMoneyIcon, PercentageIcon, MobileIcon } from '../components/Icons';
import Betty from "../assets/betty.jpg";
import Image from "next/image";
import Footer from '../components/Footer'; // Using your Footer component

const Start = () => {
    return (
        <div className="min-h-screen font-poppins flex flex-col">
            {/* Header Section (Unchanged) */}
            <div className="px-10 sm:px-20 pt-10">
                <div className="flex justify-between">
                    <div>
                        <div className="text-primary">
                            <Logo size={0.7} />
                        </div>
                        <p className="text-gray-400 -mt-2">Mortgage</p>
                    </div>
                    <div className="flex gap-2  items-center">
                        <div className="w-8 h-8 flex items-center justify-center bg-successGreen text-primary rounded-full">
                            <PhoneOutlineIcon />
                        </div>
                        <h1 className="hidden sm:block text-black font-semibold">
                            Need help? Call (415) 523 8837
                        </h1>
                    </div>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-center mt-6">
                    <Image src={Betty} alt="Betty" className="rounded-full w-12 h-12 z-10" />
                    <hr className="w-full h-[2px] rounded-full bg-gray-300  -mt-6" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow flex flex-col items-center pt-10 sm:pt-20 text-black">
                <h1 className="text-center text-xl sm:text-3xl font-semibold mb-8">
                    Hi, I&apos;m Betsy!<br />What can I help you with?
                </h1>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <button className="relative flex items-center justify-between px-5 py-4 border-2 border-gray-300 rounded-md 
                    text-black transition-all duration-300 group hover:text-primary hover:border-green-500">
                        <div className="absolute inset-0 rounded-md border-[6px] border-transparent 
                    group-hover:border-green-500 transition-all duration-300 pointer-events-none"></div>

                        <div className="flex items-center gap-3 z-10">
                            <HomeIcon />
                            <span className="font-semibold text-lg">Buying a home</span>
                        </div>
                    </button>


                    <button className="relative flex items-center justify-between px-5 py-4 border-2 border-gray-300 rounded-md 
                    text-black transition-all duration-300 group hover:text-primary hover:border-green-500">
                        <div className="absolute inset-0 rounded-md border-[6px] border-transparent 
                    group-hover:border-green-500 transition-all duration-300 pointer-events-none"></div>

                        <div className="flex items-center gap-3 z-10">
                            <MortgageIcon />
                            <span className="font-semibold text-lg">Refinance my mortgage</span>
                        </div>
                    </button>

                    <button className="relative flex items-center justify-between px-5 py-4 border-2 border-gray-300 rounded-md 
                    text-black transition-all duration-300 group hover:text-primary hover:border-green-500">
                        <div className="absolute inset-0 rounded-md border-[6px] border-transparent 
                    group-hover:border-green-500 transition-all duration-300 pointer-events-none"></div>

                        <div className="flex items-center gap-3 z-10">
                            <CashIcon />
                            <span className="font-semibold text-lg">Get cash from my home</span>
                        </div>
                    </button>
                    {/* Info Section */}
                    <div className="flex justify-around mt-16 w-full text-center">
                        <div>
                            <h1 className="text-2xl font-bold">$100B</h1>
                            <p className="text-gray-500 text-sm">home loans funded entirely online</p>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">400K</h1>
                            <p className="text-gray-500 text-sm">
                                Customers who chose a simpler mortgage experience
                            </p>
                        </div>
                    </div>
                    <div className="bg-successGreen mt-10 mb-20 rounded-lg p-8 sm:p-12 text-center max-w-lg mx-auto shadow-sm">
                        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-black">
                            After a few questions, you&apos;ll unlock:
                        </h2>
                        <ul className="space-y-4 mx-auto w-fit" >
                            <li className="flex gap-3 w-fit">
                                <PercentageIcon />
                                <span className="text-black font-medium">Custom mortgage rates</span>
                            </li>
                            <li className="flex  gap-3 w-fit">
                                <div className='text-activeGreen'>
                                    <CircleMoneyIcon />
                                </div>
                                <span className="text-black font-medium">Exclusive offers</span>
                            </li>
                            <li className="flex gap-3 w-fit">
                                <div className='text-activeGreen'><MobileIcon /></div>

                                <span className="text-black font-medium">A personalized dashboard</span>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Start;

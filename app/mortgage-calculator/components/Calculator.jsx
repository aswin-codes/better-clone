import React, { useState } from 'react';
import Link from 'next/link';

const Calculator = () => {
    const [homePrice, setHomePrice] = useState(300000);
    const monthlyPayment = 2059; // This can be dynamically calculated based on inputs

    // Function to handle changes from the range slider
    const handleSliderChange = (e) => {
        const value = e.target.value;
        setHomePrice(value);
    };

    return (
        <div className='bg-successGreen pt-24 text-black'>
            <div className='mt-10 px-10 md:pl-20'>
                <h1 className='font-semibold text-xl md:text-3xl'>Mortgage Calculator</h1>
                <p className='text-gray-500 sm:w-3/4 md:w-1/2 mt-5'>
                    Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
                </p>
            </div>
            <div className="mb-lg px-10 md:pl-20 flex w-full items-end gap-base">
                <div className="grow">
                    <div className="w-full max-w-[300px]">
                        <label 
                            className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base" 
                            htmlFor="home-price"
                        >
                            Home price
                        </label>
                        <div className="z-0 relative w-full text-lg md:text-[40px]">
                            <div className="p-2xs relative rounded-base bg-backgroundTertiary w-full border border-solid border-strokeBorder ease-in-out duration-300 whitespace-nowrap overflow-hidden truncate focus:shadow-accentBorderSecondary focus:border-accentBorderSecondary hover:shadow-accentBorderSecondary hover:border-accentBorderSecondary focus:shadow-[0_0_0_3px_inset] hover:shadow-[0_0_0_3px_inset] h-3xl lg:h-4xl">
                                <div aria-hidden="true" className="top-[20px] absolute ease-in-out duration-300 transition-all font-bold mr-xs z-1 text-xl lg:text-3xl w-lg h-lg flex items-center justify-center lg:top-[30px] left-xs">$</div>
                                <input
                                    data-qa="home-price"
                                    name="home-price"
                                    type="tel"
                                    id="input-home-price"
                                    autoComplete="off"
                                    value={homePrice}
                                    onChange={(e) => setHomePrice(e.target.value.replace(/[^0-9]/g, ''))} // Allow only numbers
                                    className="text-left relative outline-none border-none rounded-xl px-sm pb-none text-default font-bold w-full h-full pl-[32px] text-xl lg:text-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <div className="w-full max-w-[300px]">
                        <p className="leading-body m-0 p-0 text-left text-textPrimary font-bold mb-base block text-sm md:text-base">Monthly payment</p>
                        <p className="leading-body m-0 p-0 text-left my-lg flex h-[30px] items-baseline overflow-hidden text-xl font-bold text-textPrimary md:my-none md:h-2xl lg:h-4xl lg:text-3xl" data-qa="monthly-payment">
                            ${monthlyPayment}/mo
                        </p>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div>
                            <div className="rounded-base leading-body text-base text-center font-bold select-none outline-none transition duration-300 ease-universal focus:shadow-[0_0_0_4px_inset] disabled:text-interactiveForegroundMuted disabled:bg-interactiveMuted disabled:shadow-none text-interactiveForegroundPrimary bg-activeGreen hover:text-white hover:bg-primary focus:shadow-accentBorderPrimary active:bg-accentPrimary px-10 py-5 rounded-xl h-3xl w-auto inline-flex items-center justify-center min-w-[220px]">
                                Get pre-approved
                            </div>
                       
                    </div>
                </div>
            </div>
            <div className="relative mx-lg mt-8 mb-lg px-10 md:pl-20">
                <input 
                    type="range" 
                    min="50000" 
                    max="3000000" 
                    step="100" 
                    value={homePrice} 
                    onChange={handleSliderChange}
                    className="bg-textPrimary rounded-base w-full rounded-full cursor-pointer appearance-none focus:outline-none"
                />
            </div>
                
        </div>
    );
}

export default Calculator;

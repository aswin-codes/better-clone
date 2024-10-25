import React from 'react'
import Image from 'next/image'
import ODM from "../assets/odm.webp"
import AC from "../assets/ac.webp"
import { RightArrow } from './Icons'
import Home from '../assets/home.webp'

const PartTwo = ({ about }) => {
    return (
        <div className='basis-3/4 p-10 bg-successGreen rounded-lg flex sm:flex-row flex-col gap-5'>
            <div>
                <h1 className='text-textPrimary font-semibold text-xl'>{
                    about == 'products' && "One Day Mortgage" || about == "calculators" && "Affordability    Calculator" || about == "guides" && "What is a good debt-to-income ratio for a home loan ?"
                }</h1>
                <p className='hidden sm:block text-sm text-gray-600'>{
                    about == 'products' && "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks" || about == "calculators" && "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford." || about == "guides" && "Thinking about buying a house without a real estate agent? Read this first."
                }</p>
                <div className='mt-3'><RightArrow /></div>
            </div>
            <div>
            {about == "products" && <Image src={ODM} alt='odm'  className='rounded-lg mt-5 h-52 object-contain'/>}
            {about == "calculators" && <Image src={AC} alt='AC'  className='rounded-lg mt-5 h-52 object-contain'/>}
            {about == "guides" && <Image src={Home} alt='Home'  className='rounded-lg mt-5 h-52 w-52 object-cover'/>}
            </div>
        </div>
    )
}

export default PartTwo
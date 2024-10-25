import React from 'react'
import Image from 'next/image'
import { RightArrow } from './Icons'
import HELOC from "../assets/heloc.webp"
import HC from "../assets/hc.webp"
import TL from "../assets/Time.webp"

const PartThree = ({ about }) => {
    return (
        <div className='basis-3/4 p-10 bg-successGreen rounded-lg flex sm:flex-row flex-col gap-5'>
            <div>
                {about == "products" && <Image src={HELOC} alt='odm' className='rounded-lg mt-5 h-52 object-cover' />}
                {about == "calculators" && <Image src={HC} alt='odm' className='rounded-lg mt-5 h-52 object-cover' />}
                {about == "guides" && <Image src={TL} alt='odm' className='rounded-lg mt-5 h-52 object-cover' />}
            </div>
            <div>
                <h1 className='text-textPrimary font-semibold text-xl'>{
                    about == 'products' && "Better HELOC" || about == "calculators" && "HELOC Calculator" || about == "guides" && "Timeline for homebuying process"
                }</h1>
                <p className='hidden sm:block text-sm text-gray-600'>{
                    about == 'products' && "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days." || about == "calculators" && "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be." || about == "guides" && "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps."
                }</p>
                <div className='mt-3'><RightArrow /></div>
            </div>

        </div>
    )
}

export default PartThree
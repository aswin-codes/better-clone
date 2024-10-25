import React from 'react'
import { RightArrow } from './Icons'
import Image from 'next/image'
import Ins from '../assets/insurance.webp'
import Fr from "../assets/fr.webp"
import Cl from "../assets/cl.webp"

const PartFour = ({about}) => {
    return (
        <div className='basis-1/4 p-10 bg-successGreen rounded-lg'>
            <h1 className='text-textPrimary font-semibold text-xl'>{
                about == 'products' && "Insurance" || about == "calculators" && "Fixed-rate loan comparison calculator" || about == "guides" && "Conventional loan requirements"
            }</h1>
            <div className='mt-3'><RightArrow /></div>
            {about == "products" && <Image src={Ins} alt='Insurance' className='rounded-lg mt-5' />}
            {about == "calculators" && <Image src={Fr} alt='Fixed Rate' className='rounded-lg mt-5' />}
            {about == "guides" && <Image src={Cl} alt='Conventional loan' className='rounded-lg mt-5' />}
        </div>
    )
}

export default PartFour
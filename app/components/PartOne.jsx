import React from 'react'
import { RightArrow } from './Icons'
import Image from 'next/image'
import Home from "../assets/home.webp"
import MC from "../assets/mc.webp"
import DTI from "../assets/dti.webp"

const PartOne = ( {about}) => {
  return (
    <div className='basis-1/4 p-10 bg-successGreen rounded-lg'>
        <h1 className='text-textPrimary font-semibold text-xl'>{
            about=='products' && "Buying your first home with Better" || about=="calculators" && "Mortgage Calculator" || about == "guides" && "What is a good debt-to-income ratio for a home loan ?"
        }</h1>
        <div className='mt-3'><RightArrow/></div>
        {about == "products" && <Image src={Home} alt='Home'  className='rounded-lg mt-5'/>}
        {about == "calculators" && <Image src={MC} alt='Mortgage Calculator'  className='rounded-lg mt-5'/>}
        {about == "guides" && <Image src={DTI} alt='L/I Ratio'  className='rounded-lg mt-5'/>}
    </div>
  )
}

export default PartOne
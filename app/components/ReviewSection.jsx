"use client"
import React, { useState } from 'react'
import { TrustPilotIcon } from './Icons'
import Arian from "../assets/arian.webp"
import Paul from "../assets/paul.webp"
import Amanda from "../assets/amanda.webp"
import Image from 'next/image'

const ReviewSection = () => {
    const [person, setPerson] = useState("arian")
  return (
    <section className="min-h-screen bg-white">
        <div className='flex flex-wrap-reverse gap-10 px-14 md:justify-between md:items-center md:px-32 py-10 md:py-20  text-black'>
            <div className='flex flex-col-reverse md:flex-col items-center w-full md:w-fit'>
                <div>
                    {person == "arian" && <Image src={Arian} alt="Arian" className='h-[500px] w-fit rounded-lg'/>}
                    {person == "amanda" && <Image src={Amanda} alt="Amanda" className='h-[500px] w-fit rounded-lg'/>}
                    {person == "paul" && <Image src={Paul} alt="Paul" className='h-[500px] w-fit rounded-lg'/>}
                </div>
                <div className='flex gap-4 w-full my-4'>
                    <div onClick={() => setPerson("arian")} className={`px-3 py-2 outline  rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${person=="arian" && 'text-activeGreen outline-activeGreen' }`}>Arian</div>
                    <div onClick={() => setPerson("amanda")} className={`px-3 py-2 outline  rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${person=="amanda" && 'text-activeGreen outline-activeGreen' }`}>Amanda</div>
                    <div onClick={() => setPerson("paul")} className={`px-3 py-2 outline  rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${person=="paul" && 'text-activeGreen outline-activeGreen' }`}>Paul</div>
                </div>
            </div>
            <div className='md:w-fit w-full flex flex-col '>
                <p className='text-4xl font-semibold  md:text-6xl max-w-[400px]'>Find out why we're better.</p>
                <div className='cursor-pointer font-semibold text-white bg-primary hover:bg-inversePrimary duration-200 ease-in-out transition-all w-full text-center md:w-fit px-5 py-3 rounded-full mt-5 '> See all our stories</div>
                <div className='mt-4 flex gap-2 text-gray-600 items-center '>
                    <TrustPilotIcon/> 
                    <p className='font-semibold mt-1'>Excellent</p>
                    <p><span className='font-semibold mt-1'>4.4</span> out of 5</p>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReviewSection
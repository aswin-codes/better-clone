import React from 'react'
import { Logo, PhoneOutlineIcon } from '../components/Icons'
import Betty from "../assets/betty.jpg"
import Image from "next/image"
const Start = () => {
    return (
        <div className="min-h-[100dvh] font-poppins">
            <div className='px-10 sm:px-20 pt-10'>
                <div className='flex justify-between'>
                    <div>
                        <div className='text-primary '><Logo size={0.7} /></div>
                        <p className='text-gray-400 -mt-2'>Mortgage</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='size-8 flex items-center justify-center bg-successGreen text-primary rounded-full'>
                            <PhoneOutlineIcon />
                        </div>
                        <h1 className='hidden sm:block text-black font-semibold'>Need help? Call (415) 523 8837</h1>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <Image src={Betty} alt='Betty' className='rounded-full size-12' />
                    </div>
                    <hr className='h-1 rounded-full bg-gray-300 -mt-6' />
                </div>
                <div className='flex flex-col items-center pt-10 sm:pt-20 text-black'>
                    <h1 className='text-center text-xl sm:text-3xl font-semibold'>
                        Hi, I&apos;m Betsy!<br />What can I help you with?
                    </h1>
                </div>
            </div>

        </div>
    )
}

export default Start
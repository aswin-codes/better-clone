import React from 'react'
import { ClockIcon, DropIcon, Ratings } from './Icons'
import Image from 'next/image'
import PhoneImage from '../assets/phone.webp'

const HomeSection = () => {
    return (
        <section className='min-h-screen bg-primary pt-24 flex flex-col items-center'>
            <div className='flex items-center gap-4 md:mt-5'>
                <div><DropIcon /></div>
                <p className='text-xl md:text-3xl'>Rate drop alert</p>
            </div>
            <div className='mt-10 z-20'>
                <p className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-semibold px-10 sm:px-28'>The rate drop you've been waiting for</p>
            </div>
            <div className='z-10 sm:flex-row flex items-center justify-center flex-col mt-10 sm:-mt-14 px-10'>
                <div>
                    <div className='px-14 sm:px-7     py-4 rounded-full bg-activeGreen hover:bg-transparent text-black hover:text-white duration-200 ease-in-out transition-all cursor-pointer '>
                        Start my approval
                    </div>
                    <div className='flex text-sm mt-2 gap-2 justify-center text-gray-300'>
                        <ClockIcon/>
                        <span>3 min | No credit impact</span>
                    </div>
                </div>
                <div>
                    <Image src={PhoneImage} alt='Phone Image' className='h-[600px] object-contain w-fit '/>
                </div>
                <div>
                    <Ratings/>
                </div>
            </div>
        </section>
    )
}

export default HomeSection
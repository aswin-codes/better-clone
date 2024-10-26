import React from 'react'
import VM from "../../assets/vm.jpg"
import Image from 'next/image'
const VishalComponent = () => {
    return (
        <section className='min-h-screen'>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 p-8 flex-1">
                {/* Left Section - Text */}
                <div className="max-w-lg text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-black mb-4">The status quo is broken</h2>
                    <p className="text-gray-600 mb-6">
                        The traditional processes around homeownership are opaque and stressful.
                        Fees aren&apos;t transparent, and some are simply outrageous in size.
                        Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
                        It&apos;s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
                    </p>
                    <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-primary">
                        Read Vishal&apos;s story
                    </button>
                </div>

                {/* Right Section - Image */}
                <div className="relative max-w-md">
                    <Image
                        src={VM}
                        alt="Vishal Garg"
                        className="rounded-md shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white rounded-full p-3 shadow-md hover:scale-105 transition">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-10 w-10 text-gray-700"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M3 22v-20l18 10-18 10z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VishalComponent
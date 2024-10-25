import { useState } from 'react'
import DetailsSection from './DetailsSection'

const QASection = () => {
    const [about, setAbout] = useState("products")

    return (
        <section className="min-h-screen bg-white">
            <div className='px-14 md:px-16 py-10 md:py-20 '>
                <div className='flex justify-between flex-wrap gap-5 items-end text-black'>
                    <h2 className="font-bold text-textPrimary leading-heading m-0 p-0 text-4xl md:text-5xl md:tracking-tight w-full max-w-lg tracking-tight">Got questions?<br />We've got answers</h2>
                    <div className='flex gap-9'>
                        <div
                            onClick={() => setAbout("products")}
                            className={`px-3 py-2 outline-none rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${about === "products" && "text-activeGreen outline-4 outline-activeGreen"
                                }`}
                        >
                            Our Products
                        </div>

                        <div
                            onClick={() => setAbout("calculators")}
                            className={`px-3 py-2 outline-none rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${about === "calculators" && "text-activeGreen outline-4 outline-activeGreen"
                                }`}
                        >
                            Calculators
                        </div>

                        <div
                            onClick={() => setAbout("guides")}
                            className={`px-3 py-2 outline-none rounded-full outline-gray-300 hover:text-primary hover:outline-4 hover:outline-activeGreen transition-all duration-200 ease-in-out ${about === "guides" && "text-activeGreen outline-4 outline-activeGreen"
                                }`}
                        >
                            Guides & FAQs
                        </div>

                    </div>
                </div>
                <div>
                    <DetailsSection about={about}/>
                </div>
            </div>
        </section>
    )
}

export default QASection
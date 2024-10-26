import { AllyLogo, AmericanExpressLogo, CitiLogo, GoldmanSachsLogo, KPCBLogo, PinganBankLogo, SoftBankLogo } from '@/app/components/Icons'
import Link from 'next/link'
import React from 'react'

const BackedByComponent = () => {
    return (
        <div className='w-full flex flex-col items-center py-20 px-10'>
            <h1 className='text-black font-semibold text-xl md:text-3xl mb-5'>Backed by</h1>
            <div className='flex flex-wrap justify-center'>
                <Link href="https://group.softbank/en/philosophy"><SoftBankLogo /></Link>
                <Link href="https://www.ally.com/"><AllyLogo /></Link>
                <Link href="https://www.citi.com/"><CitiLogo /></Link>
                <Link href="https://bank.pingan.com/english/index.shtml"><PinganBankLogo /></Link>
                <Link href="https://www.goldmansachs.com/"><GoldmanSachsLogo /></Link>
                <Link href="https://www.kleinerperkins.com/"><KPCBLogo /></Link>
                <Link href="https://www.americanexpress.com/en-in/"><AmericanExpressLogo /></Link>
            </div>
        </div>
    )
}

export default BackedByComponent
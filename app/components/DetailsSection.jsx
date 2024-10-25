import React from 'react'
import PartOne from './PartOne'
import PartTwo from './PartTwo'

const DetailsSection = ({ about }) => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col md:flex-row gap-10'>
                <PartOne about={about}/>
                <PartTwo about={about}/>
            </div>
            <div className='flex'>

            </div>
        </div>
    )
}

export default DetailsSection
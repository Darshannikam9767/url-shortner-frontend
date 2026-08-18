import React from 'react'
import UrlCard from './UrlCard'

const UrlList = () => {
    return (
        <div className='min-h-[50vh]  w-full  flex flex-col justify-center items-center'>

            <div className='  px-7 py-4 flex w-full justify-between items-center tracking-wide'>
                <h3 className=' text-4xl font-semibold'>Your <span className='text-blue-600'>URLs</span></h3>
                <p className='text-2xl font-semibold'>0 <span className='text-blue-600'>URLs</span></p>
            </div>


            <div className='w-full max-w-6xl flex flex-col items-center gap-5 mb-10'>
                <UrlCard />
                <UrlCard />
                <UrlCard />
                <UrlCard />
            </div>
        </div>
    )
}

export default UrlList

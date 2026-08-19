import React from 'react'
import UrlCard from './UrlCard'
import { getUsersAllUrls } from "../apis/user.api.js"
import { useQuery } from '@tanstack/react-query'

const UrlList = () => {

    const {
        data,
        isLoading,
        isError,
        error 
    } = useQuery({
        queryKey: ['userUrls'],
        queryFn:getUsersAllUrls
    })

    const urls = data?.urls || []

    if(isError){
        console.log(error);
        
    }

    return (
        <div className='min-h-[50vh] pt-1 w-full  flex flex-col justify-center items-center'>

            <div className='  px-7 py-4 flex w-full max-w-6xl justify-between items-center tracking-wide  mb-3'>
                <h3 className=' text-4xl font-semibold pl-10'>Your <span className='text-blue-600'>URLs</span></h3>

                {
                    !isLoading && (
                        <p className='text-2xl font-semibold pr-10'>{urls.length} <span className='text-blue-600'>URLs</span></p>
                    )
                }

            </div>


            <div className='w-full max-w-6xl flex flex-col items-center gap-5 mb-10'>
                {isLoading && (
                    <div className='py-10'>
                        <div className='w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin'></div>
                    </div>
                )}

                {!isLoading && urls.length > 0 && (
                    urls.reverse().map((url) => (

                        < UrlCard
                            ogUrl={url.full_url}
                            shortUrl={url.short_url}
                            count={url.clicks}
                            key={url._id}
                        />
                    ))
                )
                }
            </div>
        </div>
    )
}

export default UrlList

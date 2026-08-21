import React, { useState } from 'react'
import { API_BASE_URL } from '../utils/axiosInstance'

const UrlCard = ({ ogUrl, shortUrl, count }) => {

    const [isCopied, setIsCopied] = useState(false)

    const completeShortUrl = `${API_BASE_URL}/${shortUrl}`


    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(completeShortUrl)

            setIsCopied(true)

            setTimeout(() => {
                setIsCopied(false)
            }, 5000)
        } catch (error) {
            console.log("Failed to copy url :", error);

        }
    }


    return (
        <div className=' h-max w-[94%] bg-white p-7  rounded-4xl shadow-xl shadow-gray-400  hover:bg-white/40 transition-all duration-200'>


            <div className='mb-4 border-b border-gray-300 pb-6'>
                <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Original URL</p>
                <a
                    href={ogUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-700 font-medium truncate hover:text-gray-500 transition-all duration-200'>
                    {ogUrl}
                </a>
            </div>

            <div className=' flex  items-end gap-6'>
                <div className=' flex-1 min-w-0'>
                    <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Short URL</p>
                    <a 
                    href={completeShortUrl}
                    target='_blank'
                    rel={"noopener noreferrer"}
                    
                    className=' block text-blue-600 font-semibold truncate hover:text-blue-500 transition-all duration-200'>{completeShortUrl}</a>
                </div>

                <div className=' sm:px-3 flex flex-col items-center'>
                    <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Clicks</p>
                    <p className='font-bold text-gray-700'>
                        {count}
                    </p>
                </div>

                <button onClick={copyUrl} className=' bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-xl shadow-lg shadow-gray-300 hover:scale-95 transition-all duration-300 cursor-pointer'>
                    {isCopied ? "Copied!" : "Copy"}
                </button>
            </div>


        </div>
    )
}

export default UrlCard

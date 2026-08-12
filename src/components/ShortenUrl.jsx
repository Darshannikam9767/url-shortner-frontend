import React from 'react'

const ShortenUrl = ({ ShortUrl }) => {
    return (
        <div className=' w-full flex flex-col gap-2'>
            <label className='ml-1' htmlFor="short_url">Copy following URL</label>
            <div className='bg-green-200 border-[1.5px] border-green-600 w-full px-3 py-2 shadow-2xl transition-all shadow-green-900 rounded-2xl '>
                <a href={ShortUrl} className=' font-medium text-green-600 hover:text-blue-700 transition-all duration-200' target='_blank'>{ShortUrl}</a>
            </div>
        </div>
    )
}

export default ShortenUrl

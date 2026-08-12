import React from 'react'

const ShortenUrl = ({ ShortUrl = "https://localhost:3000" }) => {
    return (
        <div className=' w-full flex flex-col gap-2'>
            <label className='ml-1' htmlFor="short_url">Copy following URL</label>
            <div className='bg-green-200 border-[1.5px] border-green-600 w-full px-3 py-2 shadow-2xl transition-all shadow-green-900 rounded-2xl '>
                <p className=' font-medium text-green-600'>{ShortUrl}</p>
            </div>
        </div>
    )
}

export default ShortenUrl

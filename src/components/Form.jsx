import React, { useState } from 'react'
import axios from "axios"
import InputEmpty from './InputEmpty'
import ShortenUrl from './ShortenUrl'

const Form = () => {

    const [url, setUrl] = useState("https://")
    const [showEmptyError, setShowEmptyError] = useState(false)
    const [shortUrlRecieved, setShortUrlRecieved] = useState(false)
    const [showShortUrl, setShowShortUrl] = useState(false)
    const formHandler = async (e) => {
        e.preventDefault()
        if (!url) return setShowEmptyError(true);

        const data = await axios.post("http://localhost:3000/api/create",{url})
        console.log(data.data.short_url);
        
        if(data){
            setShortUrlRecieved(data.data.short_url)
            setShowShortUrl(true)
        }
        
    }
    return (
        <div className='h-full w-full  flex items-center justify-center'>
            <div className=' bg-white flex flex-col items-center gap-5 w-90 p-8 rounded-2xl shadow-xl shadow-gray-400'>
                <h3 className=' text-2xl font-bold tracking-wide'>URL Shortner</h3>
                <form onSubmit={formHandler} className='flex flex-col gap-2 w-full'>
                    <label className='text-sm tracking-wide' htmlFor="url">
                        Enter your URL
                    </label>
                    <input onChange={(e) => {
                        setUrl(e.target.value)
                        if (showEmptyError) setShowEmptyError(false)

                    }} className=' tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="url" value={url} placeholder='https://example.com' />
                    <button className='bg-blue-600 rounded-xl p-2 mt-4 font-medium text-white tracking-wide shadow-2xl shadow-gray-900 hover:bg-blue-500 hover:cursor-pointer hover:scale-96 transition-all duration-200'>Shorten URL</button>
                </form>
                {showEmptyError && (<InputEmpty />)}
                {showShortUrl && (<ShortenUrl ShortUrl={shortUrlRecieved} />)}
            </div>
        </div>
    )
}

export default Form

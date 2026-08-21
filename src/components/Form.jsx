import React, { useState } from 'react'
import InputEmpty from './InputEmpty'
import ShortenUrl from './ShortenUrl'
import { createShortUrl } from '../apis/shortUrl.api'
import { useCheckAuth } from '../utils/helper'
import { useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'

const Form = () => {

    const queryClient = useQueryClient()
    const location = useLocation()

    const [url, setUrl] = useState("")
    const [customUrl, setCustomUrl] = useState("")
    const [showEmptyError, setShowEmptyError] = useState(false)
    const [shortUrlRecieved, setShortUrlRecieved] = useState(false)
    const [showShortUrl, setShowShortUrl] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const formHandler = async (e) => {
        e.preventDefault()

        if (!url) {
            setShowEmptyError(true)
            return
        }

        try {
            setErrorMessage("")

            const short_url = await createShortUrl(url, customUrl)

            if (short_url) {
                setShortUrlRecieved(short_url)
                setShowShortUrl(true)

                queryClient.invalidateQueries({
                    queryKey: ["userUrls"]
                })
            }

            setUrl("")
            setCustomUrl("")

        } catch (error) {

            if (error.response?.status === 409) {
                setErrorMessage(
                    error.response.data.message
                )
            } else {
                setErrorMessage("Something went wrong. Please try again.")
            }
        }
    }

    return (
        <div className='h-full w-full flex items-center justify-center'>

            <div className='bg-white flex flex-col items-center gap-5 max-w-md w-full p-8 rounded-3xl shadow-xl shadow-gray-400'>

                <h3 className='text-2xl font-bold tracking-wide'>
                    URL Shortner
                </h3>

                <form
                    onSubmit={formHandler}
                    className='flex flex-col gap-2 w-full'
                >

                    <label
                        className='text-sm tracking-wide'
                        htmlFor="url"
                    >
                        Enter or paste your URL
                    </label>

                    <input
                        id="url"
                        onChange={(e) => {
                            setUrl(e.target.value)

                            if (showEmptyError) {
                                setShowEmptyError(false)
                            }

                            if (errorMessage) {
                                setErrorMessage("")
                            }
                        }}
                        className='tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900'
                        type="url"
                        value={url}
                        placeholder='https://example.com'
                    />

                    {(location.pathname === "/Dashboard" && useCheckAuth()) && (
                        <>
                            <label
                                className='text-sm tracking-wide'
                                htmlFor="custom_url"
                            >
                                Enter Custom URL (optional)
                            </label>

                            <input
                                id="custom_url"
                                onChange={(e) => {
                                    setCustomUrl(e.target.value)

                                    if (errorMessage) {
                                        setErrorMessage("")
                                    }
                                }}
                                className='tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900'
                                type="text"
                                value={customUrl}
                                placeholder='custom URL'
                            />
                        </>
                    )}

                    <button
                        type="submit"
                        className='bg-blue-600 rounded-xl p-2 mt-4 font-medium text-white tracking-wide shadow-2xl shadow-gray-900 hover:bg-blue-500 hover:cursor-pointer hover:scale-96 transition-all duration-200'
                    >
                        Shorten URL
                    </button>

                </form>

                {showEmptyError && (
                    <InputEmpty msg="Please enter URL" />
                )}

                {errorMessage && (
                    <p className="text-red-500 text-sm font-medium">
                        {errorMessage}
                    </p>
                )}

                {showShortUrl && (
                    <ShortenUrl ShortUrl={shortUrlRecieved} />
                )}

            </div>
        </div>
    )
}

export default Form
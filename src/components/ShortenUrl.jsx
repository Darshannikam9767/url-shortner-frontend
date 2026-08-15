import React, { useState } from 'react';

const ShortenUrl = ({ ShortUrl }) => {
    const [isClicked, setIsClicked] = useState(false);

    
    const themeClasses = isClicked
        ? "bg-green-200 border-green-600 shadow-green-900 text-green-600 hover:bg-green-100"
        : "bg-white border-gray-400 shadow-gray-900 text-gray-600 hover:border-blue-600 hover:shadow-blue-900 hover:text-blue-600"

    return (
        <div className='w-full flex flex-col gap-2'>
            <label className='ml-1' htmlFor="short_url">Your shortened URL:</label>
            <div className='flex gap-0.5'>

                <div className="bg-white border-gray-400 shadow-gray-900 border-[1.5px] w-full px-3 py-2 shadow-2xl transition-all rounded-tl-2xl rounded-bl-2xl rounded-tr rounded-br">
                    <a
                        href={ShortUrl}
                        className="text-blue-600 font-medium hover:text-blue-400 transition-all duration-200"
                        target='_blank'
                        rel="noreferrer"
                    >
                        {ShortUrl}
                    </a>
                </div>

                <button
                    onClick={() => {
                        navigator.clipboard.writeText(ShortUrl);
                        setIsClicked(true);

                        setTimeout(() => setIsClicked(false), 10000);
                    }}
                    className={`${themeClasses} border-[1.5px] px-3 py-2 shadow-2xl transition-all rounded-tl rounded-bl rounded-tr-2xl rounded-br-2xl font-medium duration-200 cursor-pointer hover:scale-95`}
                >
                    {isClicked ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
}

export default ShortenUrl;
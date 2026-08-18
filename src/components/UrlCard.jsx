import React from 'react'

const UrlCard = () => {
  return (
    <div className=' h-max w-[94%] bg-white p-7  rounded-2xl shadow-xl shadow-gray-400  hover:scale-101 transition-all duration-200'>


                <div className='mb-4 border-b border-gray-300 pb-6'>
                    <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Original URL</p>
                    <p className='text-gray-700 font-medium truncate'>{"https://www.google.com"}</p>
                </div>

                <div className=' flex  items-end gap-10'>
                    <div className=' flex-1 min-w-0'>
                        <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Short URL</p>
                        <p className='text-blue-600 font-semibold truncate'>{"http://localhost:3000/youtube"}</p>
                    </div>

                    <div className=' sm:px-3 flex flex-col items-center'>
                        <p className='text-xm text-gray-500 font-medium tracking-wide mb-1'>Clicks</p>
                        <p className='font-bold text-gray-700'>
                            {"0"}
                        </p>
                    </div>

                    <button className=' bg-blue-600 hover:bg-blue-500 text-white px-8 py-2 rounded-xl shadow-lg shadow-gray-300 hover:scale-95 transition-all duration-200 cursor-pointer'>
                        Copy
                    </button>
                </div>


            </div>
  )
}

export default UrlCard

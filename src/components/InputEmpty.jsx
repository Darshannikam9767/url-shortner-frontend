import React from 'react'

const InputEmpty = ({msg}) => {
  return (
    <div className='bg-red-200 border-[1.5px] border-red-600 w-full px-3 py-2 shadow-2xl  shadow-red-900 rounded-2xl'>
      <p className=' font-medium text-red-600 tracking-wide'>{msg}</p>
    </div>
  )
}

export default InputEmpty

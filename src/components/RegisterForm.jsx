import React, { useState } from 'react'
import InputEmpty from './InputEmpty'
import { Link } from 'react-router-dom'

const RegisterForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showEmptyError, setShowEmptyError] = useState(false)
    const formHandler = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) return setShowEmptyError(true);

        console.log(`Name = ${name}\nEmail = ${email}\nPassword = ${password}`);
    }
    return (
        <div className='h-full w-full  flex items-center justify-center'>
            <div className=' bg-white flex flex-col items-center gap-5 w-95 p-8 rounded-2xl shadow-xl shadow-gray-400'>
                <h3 className=' text-2xl font-bold tracking-wide'>Register</h3>
                <form onSubmit={formHandler} className='flex flex-col gap-2 w-full'>

                    <label className='text-sm tracking-wide' htmlFor="name">
                        Name
                    </label>
                    <input onChange={(e) => {
                        setName(e.target.value)
                        if (showEmptyError) setShowEmptyError(false)

                    }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="text" value={name} placeholder='your name' />

                    <label className='text-sm tracking-wide' htmlFor="url">
                        E-mail
                    </label>
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                        if (showEmptyError) setShowEmptyError(false)

                    }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="email" value={email} placeholder='example@gmail.com' />

                    <label className='text-sm tracking-wide' htmlFor="url">
                        Password
                    </label>
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                        if (showEmptyError) setShowEmptyError(false)

                    }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="password" value={password} placeholder='*********************' />


                    <button className='bg-blue-600 rounded-xl p-2 mt-4 font-medium text-white tracking-wide shadow-2xl shadow-gray-900 hover:bg-blue-500 hover:cursor-pointer hover:scale-96 transition-all duration-200'>Create Account</button>
                    <p className=' tracking-wide mt-2 text-[18px] cursor-pointer'>Have an account? back to  <Link to={"/Auth"} className=' text-blue-700 font-semibold hover:text-blue-500  transition-colors duration-150'>Login</Link></p>

                </form>
                {showEmptyError && (<InputEmpty msg={"All field are necessary!"} />)}
            </div>
        </div>
    )

}

export default RegisterForm

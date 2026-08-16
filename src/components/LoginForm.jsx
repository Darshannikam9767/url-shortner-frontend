import React, { useState } from 'react'
import InputEmpty from './InputEmpty'
import {loginUser} from "../apis/user.api"
import { Link } from 'react-router-dom'

const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const formHandler = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        
        if (!email || !password) return setErrorMessage("Both fields are necessary!");
        console.log("email : ",email,"\npassword : ",password);
        

        setIsLoading(true)
        
        try {
            await loginUser(email.toLowerCase().trim(),password.trim())
            console.log("login successfull");
            
        } catch (error) {
           setErrorMessage(error?.response?.data?.message || "Invalid credentials!")
        }finally{
            setIsLoading(false)
        }
        
    }
    return (
        <div className='h-full w-full  flex items-center justify-center'>
            <div className=' bg-white flex flex-col items-center gap-5 w-full max-w-sm p-8 rounded-2xl shadow-xl shadow-gray-400'>
                <h3 className=' text-2xl font-bold tracking-wide'>Login</h3>
                 {errorMessage && (<InputEmpty msg={errorMessage} />)}
                <form onSubmit={formHandler} className='flex flex-col gap-2 w-full'>
                    <label className='text-sm tracking-wide' htmlFor="email">
                        E-mail
                    </label>
                    <input id='email' onChange={(e) => {
                        setEmail(e.target.value)
                        if (errorMessage) setErrorMessage("")

                    }} className=' tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="email" value={email} placeholder='example@gmail.com' />

                    <label className='text-sm tracking-wide' htmlFor="password">
                        Password
                    </label>
                    <input id='password' onChange={(e) => {
                        setPassword(e.target.value)
                        if (errorMessage) setErrorMessage("")

                    }} className=' tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="password" value={password} placeholder='*********************' />


                    <button disabled={isLoading} className='bg-blue-600 rounded-xl p-2 mt-4 font-medium text-white tracking-wide shadow-2xl shadow-gray-900 hover:bg-blue-500 cursor-pointer hover:scale-96 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'>{isLoading ? "Signing In..." :"Sign In"}</button>
                    <p className='cursor-pointer tracking-wide mt-2 text-[18px]'>Don't have an account? <Link to={"/Auth/Register"} className=' text-blue-700 font-semibold hover:text-blue-500  transition-colors duration-150'>Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

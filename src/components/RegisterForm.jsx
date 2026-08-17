import React, { useState } from 'react'
import InputEmpty from './InputEmpty'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../apis/user.api'
import { useDispatch } from 'react-redux'
import { login } from '../store/slice/authSlice'

const RegisterForm = () => {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const formHandler = async (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (!name.trim() || !email.trim() || !password) return setErrorMessage("All fields are necessary!");

        if(password.length < 6) return setErrorMessage("Password must be at least 6 characters long!")

        console.log(`Name = ${name}\nEmail = ${email}\nPassword = ${password}`);

        setIsLoading(true)

        try {

            const data = await registerUser(name.trim(), email.toLowerCase().trim(), password)

            console.log(data);

            if (data?.user) {
                dispatch(login(data.user))
            }

            navigate("/Dashboard")

        } catch (error) {
            setErrorMessage(error?.response?.data?.message || "Registration failed! Please try again.")

        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className='h-full w-full  flex items-center justify-center'>
            <div className=' bg-white flex flex-col items-center gap-5 w-full max-w-sm  p-8 rounded-2xl shadow-xl shadow-gray-400'>
                <h3 className=' text-2xl font-bold tracking-wide'>Register</h3>
                {errorMessage && (<InputEmpty msg={errorMessage} />)}

                <form onSubmit={formHandler} className='flex flex-col gap-2 w-full'>

                    <label className='text-sm tracking-wide' htmlFor="name">
                        Name
                    </label>
                    <input
                        id='name'
                        onChange={(e) => {
                            setName(e.target.value)
                            if (errorMessage) setErrorMessage("")

                        }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="text" value={name} placeholder='your name' />

                    <label className='text-sm tracking-wide' htmlFor="email">
                        E-mail
                    </label>
                    <input
                        id='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                            if (errorMessage) setErrorMessage("")

                        }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="email" value={email} placeholder='example@gmail.com' />

                    <label className='text-sm tracking-wide' htmlFor="password">
                        Password
                    </label>
                    <input
                        id='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                            if (errorMessage) setErrorMessage("")

                        }} className=' pl-5 tracking-wide ring-1 ring-gray-600 p-2 rounded-xl focus:ring-[1.5px] focus:ring-blue-600 transition-all duration-200 outline-none text-gray-700 font-medium shadow-2xl focus:shadow-gray-900 ' type="password" value={password} placeholder='*********************' />


                    <button
                        disabled={isLoading}
                        className='bg-blue-600 rounded-xl p-2 mt-4 font-medium text-white tracking-wide shadow-2xl shadow-gray-900 hover:bg-blue-500 hover:cursor-pointer hover:scale-96 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60'>{isLoading ? "Creating Account..." : "Create Account"}</button>
                    <p className=' tracking-wide mt-2 text-[18px] cursor-pointer'>Have an account? back to  <Link to={"/Auth"} className=' text-blue-700 font-semibold hover:text-blue-500  transition-colors duration-150'>Login</Link></p>

                </form>
            </div>
        </div>
    )

}

export default RegisterForm

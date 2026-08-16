import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { Navigate, Route, Routes } from 'react-router-dom'

const AuthPage = () => {
  return (
    <div className='bg-gray-200 h-screen w-full'>
        <Routes>
          <Route index element={<Navigate to="Login" replace />} />
          <Route path='Login' element={<LoginForm />} />
          <Route path='Register' element={<RegisterForm />}/>
        </Routes>
    </div>
  )
}

export default AuthPage

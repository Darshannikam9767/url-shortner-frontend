import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const token = cookieStore.get("accessToken")
    
    if (!token) return (<Navigate to={"/Auth/Login"} replace />)

        console.log(token);
        
    return children
}

export default ProtectedRoute

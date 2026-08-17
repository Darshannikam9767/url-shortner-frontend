import React from 'react'
import { useSelector } from 'react-redux'
import { useCheckAuth } from '../utils/helper'
import { Navigate, replace, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    if(!useCheckAuth()) return <Navigate to={"/Auth"} replace />

    return children
}

export default ProtectedRoute

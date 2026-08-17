import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
export const useCheckAuth = () => {

    const auth = useSelector((state) => state.auth)

    return auth.user && auth.isAuthenticated
}
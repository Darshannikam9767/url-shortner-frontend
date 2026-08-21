import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logout } from '../store/slice/authSlice'
import { logoutUser } from '../apis/user.api'

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleLogout =async () => {

        try{
            const {data}= await logoutUser()
            console.log("logout data = ", data);
            
            dispatch(logout())
            navigate("/Auth",{replace : true})
        }catch(error){
            console.log("Logout failed :",error)
        }
    }

    return (
        <nav className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl">
            <div className="flex items-center justify-between px-5 py-3 rounded-full bg-white/10 backdrop-blur-[3px] border border-white/50 shadow-2xl shadow-gray-900/50">

                <Link
                    to={(location.pathname === "/Dashboard") ? "/Dashboard" : "/"}
                    className="font-bold text-2xl tracking-wide"
                >
                    URL <span className="text-blue-700">Shortner</span>
                </Link>

                {(location.pathname === "/" || location.pathname === "/Auth/Register") && (
                    <Link
                        to="/Auth"
                        className="inline-block text-[17px] bg-blue-600 rounded-full px-5 py-2 font-medium text-white tracking-wide shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-95 transition-all duration-200"
                    >
                        Login
                    </Link>
                )}

                {location.pathname === "/Auth/Login" && (
                    <Link
                        to="/Auth/Register"
                        className="inline-block text-[17px] bg-blue-600 rounded-full px-5 py-2 font-medium text-white tracking-wide shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-95 transition-all duration-200"
                    >
                        Register
                    </Link>
                )}

                {location.pathname === "/Dashboard" && (
                     <Link
                     onClick={handleLogout}
                        to="/Auth"
                        className="inline-block text-[17px] bg-red-600 rounded-full px-5 py-2 font-medium text-white tracking-wide shadow-lg shadow-red-600/30 hover:bg-red-500 hover:scale-95 transition-all duration-200"
                    >
                        Logout
                    </Link>
                )}

            </div>
        </nav>
    )
}

export default Navbar
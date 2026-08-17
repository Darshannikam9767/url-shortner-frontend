import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl">
            <div className="flex items-center justify-between px-5 py-3 rounded-full bg-white/10 backdrop-blur-[3px] border border-white/50 shadow-lg shadow-gray-900/10">

                <Link
                    to="/"
                    className="font-bold text-2xl tracking-wide"
                >
                    URL <span className="text-blue-700">Shortner</span>
                </Link>

                <Link
                    to="/Auth"
                    className="inline-block text-[17px] bg-blue-600 rounded-full px-5 py-2 font-medium text-white tracking-wide shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:scale-95 transition-all duration-200"
                >
                    Login
                </Link>

            </div>
        </nav>
    )
}

export default Navbar
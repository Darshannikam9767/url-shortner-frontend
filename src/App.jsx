import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './routing/ProtectedRoute'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { getCurrentUser } from './apis/user.api'
import { login, logout } from './store/slice/authSlice'


const App = () => {

  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const restoreUser = async () => {
      try {
        const data = await getCurrentUser()

        dispatch(login(data.user))
      } catch (error) {
        dispatch(logout())
      } finally {
        setChecked(true)
      }
    }
    restoreUser()
  }, [dispatch])

  if (!checked) {
    return <div className='bg-gray-200 h-screen w-full flex items-center justify-center'>
    </div>
  }
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Auth/*' element={<AuthPage />} />
          <Route path='/Dashboard'
            element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>} />
        </Routes>
      </main>
    </>
  )
}

export default App

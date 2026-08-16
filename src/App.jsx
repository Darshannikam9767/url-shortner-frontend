import React from 'react'
import Form from './components/Form'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './routing/ProtectedRoute'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Auth/*' element={<AuthPage />} />
        <Route path='/Dashboard'
          element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App

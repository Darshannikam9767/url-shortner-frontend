import React from 'react'
import Form from '../components/Form'
import UrlList from '../components/UrlList'

const Dashboard = () => {
  return (
    <div className='bg-gray-200 min-h-screen w-full relative'>
      <div className="pt-35">
        <Form />
      </div>
      <UrlList />
    </div>
  )
}

export default Dashboard

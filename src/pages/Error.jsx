import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section id='error-page' className="flex-grow flex items-center justify-center bg-gray-100">
        <div className='text-center p-8 bg-white rounded-lg shadow-lg'>
          <h2 className='text-6xl font-bold text-red-600 mb-4'>404</h2>
          <h4 className='text-2xl font-semibold mb-4'>Sorry! Page not found</h4>
          <p className='text-gray-600 mb-8'>
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll look into it.
          </p>
          <div className='flex justify-center space-x-4'>
            <NavLink to="/" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Return Home</NavLink>
            <NavLink to="/contact" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Report Problem</NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Error
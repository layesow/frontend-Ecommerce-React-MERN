import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Layout>
      <div className="bg-gray-200 lg:px-8 px-5 w-full flex justify-center items-center py-30">
        {/* login form */}
        <div className="max-w-md w-full rounded-md px-8 py-7 shadow-md bg-white">
          <h2 className='text-2xl text-gray-800 font-bold text-center'>Login</h2>
          <form className='space-y-4 mt-4'>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className='text-gray-700 font-medium mb-2'>Email</label>
              <input type="email" id="email" className='border border-gray-200 rounded-md shadow px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400' placeholder='Enter your email' />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="password" className='text-gray-700 font-medium mb-2'>Password</label>
              <input type="password" id="password" className='border border-gray-200 rounded-md shadow px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400' placeholder='Enter your password' />
            </div>

            <div className="flex flex-col space-y-2 pt-3">
            <Link className='bg-green-400 px-5 text-center py-2 w-full text-md rounded-md text-gray-800'>
              Login
            </Link>
            <div className="text-sm text-gray-600 text-center">
              Don't have an account? <Link to='/register' className='hover:underline font-medium'>Register</Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
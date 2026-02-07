import React from 'react'
import Layout from '../../components/layouts/Layout'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';

const ChangePassword = () => {
  return (
    <Layout>
        {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Account</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Change Password</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Change Password</h1>
          </div>
        </div>

        <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 b pb-10">
          <div className="grid grid-cols-12 gap-5">
            {/* sidebar */}
            <div className="lg:col-span-3 col-span-12 mb-5">
              <Sidebar />
            </div>
            
            {/* form area */}
            <div className="lg:col-span-9 col-span-12">
              <div className="p-3 rounded-md shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-5 border-b border-gray-300 pb-2">Change Your Password</h2>
                <form className="grid grid-cols-1 gap-5">
                  <input type="password" placeholder="Current Password" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="password" placeholder="New Password" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="password" placeholder="Confirm New Password" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <Link className="bg-green-500 text-gray-900 px-4 py-2 rounded-md w-max font-semibold hover:bg-gray-900 hover:text-white animation duration-300">Update Password</Link>
                </form>
              </div>
            </div>

          </div>
        </div>
    </Layout>
  )
}

export default ChangePassword
import React from 'react'
import Layout from '../../components/layouts/Layout'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";




const Profile = () => {
  return (
    <Layout>
        {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Account</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Profile</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Profile</h1>
          </div>
        </div>
        <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 b pb-10">
          <div className="grid grid-cols-12 gap-5">
            {/* sidebar */}
            <div className="lg:col-span-3 col-span-12 mb-5">
              <div className="space-y-1">
                <Link to="/account/profile" className="bg-green-500 text-gray-900 px-4 py-2 
                    rounded-md w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white 
                    animation duration-300"> <FaUser className='me-2' />Profile
                </Link>
                <Link to="/account/orders" className="bg-green-500 text-gray-900 px-4 py-2 
                    rounded-md w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white 
                    animation duration-300"> <FaShoppingCart className='me-2' />Orders
                </Link>
                <Link to="/account/change-password" className="bg-green-500 text-gray-900 px-4 py-2 
                    rounded-md w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white 
                    animation duration-300"> <FaLock className='me-2' /> Change Password
                </Link>
                <Link className="bg-green-500 text-gray-900 px-4 py-2 
                    rounded-md w-full flex items-center font-semibold hover:bg-gray-900 hover:text-white 
                    animation duration-300"><IoLogOutSharp size={20} className='me-2' /> Logout
                </Link>
              </div>
            </div>

            {/* form area */}
            <div className="lg:col-span-9 col-span-12">
              <div className="border border-gray-300 p-5 rounded-md">
                <h2 className="text-xl font-bold mb-5">Profile Information</h2>
                <form className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md w-full col-span-2"/>
                  <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 rounded-md w-full"/>
                </form>
              </div>
            </div>

          </div>
        </div>
    </Layout>
  )
}

export default Profile
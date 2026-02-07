import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
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
  )
}

export default Sidebar
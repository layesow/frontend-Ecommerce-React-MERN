import React from 'react'
import { Link } from 'react-router-dom'

const PersonnalInfo = () => {
  return (
    <>
        <div className="border border-gray-300 p-5 rounded-md">
            <h2 className="text-xl font-bold mb-5">Profile Information</h2>
            <form className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md w-full col-span-2"/>
                <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded-md w-full"/>
                <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 rounded-md w-full"/>
                <Link className="bg-green-500 text-gray-900 px-4 py-2 rounded-md w-max font-semibold hover:bg-gray-900 hover:text-white animation duration-300 col-span-2">Update Profile</Link>
            </form>
        </div>
    </>
  )
}

export default PersonnalInfo
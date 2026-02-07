import React from 'react'
import Layout from '../../components/layouts/Layout'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import PersonnalInfo from './PersonnalInfo';
import BillingInfo from './BillingInfo';





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
              <Sidebar />
            </div>

            {/* form area */}
            <div className="lg:col-span-9 col-span-12">
              {/* Personnel Info */}
              <PersonnalInfo />

              {/* Adress Info */}
              <BillingInfo />

            </div>

          </div>
        </div>
    </Layout>
  )
}

export default Profile
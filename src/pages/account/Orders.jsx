import React from 'react'
import Layout from '../../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import Sidebar from './Sidebar';


const Orders = () => {
  return (
    <Layout>
        {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Account</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Orders</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Orders</h1>
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
                <h2 className="text-xl font-bold mb-5 border-b border-gray-300 pb-2">Your Orders</h2>
                {/* commande table*/}
                  <div className="overflow-auto">
                    <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100 text-left border-b border-gray-300 text-gray-600">
                        <th className="border-b border-gray-300 px-3 py-2">Custumer</th>
                        <th className="border-b border-gray-300 px-3 py-2">Email</th>
                        <th className="border-b border-gray-300 px-3 py-2">Phone</th>
                        <th className="border-b border-gray-300 px-3 py-2">Amount</th>
                        <th className="border-b border-gray-300 px-3 py-2">Status</th>
                        <th className="border-b border-gray-300 px-3 py-2">Date</th>
                        <th className="border-b border-gray-300 px-3 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Example order row */}
                      <tr className="text-left border-b border-gray-300">
                        <td className="border-b border-gray-300 px-3 py-2">John Doe</td>
                        <td className="border-b border-gray-300 px-3 py-2">john.doe@example.com</td>
                        <td className="border-b border-gray-300 px-3 py-2">123-456-7890</td>
                        <td className="border-b border-gray-300 px-3 py-2">$99.99</td>
                        <td className="border-b border-gray-300 px-3 py-2">Processing</td>
                        <td className="border-b border-gray-300 px-3 py-2">2024-06-01</td>
                        <td className="border-b border-gray-300 px-3 py-2">
                          <button className="text-blue-500 hover:text-blue-700">View</button>
                        </td>
                      </tr>
                      {/* Add more order rows as needed */}
                    </tbody>
                  </table>
                  </div>
                
              </div>
            </div>

          </div>
        </div>
    </Layout>
  )
}

export default Orders
import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import ProductImage from '../assets/product1.png'
import ProductImage2 from '../assets/product2.jpg'
import ProductImage3 from '../assets/product3.png'




const Cart = () => {
  return (
    <Layout>
      {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Home</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Cart</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Cart</h1>
          </div>
        </div>

        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="lg:col-span-9 col-span-12">
              {/* cart items */}
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-5 p-2 text-left">Product</th>
                    <th className="px-5 p-2 text-center">Quantity</th>
                    <th className="px-5 p-2 text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 text-left">
                      <div className="flex items-center gap-4">
                        <div className="bg-slate-50 p-2 object-cover rounded-md">
                          <img src={ProductImage3} alt="Product" className="w-15" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className="text-gray-800 font-semibold">Product Name</h2>
                          <div className="flex gap-3 items-center mt-3">
                              <div className="text-gray-500 font-semibold ">$100</div>
                              <div className="bg-gray-300 justify-center items-center px-2 py-1 rounded-md">XL</div>
                          </div>
                          <Link className="text-red-500 text-sm mt-2">Remove</Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 p-2 text-center align-top">
                      <div className="flex w-25 items-center rounded-md mx-auto justify-center px-2 py-2 border border-gray-200">
                        <div className="w-5">-</div>
                        <div className="w-10">1</div>
                        <div className="w-5">+</div>
                      </div>
                    </td>
                    <td className="px-5 p-2 text-center align-top">$100</td>
                  </tr>
                </tbody>
              </table>
              
            </div>

            <div className="lg:col-span-3 col-span-12">
              <div className="bg-gray-50 px-5 py-3">
                <h2 className="text-lg font-bold mb-5 border-b-2 border-gray-200 pb-2">Cart Summary</h2>
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold">$300</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="font-semibold">Shipping</span>
                  <span className="font-semibold">$20</span>
                </div>
                <div className="flex justify-between mb-5">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg">$320</span>
                </div>
                <Link to="/checkout" className="w-full bg-green-500 text-gray-800 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300 block text-center">Proceed to Checkout</Link>
              </div>
            </div>
          </div>
        </div>
    </Layout>  )
}

export default Cart
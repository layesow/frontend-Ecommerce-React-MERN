import React from 'react'
import Layout from '../components/layouts/Layout'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import ProductImage3 from '../assets/product3.png'


const Checkout = () => {
  return (
    <Layout>
      {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Home</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Checkout</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Checkout</h1>
          </div>
        </div>

        {/* main containner */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="grid grid-cols-12 gap-5">

            <div className="lg:col-span-7 col-span-12">
              {/* billing details */}
              <div className="border border-gray-300 p-5 rounded-md mb-5">
                <h2 className="text-xl font-bold mb-5">Billing Details</h2>
                <form className="grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md w-full col-span-2"/>
                  <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <textarea placeholder="Address" className="border border-gray-300 p-2 rounded-md w-full col-span-2"></textarea>
                  <input type="text" placeholder="State" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="text" placeholder="City" className="border border-gray-300 p-2 rounded-md w-full"/>
                  <input type="text" placeholder="Zip Code" className="border border-gray-300 p-2 rounded-md w-full col-span-2"/>
                </form>
              </div>
            </div>

            <div className="lg:col-span-5 col-span-12">
              {/* order summary */}
              <div className="border border-gray-300 p-5 rounded-md mb-5">
                <h2 className="text-xl font-bold mb-5">Order Summary</h2>
                {/* add image qti size prise */}
                <div className="grid grid-cols-12 gap-5 mb-3">
                  {/* image */}
                  <div className="col-span-2">
                    <img src={ProductImage3} alt="Product" className="w-10 rounded-md bg-slate-50" />
                  </div>

                  {/* titte, size qty */}
                  <div className="col-span-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="flex space-x-5">
                      <div className="text-gray-600">Size <span className='text-gray-800'>XL</span></div>
                      <div className="text-gray-600">Qty <span className='text-gray-800'>1</span></div>
                    </div>
                  </div>

                  {/* price */}
                  <div className="col-span-2 font-semibold text-right">
                    $100
                  </div>

                </div>

                <div className="grid grid-cols-12 gap-5 mb-3">
                  {/* image */}
                  <div className="col-span-2">
                    <img src={ProductImage3} alt="Product" className="w-10 rounded-md bg-slate-50" />
                  </div>

                  {/* titte, size qty */}
                  <div className="col-span-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="flex space-x-5">
                      <div className="text-gray-600">Size <span className='text-gray-800'>XL</span></div>
                      <div className="text-gray-600">Qty <span className='text-gray-800'>1</span></div>
                    </div>
                  </div>

                  {/* price */}
                  <div className="col-span-2 font-semibold text-right">
                    $100
                  </div>

                </div>

                <div className="flex justify-between mb-3">
                  <div>Subtotal</div>
                  <div>$300</div>
                </div>
                <div className="flex justify-between font-bold text-lg border-b border-gray-300 pb-4">
                  <div>Total</div>
                  <div>$320</div>
                </div>
                {/* paiement methode */}
                <div className="mt-5">
                  <h3 className="font-semibold mb-2">Payment Method</h3>
                  <div className="flex space-x-5">
                    
                    <div className="border border-gray-300 p-2 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <input type="radio" name="payment" id="paypal" className="mr-2"/>
                        <span htmlFor="paypal">CDO</span>
                      </div>
                    </div>

                    <div className="border border-gray-300 p-2 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        <input type="radio" name="payment" id="credit-card" className="mr-2"/>
                        <span htmlFor="credit-card">Stripe</span>
                      </div>
                    </div>

                  </div>
                  <button className="w-full bg-green-500 text-white py-2 rounded-md mt-5 hover:bg-green-600 transition">Place order Securely</button>
                  <div className="text-sm text-gray-500 text-center py-3">
                    Secure payment & encrypted transactions
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Checkout
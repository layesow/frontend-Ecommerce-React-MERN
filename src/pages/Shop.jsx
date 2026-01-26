import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";

import ProductImage1 from '../assets/product1.png'
import ProductImage2 from '../assets/product2.jpg'
import ProductImage3 from '../assets/product3.png'

const Shop = () => {
  const products = [
            {
                id: 1,
                name: 'Stylish Shirt 1',
                price: 100,
                grossPrice: 120,
                image : ProductImage1,
            },
            {
                id: 2,
                name: 'Stylish Shirt 2',
                price: 120,
                grossPrice: 230,
                image : ProductImage2,
            },
            {
                id: 3,
                name: 'Stylish Shirt 3',
                price: 150,
                grossPrice: 380,
                image : ProductImage3,
            },
            {
                id: 4,
                name: 'Stylish Shirt 4',
                price: 200,
                grossPrice: 320,
                image : ProductImage1,
            },
            {
                id: 5,
                name: 'Stylish Shirt 5',
                price: 120,
                grossPrice: 180,
                image : ProductImage2,
            },
            {
                id: 6,
                name: 'Stylish Shirt 6',
                price: 120,
                grossPrice: 180,
                image : ProductImage3,
            },
            {
                id: 7,
                name: 'Stylish Shirt 7',
                price: 120,
                grossPrice: 180,
                image : ProductImage1,
            },
            {
                id: 8,
                name: 'Stylish Shirt 8',
                price: 120,
                grossPrice: 180,
                image : ProductImage2,
            },
        ];
  return (
    <>
      <Layout>
        {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Home</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Shop</Link>
          </div>
        </div>

        {/* title */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex text-4xl gap-x-2 text-green-500">
            <h1 className="text-3xl font-bold">Shop</h1>
          </div>
        </div>

        {/* main content */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-2 pb-5">
              {/* sidebar - filters will go here */}

              <div className="flex justify-between items-center mb-3 border-b pb-3 border-gray-200">
                <span className="font-bold text-lg">Filters</span>
                <span className="text-sm p-3 text-green-500">Clear All</span> 
              </div>

                {/* categorie filtre */}
                <div className="font-bold pt-2 mb-2">Category</div>
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>Electronics</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>Electronics</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>Electronics</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>Electronics</span> 
                </div>  


                {/* brand filtre */}
                <div className="font-bold pt-4 mb-2">Brand</div>
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>adidas</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>nike</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>oppo</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" className="w-4 h-4 border border-gray-400" />
                  <span>samsung</span> 
                </div> 

                {/* price filtre */}
                <div className="font-bold pt-4 mb-2">Price range</div>
                <div className="flex items-center space-x-2 mb-2">
                  <input type="radio" className="w-4 h-4 border border-gray-400" />
                  <span>under $50</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="radio" className="w-4 h-4 border border-gray-400" />
                  <span>$50 - $100</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="radio" className="w-4 h-4 border border-gray-400" />
                  <span>$100 - $200</span> 
                </div>   
                <div className="flex items-center space-x-2 mb-2">
                  <input type="radio" className="w-4 h-4 border border-gray-400" />
                  <span>over $200</span> 
                </div>   

            </div>

            <div className="col-span-12 lg:col-span-10">
              {/* products listing will go here */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {/* single product */}
                    {
                        products && products.map(product =>{
                            return (
                                <div key={product.id}>
                                    <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                                        <img className='w-full object-cover lg:h-100 duration-500 ease-in-out transition-transform hover:scale-110' 
                                            src={product.image} alt={product.name} />
                                    </div>
                                    <h3 className='text-gray-800 font-semibold text-lg mt-4'>{product.name}</h3>
                                    <p className='text-base text-gray-800 font-semibold'>
                                        ${product.price} {" "}
                                        <span className='line-through text-gray-500'>${product.grossPrice}</span>
                                    </p>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Shop
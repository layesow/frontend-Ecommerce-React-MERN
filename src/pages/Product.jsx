import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import ProductImg1 from '../assets/product1.png'
import ProductImg2 from '../assets/product2.jpg'
import ProductImg3 from '../assets/product3.png'



 
const Product = () => {

  const gallery= [
    {
      id: 1,
      url: ProductImg1,
    },
    {
      id: 2,
      url: ProductImg2,
    },
    {
      id: 3,
      url: ProductImg3,
    },
  ];

  const [mainImage, setMainImage] = useState(null);

  const handleGallery = (item) => {
    setMainImage(item);
  };

  useEffect(() => {
    if (gallery) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMainImage(gallery[0]);
    }
  }, []);

  return (
    <Layout>
      {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="flex items-center gap-x-2 text-sm">
            <Link>Shop</Link>
            <IoIosArrowForward />
            <Link className="font-bold">Product good for men</Link>
          </div>
        </div>

        <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
          <div className="grid grid-cols-12 gap-5">

            <div className="lg:col-span-5 col-span-12">
              {/* gallery */}
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-10 bg-slate-50">
                    {/* main image */}
                    <img src={mainImage?.url} className='w-full rounded-md' alt="" />
                      
                  </div>
                  <div className="col-span-2">
                    {/* small image */}
                    {
                        gallery && gallery.map(item => {
                          return (
                            <Link key={item.id}>
                              <img onClick={() => handleGallery(item)} src={item.url} alt="product" className='w-full bg-slate-50 rounded-md' />
                            </Link>
                          )
                        })
                      }
                  </div>
                </div>
            </div>

            <div className="lg:col-span-7 col-span-12">
                  {/* product info */}
                  <h2 className="font-bold text-2xl text-gray-800">
                    Product good for men
                  </h2>
                  {/* price */}
                  <div className="font-bold text-lg mt-3">
                    $120.00 {' '}
                    <span className='text-gray-500 font-normal line-through'>$150</span>
                  </div>
                  {/* description */}
                  <div className="text-base text-gray-500 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>

                  {/* size*/}
                  <div className="font-bold text-lg mt-3">
                    Select Size
                  </div>
                  <div className="flex gap-x-2 mt-3">
                    <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">S</div>
                    <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">M</div>
                    <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">L</div>
                    <div className="bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center">XL</div>
                  </div>

                  {/* add to cart */}
                  <div className="mt-8 border-b text-gray-200 pb-10">
                    <Link className='bg-green-400 px-5 py-2 text-md rounded-md text-gray-800'>
                      Add to Cart
                    </Link>
                  </div>

                  {/* additional info */}
                  <div className="mt-5 text-gray-500">
                    <p>100% conton</p>
                    <p>Money back guarantee</p>
                    <p>Free shipping on orders over $50</p>
                  </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default Product

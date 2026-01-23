import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <div className='bg-slate-50'>
        <div className="max-w-360 mx-auto lg:px-8 px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-5 sm:py-20">
                {/* left box */} 
                <div className="space-y-7 py-10 pr-0 sm:pr-20">
                    <h1 className='lg:text-5xl text-3xl font-bold text-gray-800 sm:leading-14'>Discover the Latest Trends in Fashion</h1>
                    <p className='text-gray-800 text-lg'>Explore our new collection of stylish and affordable clothing for all occasions. Upgrade your wardrobe today!</p>
                    <Link className='bg-green-400 px-8 py-3  text-md rounded-md text-gray-800'>
                        Shop Now
                    </Link>
                </div>
                {/* right box */}
                <div className="relative pb-10">
                    <img src={Banner} alt="banner" className='rounded-2xl sm:h-100 relative w-full' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
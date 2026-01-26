import React from 'react'
import { Link } from 'react-router-dom'
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <header className='shadow'>
      <div className='w-full bg-black text-white px-5 py-2 flex justify-between'>
        <div>Free Shipping on Orders Over $50!</div>
        <div>Contact: +1 234 567 890</div>
      </div>
      <div className='max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex justify-between items-center'>
        <Link to={'/'}>
          <span className='text-3xl text-green-500 font-bold'>E-</span>
          <span className='text-3xl text-slate-800 font-bold'>Commerce</span>
        </Link>
        <nav className='text-lg hidden text-gray-800 space-x-5 sm:flex items-center'>
          <Link className='hover:text-green-500' to='/'>Home</Link>
          <Link className='hover:text-green-500' to='/shop'>Shop</Link>
          <Link className='hover:text-green-500' to='/shop'>Mens</Link>
          <Link className='hover:text-green-500' to='/shop'>Womens</Link>
          <Link className='hover:text-green-500' to='/shop'>Kids</Link>
          <Link className="relative" to='/cart'>
            <span className='bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-5.5'>0</span>
            <IoCartOutline className='mt-1' />
          </Link>
          <Link className='bg-green-400 px-5 py-2 ms-3 text-md rounded-md text-gray-800'>
            Login
          </Link>
        </nav>
    </div>
    </header>
    /*  */
  )
}

export default Header

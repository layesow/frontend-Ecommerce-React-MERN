import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='w-full bg-black text-white px-5 py-2 flex justify-between'>
        <div>Free Shipping on Orders Over $50!</div>
        <div>Contact: +1 234 567 890</div>
      </div>
      <div className='max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex justify-between items-center'>
        <Link>
          <span className='text-3xl text-green-500 font-bold'>X</span>
          <span className='text-3xl text-slate-800 font-bold'>ECOM</span>
        </Link>
        <nav className='text-md text-gray-800 space-x-5'>
          <Link className='hover:text-green-500' to='/'>Home</Link>
          <Link className='hover:text-green-500' to='/shop'>Shop</Link>
          <Link className='hover:text-green-500' to='/shop'>Mens</Link>
          <Link className='hover:text-green-500' to='/shop'>Womens</Link>
          <Link className='hover:text-green-500' to='/shop'>Kids</Link>
        </nav>
    </div>
    </header>
    /*  */
  )
}

export default Header

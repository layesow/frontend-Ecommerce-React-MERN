import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";






const Footer = () => {
  return (
    <div className="max-w360 mx-auto bg-gray-700 lg:px-8 px-3 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="col-span-1 md:col-span-2">
          <Link>
            <span className='text-3xl text-green-500 font-bold'>E-</span>
            <span className='text-3xl text-gray-200 font-bold'>Commerce</span>
          </Link>
          <p className="text-gray-300 mt-4">
            Your one-stop shop for the latest fashion trends. We offer a wide range of clothing and accessories for men, women, and kids.
          </p>
          {/* social media icons  ajouter la taille des icode */}
          <div className="flex space-x-4 mt-4 justify-start">
            <Link className="text-gray-300 hover:text-green-400" to="#"><FaFacebook size={24}/></Link>
            <Link className="text-gray-300 hover:text-green-400" to="#"><FaSquareXTwitter size={24}/></Link>
            <Link className="text-gray-300 hover:text-green-400" to="#"><FaSquareInstagram size={24}/></Link>
            <Link className="text-gray-300 hover:text-green-400" to="#"><FaLinkedin size={24}/></Link>
            <Link className="text-gray-300 hover:text-green-400" to="#"><FaYoutube size={24}/></Link>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
          {/* utilise link */}
          <ul className="space-y-2">
            <li>
              <Link className="text-gray-300 hover:text-green-400" to="/">Home</Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-green-400" to="/shop">Shop</Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-green-400" to="/about">About Us</Link>
            </li>
            <li>
              <Link className="text-gray-300 hover:text-green-400" to="/contact">Contact Us</Link>
            </li>
          </ul>
          
        </div>
        <div className="col-span-1">
          <h2 className="text-white text-xl font-bold mb-4">Contact Info</h2>
          <ul className="space-y-2">
            <li className="text-gray-300">Email: info@ecommerce.com</li>
            <li className="text-gray-300">Phone: +1 234 567 890</li>
            <li className="text-gray-300">Address: 123 Fashion Street, New York, NY</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; {new Date().getFullYear()} E-commerce. All rights reserved.
      </div>
    </div>
  )
}

export default Footer
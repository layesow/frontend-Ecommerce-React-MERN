import React from 'react'
import Layout from '../components/layouts/Layout'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";


const Shop = () => {
  return (
    <>
      <Layout>
        {/* breadcrump */}
        <div className="max-w-360 lg:px-8 px-5 mx-auto">
          <div className="flex items-center gap-x-2">
            <Link>Home</Link>
            <IoIosArrowForward />
            <Link>Shop</Link>
          </div>
        </div>

        {/* title */}

        {/* main content */}
      </Layout>
    </>
  )
}

export default Shop
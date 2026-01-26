import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import LatestProducts from '../components/LatestProducts'
import Layout from '../components/layouts/Layout'

const Home = () => {
  return (
 
    <Layout>
    
        <Hero />
        <FeaturedProducts />
        <LatestProducts />
    </Layout>
  )
}

export default Home
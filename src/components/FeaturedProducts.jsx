import React from 'react'
import ProductImage1 from '../assets/product1.png'
import ProductImage2 from '../assets/product2.jpg'
import ProductImage3 from '../assets/product3.png'

const FeaturedProducts = () => {
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
    ];
  return (
    <div className='max-w-360 mx-auto lg:px-8 px-5 py-10'>
        <h2 className='text-green-500 text-4xl font-medium pb-10'>Featured {" "}
            <span className='text-gray-700'>Products</span>
        </h2>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {/* single product */}
            {
                products && products.map(product =>{
                    return (
                        <div key={product.id}>
                            <div className="bg-slate-100 overflow-hidden rounded-lg mb-3">
                                <img className='w-full object-cover h-100 duration-500 ease-in-out transition-transform hover:scale-110' 
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
  )
}

export default FeaturedProducts
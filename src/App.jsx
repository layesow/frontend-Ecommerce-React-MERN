import {  } from 'react'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='min-h-[80vh] flex flex-col items-center justify-center'>
        <h2 className='text-3xl font-dmSans'>Welcome to the E-commerce Store</h2>
      </div>
      <Footer />
    </>
  )
}

export default App

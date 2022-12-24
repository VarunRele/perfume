import React from 'react'
import desktop from './assets/image-product-desktop.jpg'
import mobile from './assets/image-product-mobile.jpg'
import cart from './assets/icon-cart.svg'

const App = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className="container w-[365px] md:w-[900px] flex flex-col mx-4 rounded-lg md:flex-row md:justify-center">
        <div>
          <img src={mobile} className='rounded-t-lg md:hidden' alt="product" />
        <img src={desktop} className='rounded-l-lg h-[431px]  hidden md:block' alt="product 2" />
        </div>
        
        <div className="flex flex-col bg-white rounded-b-lg md:rounded-r-lg md:rounded-l-none px-6 pt-6 pb-1 md:w-72 md:h-max">
          <p className='font-montserrat tracking-tight text-dark-grayish-blue text-sm'>P E R F U M E</p>
          <h2 className='my-5 text-4xl font-fraunces text-very-dark-blue'>Gabrille Essence Eau De Parfum</h2>
          <p className='-mt-2 leading-6 text-sm font-montserrat text-dark-grayish-blue'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <div className='mt-5 flex items-center'>
            <span className='font-fraunces text-3xl text-dark-cyan'>$149.99</span>
            <span className='mx-6 text-xs line-through text-dark-grayish-blue'>$169.99</span>
          </div>

          <button className='p-3 px-6 my-4 space-x-2 bg-dark-cyan rounded-lg flex text-white items-center justify-center'> <img src={cart} alt="cart" /> <span>Add to Cart</span> </button>
        </div>
      </div>
    </div>
  )
}

export default App
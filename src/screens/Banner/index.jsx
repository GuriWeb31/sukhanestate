import React from 'react';
import skyimage from '../../assets/images/skyimg.png';
import leftarrow from '../../assets/images/leftarrow.svg';

const Banner = () => {
  return (
    <>
      <section
        className='bg-cover bg-center bg-no-repeat h-[612px]'
        style={{ backgroundImage: `url(${skyimage})` }}
      >
    
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 xl:py-42">

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">

        <div class="group relative">
          
            <h1 className=' heading-main'>Get a $25,000* 
            down payment boost</h1>
       
          <p class=" text-gray-900 mt-5">No strings. No repayments. We put our real estate commissions where they belong — in your pocket.</p>
          <div className='button-getstarted flex gap-7.5 bg-[#001842] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
            <button className=''>Get Started</button>
            <img src={leftarrow} alt=''/>
          </div>
        </div>
      </div>
    </div>
  </div>

      
      </section>
    </>
  );
};

export default Banner;

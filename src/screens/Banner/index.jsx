import React from 'react';
import skyimage from '../../assets/images/skyimg.png';
import leftarrow from '../../assets/images/leftarrow.svg';
import homeimg from '../../assets/images/homeimg.png';

const Banner = () => {
  return (
    <>
      <section
        className='bg-cover bg-center bg-no-repeat xl:h-[612px] md:h-[auto] lg:h-[498px] xl:mt-[-150px] lg:mt-[-150px] md:mt-[0px]'
        style={{ backgroundImage: `url(${skyimage})` }}
      >
    
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 max-sm:bg-[#d6f3ffdb] md:bg-[#d6f3ffdb] xl:bg-[#0000] lg:bg-[#0000]">
    <div class="mx-auto  py-16 sm:py-10 max-sm:py-0 max-sm:pt-1 lg:max-w-none lg:py-44 xl:py-42 md:pb-0  ">

      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-6">

        <div class=" relative">
          
            <h1 className=' heading-main xl:text-[42px] lg:text-[42px] md:text-[38px] sm:text-[38px] max-sm:text-[38px]'>Get a $25,000* 
            down payment boost</h1>
       
          <p class=" text-gray-900 mt-5">No strings. No repayments. We put our real estate commissions where they belong — in your pocket.</p>
          <div className='button-getstarted flex gap-7.5 bg-[#001842] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
            <button className=''>Get Started</button>
            <img src={leftarrow} alt=''/>
          </div>
        </div>
        <div className='xl:hidden lg:hidden '>
             <img src={homeimg} alt='houseimg' className='w-full'/>
        </div>
      </div>
    </div>
  </div>

      
      </section>
    </>
  );
};

export default Banner;

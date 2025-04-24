import React from 'react'
import house from '../../assets/images/house.png';
import homeone from '../../assets/images/homeone.png';
import hometwo from '../../assets/images/hometwo.png';


const Homepurchase = () => {
  return (
    <>
      <section className='home-purchase'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24'>
      <div class="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-10">
  <div class="rounded">
    <img src={house} alt='house' className='w-full'/>
  </div>
  
  <div class="rounded">
    <h2 className='lg:text-[42px] sm:text-[20px] text-[#001842]'>Homes Purchased This Month</h2>
    <p className='text-[#001842] text-[18px]'>Updated April 1, 2025</p>
    {/* swiper */}
    <div class="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 pt-18">
    <div className=''>
    <img src={homeone} alt='house' className='w-full'/>
    <div className='relative'><p className='bg-[#04B1FE] text-center absolute bottom-3 left-5 py-1.5 px-7.5 mx-auto text-white' >Purchase For $788,500</p></div>
    
    <p className='text-[#001842] text-2xl w-full text-center font-bold mt-2'>$11,828</p>
    <p className='text-[#000000] w-full text-center mt-2'>Down Payment Boost Provided</p>
    </div>

    <div className=''>
    <img src={hometwo} alt='house' className='w-full'/>
    <div className='relative'> <p className='bg-[#04B1FE] text-center absolute bottom-3 left-5 py-1.5 px-7.5 mx-auto text-white' >Purchase For $788,500</p></div>
    <p className='text-[#001842] text-2xl w-full text-center font-bold mt-2'>$11,828</p>
    <p className='text-[#000000] w-full text-center mt-2'>Down Payment Boost Provided</p>
    </div>
    </div>
  </div>
  {/* swiper */}
</div>
</div>
      </section>
    </>
  )
}

export default Homepurchase;

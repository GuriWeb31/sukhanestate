import React from 'react'
import houseone from '../../assets/images/houseone.png';
import HomeSlider from '../Propertyswiper';
// import homeone from '../../assets/images/homeone.png';
// import hometwo from '../../assets/images/hometwo.png';


const Homepurchase = () => {
  return (
    <>
      <section className='home-purchase'>
         
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:mt-24 lg:mt-24 md:mt-8 max-sm:mt-8'>
      <div class="mx-auto max-w-screen-xl grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:gap-10 lg:gap-8 md:flex-col-reverse">
  <div class="rounded">
    <img src={houseone} alt='house' className='w-full xl:mb-0 lg:mb-0 md:mb-8 xl:block md:hidden  lg:block max-sm:hidden sm:hidden' style={{boxShadow: ''}} />
  </div>
  
  <div class="rounded ">
    <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842]'>Homes Purchased This Month</h2>
    <p className='text-[#001842] text-[18px] xl:mb-0 lg:mb-0 md:mb-12 max-sm:mb-12'>Updated April 1, 2025</p>
    {/* swiper */}
    <HomeSlider />
  </div>
  {/* swiper */}
</div>
</div>
      </section>
    </>
  )
}

export default Homepurchase;

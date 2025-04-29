import React from 'react'
import faqimg from '../../assets/images/faqimg.svg';
import FAQCollapse from './FAQCollapse';

const FAQ = () => {
  return (
    <>
      <section className='buying-thinker bg-[#F0FAFF] xl:py-8 lg:py-8 md:py-8 max-sm:py-5 sm:py-5'>
      
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:mt-12 lg:mt-12 md:mt-12 max-sm:mt-0 xl:mb-24 lg:mb-24 md:mb-24 max-sm:mb-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center max-sm:flex max-sm:flex-col-reverse gap-6'>
        <div>
            <FAQCollapse />
        </div>
        <div> 
            <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842] mb-8'>Got questions? We've got answers.</h2>
             <img src={faqimg} alt="" className='w-[70%] block m-auto'/>
        </div>
     
        </div>
        </div>
        </section>
      </>
   
  )
}

export default FAQ;

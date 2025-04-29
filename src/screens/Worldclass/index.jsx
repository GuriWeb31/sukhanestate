import React from 'react'
import bluearrow from '../../assets/images/bluearrow.svg';
import wordclass from '../../assets/images/wordclass.svg';
import dollar from '../../assets/images/dollar.svg';
import dollarone from '../../assets/images/dollarone.svg';
import tick from '../../assets/images/tick.svg';



const Wordclass = () => {
  return (
    <>
    <section className='world-class'>
       <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 xl:mb-24 lg:mb-24 md:mb-24 max-sm:mb-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
         <div>
            <div className='relative'>
            <img src={dollar} alt='' className='absolute bottom-0 -left-33 right-0 -top-15 float-animation' />
            </div>
         <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842]'>World-class, All-In-One Service that others won't match</h2>
         <p className='text-[#001842] xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[16px] sm:text-[16px] mt-2'>See how we stack up below</p>
          <div className='hover:bg-[#001842] hover:text-white transition-all duration-300 button-getstarted flex gap-7.5 bg-[fff] text-[#001842] w-fit p-1 py-1.5 px-3.5 mt-6 border-[#001842] border-1'>
                             <button className=''>Get Started</button>
                             <img src={bluearrow} alt=''/>
                           </div>
         </div>
         <div>
         <img src={wordclass} alt='' className='w-[72%] block m-auto '/>
         <div className='relative'><img src={dollarone} alt='' className='absolute bottom-0 right-0 float-opposite-animation'/></div>
         
         </div>
        </div>
        <table className='w-full'>

  <tbody>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>Up to $25,000 in upfront funds</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>Lowest Mortgage Rates</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>Access to Exclusive & Off-Market Lisitings</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>AI-Powered Property Matching & Offer Suggestion</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>Same-Day Showings</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
    <tr>
      <td className='xl:w-[36%] lg:w-[36%] md:w-[36%] max-sm:w-[78%] sm:w-[36%] bg-[#F5F6F7] text-[#001842]'>Data-Driven Offer Negotiations</td>
      <td className='text-[#001842]'><img src={tick} alt="" className='w-[32px] block m-auto'/></td>
    </tr>
  </tbody>
</table>
       </div>
    </section>
    
    </>
  )
}

export default Wordclass;

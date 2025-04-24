import React from 'react'
import bluearrow from '../../assets/images/bluearrow.svg';
import a from '../../assets/images/a.svg';
import apurple from '../../assets/images/apurple.svg';
import star from '../../assets/images/star.svg';
const Testimonial = () => {
  return (
    <section className='testimonial'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24'>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
       
                <div className='col-span-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                   <div>
                    <div className='border-1 border-[#001842] p-5 testimonial-gradient'>
                        <div className='flex gap-3 '>
                            <div><img src={a} alt="" className='w-[78px]'/></div>
                            <div>
                                <h2 className='text-[#001842] text-[20px]'>Amit</h2>
                                <p className='text-[#404040]'>Bought with Sukhan Estate in February 2025</p>
                                <img src={star} alt='' className='mt-2'/>
                            </div>
                        </div>
                        <p className='text-[#001842] text-[18px] mt-3'>“After working with a local realtor agent, i have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.</p>
                    </div>
                   </div>
                   <div>
                    <div className='border-1 border-[#001842] p-5 testimonial-gradient'>
                        <div className='flex gap-3 '>
                            <div><img src={apurple} alt="" className='w-[78px]'/></div>
                            <div>
                                <h2 className='text-[#001842] text-[20px]'>Amit</h2>
                                <p className='text-[#404040]'>Bought with Sukhan Estate in February 2025</p>
                                <img src={star} alt='' className='mt-2'/>
                            </div>
                        </div>
                        <p className='text-[#001842] text-[18px] mt-3'>“After working with a local realtor agent, i have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.</p>
                    </div>
                   </div>
                  
                </div>
                </div>
            <div> 
                <h2 className='lg:text-[42px] sm:text-[20px] text-[#001842]'>More Than Just Cash Back</h2>
                <p className='text-[#001842] text-[18px]'>Whether it's your first, second, or tenth home, we turn our commissions into your savings—every step of the way.</p>
                 <div className='hover:bg-[#001842] hover:text-white transition-all duration-300 button-getstarted flex gap-7.5 bg-[fff] text-[#001842] w-fit p-1 py-1.5 px-3.5 mt-6 border-[#001842] border-1'>
                    <button className=''>Get Started</button>
                    <img src={bluearrow} alt=''/>
                  </div>
                </div>
        </div>
    </div>  
    </section>
  )
}

export default Testimonial;

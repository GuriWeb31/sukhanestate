import React from 'react'
import career from '../../assets/images/career.png';
import leftarrow from '../../assets/images/leftarrow.svg';

import Jobs from './Jobs';
import OurMission from './OurMission';

const Career = () => {
  return (
    <>
    <section className='career border-t border-[#001842] xl:pt-8 lg:pt-8 md:pt-8 max-sm:pt-8 sm:pt-8 xl:pb-8 lg:pb-8 md:pb-8 max-sm:pb-8 sm:pb-8'>
                    <div className='mx-auto max-w-7xl p-4'>
                        
                       <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 items-center'>
                        <div>
                        <h2 class="lg:text-[52px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] font-bold  text-start text-[#001842]">Join Our Team</h2>
                        <p class=" xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[16px] sm:text-[16px] text-start pt-4 text-[#001842]">At Sukhan Estates, we're redefining how people buy and sell homes—making the process more affordable, accessible, and empowering.</p>
                        <div className='button-getstarted flex gap-7.5 bg-[#001842] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
                                    <button className=''>Get Started</button>
                                    <img src={leftarrow} alt=''/>
                                  </div>
                        </div>
                        <div>
                            <img src={career} className='w-[86%] block m-auto'/>
                        </div>
                       </div>
                    </div>
                </section>
                <Jobs />
                <OurMission/>
                
    </>
  )
}

export default Career;

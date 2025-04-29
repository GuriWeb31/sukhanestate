import React from 'react'
import leftarrowbl from '../../assets/images/leftarrowbl.svg';
import payboost from '../../assets/images/payboost.png';
import dollarone from '../../assets/images/dollarone.svg';
import dollar from '../../assets/images/dollar.svg';
const Downpaymentqualification = () => {
  return (
    <>
    <section className='downpayment-qualification border-t border-[#001842] xl:pt-16 xl:pb-16 lg:pt-8 md:pt-8 max-sm:pt-8 sm:pt-8'>
                    <div className='mx-auto max-w-7xl'>
                       
                        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-5 items-center px-4'>
                            <div className='p-4'>
                                    <div className='relative'><img src={dollarone} alt='' className='absolute bottom-0 left-0 float-opposite-animation'/></div>
                            <h2 class="lg:text-[32px] md:text-[28px] sm:text-[20px] max-sm:text-[24px]  text-start text-[#001842]">See If You Qualify in 60 Seconds</h2>
                            <p class=" xl:text-[16px] lg:text-[16px] md:text-[16px] max-sm:text-[16px] sm:text-[16px] text-start pt-2 text-[#001842] xl:pb-5">Qualify for up to $25,000 toward your dream home, no ownership taken, no repayments required, eligible for any home on the market.</p>
                                <form>
                                    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1  gap-5'>
                                        <div><input type="text" id="name" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required /></div>
                                        <div><input type="text" id="name" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required /></div>
                                        <div className='col-span-2'><input type="text" id="beforetax" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What's your annual household income? (before tax)" required /></div>
                                        <div className='col-span-2'>
                                        <label className='text-[#001842] text-[14px] '><span className='text-[#04B1FE]'>*</span>How much have you set aside for your down payment? (Including RRSP, TFSA,   FHSA)</label>
                                            <input type="text" id="saving" class=" border mt-3 border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Household Saving" required />
                                            </div>
                                        <div className='col-span-2'>
                                        <label className='text-[#001842] text-[14px] '><span className='text-[#04B1FE]'>*</span>When do you plan on buying?</label>
                                        <select id="saving" class="border mt-3 border-[#001842] text-[#001842] focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5 placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  <option value="" disabled selected>Select an option</option>
  <option value="option1">Within 30 days</option>
  <option value="option2">0-3 months</option>
  <option value="option3">3-6 months</option>
  <option value="option3">6-12 months</option>
  <option value="option3">12+ months</option>
</select>
                                            </div>
                                        
                                        <div className='button-getstarted flex gap-4.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 xl:mt-1 lg:mt-6 md:mt-6 sm:mt-6 max-sm:mt-6'>
                                            <button className=''>Check Your Eligibility</button>
                                            <img src={leftarrowbl} alt='' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div>
                              <img src={payboost} alt="" className='w-[100%] block m-auto'/>

                              <div className='relative'>
                                          <img src={dollar} alt='' className='absolute bottom-0  right-0 -top-15 float-animation' />
                                          </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Downpaymentqualification;

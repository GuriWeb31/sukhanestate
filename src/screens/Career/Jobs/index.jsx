import React from 'react'
import whitearrow from '../../../assets/images/whitearrow.svg';
import sales from '../../../assets/images/sales.svg';
import property from '../../../assets/images/property.svg';
import marketing from '../../../assets/images/marketing.svg';
import customer from '../../../assets/images/customer.svg';
const Jobs = () => {
  return (
    <>
    <section className='jobs-occuptaion xl:pt-8 lg:pt-8 md:pt-8 max-sm:pt-8 sm:pt-8 xl:pb-8 lg:pb-8 md:pb-8 max-sm:pb-8 sm:pb-8'>
    <div className='mx-auto max-w-7xl p-4'>
    <div className='grid grid-cols-1 xl:grid-cols-4 md:grid-cols-4 items-center gap-8'>
    <div>
      <img src={sales} alt='' className='pb-3'/>
    <h5 class="text-[#001842] text-[20px]">Sales Executive</h5>
    <p class="text-[#001842] text-[18px]">Turning Leads into Loyal Customers</p>
     <div className='button-getstarted flex gap-7.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
                                        <button className=''>Apply Now</button>
                                        <img src={whitearrow} alt=''/>
                                      </div>
    </div>
    <div>
      <img src={property} alt='' className='pb-3'/>
    <h5 class="text-[#001842] text-[20px]">Property Consultant</h5>
    <p class="text-[#001842] text-[18px]">Turning Leads into Loyal Customers</p>
    <div className='button-getstarted flex gap-7.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
                                        <button className=''>Apply Now</button>
                                        <img src={whitearrow} alt=''/>
                                      </div>
    </div>
    <div>
      <img src={marketing} alt='' className='pb-3'/>
    <h5 class="text-[#001842] text-[20px]">Marketing Manager</h5>
    <p class="text-[#001842] text-[18px]">Turning Leads into Loyal Customers</p>
    <div className='button-getstarted flex gap-7.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
                                        <button className=''>Apply Now</button>
                                        <img src={whitearrow} alt=''/>
                                      </div>
    </div>
    <div>
      <img src={customer} alt='' className='pb-3'/>
    <h5 class="text-[#001842] text-[20px]">Customer Support</h5>
    <p class="text-[#001842] text-[18px]">Turning Leads into Loyal Customers</p>
    <div className='button-getstarted flex gap-7.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 mt-6'>
                                        <button className=''>Apply Now</button>
                                        <img src={whitearrow} alt=''/>
                                      </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Jobs

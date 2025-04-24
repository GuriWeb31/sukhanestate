import React from 'react'
import skyimage from '../../assets/images/estatebrokerage.png';
import menestate from '../../assets/images/menestate.png';
import tick from '../../assets/images/tick.svg';
import triangle from '../../assets/images/triangle.svg';
import circle from '../../assets/images/circle.svg';
import bloomberg from '../../assets/images/bloomberg.svg';
import google from '../../assets/images/google.svg';
const Estatebrokerage = () => {
  return (
    <>
       <section
              className='bg-cover bg-center bg-no-repeat mt-24 py-16 px-24 estate-real'
              style={{ backgroundImage: `url(${skyimage})` }}
            >
                <h2 class="lg:text-[42px] sm:text-[20px] text-[#ffffff] text-center">Canada's Fastest Growing<br></br> Real Estate Brokerage</h2>
                <p class="text-[#ffffff] text-[18px] text-center pt-4">We've been in your shoes & felt your frustrations, so we built a new path that puts you first.</p>
               
                <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24'>
                <div class="grid grid-cols-1 md:grid-cols-3 xl:gap-8 lg:gap-10 items-center">
                    <div className='col-span-2'>
                        <div className='flex gap-5 items-center'>
                            <div><img src={tick} alt="" className='w-full'/></div>
                            <div> <p className='text-white text-[18px]'>We pay our realtors a salary plus a performance bonus when they get you the best price.</p></div>
                        </div>
                        <div className='flex gap-5 items-center mt-5'>
                            <div><img src={tick} alt="" className='w-full'/></div>
                            <div> <p className='text-white text-[18px]'>No pushy sales tactics - our agents earn the same whether you buy or wait.</p></div>
                        </div>
                        <div className='flex gap-5 items-center mt-5    '>
                            <div><img src={tick} alt="" className='w-full'/></div>
                            <div> <p className='text-white text-[18px]'>We empower our agents with technology so they can focus on your needs, not paperwork.</p></div>
                        </div>
                        <div className='mt-10 flex items-center gap-3'>
                            <div className='bg-[#04B1FE] text-[18px] text-[#001842] w-fit px-8 py-1'>
                                <p>As Featured In</p>
                            </div>
                            <div>
                            <img src={bloomberg} alt="" className='w-full'/>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                    <div className='relative'>
                        <img src={triangle} alt="" className='w-[80px] absolute left-5 -bottom-14 float-animation'/>
                        </div>
                        <img src={menestate} alt="" className='w-full'/>
                        <div className='relative'>
                        <img src={circle} alt="" className='w-[80px] absolute right-5 -bottom-10 float-animation'/>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 xl:gap-8 lg:gap-10 mt-16">
                    <div>
                        <div className='group border-1 border-[#04B1FE] p-8 text-center px-10 hover:bg-[#fff] transition-all duration-300'>
                            <h2 className='text-[38px] text-[#04B1FE] font-bold'>$200M+</h2>
                            <p className='text-white group-hover:text-[#001842]'>In transactional volume over the last calendar year</p>
                        </div>
                    </div>
                    <div>
                        <div className='group border-1 border-[#04B1FE] p-8 text-center px-10 hover:bg-[#fff] transition-all duration-300'>
                            <h2 className='text-[38px] text-[#04B1FE] font-bold'>250+</h2>
                            <p className='text-white group-hover:text-[#001842]'>Locally vetted real estate agents across Ontario</p>
                        </div>
                    </div>
                    <div>
                        <div className='relative group border-1 border-[#04B1FE] p-8 text-center px-10 hover:bg-[#fff] transition-all duration-300'>
                        <img src={google} alt="" className='h-[57px] block mx-auto'/>
                            <p className='text-white group-hover:text-[#001842]'>In transactional volume over the last calendar year</p>
                            <div className='bg-[#04B1FE] text-[12px] text-[#001842] w-fit px-8 py-1 absolute right-0 bottom-0'>
                                <p>Read our reviews.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
                    
            </section>
    </>
  )
}

export default Estatebrokerage;

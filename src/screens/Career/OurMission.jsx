import React from 'react'
import ourmiss from '../../assets/images/ourmiss.png';
import dot from '../../assets/images/dot.svg';
import whitearrow from '../../assets/images/whitearrow.svg';
import ourteam from '../../assets/images/ourteam.png';
const OurMission = () => {
  return (
    <>
    <section className='jobs-occuptaion xl:pt-8 lg:pt-8 md:pt-8 max-sm:pt-8 sm:pt-8 xl:pb-8 lg:pb-8 md:pb-8 max-sm:pb-8 sm:pb-8'>
    <div className='mx-auto max-w-7xl p-4'>
        <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842] text-center '>Our vision, mission and values</h2>
    <div className='grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 gap-8 mt-15'>
    <div>
      <div className='bg-[#F5FCFF] p-4'>
        <h3 className='bg-[#001842] p-2 text-white w-[30%] rounded-[100px] text-center'>Vision</h3>
        <p className='pt-2'>Bringing a new era to Indian real estate.</p>
      </div>
      <div className='bg-[#F5FCFF] p-4 mt-4'>
        <h3 className='bg-[#001842] p-2 text-white w-[30%] rounded-[100px] text-center'>Mission</h3>
        <p className='pt-2'>Empowering home journeys with data, design, and technology—driven by passion, delivering lasting value.</p>
      </div>
      <div className='bg-[#F5FCFF] p-4 mt-4 '>
        <h3 className='bg-[#001842] p-2 text-white w-[30%] rounded-[100px] text-center'>Our Value</h3>
        <div className='flex items-center gap-6 mt-4 mb-2'>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
         <div><p>Excellence</p></div>
        </div>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
          <div><p>Ownership</p></div>
        </div>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
          <div><p>Respect</p></div>
        </div>
        </div>
        <div className='flex items-center gap-6'>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
         <div><p>Limitless</p></div>
        </div>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
          <div><p>Innovation</p></div>
        </div>
        <div className='flex items-center gap-2'>
         <div><img src={dot} alt='' />  </div>
          <div><p>Trust & Integrity</p></div>
        </div>
        </div>
      </div>
    </div>
    <div><img src={ourmiss} alt='' className='w-[90%]'/></div>
    </div>
    </div>
    </section>
    <div className='jointeam'>
         <div className='mx-auto max-w-7xl px-4'>
       
    <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 gap-8 mt-6'>
        <div> <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842] '>Join our Talent Community</h2></div>
        <div><p>Keep up to date with exciting career opportunities and the latest news.</p></div>
        <div>
            <div className='button-getstarted flex gap-7.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 ml-auto'>
                                                    <button className=''>Sign Up</button>
                                                    <img src={whitearrow} alt=''/>
                                                  </div>
        </div>
    </div>
    <img src={ourteam} alt=''/>
    </div>
    </div>
</>
  )
}

export default OurMission;

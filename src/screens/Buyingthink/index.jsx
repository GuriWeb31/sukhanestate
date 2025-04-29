import React from 'react'
import logoone from '../../assets/images/logoone.svg'
import logotwo from '../../assets/images/logotwo.svg'
import logothree from '../../assets/images/logothree.svg'

const Buyingthink = () => {
  return (
    <>
      <section className='buying-thinker'>
      <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842] text-center '>You're closer to buying <br></br>than you think</h2>
      <p className='text-[#001842] xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[16px] sm:text-[16px] mt-2 text-center max-sm:px-3'>Contact us to unlock non-repayable, equity-free funds for your home and get<br className='max-sm:hidden'></br> personalized support every step of the way.</p>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-24'>
      <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6 '>
        <div><img src={logoone} alt="" className='w-full'/></div>
        <div><img src={logotwo} alt="" className='w-full'/></div>
        <div><img src={logothree} alt="" className='w-full'/></div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Buyingthink;

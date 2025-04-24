import React from 'react'
import bluearrow from '../../assets/images/bluearrow.svg';
import howimage from '../../assets/images/howimage.png';

const Howitworks = () => {
  return (
    <>
    <section className='how-it-works'>
        <div className='border-one mt-24'></div>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24'>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:gap-16 lg:gap-10">
        <div>
        <h2 className='lg:text-[42px] sm:text-[20px] text-[#001842]'>How It Works</h2>
        <p className='text-[#001842] text-[18px]'>Whether it's your first, second, or tenth home, we turn our commissions into your savings—every step of the way.</p>
        <div className='hover:bg-[#001842] hover:text-white transition-all duration-300 button-getstarted flex gap-7.5 bg-[fff] text-[#001842] w-fit p-1 py-1.5 px-3.5 mt-6 border-[#001842] border-1'>
                    <button className=''>Get Started</button>
                    <img src={bluearrow} alt=''/>
                  </div>
                  <img src={howimage} alt='' className='w-full mt-15'/>
        </div>
        <div>
            <div className=''>
            <p className='bg-[#04B1FE] text-white text-[18px] w-fit py-0.5 px-10 relative left-4.5'>Step 1</p>
             <div className='border-1 border-[#001842] px-5 py-3 bg-[#EBF9FF]'>
                <h3 className='text-[#001842] text-[21px] font-bold '>Book A Call</h3>
                <p>Answer a few questions to see if you qualify, and book a call with us to get started.</p>
             </div>
            </div>
            <div className='mt-6'>
            <p className='bg-[#04B1FE] text-white text-[18px] w-fit py-0.5 px-10 relative left-4.5'>Step 2</p>
             <div className='border-1 border-[#001842] px-5 py-3 bg-[#EBF9FF]'>
                <h3 className='text-[#001842] text-[21px] font-bold '>Mortgage Pre-Qualified</h3>
                <p>Leverage Sukhan Estate's upfront cash back and your savings for mortgage pre-qualification without affecting your credit score.</p>
             </div>
            </div>
            <div className='mt-6'>
            <p className='bg-[#04B1FE] text-white text-[18px] w-fit py-0.5 px-10 relative left-4.5'>Step 3</p>
             <div className='border-1 border-[#001842] px-5 py-3 bg-[#EBF9FF]'>
                <h3 className='text-[#001842] text-[21px] font-bold '>Find Your Dream Home</h3>
                <p>Use our app to match with your perfect home, and let our realtors guide you by showing properties you love, helping you find your dream home.</p>
             </div>
            </div>
            <div className='mt-6'>
            <p className='bg-[#04B1FE] text-white text-[18px] w-fit py-0.5 px-10 relative left-4.5'>Step 4</p>
             <div className='border-1 border-[#001842] px-5 py-3 bg-[#EBF9FF]'>
                <h3 className='text-[#001842] text-[21px] font-bold '>Close with Confidence</h3>
                <p>We negotiate interest rates to lower your monthly mortgage payments and handle the closing process for a smooth transition into your new home.</p>
             </div>
            </div>
           
           
        </div>
        
      </div>
      </div>
      </section>
    </>
  )
}

export default Howitworks;

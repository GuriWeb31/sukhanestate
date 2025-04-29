import React from 'react'
import footerlogo from '../../assets/images/footerlogo.svg';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
    <div class="border-one footer-line "></div>
    <section className='footer bg-[#001842] py-3'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 xl:mb-24 lg:mb-24 md:mb-10 max-sm:mb-10 sm:mb-10'>
          <div className='grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3  gap-5'>
            <div className='xl:col-span-2 lg:col-span-2 md:col-span-2'>
                <img src={footerlogo} alt="" className='xl:w-[310px] lg:w-[310px] md:w-[310px] max-sm:w-[300px] max-sm:block max-sm:m-auto mb-2'/>
                <p className='text-white xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[18px] max-sm:text-center max-sm:mt-5' >Your trusted partner in real estate <br className='max-sm:hidden'></br>solutions.</p>
            </div>
            <div className=''>
                <h4 className='border-b text-[20px] font-bold text-white w-[120px] border-[#04B1FE] pb-1 mb-5'>Company</h4>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>About us</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Our Team</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Career</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Media Centre</Link>
                <Link to='/Contactus' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Contact Us</Link>
            </div>
            <div>
                <h4 className='border-b text-[20px] font-bold text-white w-[140px] border-[#04B1FE] pb-1 mb-5'>How It Works</h4>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>For Home Buyers</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>For Home Sellers</Link>
                
            </div>
            <div>
                <h4 className='border-b text-[20px] font-bold text-white w-[100px] border-[#04B1FE] pb-1 mb-5'>Services</h4>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Home Buying Simplified</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Mortgage Buydown</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Legal & Closing</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Selling with Sukhan Estate</Link>
               
            </div>
            <div>
                <h4 className='border-b text-[20px] font-bold text-white w-[120px] border-[#04B1FE] pb-1 mb-5'>Legal</h4>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Privacy Policy</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Terms & Conditions</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Loan Rates</Link>
                <Link to='#' className='text-white text-[16px] py-2 block hover:text-[#04b1fe] transition-all duration-200 cursor-pointer'>Closing Documentation</Link>
                
            </div>
           
            
          </div>
        </div>
        <p className='text-white border-t border-[#fff] text-center pt-3'>Copyright © 2025 Sukhan Estate All Rights Reserved</p>
    </section>
    </>
  )
}

export default Footer;

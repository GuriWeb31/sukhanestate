import React from 'react'
import leftarrowbl from '../../assets/images/leftarrowbl.svg';
import contactimg from '../../assets/images/contactimg.png';
import email from '../../assets/images/email.png';
import chat from '../../assets/images/chat.png';
import visit from '../../assets/images/visit.png';

const Contactus = () => {
    return (
        <>
            <section className='contact-us border-t border-[#001842] xl:pt-8 lg:pt-8 md:pt-8 max-sm:pt-8 sm:pt-8'>
                <div className='mx-auto max-w-7xl'>
                    <h2 class="lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px]  text-center text-[#001842]">Prefer To Leave A Message?</h2>
                    <p class=" xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[16px] sm:text-[16px] text-center pt-4 px-3 text-[#001842]">Fill out this form and we'll get back to you within 24 hours.</p>
                    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-5 items-center px-4'>
                        <div>
                            <form>
                                <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 px-4 gap-8'>
                                    <div><input type="email" id="name" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required /></div>
                                    <div><input type="email" id="name" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required /></div>
                                    <div><input type="email" id="email" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required /></div>
                                    <div><input type="email" id="number" class=" border-b border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone Number" required /></div>

                                    <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-1'><textarea id="message" rows="4" class="border-1 border-[#001842] text-[#001842]  focus:ring-[#001842] focus:border-[#001842] block w-full p-2.5  placeholder-[#001842] focus-visible:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required></textarea></div>
                                    <div className='button-getstarted flex gap-4.5 bg-[#04B1FE] text-white w-fit p-1 py-1.5 px-3.5 xl:mt-1 lg:mt-6 md:mt-6 sm:mt-6 max-sm:mt-6'>
                                        <button className=''>Send Us Your Message</button>
                                        <img src={leftarrowbl} alt='' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div>
                            <img src={contactimg} className='w-full' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-box xl:py-18 lg:py-18 md:py-18 sm:py-18 max-sm:py-18 px-4'>
                <div className='mx-auto max-w-7xl '>
                    <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1 gap-5 items-center px-4'>
                        <div className='h-full'>
                            <div className='border-1 border-[#001842] gap-5 flex items-center xl:px-5 lg:px-5 md:px-5 sm:px-5 xl:py-5 lg:py-5 md:py-5 sm:py-5  h-full '>
                                <div>
                                    <img src={email} alt="email" className='w-[160px]'/>
                                 </div>
                                <div>
                                    <h5 className='text-[#001842] text-[20px]'>Reach Us By Email</h5>
                                    <p className='text-[#001842]'>Send us an email anytime you'd like if you'd like to get a hold of us.</p>
                                    <p className="text-[#05a6eb]">info@Sukhan Estate.ca</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full'>
                            <div className='border-1 border-[#001842] gap-5 flex items-center xl:px-5 lg:px-5 md:px-5 sm:px-5 xl:py-5 lg:py-5 md:py-5 sm:py-5  h-full'>
                                <div>
                                    <img src={chat} alt="email" className='w-[160px]'/>
                                 </div>
                                <div>
                                    <h5 className='text-[#001842] text-[20px]'>Live-Chat With Us</h5>
                                    <p className='text-[#001842]'>Connect with our team during business hours to learn more about us.</p>
                                    <p className="text-[#05a6eb]">Start new chat</p>
                                </div>
                            </div>
                        </div>
                        <div className='h-full'>
                            <div className='border-1 border-[#001842] gap-5 flex items-center xl:px-5 lg:px-5 md:px-5 sm:px-5 xl:py-5 lg:py-5 md:py-5 sm:py-5 h-full'>
                                <div>
                                    <img src={visit} alt="email" className='w-[160px]'/>
                                 </div>
                                <div>
                                    <h5 className='text-[#001842] text-[20px]'>Visit Our Office</h5>
                                    <p className='text-[#001842]'>Come say hello at our office HQ and learn about our product.</p>
                                    <p className="text-[#05a6eb]">325 Front St W 4th Floor, Toronto, ON M5V 2Y1</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus;

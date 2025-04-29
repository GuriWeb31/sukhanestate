import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // import Autoplay

import bluearrow from '../../assets/images/bluearrow.svg';
import a from '../../assets/images/a.svg';
import apurple from '../../assets/images/apurple.svg';
import star from '../../assets/images/star.svg';

const Testimonial = () => {
  const testimonials = [
    {
      img: a,
      name: 'Amit',
      date: 'Bought with Sukhan Estate in February 2025',
      feedback:
        '“After working with a local realtor agent, I have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.',
    },
    {
      img: apurple,
      name: 'Amit',
      date: 'Bought with Sukhan Estate in February 2025',
      feedback:
        '“After working with a local realtor agent, I have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.',
    },
    {
      img: a,
      name: 'Amit',
      date: 'Bought with Sukhan Estate in February 2025',
      feedback:
        '“After working with a local realtor agent, I have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.',
    },
    {
      img: apurple,
      name: 'Amit',
      date: 'Bought with Sukhan Estate in February 2025',
      feedback:
        '“After working with a local realtor agent, I have had nothing but amazing experience with Sukhan Estate. The best thing about them was they were very honest and transparent about everything, no lying or trying to push you on bs.',
    },
  ];

  return (
    <section className='testimonial'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:mt-24 xl:mb-24 lg:mt-24 lg:mb-24 md:mt-24 md:mb-24 max-sm:mt-12 max-sm:mb-12'>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 max-sm:grid-cols-1 max-sm:flex-col-reverse max-sm:flex   gap-10'>
          <div className='xl:col-span-2 lg:col-span-2 md:col-span-2 max-sm:col-span-1'>
            <Swiper
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='border-1 border-[#001842] p-5 testimonial-gradient'>
                    <div className='flex gap-3'>
                      <div>
                        <img src={item.img} alt='' className='w-[78px]' />
                      </div>
                      <div>
                        <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] text-[#001842]'>{item.name}</h2>
                        <p className='text-[#404040]'>{item.date}</p>
                        <img src={star} alt='' className='mt-2' />
                      </div>
                    </div>
                    <p className='text-[#001842] text-[18px] mt-3'>{item.feedback}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div>
            <h2 className='lg:text-[42px] md:text-[28px] sm:text-[20px] max-sm:text-[24px] text-[#001842]'>More Than Just Cash Back</h2>
            <p className='text-[#001842] xl:text-[18px] lg:text-[18px] md:text-[18px] max-sm:text-[16px] sm:text-[16px]'>
              Whether it's your first, second, or tenth home, we turn our commissions into your savings—every step of the way.
            </p>
            <div className='hover:bg-[#001842] hover:text-white transition-all duration-300 button-getstarted flex gap-7.5 bg-[fff] text-[#001842] w-fit p-1 py-1.5 px-3.5 mt-6 border-[#001842] border-1'>
              <button>Get Started</button>
              <img src={bluearrow} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

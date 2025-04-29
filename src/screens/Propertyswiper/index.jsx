import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRef } from 'react';

import homeone from '../../assets/images/homeone.png';
import hometwo from '../../assets/images/hometwo.png';
import darrowleft from '../../assets/images/darrowleft.svg';
import darrowright from '../../assets/images/darrowright.svg';

const HomeSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const slides = [
    { img: homeone, price: '$788,500', boost: '$11,828' },
    { img: hometwo, price: '$788,500', boost: '$11,828' },
    { img: homeone, price: '$788,500', boost: '$11,828' },
    { img: hometwo, price: '$788,500', boost: '$11,828' },
    { img: homeone, price: '$788,500', boost: '$11,828' },
    { img: hometwo, price: '$788,500', boost: '$11,828' },
  ];

  return (
    <div
      className="relative max-w-screen-xl mx-auto xl:pt-18 lg:pt-12"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      {/* Custom Navigation Buttons */}
      <div className='relative flex'>
        <div className="absolute right-12 bottom-0">
          <button ref={prevRef} className="bg-[#001842] rounded-full transition-all duration-300 hover:scale-120 cursor-pointer hover:bg-[#04B1FE]">
            <img src={darrowleft} alt="" />
          </button>
        </div>
        <div className="absolute right-0 bottom-0">
          <button ref={nextRef} className="bg-[#001842] rounded-full transition-all duration-300 hover:scale-120 cursor-pointer hover:bg-[#04B1FE]">
            <img src={darrowright} alt="" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        speed={600}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <img src={item.img} alt="house" className="w-full" />
              <div className="relative">
                <p className="bg-[#04B1FE] text-center absolute bottom-3 left-5 xl:py-1.5 md:py-2.5 md:px-16.5 lg:py-0.5 lg:px-1.5 xl:px-7.5 max-sm:py-2.5 max-sm:px-16.5 mx-auto text-white">
                  Purchase For {item.price}
                </p>
              </div>
              <p className="text-[#001842] xl:text-2xl lg:text-[20px] md:text-[24px] max-sm:text-[24px] w-full text-center font-bold mt-2">
                {item.boost}
              </p>
              <p className="text-[#000000] w-full text-center mt-2">
                Down Payment Boost Provided
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;

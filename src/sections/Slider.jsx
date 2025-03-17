import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Pagination, Autoplay } from 'swiper/modules'

export const Slider = () => {
  return (
    <section className='bg-blue-950 h-screen overflow-hidden'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className='mySwiper h-full'
      >
        <SwiperSlide>
          <img
            src='/slider_1_1.jpg'
            className='w-full h-full object-cover object-center'
            alt='Slider 1'
          />
        </SwiperSlide>
        <SwiperSlide className='object-cover'>
          <img src='/slider_2_1.jpg' alt='Slider 2' />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

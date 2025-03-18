import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Pagination, Autoplay } from 'swiper/modules'
import { Header } from './Header'
import { useEffect } from 'react'

const preloadImages = imageUrls => {
  imageUrls.forEach(url => {
    const img = new Image()
    img.src = url
  })
}

export const Slider = () => {
  useEffect(() => {
    preloadImages(['/slider_1.webp', '/slider_2.webp'])
  }, [])

  return (
    <section className='relative bg-blue-950 h-screen overflow-hidden'>
      <Header />
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={800}
        loop={true}
        modules={[Pagination]}
        className='mySwiper h-full'
      >
        <SwiperSlide>
          <SwiperSlide>
            <img
              src='/slider_2.webp'
              className='w-full h-full object-cover object-center transition-opacity duration-500'
              alt='Imagen del perfume GLACIER 2'
              loading='eager'
            />
          </SwiperSlide>
          <img
            src='/slider_1.webp'
            className='w-full h-full object-cover object-center transition-opacity duration-500'
            alt='Imagen del perfume GLACIER'
            loading='eager'
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

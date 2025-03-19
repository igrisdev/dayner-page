import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Pagination, Autoplay } from 'swiper/modules'
import { Header } from './Header'
import { useEffect } from 'react'
import { ChevronsDown } from 'lucide-react'

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
    <section className='relative bg-slate-950 h-screen overflow-hidden'>
      <Header />
      <Swiper
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={800}
        loop={true}
        modules={[Pagination, Autoplay]}
        className='mySwiper h-full'
      >
        <SwiperSlide>
          <img
            src='/slider_1.webp'
            className='w-full h-full object-cover object-center transition-opacity duration-500'
            alt='Imagen del perfume GLACIER'
            loading='eager'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='/slider_2.webp'
            className='w-full h-full object-cover object-center transition-opacity duration-500'
            alt='Imagen del perfume GLACIER 2'
            loading='eager'
          />
        </SwiperSlide>
      </Swiper>

      <div className='absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex  justify-center gap-2 text-white/30 animate-bounce'>
        <ChevronsDown size={42} />
      </div>
    </section>
  )
}

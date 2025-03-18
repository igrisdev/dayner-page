import { ButtonBuy } from '../components/ButtonBuy'

export const MainImage = () => {
  return (
    <section
      style={{
        backgroundImage: 'url(/main_image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='aspect-video overflow-hidden flex flex-col items-center justify-center gap-6'
    >
      <div className='text-center max-w-5xl flex flex-col gap-2'>
        <span className='text-white/80 text-xl'>Lorem Ipsum</span>
        <h2 className='lg:text-6xl md:text-4xl text-2xl text-white  font-semibold'>
          Lorem ipsum dolor sit amet
        </h2>
      </div>

      <ButtonBuy />
    </section>
  )
}

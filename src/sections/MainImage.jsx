import { ButtonBuy } from '../components/ButtonBuy'

export const MainImage = () => {
  return (
    <section
      style={{
        backgroundImage: 'url(/main_image.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className='aspect-video overflow-hidden flex flex-col items-center justify-center gap-6 bg-slate-950'
    >
      <div className='text-center max-w-5xl flex flex-col gap-2'>
        <span className='text-white/80 text-xl font-medium'>
          SCENT Presenta
        </span>
        <h2 className='lg:text-5xl md:text-4xl text-2xl text-white  font-semibold'>
          GLACIER - El poder del hielo en tu piel
        </h2>
      </div>

      <ButtonBuy />
    </section>
  )
}

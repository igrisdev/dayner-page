import { ButtonBuy } from '../components/ButtonBuy'

export const Bento = () => {
  return (
    <section className='py-20 bg-slate-950'>
      <div className='max-w-7xl mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 px-4'>
        <div
          style={{
            backgroundImage: 'url(/bento_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='rounded-md aspect-square md:aspect-auto md:h-auto'
        ></div>

        <div
          style={{
            backgroundImage: 'url(/bento_2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='bg-blue-950 grid place-items-center rounded-md aspect-square md:aspect-auto md:h-auto'
        >
          <div className='text-center'>
            <div className='transform md:-translate-x-22'>
              <h2 className='xl:text-8xl lg:text-6xl md:text-5xl text-6xl font-black text-white uppercase'>
                scent
              </h2>
              <span className='text-amber-400 font-semibold text-2xl uppercase'>
                premium
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: 'url(/bento_3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='md:col-span-2 grid md:grid-cols-2 rounded-md aspect-square md:aspect-auto'
        >
          <div className='hidden md:block'></div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center flex flex-col gap-2'>
              <h2 className='text-white text-xl font-semibold uppercase'>
                Perfección destilada
              </h2>
              <p className='text-white/80 text-left text-pretty max-w-md px-4'>
                GLACIER ha sido creado para el hombre que busca destacar. Sus
                notas frescas y duraderas mantienen su intensidad durante todo
                el día, mientras que su elegante diseño refleja la pureza del
                hielo ártico. Una fragancia que se convierte en tu firma
                personal.
              </p>
            </div>

            <ButtonBuy />
          </div>
        </div>
      </div>
    </section>
  )
}

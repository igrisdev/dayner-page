import { ButtonBuy } from '../components/ButtonBuy'

export const Info = () => {
  return (
    <section className='bg-blue-950'>
      <div className='container mx-auto flex flex-col items-center justify-center sm:h-[35vh] gap-6 py-6 md:py-0'>
        <div className='flex flex-col items-center gap-4 text-center max-w-5xl px-4 md:px-0'>
          <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold text-white uppercase text-pretty'>
            Frescura glacial que define tu esencia
          </h2>

          <p className='text-white/80 text-pretty'>
            GLACIER captura la intensidad de las montañas heladas en un aroma
            único y duradero. Notas cítricas y amaderadas se combinan con un
            toque de menta para crear una experiencia sensorial que evoca fuerza
            y determinación. Un perfume que te acompaña desde la oficina hasta
            la noche, marcando tu presencia con una estela inconfundible.
          </p>
        </div>

        <ButtonBuy />
      </div>
    </section>
  )
}

import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='bg-slate-950 py-10 text-white'>
      <section className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 mb-10 gap-4'>
          <div>
            <h2 className='text-2xl font-semibold mb-2'>Sobre Nosotros</h2>
            <p className='text-white/80 mt-2'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo,
              sapiente? Quidem asperiores error temporibus saepe, ipsum
              quibusdam iste nemo quam eos vero qui et sequi ab vel deleniti
              atque voluptatum.
            </p>
          </div>

          <div className='grid gap-3'>
            <div>
              <h2 className='text-2xl font-semibold'>Suscribirte</h2>
              <p className='text-white/80 mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <input
              type='email'
              placeholder='ejemplo@ejemplo.com'
              className='w-full rounded-md border-2 border-white/80 p-2'
            />

            <div className='flex gap-6'>
              <a href='/'>
                <Instagram size={42} />
              </a>
              <a href='/'>
                <Twitter size={42} />
              </a>
            </div>
          </div>
        </div>

        <div className='grid place-items-center'>
          <a href='/' className='uppercase text-4xl font-black'>
            scent
          </a>
        </div>
      </section>
    </footer>
  )
}

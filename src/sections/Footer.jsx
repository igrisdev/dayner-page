import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Logo } from '../components/Logo'

export const Footer = () => {
  return (
    <footer className='bg-black py-10 text-white px-4'>
      <section className='max-w-7xl mx-auto'>
        <div className='grid md:grid-cols-2 mb-10 gap-4'>
          <div>
            <h2 className='text-2xl font-semibold mb-2'>Sobre Nosotros</h2>
            <p className='text-white/80 mt-2 text-pretty'>
              SCENT es una marca premium dedicada a crear fragancias únicas que
              reflejan la personalidad de quienes las usan. Nos especializamos
              en perfumes de alta calidad con ingredientes seleccionados que
              garantizan una experiencia sensorial extraordinaria. GLACIER
              representa nuestra visión de elegancia y frescura en su máxima
              expresión.
            </p>
          </div>

          <div className='grid gap-3'>
            <div>
              <h2 className='text-2xl font-semibold'>Suscribirte</h2>
              <p className='text-white/80 mt-2 text-pretty'>
                Recibe ofertas exclusivas, información sobre nuevos lanzamientos
                y consejos sobre fragancias.
              </p>
            </div>

            <input
              type='email'
              placeholder='ejemplo@ejemplo.com'
              className='w-full rounded-md border-2 border-white/80 p-2'
            />

            <div className='flex gap-6'>
              <a href='/' className='hover:text-blue-400 transition-colors'>
                <Instagram size={42} />
              </a>
              <a href='/' className='hover:text-blue-400 transition-colors'>
                <Twitter size={42} />
              </a>
            </div>
          </div>
        </div>

        <div className='grid place-items-center'>
          <a
            href='/'
            className='uppercase text-4xl font-black flex items-center justify-center gap-2'
          >
            <Logo />
            scent
          </a>
        </div>
      </section>
    </footer>
  )
}

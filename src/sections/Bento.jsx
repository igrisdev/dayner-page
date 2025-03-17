import { ButtonBuy } from '../components/ButtonBuy'

export const Bento = () => {
  return (
    <section className='py-20 bg-blue-950'>
      <div className='max-w-7xl mx-auto h-screen grid grid-cols-2 gap-10'>
        <div
          style={{
            backgroundImage: 'url(/slider_2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='rounded-md'
        ></div>
        <div
          style={{
            backgroundImage: 'url(/slider_1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className='bg-blue-950 grid place-items-center rounded-md'
        >
          <div className='text-center'>
            <div className='transform -translate-x-22'>
              <h2 className='text-8xl font-black text-white uppercase'>
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
          className='col-span-2 grid grid-cols-2 rounded-md'
        >
          <div></div>
          <div className='flex flex-col items-center justify-center gap-6'>
            <div className='text-center flex flex-col gap-2'>
              <h2 className='text-white text-xl font-semibold'>Lorem Ipsum</h2>
              <p className='text-white/80  max-w-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                officiis sapiente eos expedita nulla cumque! Nihil consequuntur
                explicabo saepe pariatur hic minima.
              </p>
            </div>

            <ButtonBuy />
          </div>
        </div>
      </div>
    </section>
  )
}

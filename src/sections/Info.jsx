import { ButtonBuy } from '../components/ButtonBuy'

export const Info = () => {
  return (
    <section className='bg-blue-950'>
      <div className='container mx-auto flex flex-col items-center justify-center sm:h-[35vh] gap-6 py-6 md:py-0'>
        <div className='flex flex-col items-center gap-4 text-center max-w-5xl px-4 md:px-0'>
          <h2 className='lg:text-3xl md:text-2xl text-xl font-semibold text-white'>
            A subtitle lorem ipsum dolor sit amet, consectetur adipisicing
          </h2>

          <p className='text-white/80'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <ButtonBuy />
      </div>
    </section>
  )
}

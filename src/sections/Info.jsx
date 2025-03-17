import { ButtonBuy } from '../components/ButtonBuy'

export const Info = () => {
  return (
    <section className='bg-blue-950'>
      <div className='container mx-auto flex flex-col items-center justify-center h-[35vh] gap-6'>
        <div className='flex flex-col items-center gap-4 text-center max-w-5xl'>
          <h2 className='text-3xl font-semibold text-white'>
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

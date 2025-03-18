export const Header = () => {
  return (
    <div className='absolute z-50 top-4 left-4'>
      <div className='grid place-items-center'>
        <a
          href='/'
          className='uppercase text-4xl font-black text-white flex items-center justify-center gap-2'
        >
          <img
            src='/logo_2.svg'
            alt='Logo Scent'
            className='w-10 h-10 md:w-12 md:h-12'
          />
          scent
        </a>
      </div>
    </div>
  )
}

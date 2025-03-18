import { Logo } from '../components/Logo'

export const Header = () => {
  return (
    <div className='absolute z-50 top-4 left-4'>
      <div className='grid place-items-center'>
        <a
          href='/'
          className='uppercase text-4xl font-black text-white flex items-center justify-center gap-2'
        >
          <Logo />
          scent
        </a>
      </div>
    </div>
  )
}

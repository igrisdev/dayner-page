import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Info } from './sections/Info'
import { MainImage } from './sections/MainImage'
import { Bento } from './sections/Bento'
import { Slider } from './sections/Slider'
import { Footer } from './sections/Footer'

function App() {
  return (
    <>
      <Slider />
      {/* <Hero /> */}
      <Info />
      <MainImage />
      <Bento />
      <Footer />
    </>
  )
}

export default App

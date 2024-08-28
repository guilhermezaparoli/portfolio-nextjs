// import Clouds from '@/components/Clouds'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import RainCanvas from '@/components/RainCanvas'
import Skills from '@/components/Skills'
import SwitchTheme from '@/components/SwitchTheme'

const Page = () => {
  return (
    <>
      {/* <Clouds /> */}
      <SwitchTheme />
      <RainCanvas />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Page

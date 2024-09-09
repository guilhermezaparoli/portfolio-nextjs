// import Clouds from "@/components/Clouds"
import { Birds } from '@/components/Birds'
import Clouds from '@/components/Clouds'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import RainCanvas from '@/components/RainCanvas'
import Skills from '@/components/Skills'

const Page = () => {
  return (
    <>
      <Clouds />
      <Birds />
      <RainCanvas />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default Page

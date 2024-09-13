// import Clouds from "@/components/Clouds"
import { Birds } from '@/components/Birds'
import Clouds from '@/components/Clouds'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import RainCanvas from '@/components/RainCanvas'
import Skills from '@/components/Skills'
import { useTranslations } from "next-intl"

const Page = () => {
  const t = useTranslations("Index")
  console.log(t("title"))
  return (
    <>
      <Clouds />
      <Birds />
      <RainCanvas />
      <Hero />
    <h1>{t("title")}</h1>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Page

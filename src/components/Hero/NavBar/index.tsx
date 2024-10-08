import { useTranslations } from 'next-intl'
import { HamburgerMenu } from './HamburgerMenu'
import { ScrollProgressBar } from './ScrollProgressBar'
import { motion } from 'framer-motion'

import Link from 'next/link'

const NavBar = () => {
  const t = useTranslations('Header')
  const links = [
    {
      url: '#inicio',
      title: t('Menu.home'),
    },
    // {
    //   url: '#sobre',
    //   title: t('Menu.about'),
    // },
    {
      url: '#habilidades',
      title: t('Menu.skills'),
    },
    {
      url: '#projetos',
      title: t('Menu.projects'),
    },
    {
      url: '#contato',
      title: t('Menu.contact'),
    },
  ]

  return (
    <motion.div
      initial={{ x: '-1100px' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 z-20 w-full bg-sunnyDayMenu px-6 py-5 dark:bg-nightDayMenu md:px-36 md:py-8"
    >
      <div className="min-w-screen flex justify-between">
        <ScrollProgressBar />
        <div className="hidden gap-4 md:flex">
          {links.map((link) => (
            <Link
              className="font-poppins text-xl font-bold text-title transition-colors delay-75 hover:brightness-50 dark:text-simpleDark dark:hover:brightness-[0.85]"
              key={link.url}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <Link href="#inicio">
            <div className="flex">
              <h1 className="-translate-y-1 font-poppins text-2xl font-semibold text-title dark:text-simpleDark">
                G
              </h1>
              <h1 className="translate-y-1 font-poppins text-2xl font-semibold text-title dark:text-simpleDark">
                Z
              </h1>
            </div>
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </motion.div>
  )
}

export default NavBar

import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        title: 'rgb(28 77 93)',
        simple: '#25667b',
        darkTitle: '#2222',
        simpleDark: 'rgb(249 249 251)',
        descriptionProject: '#666',
        dark: '#141414',
        overlay: 'rgba(0,0,0,.8)',
        hoverIconsLight: 'rgb(21, 75, 94)',
        hoverIconsDark: 'rgb(21, 75, 94)',
        sunnyDay: '#3FC5F0',
      },
      backgroundColor: {
        sunnyDay: '#3FC5F0',
        nightDay: '#000000',
      },

      fontFamily: {
        DM_Sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        itensMenu: ['JetBrains Mono', 'sans-serif'],
      },
      backgroundImage: {
        switchDay: 'linear-gradient(90deg, #fea431, #ffff00)',
        switchNight: 'linear-gradient(90deg, #141414, #9ca3b0)',

        sunnyDayMenu:
          'linear-gradient(180deg, rgba(63, 197, 240, 1) 0%, rgba(0,212,255,0) 100%);',
        nightDayMenu:
          'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0,212,255,0) 100%);',
      },
      gridTemplateColumns: {
        icons: 'repeat(auto-fit, 50px)',
        skills: 'repeat(auto-fit, minmax(250px, 1fr))',
        projects: 'repeat(auto-fit, minmax(400px, 1fr))'
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        title: '#003d6a',
        descriptionProject: '#666',
        dark: '#141414',
        overlay: 'rgba(0,0,0,.8)',
      },
      fontFamily: {
        DM_Sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        itensMenu: ['JetBrains Mono', 'sans-serif'],
      },
      backgroundImage: {
        switchDay: 'linear-gradient(90deg, #fea431, #ffff00)',
        nightDay: 'linear-gradient(90deg, #141414, #9ca3b0)',
        nightDayMenu:
          'linear-gradient(180deg, rgba(0,180,255,1) 0%, rgba(0,212,255,0) 100%);',
      },
      gridTemplateColumns: {
        icons: 'repeat(auto-fit, 50px)',
      },
    },
  },
  plugins: [],
}
export default config

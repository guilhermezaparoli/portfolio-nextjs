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
      },
      fontFamily: {
        DM_Sans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins'],
      },
      backgroundImage: {
        switchDay: 'linear-gradient(90deg, #fea431, #ffff00)',
        nightDay: 'linear-gradient(90deg, #141414, #9ca3b0)',
      },
    },
  },
  plugins: [],
}
export default config

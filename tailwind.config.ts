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
      },
      keyframes: {
        expand: {
          '0%': {
            transform: 'scale(0)',
            borderRadius: '50%',
            opacity: '0.8',
          },
          '100%': {
            transform: 'scale(100)',
            borderRadius: '0',
            opacity: '1',
          },
        },
      },
      animation: {
        'animate-expand': 'expand 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config

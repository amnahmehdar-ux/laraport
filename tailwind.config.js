/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        body: ['Inter', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          2: '#141414',
          3: '#1c1c1c',
          4: '#262626',
        },
        bone: '#f5f1ea',
        lime: '#c8f96b',
        coral: '#ff6b5b',
        mist: '#8a8a8a',
      },
    },
  },
  plugins: [],
};

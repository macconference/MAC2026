/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'marquee-track': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'marquee-track': 'marquee-track 20s linear infinite',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1020px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        '.animate-paused': {
          'animation-play-state': 'paused',
        },
        '.animate-running': {
          'animation-play-state': 'running',
        },
      });
    },
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: false,
  },
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        // Slowed down for better visibility of larger colorful logos
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'testimonial-marquee': 'testimonial-marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'testimonial-marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      colors: {
        primary: {
          DEFAULT: '#f26d1e',
          light: '#f76c14',
          dark: '#c1713d',
        },
        secondary: {
          DEFAULT: '#ffde9c',
          light: '#edb745',
          dark: '#7d552b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      lineHeight: {
        'relaxed-custom': '1.5',
        'heading': '1.2',
      },
    },
  },
  plugins: [
    // This plugin allows us to use 'group-hover:pause' or 'hover:pause'
    function ({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
      })
    },
  ],
};

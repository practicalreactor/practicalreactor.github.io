/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%': {
              'background-size': '200% 200%',
              'background-position': '0% 0%'
            },
            '25%': {
              'background-size': '200% 200%',
              'background-position': '100% 0%'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': '100% 100%'
            },
            '75%': {
              'background-size': '200% 200%',
              'background-position': '0% 100%'
            },
            '100%': {
              'background-size': '200% 200%',
              'background-position': '0% 0%'
            }
          },
          'float': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' }
          }
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Include all HTML and TypeScript files
  ],
  theme: {
    animation: {
      'gradient-x': 'gradient-x 5s ease infinite',
    },
    keyframes: {
      'gradient-x': {
        '0%, 100%': { 'background-position': '0% 50%' },
        '50%': { 'background-position': '100% 50%' },
      },
    },  
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'pink': '#f472b6',
      'branco': '#fff',
      'red': '#dc2626',
      'pink2': '#9d174d',
      'pink3': '#fbcfe8',
      'roxo': '#86198f',
      pink: colors.pink,
    }
  },
  plugins: [],
}

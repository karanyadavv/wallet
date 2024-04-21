/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/colors'; // With this line


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'tremor-border': {
          DEFAULT: "#111827", 
        },
                'tremor-content': {
          DEFAULT: "#ffffff", 
        },
      }
  },
  plugins: [],
  }
}
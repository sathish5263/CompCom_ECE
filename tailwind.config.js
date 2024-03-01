/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

// const plugin = require("tailwindcss/plugin")

// const Myclass = plugin(function ({ addUtilities }) {
//   addUtilities({
//     ".my-rotate-y-180": {
//        transform: "rotateY(180deg)"
//     }
//   })
// })

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   xs: "540px",
    //   ...defaultTheme.screens,
    // },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        display: ["var(--font-dmsans)"]
      },
      colors: {
        'red': {
          950: '#140000'
        }
      },
      animation: {
        blob: "blob 7s infinite",
         animate: 'animate 6s linear infinite'
      },
      keyframes: {
       blob: {
         "0%": {
           transform: " translate(0px, 0px) scale(1.1)",
         },
         "33%": {
          transform: " translate(30px, -50px) scale(1.5)",
        },
        "66%": {
          transform: " translate(-20px, 20px) scale(1.3)",
        },
        "100%": {
          transform: " translate(0px, 0px) scale(1.1)",
        },
       },
       animate: {
          '0%, 10%, 100%':{
              width: '0%'
          },
          '70%, 80%, 90%':{
            width: '100%'
          }
       }
      },     
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
}


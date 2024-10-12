module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {
      spacing:{
        '5px':'5px'
      }
     },
   },
   plugins: [require("daisyui")],

 }
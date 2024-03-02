/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('Flower Asset/Rectangle 9.png')",
      
    }},
  },
  plugins: [require("daisyui")],
}
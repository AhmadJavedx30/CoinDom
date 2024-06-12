/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/*.html"],
  theme: {
    extend: {},
    backgroundImage: {
      'custom-gradient': 'linear-gradient(0deg, #0f051d 30%, #130749 70%)',
      'custom-background': 'linear-gradient(25deg, #2600fc, #ff00ea)',
      'custom-image': "url('../src/images/footer-bg.e33c036e05f949cf81cb.png')",
    },
    backgroundPosition: {
      'center-center': '50% 50%',
    },
  },
  plugins: [],
}
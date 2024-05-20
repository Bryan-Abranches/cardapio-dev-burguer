/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ] /* configura quais arquivos vão poder utilizar o tauilwind no nosso projeto, tanto na pasta raiz ou em outra pasta */,

  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      /* extend serve para resposividade da aplicação */
      backgroundImage: {
        home: "url('/assets/bg.png')" /* caminho onde esta o meu bg */,
      },
    },
  },
  plugins: [],
};

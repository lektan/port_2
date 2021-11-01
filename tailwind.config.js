// tailwind.config.js
const Nth = require("tailwind-nth-child");
const nth3n = new Nth("3n", "3n+0"); // Sub-elements that are multiples of 3
const nth2n = new Nth("2n", "2n+0"); // Sub-elements that are multiples of 2  === new  Nth('even','even')
const nth5 = new Nth("5", "-n+5"); // The first five child elements
const nth4 = new Nth("4", "-n+4"); // The first four child elements

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lime: ["Limelight", "cursive"],
      },
    },
  },
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      fontSize: ["hover", "focus"],
      alignSelf: ["nth-child-2n", "nth-child-3n", "nth-child-4", "nth-child-5"],
    },
  },
  plugins: [
    nth2n.nthChild(),
    nth3n.nthChild(),
    nth4.nthChild(),
    nth5.nthChild(),
  ],
};

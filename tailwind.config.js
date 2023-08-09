/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "white-gold": "#e2ded9",
        "brown-gold": "#9d8d7d",
        "dark-gold": "#8c7a66",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
        gold: "#FCCB06",
        "blue-dark": "#222E50",
        "blue-base": "#3776A1",
        "green-darkest": "#17252A",
        "green-darker": "#05386B",
        "green-dark": "#379683",
        "green-base": "#5CDB95",
        "green-light": "#9CC9FF",
        "green-lighter": "#CCE3FF",
        "green-lightest": "#EDF7F6",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
        case: "url('./assets/case.png')",
        switch: "url('./assets/switch-image.png')",
        keycaps: "url('./assets/keycap-icon.png')",
        mousepad: "url('./assets/mousepad-image.png')",
      },
    },
  },
  plugins: [],
};

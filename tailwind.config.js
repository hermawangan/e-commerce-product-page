module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          Orange: "hsl(26, 100%, 55%)",
          PaleOrange: "hsl(25, 100%, 94%)",
        },

        Neutral: {
          VeryVarkBlue: "hsl(220, 13%, 13%)",
          DarkGrayishBlue: "hsl(219, 9%, 45%)",
          GrayishBlue: "hsl(220, 14%, 75%)",
          LightGrayishBlue: "hsl(223, 64%, 98%)",
          White: "hsl(0, 0%, 100%)",
          Black: "hsl(0, 0%, 0%)",
        },
      },
    },

    fontFamily: {
      Kumbh: ["Kumbh Sans", "sans-serif"],
    },
  },
  plugins: [],
};

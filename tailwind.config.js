module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      print: { raw: "print" },
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "green-primary": "#DCEEEA",
        "green-secondary": "#49823D",
        "green-tertiary": "#A3C09D",
        "green-active": "#93C6A8",
        "green-menu": "rgba(73, 130, 61, 0.1)",
      },
      opacity: {
        12: "0.12",
        38: "0.38",
        87: "0.87",
      },
      rotate: {
        "-270": "270deg",
        15: "15deg",
        30: "30deg",
        60: "60deg",
        270: "270deg",
      },
      scale: {
        "-1": "-1",
      },
      zIndex: {
        "-1": -1,
        49: 49,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        99: 99,
        999: 999,
        9999: 9999,
        99999: 99999,
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        50: "12.5rem",
        90: "22.5rem",
      },
      /**
       * Extended spacing values for width and height utilities.
       * This way, we won't be adding these to other utilities
       * that use 'spacing' config to keep the file size
       * smaller by not generating useless utilities such as
       * p-1/4 or m-480.
       */
      extendedSpacing: {
        // Fractional values
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "16/17": "94%",

        // Bigger values
        100: "25rem",
        120: "30rem",
        128: "32rem",
        140: "35rem",
        150: "36rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
        200: "50rem",
        240: "60rem",
        256: "64rem",
        280: "70rem",
        320: "80rem",
        360: "90rem",
        400: "100rem",
        480: "120rem",
      },
      padding: (theme) => ({
        ...theme("extendedSpacing"),
      }),
      height: (theme) => ({
        ...theme("extendedSpacing"),
      }),
      minHeight: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
      }),
      maxHeight: (theme) => ({
        ...theme("extendedSpacing"),
        none: "none",
      }),
      width: (theme) => ({
        ...theme("extendedSpacing"),
      }),
      minWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
        screen: "100vw",
      }),
      maxWidth: (theme) => ({
        ...theme("spacing"),
        ...theme("extendedSpacing"),
        screen: "100vw",
      }),
    },
  },
  plugins: [],
};

const theme = {
  fontSizes: {
    xsmall: "1.4rem",
    small: "1.6rem",
    text: "1.8rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4.4rem",
    xxlarge: "6rem",
  },
  colors: {
    text: "#6A6A6A",
    light: "#919191",
    dark: "#414141",
    darker: "#393939",
    background: "#F5F5F5",
    white: "#FFFFFF",
  },
  spacing: {
    xsmall: "0.8rem",
    small: "1.2rem",
    medium: "1.8rem",
    large: "2.4rem",
    xlarge: "4rem",
    xxlarge: "6rem",
  },
  fontFamily: {
    primary: "'Montserrat', sans-serif;",
    text: "'Poppins', sans-serif;",
  },
  fontWeight: {
    bold: 700,
    semibold: 600,
    normal: 400,
  },
  mixins: {
    flexCentered: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    pagePaddings: `padding: 0 10rem;`,
  },
};

export { theme };

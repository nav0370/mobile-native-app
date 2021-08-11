const theme = {
  colors: {
    primary: "#FC8019",
    secondary: "#0C0D34",
    danger: "#eb090d",
    text: "rgba(12,13,52,0.7)",
    white: "#fff",
    black: "#000",
    grey: "rgba(12,13,52,0.05)",
    lightGrey: "#e6e6e6",
    violet: "#30336B",
    orange: "#F4C724",
    skyBlue: "#01CBC6",
    blue: "#0993e8",
    pink: "#E74292",
    primaryLight: "#E7F9F7",
    green: "#3ab43e",
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 60,
    xxxl: 80,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 20,
      color: "text",
    },
    button: {
      fontSize: 15,
      color: "text",
    },
    breakpoints: {},
  },
  font: {
    fontBold: "Poppins-Bold",
    fontSemiBold: "Poppins-SemiBold",
    fontRegular: "Poppins-Regular",
    fontMedium: "Poppins-Medium",
    fontLight: "Poppins-Light",
  },
};

export default theme;

export const fontConfig = {
  web: {
    regular: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "400",
    },
    medium: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "500",
    },
    light: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "300",
    },
    thin: {
      fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: "100",
    },
  },
  ios: {
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "400",
    },
    medium: {
      fontFamily: "Poppins-Medium",
      fontWeight: "500",
    },
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "300",
    },
    thin: {
      fontFamily: "Poppins-Light",
      fontWeight: "100",
    },
  },
  default: {
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins-Medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Poppins-Light",
      fontWeight: "normal",
    },
  },
};

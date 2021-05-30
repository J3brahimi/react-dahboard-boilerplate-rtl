import { createMuiTheme } from "@material-ui/core";

export const drawerWidth = 260;

const theme = createMuiTheme({
  // rtl
  direction: "rtl",
  // for rewrite material-ui theme
  palette: {
    primary: {
      main: "#4EAFF4",
      //The following values will be calculated to contrast with palette.primary.main
      // light: DARK_BLUE_LIGHT,
      // dark: DARK_BLUE_DARK,
      // contrastText: "#fff",
    },
    secondary: {
      main: "#4EAFF4",
    },
  },
  // for override default class of material-ui component
  overrides: {
    // example 👇 :
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          padding: 0,
          margin: 0,
          fontFamily:
            "'Raleway', -apple-system, BlinkMacSystemFont, Roboto, Oxygen Ubuntu, Droid Sans, sans-serif",
          fontFeatureSettings: "'lnum' 1",
          color: "#0B1D1E",
          backgroundColor: "#FFF",
          "& *": {
            boxSizing: "border-box",
            "&:before, &:after": {
              boxSizing: "inherit",
            },
          },
        },
        a: {
          color: "#1A3557",
          textDecoration: "none",
          // "&:hover, &:focus, &:active": {
          //   textDecoration: "underline",
          // },
        },
        ul: {
          listStyle: "none",
          padding: 0,
          margin: 0,
        },
        button: {
          // fontFamily:
          //   "'Raleway', -apple-system, BlinkMacSystemFont, Roboto, Oxygen Ubuntu, Droid Sans, sans-serif",
          border: "none",
          fontSize: "100%",
          textAlign: "center",
          outline: "none",
          "&:focus": {
            outline: "none",
          },
        },
      },
    },
  },
  // for change default props style
  props: {
    // example 👇 :
    // MuiButton: { // `MuiButton` is the global class name for the <Button /> component
    //
    //   disableElevation: true, // this prop disables the drop shadow on all Buttons
    //
    // },
  },
  // ##############################
  // // // Variables
  // #############################
  color: {
    white: "#FFF",
    reject: "#E74C3C",
    accept: "#27AE60",
    vividBlue: "#1458ea",
    LightenGrayishBlue: "#f5f6f8",
    LightGrayishBlue: "#c0ccda",
    darkGrayishBlue: "#8492a6",
  },
  font: {
    s20w900: { fontSize: 20, fontWeight: 900 },
    s20w700: { fontSize: 20, fontWeight: 700 },
    s18w800: { fontSize: 18, fontWeight: 800 },
    s18w700: { fontSize: 18, fontWeight: 700 },
    s16w700: { fontSize: 16, fontWeight: 700 },
    s16w600: { fontSize: 16, fontWeight: 600 },
    s14w600: { fontSize: 14, fontWeight: 600 },
    s12w600: { fontSize: 12, fontWeight: 600 },
  },
  transition: {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
  },
  transitionLinkActive: {
    transition: "all 300ms linear",
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  boxShadow: {
    boxShadow:
      "0 10px 30px -12px rgb(0 0 0 / 42%), 0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)",
  },
});

export default theme;

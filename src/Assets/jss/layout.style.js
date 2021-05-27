import { drawerWidth } from "Utils/theme";

const layoutStyle = theme => ({
  main_wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
    backgroundColor: theme.color.LightenGrayishBlue,
  },
  main_panel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
    ...theme.transition,
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container: {
    ...theme.container,
  },
});

export default layoutStyle;

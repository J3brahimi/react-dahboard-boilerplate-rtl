import { drawerWidth } from "Utils/theme";

const sidebarStyle = theme => ({
  drawerPaper: {
    width: drawerWidth,
    border: "none",
    // position: "fixed",
    // top: "0",
    // bottom: "0",
    // left: "0",
    // zIndex: "1",
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%",
      boxShadow: "none",
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      position: "fixed",
      // display: "block",
      // top: "0",
      // right: "0",
      // left: "auto",
      height: "100vh",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...theme.transition,
    },
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh - 75px)",
    overflow: "auto",
    width: "260px",
    zIndex: "4",
    overflowScrolling: "touch",
  },
  list: {
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset",
  },
  itemLink: {
    display: "flex",
    alignItems: "center",
    width: "auto",
    position: "relative",
    margin: "5px 0",
    padding: "5px 15px",
    backgroundColor: "transparent",
    borderLeft: `4px solid transparent`,
    ...theme.transitionLinkActive,
    "& svg": {
      width: 17,
      height: 17,
      lineHeight: "30px",
      marginRight: "15px",
      verticalAlign: "middle",
      "& path": {
        ...theme.transitionLinkActive,
        fill: theme.color.darkGrayishBlue,
      },
    },
  },
  itemLinkActive: {
    borderLeft: `4px solid ${theme.color.vividBlue}`,
    "& svg": {
      "& path": {
        fill: theme.color.vividBlue,
      },
    },
  },
  itemText: {
    ...theme.font.s16w700,
    margin: 0,
    lineHeight: "31px",
    color: theme.color.darkGrayishBlue,
    ...theme.transitionLinkActive,
  },
  itemTextActive: {
    color: theme.color.vividBlue,
  },
});

export default sidebarStyle;

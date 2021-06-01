const menuItemStyle = theme => ({
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
    padding: 0,
    backgroundColor: "transparent",
    borderLeft: `4px solid transparent`,
    ...theme.transitionLinkActive,
    "& a": {
      padding: "10px 15px",
    },
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
  item: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  itemText: {
    ...theme.font.s16w700,
    margin: 0,
    // lineHeight: "31px",
    color: theme.color.darkGrayishBlue,
    ...theme.transitionLinkActive,
  },
  itemLinkActive: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    "& svg": {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },
    "& $itemText": {
      color: theme.palette.primary.main,
    },
  },
});

export default menuItemStyle;

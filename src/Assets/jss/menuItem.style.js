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
  item: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
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

export default menuItemStyle;

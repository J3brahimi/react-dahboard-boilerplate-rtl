import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root_navigation: {
    "& .MuiList-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 0,
    },
    "& .activeLink": {
      color: theme.palette.primary.main,
      "&::after": {
        content: "''",
        position: "absolute",
        bottom: 0,
        height: 4,
        width: "100%",
        left: 0,
        right: 0,
        borderRadius: "50px 50px 0px 0px",
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  itemLink: {
    fontWeight: 600,
    fontSize: 14,
    "& svg": {
      marginRight: 5.5,
    },
  },
}));

function NavigationBar({ routes }) {
  const classes = useStyles();
  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1;
  };
  return (
    <div
      className={`${classes.root_navigation} d-flex align-items-center justify-content-center`}
    >
      <List className={classes.list}>
        {routes.map(({ layout, path, name, icon: Icon }, key) => {
          let isActive = activeRoute(layout + path);
          return (
            <NavLink to={layout + path} activeClassName="active" key={key}>
              <ListItem
                button
                className={`${classes.itemLink} ${
                  isActive ? "activeLink" : ""
                }`}
              >
                <Icon /> {name}
              </ListItem>
            </NavLink>
          );
        })}
      </List>
    </div>
  );
}

export default NavigationBar;

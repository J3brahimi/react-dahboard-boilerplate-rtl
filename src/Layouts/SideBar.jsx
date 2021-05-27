//Material
import { Hidden, List, Drawer, makeStyles } from "@material-ui/core";
//Styles
import sidebarStyle from "Assets/jss/sidebar.style";
// helper function
import MenuItem from "./MenuItem";

const useStyles = makeStyles(sidebarStyle);

export default function SideBar(props) {
  const classes = useStyles();

  const links = (
    <List className={classes.list}>
      {props.routes.map((item, index) => (
        <MenuItem
          {...item}
          key={index}
          handleDrawerToggle={props.handleDrawerToggle}
        />
      ))}
    </List>
  );

  return (
    <div>
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={props.open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          anchor={"left"}
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.sidebarWrapper}>{links}</div>
        </Drawer>
      </Hidden>
    </div>
  );
}

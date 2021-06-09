import { useState, cloneElement } from "react";
//Components
import SideBar from "./SideBar";
import Navbar from "./Navbar";
//Styles
import { makeStyles } from "@material-ui/core";
import layoutStyle from "Assets/jss/layout.style";
import adminRoutes from "Routes/adminRoutes";

const useStyles = makeStyles(layoutStyle);

export default function Layout({ children }) {
  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className={classes.main_wrapper}>
      {/*________sidebar________*/}
      <SideBar
        routes={adminRoutes}
        handleDrawerToggle={handleDrawerToggle}
        open={toggleDrawer}
      />
      {/*________end sidebar________*/}
      <div className={classes.main_panel}>
        {/*________navbar________*/}
        <Navbar routes={adminRoutes} handleDrawerToggle={handleDrawerToggle} />
        {/*________end navbar________*/}
        <div className={classes.content}>
          <div className={classes.container}>
            {cloneElement(children, { routes: adminRoutes })}
          </div>
        </div>
      </div>
    </div>
  );
}

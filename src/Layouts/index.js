import { useState, Suspense } from "react";
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "Routes/RouteWithSubRoutes";
//Components
import SideBar from "./SideBar";
import Navbar from "./Navbar";
//Styles
import { makeStyles } from "@material-ui/core";
import layoutStyle from "Assets/jss/layout.style";

const useStyles = makeStyles(layoutStyle);

export default function Layout({ routes, dashboard }) {
  const classes = useStyles();

  const [toggleDrawer, setToggleDrawer] = useState(false);
  const handleDrawerToggle = () => {
    setToggleDrawer(!toggleDrawer);
  };

  return (
    <div className={classes.main_wrapper}>
      {/*________sidebar________*/}
      <SideBar
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={toggleDrawer}
        dashboard={dashboard}
      />
      {/*________end sidebar________*/}
      <div className={classes.main_panel}>
        {/*________navbar________*/}
        <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />
        {/*________end navbar________*/}
        <div className={classes.content}>
          <div className={classes.container}>
            <Suspense fallback={<>loading private route ....</>}>
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

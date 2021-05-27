import React from "react";
import { Route } from "react-router-dom";

export default function RouteWithSubRoutes({
  children,
  component,
  render,
  ...props
}) {
  return (
    // <Route
    //   key={route.path}
    //   exact={route.exact}
    //   path={route.layout + route.path}
    //   render={props => (
    //     // pass the sub-routes down to keep nesting
    //     <route.component {...props} routes={route.routes} />
    //   )}
    // />
    <Route {...props}>
      {routeProps => {
        if (typeof children === "function") {
          return <>{children(routeProps)}</>;
        }

        if (!routeProps.match) {
          return null;
        }

        if (children) {
          return <>{children}</>;
        }

        if (component) {
          return <>{React.createElement(component, routeProps)}</>;
        }

        if (render) {
          return <>{render(routeProps)}</>;
        }

        return null;
      }}
    </Route>
  );
}

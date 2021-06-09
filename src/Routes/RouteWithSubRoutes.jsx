import React from "react";
import { Route } from "react-router-dom";

export default function RouteWithSubRoutes({
  children,
  component,
  render,
  subRoute,
  ...props
}) {
  if (subRoute?.length > 0) {
    return subRoute.map((route, i) => (
      <RouteWithSubRoutes
        key={i}
        path={route.layout + route.path}
        component={route.component}
        subRoute={route?.routes}
      />
    ));
  }

  return (
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

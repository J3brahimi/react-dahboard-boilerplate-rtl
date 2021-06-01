import { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

export default function BasePage({ routes }) {
  return (
    <Suspense fallback={<>loading private route ....</>}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/admin/dashboard" />
        }
        {routes.map((route, i) => (
          <RouteWithSubRoutes
            key={i}
            path={route.layout + route.path}
            component={route.component}
            subRoute={route?.routes}
          />
        ))}
      </Switch>
    </Suspense>
  );
}

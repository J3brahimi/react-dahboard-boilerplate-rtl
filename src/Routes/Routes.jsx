import { shallowEqual, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthPage from "Pages/AuthPage";
import BasePage from "Routes/BasePage";
import Layout from "../Layouts";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

export default function Routes() {
  const { isAuthorized } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
    }),
    shallowEqual,
  );

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}
      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <Layout>
          <BasePage />
        </Layout>
      )}
    </Switch>
  );
}

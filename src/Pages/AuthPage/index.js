import { Redirect, Route, Switch } from "react-router-dom";
import RouteWithSubRoutes from "Routes/RouteWithSubRoutes";
import LoginPage from "Pages/AuthPage/LoginPage";
import RegisterPage from "Pages/AuthPage/RegisterPage";
import ForgetPage from "./ForgetPage";

export default function AuthPage() {
  return (
    //  begin::Content body
    <div>
      <Switch>
        <RouteWithSubRoutes path="/auth/login" component={LoginPage} />
        <RouteWithSubRoutes
          path="/auth/registration"
          component={RegisterPage}
        />
        <RouteWithSubRoutes
          path="/auth/forgot-password"
          component={ForgetPage}
        />
        <Redirect from="/auth" exact={true} to="/auth/login" />
        {/*redirect from */}
        <Route
          render={props => (
            <Redirect
              to={{
                pathname: "/auth/login",
                from: props.location,
              }}
            />
          )}
        />
      </Switch>
    </div>
    //end::Content body
  );
}

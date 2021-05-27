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
        <Redirect to="/auth/login" />
      </Switch>
    </div>
    //end::Content body
  );
}

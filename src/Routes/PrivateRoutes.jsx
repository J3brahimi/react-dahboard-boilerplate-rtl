import { Redirect, Route } from "react-router-dom";
import Layout from "Layouts";
import adminRoutes from "Routes/adminRoutes";

export default function PrivateRoutes() {
  return (
    <>
      <Route
        path="/admin"
        render={props => (
          <Layout {...props} routes={adminRoutes} dashboard="/admin" />
        )}
      />
      {
        <>
          <Redirect exact from="/admin" to="/admin/dashboard" />
          <Redirect exact from="/client" to="/client/dashboard" />
        </>
      }
    </>
  );
}

// pages
import Dashboard from "Pages/AdminPages/Dashboard";
// icons
import { ReactComponent as DashboardIcon } from "Assets/img/icons/icon_dashboardPage.svg";

const adminRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon />,
    component: Dashboard,
    exact: true,
    layout: "/admin",
  },
  {
    path: "/route2",
    component: "COMPONENT",
    // added nested routes
    routes: [
      {
        // Also note how we added /home before the
        // actual page name just to create a complete path
        path: "/route2/page1",
        component: "Page1",
      },
      {
        path: "/route2/page2",
        component: "Page2",
      },
    ],
  },
];

export default adminRoutes;

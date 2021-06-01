// pages
import Dashboard from "Pages/AdminPages/Dashboard";
// icons
import { ReactComponent as DashboardIcon } from "Assets/img/icons/icon_dashboardPage.svg";
import Page_1 from "Pages/AdminPages/Page_1";
import Page_2 from "Pages/AdminPages/Page_2";

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
    name: "Pages",
    icon: <DashboardIcon />,
    // dont write path here if it has sub route
    // added nested routes
    routes: [
      {
        // Also note how we added /home before the
        // actual page name just to create a complete path
        name: "Pages",
        path: "/pages/page1",
        layout: "/admin",
        component: Page_1,
      },
      {
        name: "Pages",
        path: "/pages/page2",
        layout: "/admin",
        component: Page_2,
      },
    ],
  },
];

export default adminRoutes;

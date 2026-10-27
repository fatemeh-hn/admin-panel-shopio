import { createBrowserRouter } from "react-router";
import DashboardLayout from "../../shared/layout/DashboardLayout";
import ProductsDashboard from "../../features/product/pages/productsDashbored";
import Profile from "../../features/product/pages/profile";
import LoginPage from "../../features/auth/pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "products",
        element: <ProductsDashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

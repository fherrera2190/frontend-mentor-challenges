import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CountryDetailPage, HomePage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/country/:alpha",
    element: <CountryDetailPage />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

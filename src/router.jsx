import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Graphique from "./components/graphique";
import ErrorPage from "./components/errorpage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/id/:id",
      element: <Graphique />,
      errorElement: <ErrorPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

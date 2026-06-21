import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "posts",
          element: <Posts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

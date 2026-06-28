import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
import Login from "./pages/auth/Login";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminPosts from "./components/AdminPosts";
import AdminCreatePost from "./components/AdminCreatePost";
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
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/adminLayout",
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <AdminDashboard />,
        },
        {
          path: "posts",
          element: <AdminPosts />,
        },
        {
          path: "createPost",
          element: <AdminCreatePost />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

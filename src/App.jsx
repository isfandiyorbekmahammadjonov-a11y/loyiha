import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/public/Home";
import Posts from "./pages/public/Posts";
import Login from "./pages/auth/Login";
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminPosts from "./components/Admin/AdminPosts";
import AdminCreatePost from "./components/Admin/CreatPosts/AdminCreatePost";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorPage from "./pages/public/ErrorPage";
import CardDetail from "./components/DeatailPage/CardDetail";
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
        {
          path: "/product/:id",
          element: <CardDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "/adminLayout",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
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
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

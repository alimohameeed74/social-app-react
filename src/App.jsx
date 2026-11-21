import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import "./App.css";
import MainLayout from "./layouts/Main/MainLayout";
import Notfound from "./layouts/Notfound/Notfound";
import Signin from "./features/auth/pages/Signin/Signin";
import Signup from "./features/auth/pages/Signup/Signup";
import AuthLayout from "./layouts/Auth/AuthLayout";
import SystemLayout from "./layouts/System/SystemLayout";
import Feed from "./features/system/feed/pages/Feed/Feed";
import Profile from "./features/system/profile/pages/Profile/Profile";
import Notifications from "./features/system/notification/pages/Notifications/Notifications";
import AuthGuard from "./shared/protected-routes/AuthGuard";
import GuestGuard from "./shared/protected-routes/GuestGuard";

const routes = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      // Default
      {
        path: "",
        element: <Navigate to={"auth"} replace />,
      },

      // Auth
      {
        path: "auth",
        element: (
          <GuestGuard>
            <AuthLayout />
          </GuestGuard>
        ),
        children: [
          {
            path: "",
            element: <Navigate to={"signin"} replace />,
          },
          {
            path: "signin",
            element: <Signin />,
          },
          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },

      // =============================

      // System
      {
        path: "system",
        element: (
          <AuthGuard>
            <SystemLayout />
          </AuthGuard>
        ),
        children: [
          {
            path: "",
            element: <Navigate to={"feed"} replace />,
          },
          {
            path: "feed",
            element: <Feed />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "notifications",
            element: <Notifications />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

import { Outlet } from "react-router";
import AuthProvider from "../../shared/contexts/AuthContext/AuthContext";

export default function MainLayout() {
  return (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

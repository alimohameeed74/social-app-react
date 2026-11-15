import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <h1>auth layout</h1>
      <Outlet />
    </>
  );
}

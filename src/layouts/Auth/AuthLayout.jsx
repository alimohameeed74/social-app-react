import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-black/35 fixed inset-0 z-0"></div>

      <section className="flex min-h-screen justify-center items-center relative">
        <Outlet />
      </section>
    </>
  );
}

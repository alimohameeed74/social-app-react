import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

export default function SystemLayout() {
  return (
    <>
      <section className="bg-[#F0F2F5] min-h-screen">
        <Navbar />
        <div className="pt-18 pb-2.5 max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
      </section>
    </>
  );
}

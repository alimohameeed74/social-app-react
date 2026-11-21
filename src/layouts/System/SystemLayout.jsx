import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import { authContext } from "../../shared/contexts/AuthContext/AuthContext";
import { useContext } from "react";

export default function SystemLayout() {
  const { loggedUser } = useContext(authContext);
  return (
    <>
      {loggedUser ? (
        <section className="bg-[#F0F2F5] min-h-screen">
          <Navbar />
          <div className="pt-18 pb-2.5 max-w-7xl mx-auto px-4">
            <Outlet />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

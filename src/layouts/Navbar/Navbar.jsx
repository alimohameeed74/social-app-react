import { Button } from "flowbite-react";
import { useContext, useState } from "react";
import logo from "../../assets/favicon.png";
import { Link, NavLink } from "react-router";
import { authContext } from "../../shared/contexts/AuthContext/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedUser, logout } = useContext(authContext);

  function toggleUserMenue() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-[#FEFEFE] fixed w-full z-20 top-0 inset-s-0 border-b border-gray-200">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-2 px-4">
          <Link
            to="/system/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} alt="Socail App Logo" className="h-7 rounded-xl" />

            <span className="self-center hidden sm:flex text-xl text-heading font-semibold whitespace-nowrap">
              Social App
            </span>
          </Link>

          <div id="navbar-default">
            <ul className="font-bold flex px-2 py-1 border border-gray-200 rounded-[10px] bg-[#fefdffd1] md:space-x-8 ">
              <li className="me-0">
                <NavLink
                  to="/system/feed"
                  className={(link) =>
                    link.isActive
                      ? "text-blue-700! bg-white block py-2 px-2 sm:px-4  rounded-lg  text-[14px]"
                      : "block py-2 px-2 sm:px-4 text-gray-600 rounded-lg hover:text-black text-[14px]"
                  }
                >
                  <i className="fa-regular fa-house sm:me-1 m-0"></i>
                  <span className="hidden sm:inline">Feed</span>
                </NavLink>
              </li>

              <li className="me-0">
                <NavLink
                  to="/system/profile"
                  className={(link) =>
                    link.isActive
                      ? "text-blue-700! bg-white block py-2 px-2 sm:px-4  rounded-lg  text-[14px]"
                      : "block py-2 px-2 sm:px-4 text-gray-600 rounded-lg hover:text-black text-[14px]"
                  }
                >
                  <i className="fa-regular fa-user sm:me-1 m-0"></i>
                  <span className="hidden sm:inline">Profile</span>
                </NavLink>
              </li>

              <li className="me-0">
                <NavLink
                  to="/system/notifications"
                  className={(link) =>
                    link.isActive
                      ? "text-blue-700! bg-white block py-2 px-2 sm:px-4  rounded-lg  text-[14px]"
                      : "block py-2 px-2 sm:px-4 text-gray-600 rounded-lg hover:text-black text-[14px]"
                  }
                >
                  <i className="fa-regular fa-bell sm:me-1 m-0"></i>
                  <span className="hidden sm:inline">Notifications</span>

                  <span className="absolute left-6 top-0 w-3 h-3 p-2 text-2xs justify-center items-center rounded-2xl bg-red-600 text-white hidden">
                    0
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>

          <Button
            onClick={toggleUserMenue}
            className="relative bg-white! cursor-pointer flex justify-between items-center text-gray-600 text-[16px] font-semibold px-2 py-1 border border-gray-200 rounded-2xl "
          >
            <img
              alt="Account Photo"
              className="h-8 w-8 rounded-full object-cover me-1"
              src={loggedUser.photo}
            />

            <span className="sm:me-1 m-0 hidden md:inline">
              {loggedUser.username}
            </span>

            <i className="fa-solid fa-bars"></i>

            <div
              className={`absolute top-full inset-e-0 w-50 font-semibold mt-3 p-3 flex-col text-start border border-gray-200 rounded-xl bg-white text-[12px] ${
                isOpen ? "flex" : "hidden"
              }`}
            >
              <span className="mb-2 p-2 hover:bg-gray-300 rounded-lg w-full">
                <i className="fa-regular fa-user"></i> Profile
              </span>

              <span className="mb-2 p-2 hover:bg-gray-300 rounded-lg w-full">
                <i className="fa-solid fa-user-shield"></i> Change Password
              </span>

              <span
                onClick={logout}
                className="mb-2 p-2 hover:bg-red-500 hover:text-white rounded-lg w-full text-red-500"
              >
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign
                Out
              </span>
            </div>
          </Button>
        </div>
      </nav>
    </>
  );
}

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL } from "../../consts/Constants";
import { useNavigate } from "react-router";
import { toasterContext } from "../ToastContext/ToastContext";

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const { showToast, hideToast } = useContext(toasterContext);
  const navigate = useNavigate();

  function setUserInfo(user) {
    setIsLogged(true);
    setLoggedUser(user);
  }

  function logout() {
    setIsLogged(false);
    setLoggedUser(null);
    localStorage.removeItem("token_");
    navigate("/auth");
  }

  async function getUserProfile() {
    hideToast();
    try {
      const result = await axios.request({
        method: "GET",
        url: `${API_URL}/users/profile-data`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token_")}`,
        },
      });
      const { _id, name, username, email, photo, cover } =
        result.data.data.user;
      setUserInfo({ _id, name, username, email, photo, cover });
      navigate("/system");
    } catch (error) {
      showToast(false, "Something went wrong, signin please.");
      logout();
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("token_");
    if (token) {
      function getData() {
        getUserProfile();
      }

      getData();
    } else {
      navigate("/auth");
    }
  }, []);

  return (
    <authContext.Provider value={{ isLogged, loggedUser, logout, setUserInfo }}>
      {children}
    </authContext.Provider>
  );
}

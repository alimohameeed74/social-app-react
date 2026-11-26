import { useContext } from "react";
import { authContext } from "../contexts/AuthContext/AuthContext";
import { Navigate } from "react-router";

export default function GuestGuard({ children }) {
  const { loggedUser } = useContext(authContext);

  if (loggedUser) {
    return <Navigate to={"/system/feed"} replace />;
  } else {
    return children;
  }
}

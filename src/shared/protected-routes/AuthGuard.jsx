import { useContext } from "react";
import { authContext } from "../contexts/AuthContext/AuthContext";
import { Navigate } from "react-router";

export default function AuthGuard({ children }) {
  const { loggedUser } = useContext(authContext);

  if (loggedUser) {
    return children;
  } else {
    return <Navigate to={"/auth"} replace />;
  }
}

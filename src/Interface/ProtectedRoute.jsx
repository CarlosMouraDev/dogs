import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
}

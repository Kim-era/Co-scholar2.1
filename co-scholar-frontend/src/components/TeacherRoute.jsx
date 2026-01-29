import { Navigate } from "react-router-dom";

export default function TeacherRoute({ children }) {
  const role = localStorage.getItem("role");

  if (role !== "teacher") {
    return <Navigate to="/" />;
  }

  return children;
}

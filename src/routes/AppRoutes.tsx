import { Routes, Route, useLocation } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Resgister/Register";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/Dashboard";
import PrivateGlobalStyle from "../styles/PrivateGlobalStyles";
import PublicGlobalStyle from "../styles/PublicGlobalStyles";

const AppRoutes = () => {
  const location = useLocation();

  const privateRoutes = ["/dashboard"];

  const isPrivateRoute = privateRoutes.includes(location.pathname);

  return (
    <>
      {isPrivateRoute ? <PrivateGlobalStyle /> : <PublicGlobalStyle />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;

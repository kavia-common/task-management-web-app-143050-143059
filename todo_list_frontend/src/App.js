import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import "./styles/common.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import { useAuth } from "./context/AuthContext";

/**
 * PUBLIC_INTERFACE
 * App sets up the top-level route structure for the application:
 * - /login: Login screen
 * - /register: Register screen
 * - /dashboard: Protected dashboard shown after login/register
 */
function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} replace />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

/**
 * PUBLIC_INTERFACE
 * RequireAuth protects a route branch and redirects unauthenticated users to /login.
 */
function RequireAuth() {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}

export default App;

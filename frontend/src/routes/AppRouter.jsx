import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import History from "../pages/History";
import Navbar from "../components/Navbar";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? <><Navbar />{children}</> : <Navigate to="/" />;
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
} 
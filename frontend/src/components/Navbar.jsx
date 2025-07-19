import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-4" style={{ background: "linear-gradient(90deg, #7b7be0 0%, #a084ee 100%)", border: "none" }}>
      <div className="container">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div>
            <Link to="/home" className="nav-link text-white fw-bold d-inline-block">Inicio</Link>
            <Link to="/history" className="nav-link text-white fw-bold d-inline-block ms-3">Historial</Link>
          </div>
          <button onClick={handleLogout} className="btn btn-danger btn-sm fw-bold">
            <i className="bi bi-box-arrow-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
} 
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchApi } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await fetchApi("/auth/register", "POST", { name, email, password });
      setUser(data);
      setSuccess(true);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, #7b7be0 0%, #a084ee 100%)" }}>
      <div className="card shadow col-12 col-sm-8 col-md-4 p-4">
        <div className="card-body">
          <h2 className="text-center mb-2">
            <span role="img" aria-label="user">📝</span> Registro
          </h2>
          <p className="text-center text-muted mb-4">Crea tu cuenta</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="fw-bold mb-1">Nombre:</label>
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold mb-1">Correo:</label>
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label className="fw-bold mb-1">Contraseña:</label>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-success w-100 fw-bold mb-3" style={{ background: "linear-gradient(90deg, #7b7be0 0%, #a084ee 100%)", border: "none" }}>
              Registrarse
            </button>
            {error && <p className="text-danger text-center">{error}</p>}
            {success && <p className="text-success text-center">¡Registro exitoso! Redirigiendo...</p>}
            <hr />
            <div className="text-center">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
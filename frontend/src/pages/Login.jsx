import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchApi } from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const data = await fetchApi("/auth/login", "POST", { email, password });
      setUser(data.user);
      setToken(data.token);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ background: "linear-gradient(135deg, #7b7be0 0%, #a084ee 100%)" }}>
      <div className="card shadow col-12 col-sm-8 col-md-4 p-4">
        <div className="card-body">
          <h2 className="text-center mb-2">
            <span role="img" aria-label="lock">🔒</span> Iniciar Sesión
          </h2>
          <p className="text-center text-muted mb-4">Accede a tu cuenta</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="fw-bold mb-1">Email:</label>
              <input
                type="email"
                placeholder="tu@email.com"
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
                placeholder="Tu contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 fw-bold mb-3" style={{ background: "linear-gradient(90deg, #7b7be0 0%, #a084ee 100%)", border: "none" }}>
              Iniciar Sesión
            </button>
            {error && <p className="text-danger text-center">{error}</p>}
            <hr />
            <div className="text-center">
              ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 
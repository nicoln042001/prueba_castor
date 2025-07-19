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
    <div className="container" style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2 className="text-center mb-4">Registro</h2>
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="form-control"
        />
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="form-control"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="form-control"
        />
        <button type="submit" className="btn btn-success fw-bold">Registrarse</button>
        <Link to="/login" className="text-success text-center text-decoration-none">¿Ya tienes cuenta? Inicia sesión</Link>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">¡Registro exitoso! Redirigiendo...</p>}
      </form>
    </div>
  );
} 
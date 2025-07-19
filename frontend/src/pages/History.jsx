import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchApi } from "../services/api";

export default function History() {
  const { token } = useContext(AuthContext);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHistory = async () => {
      setError("");
      setLoading(true);
      try {
        const data = await fetchApi("/history", "GET", null, token);
        setHistory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getHistory();
  }, [token]);

  return (
    <div className="container" style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2 className="text-center mb-4">Historial de búsquedas</h2>
      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-danger text-center">{error}</p>}
      <ul className="list-group mb-3">
        {history.map(item => (
          <li key={item.id} className="list-group-item mb-2 shadow-sm rounded">
            <strong>{item.type}</strong>: {item.query} ({item.source})<br/>
            <small>
              {new Date(item.createdat).toLocaleString("es-ES", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </small>
          </li>
        ))}
      </ul>
      {history.length === 0 && !loading && <p className="text-center">No hay historial.</p>}
    </div>
  );
} 
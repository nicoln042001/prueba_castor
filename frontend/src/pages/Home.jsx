import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchApi } from "../services/api";

export default function Home() {
  const { token, user } = useContext(AuthContext);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("artist");
  const [results, setResults] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await fetchApi(`/spotify/search?q=${encodeURIComponent(query)}&type=${type}`, "GET", null, token);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-2">Búsqueda en Spotify <i class="bi bi-spotify"></i></h2>
      <p className="text-center text-muted">Bienvenido{user ? `, ${user.name}` : ""}.</p>
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                placeholder="Buscar..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="col-md-2">
              <select value={type} onChange={e => setType(e.target.value)} className="form-select">
                <option value="artist">Artista</option>
                <option value="track">Canción</option>
                <option value="album">Álbum</option>
              </select>
            </div>
            <div className="col-md-2">
              <button type="submit" disabled={loading} className="btn btn-success fw-bold">Buscar <i class="bi bi-search"></i></button>
            </div>
          </div>
        </form>
      {error && <p className="text-danger text-center">{error}</p>}
      {loading && <p className="text-center">Buscando...</p>}
      {results && (
        <div className="mt-4">
          <h3>Resultados:</h3>
          <div className="row mt-3 g-3">
            {(results.artists?.items || results.tracks?.items || results.albums?.items || []).map((item, idx) => {
              const tipo = results.artists ? "artist" : results.tracks ? "track" : "album";
              let nombre = item.name;
              let imagen = item.images?.[0]?.url || (item.album?.images?.[0]?.url) || "";
              let extra = "";
              if (tipo === "track") {
                extra = item.artists?.map(a => a.name).join(", ");
              } else if (tipo === "album") {
                extra = item.artists?.map(a => a.name).join(", ");
              } else if (tipo === "artist") {
                extra = `Popularidad: ${item.popularity}`;
              }
              return (
                <div key={item.id || idx} className="col-12 col-md-6 col-lg-4">
                  <div className="card h-100 text-center">
                    {imagen && <img src={imagen} alt={nombre} className={tipo === "artist" ? "card-img-top rounded-circle mx-auto mt-3" : "card-img-top mt-3"} style={{ width: 100, height: 100, objectFit: "cover" }} />}
                    <div className="card-body">
                      <div className="card-title fw-bold mb-2">{nombre}</div>
                      <div className="card-text text-muted mb-1">{extra}</div>
                      <div className="text-secondary small">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 
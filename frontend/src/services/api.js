
const API_URL = process.env.REACT_APP_API_URL;

export const fetchApi = async (endpoint, method = "GET", body, token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error en la petición");
  return data;
}; 
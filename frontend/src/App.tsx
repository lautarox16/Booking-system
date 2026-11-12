import { useEffect, useState } from "react";

const HEALTH_URL = "/api/health";
const DATABASE_OK = "ok";

type HealthStatus = "loading" | "ok" | "database-error" | "backend-unreachable";

interface HealthResponse {
  database: string;
}

export default function App() {
  const [status, setStatus] = useState<HealthStatus>("loading");

  useEffect(() => {
    fetch(HEALTH_URL)
      .then((response) => response.json() as Promise<HealthResponse>)
      .then((body) =>
        setStatus(body.database === DATABASE_OK ? "ok" : "database-error"),
      )
      .catch(() => setStatus("backend-unreachable"));
  }, []);

  if (status === "ok") {
    return <p>Backend y base de datos funcionando</p>;
  }
  if (status === "database-error") {
    return <p>El backend funciona, pero la base de datos no responde</p>;
  }
  if (status === "backend-unreachable") {
    return <p>No se pudo conectar con el backend</p>;
  }
  return <p>Cargando...</p>;
}

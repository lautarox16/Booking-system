import { useEffect, useState } from "react";

const HEALTH_URL = "/api/health";
const DATABASE_OK = "ok";

const HEALTH_STATUS = {
  Loading: "loading",
  Ok: "ok",
  DatabaseError: "database-error",
  BackendUnreachable: "backend-unreachable",
} as const;

type HealthStatus = (typeof HEALTH_STATUS)[keyof typeof HEALTH_STATUS];

interface HealthResponse {
  database: string;
}

export default function App() {
  const [status, setStatus] = useState<HealthStatus>(HEALTH_STATUS.Loading);

  useEffect(() => {
    fetch(HEALTH_URL)
      .then((response) => response.json() as Promise<HealthResponse>)
      .then((body) =>
        setStatus(
          body.database === DATABASE_OK
            ? HEALTH_STATUS.Ok
            : HEALTH_STATUS.DatabaseError,
        ),
      )
      .catch(() => setStatus(HEALTH_STATUS.BackendUnreachable));
  }, []);

  if (status === HEALTH_STATUS.Ok) {
    return <p>Backend y base de datos funcionando</p>;
  }
  if (status === HEALTH_STATUS.DatabaseError) {
    return <p>El backend funciona, pero la base de datos no responde</p>;
  }
  if (status === HEALTH_STATUS.BackendUnreachable) {
    return <p>No se pudo conectar con el backend</p>;
  }
  return <p>Cargando...</p>;
}

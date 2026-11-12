import { useEffect } from "react";

const HEALTH_URL = "/api/health";

export default function App() {
  useEffect(() => {
    fetch(HEALTH_URL);
  }, []);

  return <p>Cargando...</p>;
}

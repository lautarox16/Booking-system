import { render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";

import App from "./App";

const HEALTH_URL = "/api/health";
const HTTP_OK = 200;
const HTTP_SERVICE_UNAVAILABLE = 503;

function jsonResponse(body: object, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

afterEach(() => {
  vi.unstubAllGlobals();
});

test("shows_loading_state_while_waiting_for_backend", () => {
  const fetchMock = vi.fn(() => new Promise<Response>(() => {}));
  vi.stubGlobal("fetch", fetchMock);

  render(<App />);

  expect(fetchMock).toHaveBeenCalledWith(HEALTH_URL);
  expect(screen.getByText("Cargando...")).toBeInTheDocument();
});

test("shows_backend_and_database_ok_when_health_succeeds", async () => {
  const body = { status: "ok", database: "ok" };
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse(body, HTTP_OK)));

  render(<App />);

  expect(
    await screen.findByText("Backend y base de datos funcionando"),
  ).toBeInTheDocument();
});

test("shows_error_message_when_backend_is_unreachable", async () => {
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));

  render(<App />);

  expect(
    await screen.findByText("No se pudo conectar con el backend"),
  ).toBeInTheDocument();
});

test("shows_database_error_when_backend_reports_database_down", async () => {
  const body = { status: "error", database: "error" };
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue(jsonResponse(body, HTTP_SERVICE_UNAVAILABLE)),
  );

  render(<App />);

  expect(
    await screen.findByText("El backend funciona, pero la base de datos no responde"),
  ).toBeInTheDocument();
});

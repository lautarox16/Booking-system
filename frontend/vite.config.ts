import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const API_PREFIX = "/api";
const DEV_SERVER_PORT = 5173;

const backendUrl = process.env.BACKEND_URL;
if (!backendUrl) {
  throw new Error("BACKEND_URL environment variable is required");
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: DEV_SERVER_PORT,
    watch: { usePolling: true },
    proxy: {
      [API_PREFIX]: {
        target: backendUrl,
        changeOrigin: true,
        rewrite: (path) => path.slice(API_PREFIX.length),
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});

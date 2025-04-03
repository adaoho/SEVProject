import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    // host: "192.168.0.149",
    // host: "192.168.2.167",
    port: 8088,
  },
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3500,
  },
});

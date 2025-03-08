import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@data": path.resolve(__dirname, "src/Data"),
      "@utils": path.resolve(__dirname, "src/Utils"),
      "@hooks": path.resolve(__dirname, "src/Hooks"),
    },
  },
});

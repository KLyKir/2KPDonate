import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],

    base: mode === "development" ? "/" : "/2KPDonate/dist/",
  });
};

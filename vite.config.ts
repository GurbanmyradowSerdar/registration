import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "components", replacement: "/src/components" },
      { find: "data", replacement: "/src/data" },
      { find: "hooks", replacement: "/src/hooks" },
      { find: "types", replacement: "/src/types" },
      { find: "utils", replacement: "/src/utils" },
      { find: "store", replacement: "/src/store" },
    ],
  },
});

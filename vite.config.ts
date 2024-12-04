/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setUpTests.ts"],
    coverage: {
      include: ["src/**/**.ts", "src/**/**.tsx"],
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/**/**.test.tsx",
        "src/game/types.ts",
        "src/game/client/types.ts",
      ],
      reporter: ["lcov", "html", "text"],
    },
  },
});

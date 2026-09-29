import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

// El bundle ESM es el canal universal. El adaptador de Module Federation expone
// este mismo módulo, por lo que los hosts nunca reciben un componente Vue/React.
export default defineConfig({
  // Solo facilita la PoC local (5174 → 5175). El CDN productivo debe permitir los orígenes host
  // explícitos, no responder con un comodín.
  server: { cors: true },
  preview: { cors: true },
  plugins: [
    vue(),
    federation({
      name: "security_ui",
      filename: "remoteEntry.js",
      exposes: { "./security-administration": "./src/index.ts" },
      // El artefacto es autosuficiente: v1 no comparte Vue, React ni runtime con el host.
      shared: {},
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "security-administration.js",
    },
  },
  test: { environment: "jsdom", clearMocks: true },
});

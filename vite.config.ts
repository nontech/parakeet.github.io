import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// Custom plugin to serve /privacy-policy/index.html at /privacy-policy
const privacyPolicyPlugin = (): PluginOption => {
  return {
    name: "privacy-policy-rewrite",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === "/privacypolicy") {
          req.url = "/privacypolicy/index.html";
        }
        next();
      });
    },
  };
};

// Plugin to handle SPA route pre-rendering
const prerenderSPAPlugin = (): PluginOption => {
  return {
    name: "prerender-spa-routes",
    closeBundle: {
      sequential: true,
      handler: async () => {
        // List of routes to prerender
        const routes = ["/privacypolicy", "/imprint", "/accountdeletion", "/team"];

        // Read the main index.html
        const template = fs.readFileSync("dist/index.html", "utf-8");

        // Create directories and write index.html for each route
        for (const route of routes) {
          const dirPath = `dist${route}`;

          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
          }

          fs.writeFileSync(`${dirPath}/index.html`, template);
        }

        console.log("Prerendered routes:", routes);
      },
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    privacyPolicyPlugin(),
    mode === "production" && prerenderSPAPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

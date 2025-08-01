import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Only load env when in development
  const env = mode === 'development' ? loadEnv(mode, process.cwd(), '') : {};

  return {
    root: '.',
    publicDir: 'public',
    base: './',
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      fs: {
        allow: ["./client", "./shared", "./public"],
        deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**"],
      },
    },
    build: {
      outDir: "dist/client",
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html')
        },
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      }
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client"),
        "@shared": path.resolve(__dirname, "./shared"),
      },
    },
    define: mode === 'development' ? {
      'process.env': Object.entries(env).reduce((acc, [key, val]) => {
        acc[key] = JSON.stringify(val);
        return acc;
      }, {} as Record<string, string>)
    } : {}
  };
});

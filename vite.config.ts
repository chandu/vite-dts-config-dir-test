import { defineConfig } from "vite";
import dts from 'vite-plugin-dts';
export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: "src/index.ts",
      fileName: '[name].js',
      formats: ["es"],
    },
  },
});

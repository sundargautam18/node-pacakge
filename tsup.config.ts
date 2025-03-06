import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
  sourcemap: true,
  esbuildOptions(options) {
    options.external = ["nepali-date-converter"]; // Ensure it is not bundled
  },
});

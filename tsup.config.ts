import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: false,
  format: ["esm"],
  target: "esnext",
  sourcemap: false,
  clean: true,
  minify: true,
  minifyWhitespace: true,
  dts: true,
  treeshake: true,
});

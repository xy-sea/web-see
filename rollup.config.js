import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { uglify } from "rollup-plugin-uglify";
export default [
  {
    input: "./src/index.js",
    output: {
      dir: "dist",
      format: "cjs",
      entryFileNames: "index.cjs.js",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json()],
  },
  {
    input: "./src/index.js",
    output: {
      dir: "dist",
      format: "esm",
      entryFileNames: "index.esm.js",
      sourcemap: true,
    },
    plugins: [resolve(), commonjs(), json()],
  },
  {
    input: "src/index.js",
    plugins: [resolve(), commonjs(), json()],
    output: {
      dir: "dist",
      format: "umd",
      name: "web-see",
      entryFileNames: "index.js",
      sourcemap: true,
    },
  },
  {
    input: "src/index.js",
    plugins: [uglify(), resolve(), commonjs(), json()],
    output: {
      dir: "dist",
      format: "umd",
      name: "web-see",
      entryFileNames: "index.min.js",
      sourcemap: true,
    },
  },
];

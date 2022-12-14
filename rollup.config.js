import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: './src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: 'index.cjs.js',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: 'index.esm.js',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'umd',
      name: 'web-see',
      entryFileNames: 'index.js',
      sourcemap: true,
    },
    {
      dir: 'dist',
      format: 'umd',
      name: 'web-see',
      entryFileNames: 'index.min.js',
      sourcemap: true,
      plugins: [uglify()],
    },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
    json(),
  ],
};

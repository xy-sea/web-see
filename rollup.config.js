import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { uglify } from 'rollup-plugin-uglify';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: ['./packages/pk1/src/index.ts'],
    output: [
      {
        file: './packages/pk1/dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './packages/pk1/dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: './packages/pk1/dist/index.js',
        format: 'umd',
        name: 'web-see',
        sourcemap: true,
      },
      {
        file: './packages/pk1/dist/index.min.js',
        format: 'umd',
        name: 'web-see',
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
  },
  {
    input: ['./packages/pk2/src/index.ts'],
    output: [
      {
        file: './packages/pk2/dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: './packages/pk2/dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: './packages/pk2/dist/index.js',
        format: 'umd',
        name: 'web-see',
        sourcemap: true,
      },
      {
        file: './packages/pk2/dist/index.min.js',
        format: 'umd',
        name: 'web-see',
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
  },
  {
    input: './packages/pk1/src/index.ts',
    output: [
      { file: './packages/pk1/dist/index.cjs.d.ts', format: 'cjs' },
      { file: './packages/pk1/dist/index.esm.d.ts', format: 'esm' },
      { file: './packages/pk1/dist/index.d.ts', format: 'umd' },
      { file: './packages/pk1/dist/index.min.d.ts', format: 'umd' },
    ],
    plugins: [dts()],
  },
  {
    input: './packages/pk2/src/index.ts',
    output: [
      { file: './packages/pk2/dist/index.cjs.d.ts', format: 'cjs' },
      { file: './packages/pk2/dist/index.esm.d.ts', format: 'esm' },
      { file: './packages/pk2/dist/index.d.ts', format: 'umd' },
      { file: './packages/pk2/dist/index.min.d.ts', format: 'umd' },
    ],
    plugins: [dts()],
  },
];

/* eslint-env node */
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import html from '@web/rollup-plugin-html';

const pages = process.env.pages;

export default {
  input: pages ? 'pages/*.html' : './index.html',
  output: {
    dir: pages ? './dist/pages' : './dist'
  },
  plugins: [html({ minify: false }), nodeResolve(), terser()]
};

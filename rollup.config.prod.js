import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const dependencies = Object.keys(require('./package.json').dependencies);

export default {
    input: 'src/index.js',
    external: dependencies,
    output: [
        {
            file: 'dist/adnotatio.min.js',
            format: 'cjs',
            name: 'adnotatio',
            exports: 'named', /** Disable warning for default imports */
        },
    ],
    plugins: [
        resolve(),
        commonjs({
            exclude: ['src/**'],
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify({ compress: false, mangle: false, keep_fnames:true }),
        postcss(),
    ],
};

import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import packageJson from './package.json' assert { type: "json" };
import nodeResolve from "rollup-plugin-node-resolve";
import {sveltePreprocess} from "svelte-preprocess/dist/autoProcess.js";
import typescript from '@rollup/plugin-typescript';

export default {
    extends: "@tsconfig/svelte/tsconfig.json",
    input: 'src/index.js',
    output: [
        { file: packageJson.module, 'format': 'es' },
        { file: packageJson.main, 'format': 'umd', name: 'SvelteComps' }
    ],
    plugins: [
        svelte({
            preprocess: sveltePreprocess(),
        }),
        resolve({ browser: true }),
        nodeResolve(),
        typescript()
    ],
};
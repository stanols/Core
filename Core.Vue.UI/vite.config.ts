import { URL, fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import analyzer from 'rollup-plugin-analyzer';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig((arg) => {
	const environment = arg.mode == 'development'
		? 'development'
		: 'production';
	const outDir = environment == 'development'
		? '../Core.Server/bin/Debug/net10.0/client/vue'
		: './out';

	return {
		base: './',
		mode: environment,
		build: {
			rollupOptions: {
				input: {
					main: path.resolve(__dirname, 'index.html')
				},
				output: {
					assetFileNames: '[name][extname]',
					chunkFileNames: '[name].js',
					entryFileNames: '[name].js'
				},
				external: [
					"node_modules/jquery/dist/jquery.min.js",
					"node_modules/bootstrap/dist/js/bootstrap.min.js"
				]
			},
			outDir: outDir,
			emptyOutDir: true,
			sourcemap: environment === 'development',
		},
		resolve: {
			alias: {
			}
		},
		plugins: [
			vue(),
			analyzer({ summaryOnly: true }),
			viteStaticCopy({
				targets: [
					{
						src: 'img/*',
						dest: './'
					}
				]
			})
		]
	};
});

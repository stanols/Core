import { URL, fileURLToPath } from 'node:url';
import vue from '@vitejs/plugin-vue';
import analyzer from 'rollup-plugin-analyzer';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';

export default defineConfig((arg) => {
    const environment = arg.mode == 'development'
        ? 'development'
        : 'production';

    return {
        mode: environment,
        build: {
            outDir: '../Core.Server/bin/Debug/net8.0/client/vue',
            emptyOutDir: true
        },
        resolve: {
            alias: {
                src: fileURLToPath(new URL('app', import.meta.url)),
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

import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';

const libConfig = defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/plugins/Vue3JsonLd.ts'),
            name: 'Vue3JsonLd',
            fileName: 'vue3-json-ld',
        },
        rollupOptions: {
            external: ['vue'],
            output: { globals: { vue: 'Vue' } },
        },
    },
});

export default mergeConfig(baseConfig, libConfig);
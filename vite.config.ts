import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        svgr()
    ],
    esbuild: {
        jsxInject: `import React from 'react'`,
    },
    resolve:{
        alias:{
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@store': path.resolve(__dirname, './src/store'),
            '@assets': path.resolve(__dirname, 'src/assets'),
        }
    },
    build:{
        minify:true,
        rollupOptions:{}
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./src/setup.ts'],
    }
})

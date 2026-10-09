import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    build: {
        target: 'es2022',
        emptyOutDir: true,
        // 🚀 核心修复：在此处告知后端打包工具，跳过打包 Node.js 相关的原生模块
        rollupOptions: {
            external: [
                'path',
                'os',
                'crypto',
                'async_hooks',
                'diagnostics_channel',
                'node:path',
                'node:os',
                'node:crypto',
                'node:async_hooks',
                'node:diagnostics_channel'
            ]
        }
    }
});

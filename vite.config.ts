import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import prismjs from 'vite-plugin-prismjs/dist/index'
import {prismjsPlugin} from 'vite-plugin-prismjs'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        prismjsPlugin({
            "languages": ["javascript", "css", 'python', 'jsx', 'typescript'],
            "plugins": ["line-numbers"],
            'theme': 'tomorrow',
            'css': true
        }),
    ]
})

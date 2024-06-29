import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@Img': path.resolve(__dirname, './src/img'),
      '@Src': path.resolve(__dirname, './src/'),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Slices': path.resolve(__dirname, './src/redux/slices'),
      '@Hooks': path.resolve(__dirname, './src/redux/hooks'),
      '@Store': path.resolve(__dirname, './src/redux/store.ts'),
    },
  },
  plugins: [react()],
})

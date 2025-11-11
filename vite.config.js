import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ⚠️ Cực kỳ quan trọng: tên repo chính xác, có dấu “/” 2 bên
  base: '/Web_Lab03/',
})

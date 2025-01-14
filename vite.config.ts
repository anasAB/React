/* eslint-disable import/no-default-export */

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({ typescript: true }),
    react()
  ],
})

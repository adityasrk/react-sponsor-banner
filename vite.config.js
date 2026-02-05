import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/SponsorBanner/SponsorBanner.jsx'),
      name: 'ReactSponsorBanner',
      formats: ['es', 'umd'],
      fileName: (format) => `react-sponsor-banner.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@emotion/styled': 'styled'
        },
        assetFileNames: (assetInfo) => {
          // Force all CSS assets to be named 'style.css'
          if (assetInfo.names && assetInfo.names[0]?.endsWith('.css')) {
            return 'style.css';
          }
          return assetInfo.names[0];
        },
        inlineDynamicImports: false
      }
    },
    cssCodeSplit: false,
    cssMinify: true
  }
})

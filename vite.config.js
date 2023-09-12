import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ command, mode }) => ({
    plugins: [
        svelte()
      ],
      build: {
        rollupOptions: {
          input: {
            main: 'index.html',
          },
          output: {
            // Output directory of the build
            dir: 'public',
          },
        },
      },
}));
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ command, mode }) => ({
    plugins: [
        svelte()
      ]
}));
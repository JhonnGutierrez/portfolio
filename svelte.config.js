// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import preprocess from "svelte-preprocess"
import path from 'node:path'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    scss: {
      prependData: `@import '${path.resolve('./src/styles/var.scss')}';`
    }
  }),
}

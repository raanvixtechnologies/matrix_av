import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: base must match your GitHub repo name for project pages
// e.g. if your repo is github.com/yourname/matrix-av-works,
// the site is served at yourname.github.io/matrix-av-works/
// so base must be '/matrix-av-works/'
// If you're deploying to a USER/ORG page (repo named yourname.github.io),
// set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/matrix_av/',
})

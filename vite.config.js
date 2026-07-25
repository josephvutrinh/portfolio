import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Serves api/spotify.js during `npm run dev` (mimics Vercel's /api routing)
const spotifyDevApi = (mode) => ({
  name: 'spotify-dev-api',
  configureServer(server) {
    Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
    server.middlewares.use('/api/spotify', async (req, res) => {
      res.status = (code) => {
        res.statusCode = code
        return res
      }
      res.json = (obj) => {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(obj))
      }
      try {
        const { default: handler } = await server.ssrLoadModule('/api/spotify.js')
        await handler(req, res)
      } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Dev API error' })
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    spotifyDevApi(mode),
  ],
}))

import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  target: 'node',
  entry: './src/app.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    chunkFormat: 'module'
  },
  externals: [{
    'odbc': 'odbc',
  }],
  plugins: [
  ],
  experiments: {
    topLevelAwait: true,
    outputModule: true
  },
  stats: {
    errorDetails: true
  }
}

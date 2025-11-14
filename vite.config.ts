import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Detecta deploy no Netlify
const isNetlify = process.env.NETLIFY === 'true'

// No Netlify, o base PRECISA ser '/', senão quebra as imagens
const base = isNetlify ? '/' : (process.env.BASE_PATH || '/')

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(process.env.IS_PREVIEW || false),
  },

  plugins: [
    react(),
    AutoImport({
      imports: [
        {
          'react': [
            'React',
            'useState',
            'useEffect',
            'useContext',
            'useReducer',
            'useCallback',
            'useMemo',
            'useRef',
            'useImperativeHandle',
            'useLayoutEffect',
            'useDebugValue',
            'useDeferredValue',
            'useId',
            'useInsertionEffect',
            'useSyncExternalStore',
            'useTransition',
            'startTransition',
            'lazy',
            'memo',
            'forwardRef',
            'createContext',
            'createElement',
            'cloneElement',
            'isValidElement'
          ]
        },
        {
          'react-router-dom': [
            'useNavigate',
            'useLocation',
            'useParams',
            'useSearchParams',
            'Link',
            'NavLink',
            'Navigate',
            'Outlet'
          ]
        },
        {
          'react-i18next': ['useTranslation', 'Trans']
        }
      ],
      dts: true,
    }),

    // Continua copiando o _redirects para a raiz
    viteStaticCopy({
      targets: [
        {
          src: 'public/_redirects',
          dest: '' 
        }
      ]
    })
  ],

  base, // <===== corrigido

  build: {
    sourcemap: true,
    outDir: 'out',
  },

  publicDir: 'public',

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})

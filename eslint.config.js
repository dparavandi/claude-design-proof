import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import dsRules from './eslint/no-hardcoded-colors.cjs'

export default defineConfig([
    globalIgnores(['dist']),
  {
        files: ['**/*.{ts,tsx}'],
        extends: [
                js.configs.recommended,
                tseslint.configs.recommended,
                reactHooks.configs.flat.recommended,
                reactRefresh.configs.vite,
              ],
        languageOptions: {
                globals: globals.browser,
        },
  },
  {
        files: ['src/**/*.{ts,tsx}'],
        plugins: { ds: dsRules },
        rules: {
                'ds/no-hardcoded-colors': 'error',
        },
  },
  ])

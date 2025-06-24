import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    ignores: ['**/dist/**', '**/coverage/**', '**/__fixtures__/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-underscore-dangle': ['error', { allow: ['__dirname'] }],
      
      'semi': ['error', 'never'],
      'arrow-parens': ['error', 'as-needed'],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'always-multiline'],
      'indent': ['error', 2],
      
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
    },
  },
]

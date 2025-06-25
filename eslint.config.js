import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import globals from 'globals';

export default [
  {
    ignores: ['**/dist/**', '**/coverage/**', '**/__fixtures__/**']
  },
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylisticPlugin
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      },
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    rules: {
      // Правила @stylistic
      '@stylistic/arrow-parens': ['error', 'as-needed'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
      '@stylistic/eol-last': ['error', 'always'],

      // Другие правила
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'error',
      'import/no-extraneous-dependencies': 'off'
    }
  }
];

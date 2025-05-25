import eslintPlugin from '@eslint/js';
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      js,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
    },
  },
];

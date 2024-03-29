/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'vite-plugin-eslint',
      'axios',
      'vue-axios',
      'bootstrap',
    ],
  },
  rules: {
    'linebreak-style': [0, 'error', 'window'],
    'no-console': 'off',
    'no-alert': 'off',
  },
};

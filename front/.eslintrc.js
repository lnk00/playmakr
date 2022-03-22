module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  ignorePatterns: ['src/mocks/*.ts'],
  rules: {
    'import/extensions': 0,
    'max-len': ['error', { code: 180 }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    jest: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'standard'

  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/prop-types': [0],
    'react-refresh/only-export-components': [
      'warn'
    ]

  }
}

module.exports = {
  root: true,
  env: {
    node: true,
    'jquery': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'camelcase': [0, { 'properties': 'never' }],
    'no-console': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

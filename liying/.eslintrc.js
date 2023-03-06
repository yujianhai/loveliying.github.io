module.exports = {
  root: true,
  env: {
    node: false
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    "@vue/starndard"
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: "module"
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  globals:{
    "error":true
  }
}

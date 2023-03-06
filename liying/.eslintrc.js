module.exports = {
  root: true,
  env: {
<<<<<<< HEAD
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
=======
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
>>>>>>> f8b8886670e9124e60f787afde1aace06a60d04c
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
<<<<<<< HEAD
  },
  globals:{
    "error":true
=======
>>>>>>> f8b8886670e9124e60f787afde1aace06a60d04c
  }
}

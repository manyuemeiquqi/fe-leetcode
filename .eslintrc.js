module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: '@antfu',
  // "extends": "eslint:recommended",
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-undef': 1,
    '@typescript-eslint/no-this-alias': 1,
  },
}

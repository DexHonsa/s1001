module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    "generator-star-spacing": "off",
    quotes: "off",
    "space-before-function-paren": "off",
    semi: "off",
    camelcase: "off",
    "spaced-comment": "off",
    "handle-callback-err": "off",
    "no-trailing-spaces": "off",
    "no-multiple-empty-lines": "off",
    "standard/computed-property-even-spacing":"off",
    "no-irregular-whitespace":"off",
    eqeqeq:"off",
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
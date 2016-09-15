module.exports = {
  extends: 'google',
  installedESLint: true,
  env: {
    node: true,
    mocha: true
  },
  rules: {
    'require-jsdoc': 0,
    'space-before-function-paren': 0,
    'max-len': 0,
    'no-unused-expressions': 0,
    'object-curly-spacing': 0,
    'no-lonely-if': 0,
    'no-warning-comments': 0
  }
};
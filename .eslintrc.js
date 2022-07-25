module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'mocha', 'prettier'],
  extends: ['plugin:@typescript-eslint/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-restricted-globals': 0,
    'consistent-return': 0,
    'object-curly-newline': 0,
    'no-restricted-exports': 0,
    'operator-linebreak': 0,
    'implicit-arrow-linebreak': 0,
    'class-methods-use-this': 0,
    'no-prototype-builtins': 1,
    'prefer-destructuring': 0,
  },
};

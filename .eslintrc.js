module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'consistent-return': 'warn',
    'constructor-super': 'warn',
    'eol-last': 'warn',
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-unused-disable': 'warn',
    'import/named': 0,
    'import/prefer-default-export': 0,
    'no-const-assign': 'error',
    'no-console': 'warn',
    'no-param-reassign': 'warn',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unreachable': 'warn',
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'prefer-arrow-callback': 0,
    'prettier/prettier': 0,
    'valid-typeof': 'warn',
    semi: 'warn',
  },
};
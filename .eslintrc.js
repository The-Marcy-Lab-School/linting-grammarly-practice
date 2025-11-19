module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Allows console.log to be used (comment this out when you're done developing)
    'no-console': 'off',
    // Allows while(true)
    'no-constant-condition': 'off',
    // Allows i++ (Airbnb prefers i += 1)
    'no-plusplus': 'off',
    // Allows explicit returns in arrow functions
    'arrow-body-style': 'off',
    // Allows `continue` in loops
    'no-continue': 'off',
    // Allows functions to implicitly return undefined
    'consistent-return': 'off',
    // Allows all "restricted" syntax (e.g. Airbnb forbids for..of loops)
    'no-restricted-syntax': 'off',
    // Allows alert(), confirm(), prompt()
    'no-alert': 'off',
    // Allows multiple classes in one file (Airbnb prefers 1 per file)
    'max-classes-per-file': 'off',
    // Does not require arrow functions to use parentheses for implicit returns
    'no-confusing-arrow': 'off',
    // Enforces arrow functions (does NOT allow function declarations)
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    // Allows ternary operators as standalone statements
    'no-unused-expressions': ['error', { allowTernary: true }],
    // Enforces single quotes, allows `` and "" only to avoid escaping single quotes (e.g. "don't")
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    // Highlights unused variables, ignores variables beginning with _
    'no-unused-vars': ['error', { argsIgnorePattern: '_', destructuredArrayIgnorePattern: '^_' }],
  },
};

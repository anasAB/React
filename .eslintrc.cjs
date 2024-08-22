module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react-refresh',
    'filename-rules',
    'prefer-arrow-functions',
    'simple-import-sort',
    'import',
  ],
  overrides: [
    {
      files: ['index.tsx', 'vite-env.d.ts'],
      rules: {
        'filename-rules/match': 'off',
      },
    },
    {
      files: ['./src/store/*', './src/hooks/*'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
    {
      files: ['./src/store/*', './src/hooks/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['tailwind.config.js'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prefer-stateless-function': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    'react/button-has-type': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-script-url': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react-refresh/only-export-components': 'error',
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
    'react/jsx-fragments': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        destructureInSignature: 'always',
      },
    ],
    'react/jsx-no-leaked-render': [
      'error',
      {
        validStrategies: ['ternary'],
      },
    ],
    'react/jsx-max-depth': [
      'error',
      {
        max: 5,
      },
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-typos': 'warn',
    'react/display-name': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^@/(.*)$'], // Monorepo packages
          ['^react'], // React imports
          ['^@?\\w'], // Other npm packages
          ['^\\.\\/(.*)$'], // Relative imports
          ['\\.css$'], // CSS imports
        ],
      },
    ],
    // Naming Conventions and Filename Rules
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        // Specify PascalCase for React components
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'filename-rules/match': [
      2,
      {
        '.ts': 'camelcase',
        '.tsx': 'pascalcase',
      },
    ],
    'import/no-default-export': 'error',
    //Arrow Function Styles
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: true,
        disallowPrototype: true,
        returnStyle: 'unchanged',
        allowNamedFunctions: false,
        singleReturnOnly: false,
      },
    ],
    'arrow-body-style': 'warn',
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: true,
      },
    ],
  },
};

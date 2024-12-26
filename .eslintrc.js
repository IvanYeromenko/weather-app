module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'react-hooks',
    'eslint-plugin-import',
    'react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    semi: 1,
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^react', '^react-native'], ['^\\u0000'], ['^@?\\w', '^[^.]', '^\\.']],
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unstable-nested-components': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        /**
         * @see https://github.com/airbnb/javascript#arrows--implicit-return
         */
        arrowParens: 'avoid',
        semi: true,
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    /**
     * max line length
     */
    'max-len': [
      'error',
      {
        code: 100,
        ignoreUrls: true,
        ignoreTrailingComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import .*',
      },
    ],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    /**
     * ES6
     */
    'import/no-namespace': 'error',

    /**
     * @see https://github.com/airbnb/javascript#arrows--use-them
     */
    'prefer-arrow-callback': 'error',

    /**
     * @see https://eslint.org/docs/latest/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * @see https://github.com/airbnb/javascript#arrows--implicit-return
     */
    'arrow-body-style': 'error',

    /**
     * @see https://github.com/airbnb/javascript#arrows--one-arg-parens
     */
    'arrow-parens': 'off',

    /**
     * JSX
     */
    'react/jsx-curly-brace-presence': ['error', {props: 'always'}],

    // others
    'import/newline-after-import': 'warn',

    '@typescript-eslint/naming-convention': [
      'error',
      {
        /**
         * class, interface, typeAlias, enum, typeParameter
         */
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      {
        // interface
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
      {
        // typeParameter
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z]',
          match: true,
        },
      },
      {
        selector: ['variable'],
        format: ['camelCase'],
      },
      {
        selector: ['variable'],
        modifiers: ['const'],
        format: [
          'camelCase' /** Normal const variable */,
          'PascalCase' /** export const */,
          'UPPER_CASE' /** CONSTANT_CASE */,
        ],
      },
      {
        /**
         * Following
         * https://www.typescriptlang.org/docs/handbook/enums.html
         */
        selector: ['enum', 'enumMember'],
        format: ['StrictPascalCase'],
      },
    ],
  },
  settings: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  globals: {
    expectToBeVisible: 'readonly',
    AbortController: 'readonly',
  },
};

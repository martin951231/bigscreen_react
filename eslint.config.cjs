// .eslint.config.js 适配ESLint9.x+Next.js+TS+React+Monorepo 无格式错误
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierPlugin = require('eslint-plugin-prettier');
const importPlugin = require('eslint-plugin-import');

module.exports = [
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'dist/**',
            'build/**',
            'out/**',
            'apps/**/.next/**',
            'apps/**/dist/**',
            '**/*.config.{js,cjs,ts}',
            '**/types/**/*.d.ts'
        ]
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            parser: tsParser,
            parserOptions: {
                project: ['./tsconfig.json', './apps/web/tsconfig.json'],
                tsconfigRootDir: __dirname
            },
            globals: {
                browser: true,
                node: true,
                es2021: true
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            prettier: prettierPlugin,
            import: importPlugin
        },
        rules: {
            'prettier/prettier': 'error',
            eqeqeq: 'error',
            curly: 'error',
            'no-console': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'import/no-extraneous-dependencies': 'warn'
        },
        settings: {
            react: { version: 'detect' }
        }
    },
    {
        files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/**/*.{j,t}s?(x)'],
        languageOptions: {
            globals: {
                jest: true,
                test: true,
                expect: true,
                describe: true
            }
        }
    }
];
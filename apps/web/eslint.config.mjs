import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: ['prettier', 'import'],
    extends: ['plugin:prettier/recommended'],
    rules: {
      // ===== 常规代码规范 =====
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // 生产禁止 console
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }], // 未使用变量警告
      'prefer-const': 'warn', // 优先用 const
      eqeqeq: ['error', 'always'], // 强制 ===
      curly: 'error', // 强制 if/else 使用 {}
      semi: ['error', 'always'], // 强制分号

      // ===== React/JSX 规范 =====
      'react/react-in-jsx-scope': 'off', // Next.js 不需要 React import
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-key': 'warn', // 列表渲染必须 key

      // ===== 其他大厂常用规则 =====
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      // ===== Prettier =====
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          trailingComma: 'all',
          semi: true,
          printWidth: 100,
          endOfLine: 'auto',
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);

export default eslintConfig;

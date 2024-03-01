/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        arrowParens: 'avoid',
        bracketSpacing: true,
        trailingComma: 'none',
        printWidth: 100,
        htmlWhitespaceSensitivity: 'ignore',
        tabWidth: 2
      }
    ],
    eqeqeq: 'warn', // 要求使用 === 和 !==
    camelcase: 'warn', // 要求使用骆驼拼写法命名约定
    quotes: ['warn', 'single', 'avoid-escape'], // 要求统一使用单引号符号
    'no-duplicate-case': 'warn', // 禁止出现重复case
    'no-empty': 'warn', // 禁止出现空语句块
    'no-func-assign': 'warn', // 禁止对Function声明重新赋值
    'no-unreachable': 'warn', // 禁止出现[return|throw]之后的代码块
    'no-empty-function': 'warn', // 禁止出现空的函数块
    'no-var': 'warn', // 禁止出现var用let和const代替
    'no-delete-var': 'off', // 允许出现delete变量的使用
    'no-shadow': 'off', // 允许变量声明与外层作用域的变量同名
    'space-before-blocks': 'warn', // 要求在块之前使用一致的空格
    'space-unary-ops': 'warn', // 要求在一元操作符前后使用一致的空格
    'arrow-spacing': 'warn', // 要求箭头函数的箭头前后使用一致的空格
    'array-bracket-spacing': 'warn' // 要求数组方括号中使用一致的空格
  }
}

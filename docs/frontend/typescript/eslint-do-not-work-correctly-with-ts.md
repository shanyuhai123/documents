---
title: ESLint 错误提示
---

## 情况

ESLint 的提示在 TypeScript 下没有好好工作。



## enum is defined but never used

```tsx
// xxx is defined but never used. eslint(no-unused-vars)
export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}
```

这时该使用 [TypeScript](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-am-using-a-rule-from-eslint-core-and-it-doesnt-work-correctly-with-typescript-code) 的规则取而代之：

```js
module.exports = {
  // ...
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
}

```



## Cannot read property 'loc' of undefined

参考 [Cannot read property 'loc' of undefined](https://github.com/microsoft/vscode-eslint/issues/1149) 修改：

```js
module.exports = {
  // ...
  rules: {
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2
    ]
  }
}
```



## Cannot read property 'body' of null

```tsx
module.exports = {
  // ...
  rules: {
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error'
  }
}
```


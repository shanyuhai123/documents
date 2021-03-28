---
title: npm 传参
---

## npm run

常见的命令行传参是这样：
```bash
# POSIX 风格
npm -h
# GNU 风格
npm --help
# 或许你还见过 Java 风格的，那简直是异教徒！
```

很明显这个参数都是传递给 `npm` 的，而在使用 `npm run` 时我们实际希望使用的时 `package.json` 中 `scripts` 的命令，为了让参数传递到下层，那么自然需要一些[手段](https://docs.npmjs.com/cli/v6/commands/npm-run-script#description)：

```bash
npm run test -- --grep="pattern"
```

在正常的传参前增加 `--` 即可达成。
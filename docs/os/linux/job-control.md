---
title: 作业控制
---

## 介绍

在日常一些使用情况下希望将一些正在执行的命令移至后台，避免关闭



## 步骤

1. 在正在运行命令的控制台按下 `Ctrl + Z`
2. 执行 `jobs` 可查看后台运行的命令，此时会发现之前执行的命令处于 `suspended` 状态
3. 执行 `bg %n`，`n` 为对应的 job ID
4. 再执行 `jobs` 即可发现命令处于 `running` 状态了
5. 但关闭该 session 后 `jobs` 也会停止
6. 解决方案是使用 `disown %n`，关闭 session 后可发现其依旧在运行

> 更快进入后台的方法？
>
> 例如在 `npm run serve` 后加上 `&` 即可，等价 `npm run serve &`


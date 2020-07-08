---
title: 处理 ERR
---

## Net::ERR_INCOMPLETE_CHUNKED_ENCODING

### 1. 磁盘空间不足

首先查看 `nginx` 的日志

```bash
# tail -f error.log
2020/07/08 16:43:44 [crit] 2176#0: *1 pwritev() "/etc/nginx/proxy_temp/1/00/0000000001" failed (28: No space left on device) while reading upstream
```

提示空间不足，再验证磁盘空间

```bash
df -h
# 果然是磁盘占满
Filesystem      Size  Used Avail Use% Mounted on
/dev/vda1        99G   96G  2.7G  100% /
```

清理出一部分空间即可使用了。


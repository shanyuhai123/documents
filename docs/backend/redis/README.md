# 快速尝试 Redis

```bash
docker exec -it some-redis sh
```

## 命令

```bash
# 进入 cli
docker exec -it some-redis redis-cli

# 获取所有 keys
KEYS *

# 清空所有
FLUSHALL
```



## 参考资料

1. [Redis](https://redis.io/documentation)
2. [Redis 命令](https://redis.io/commands)
---
title: 内置变量
---

## 变量

Nginx 提供了丰富的[内置变量](https://nginx.org/en/docs/varindex.html)。

|      variable       |          module          | description                                                  |
| :-----------------: | :----------------------: | ------------------------------------------------------------ |
|       `$args`       |                          | 请求参数                                                     |
|       `$uri`        |                          | 当前请求的 `uri`，不带参数                                   |
|   `$request_uri`    |                          | 请求的 `uri`，带完整参数                                     |
|       `$host`       |                          | 请求报文的 `host` 首部                                       |
|     `$hostname`     |  `ngx_http_core_module`  | Nginx 服务运行在主机的主机名                                 |
|   `$remote_addr`    | `ngx_stream_core_module` | 客户端 IP                                                    |
|   `$remote_port`    | `ngx_stream_core_module` | 客户端端口                                                   |
| `$request_filename` |                          | 用户请求中的 `uri` 经过本地 `root` 或 `alias` 映射后的本地文件路径。可将其加入 `log` 中研究 `root` 和 `alias` |
|   `$server_addr`    | `ngx_stream_core_module` | 服务器 IP                                                    |
|   `$server_port`    | `ngx_stream_core_module` | 服务求端口                                                   |
| `$server_protocol`  |                          | 服务器的 HTTP 协议版本，例 `HTTP/1.0`、`HTTP/1.1`            |
|      `$scheme`      |                          | 请求中的协议，例 `http`、`https`                             |

指定 `module` 时基本上都有 `ngx_http_core_module`。
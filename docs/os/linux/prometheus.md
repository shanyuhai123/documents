---
title: Prometheus
---

## 部署

前往[官网](https://prometheus.io/download/)下载核心：

```bash
# 解压
tar -xvf prometheus-2.24.1.linux-amd64.tar.gz -C /usr/local/

# 链接
cd /usr/local/
ln -sv prometheus-2.24.1.linux-amd64 prometheus

# 测试
cd prometheus
./prometheus # 可在对应 ip 的 9090 端口访问

# 将 prometheus 注册为服务
sudo tee /etc/systemd/system/prometheus.service <<"EOF"
[Unit]
Description=Prometheus Server
Documentation=https://prometheus.io/docs/introduction/overview/
After=network-online.target

[Service]
Restart=on-failure
ExecStart=/usr/local/prometheus/prometheus \
  --config.file=/usr/local/prometheus/prometheus.yml \
  --storage.tsdb.path=/usr/local/prometheus/data

[Install]
WantedBy=multi-user.target
EOF

# 启用
sudo systemctl daemon-reload && \
sudo systemctl start prometheus && \
sudo systemctl status prometheus
```

使用 [Docker](https://hub.docker.com/u/prom) 和 [Ansible](https://github.com/cloudalchemy/ansible-prometheus) 更简单。



## 监控示例

### 1. node exporter

以系统指标 [node_exporter](https://prometheus.io/download/#node_exporter) 为示例，可参照 [node_exporter-as-systemd-service](https://gist.github.com/jarek-przygodzki/735e15337a3502fea40beba27e193b04) 进行配置：

```bash
# 创建用户
sudo useradd -M -s /bin/false node_exporter

# 解压
tar -zxvf ~/node_exporter-1.1.1.linux-amd64.tar.gz -C /usr/local/bin/ --strip-components=1 node_exporter-1.1.1.linux-amd64/node_exporter

# 将 node_exporter 注册为服务
sudo tee /etc/systemd/system/node_exporter.service <<"EOF"
[Unit]
Description=Node Exporter

[Service]
User=node_exporter
Group=node_exporter
EnvironmentFile=-/etc/sysconfig/node_exporter
ExecStart=/usr/local/bin/node_exporter \
  --collector.ntp \
  --collector.mountstats \
  --collector.systemd \
  --collector.tcpstat \
  $OPTIONS

[Install]
WantedBy=multi-user.target
EOF

# 启用
sudo systemctl daemon-reload && \
sudo systemctl start node_exporter && \
sudo systemctl enable node_exporter && \
sudo systemctl status node_exporter
```

根据上面示例，增加多个主机，最后在监控服务的 `prometheus.yml` 文件追加：

```yaml
- job_name: 'node_exporter'
		# 静态配置
    static_configs:
    - targets:
      - 10.0.0.128:9100
      - 10.0.0.132:9100
      - 10.0.0.133:9100
```

更好的选择是服务发现：

+ 基于文件

  ```bash
  # prometheus/prometheus.yml
  scrape_configs:
    - job_name: 'prometheus'
      file_sd_configs:
      - files:
        - targets/prometheus-*.yaml
        refresh_interval: 2m
    - job_name: 'node_exporter'
      file_sd_configs:
      - files:
        - targets/nodes-*.yaml
        refresh_interval: 2m
  ```

  ```bash
  # prometheus/targets/prometheus-servers.yaml
  - targets:
    - 10.0.0.128:9090
    labels:
      app: prometheus
      job: prometheus
  ```

  ```bash
  # prometheus/targets/nodes-linux.yaml
  - targets:
    - 10.0.0.128:9100
    - 10.0.0.132:9100
    - 10.0.0.133:9100
    labels:
      app: node-exporter
      job: node
  ```

+ 基于 DNS

+ 基于 API



## 图形界面

可使用 [grafana](https://hub.docker.com/r/grafana/grafana) 完成图形界面，还提供了方便的 [Dashboards](https://grafana.com/grafana/dashboards?plcmt=footer) 来导入他人的作品。

```bash
docker run -d --name=grafana -p 3000:3000 grafana/grafana
```

稍后访问 `10.0.0.128:3000` 并使用 `admin/admin` 进行登录，在 `Configuration` 启用 `Prometheus`，然后就可以在 `Dashboards` 的 `Manage` 中查看了。
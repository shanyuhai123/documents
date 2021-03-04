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

使用 [Docker](https://hub.docker.com/u/prom) 或 [Ansible](https://github.com/cloudalchemy/ansible-prometheus) 则简单许多：

```bash
docker run --restart=always -d \
	-p 9090:9090 \
	-v /path/to/config:/etc/prometheus \
	--name prometheus \
	prom/prometheus
```



## 配置文件

默认 [prometheus.yml](https://prometheus.io/docs/prometheus/latest/configuration/configuration/) 定义了 4 个 YAML 块：`global`、`alerting`、`rule_files` 和 `scrape_configs`。

```yaml
# my global config
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
    - targets: ['localhost:9090']
```

### 标签

这是 Prometheus 的核心技术，通过重新标记，可以控制、管理并标准化指标。

例如在 Prometheus Web UI 的 `/targets` 页面中的 `Labels`。

有两个阶段可以重新标记：在抓取之前使用 `relabel_configs`，在抓取之后使用 `metric_relabel_configs`。

```yaml
- job_name: 'docker'
  static_configs:
    - targets: ['10.0.0.131:8080', '10.0.0.132:8080', '10.0.0.133:8080']
  metric_relabel_configs:
  	# 通过重新标记来删除指标
  	- source_labels: [__name__]
      separator: ','
      regex: '(container_tasks_state|container_memory_failures_total)'
      action: drop
    # 替换标签值
    - source_labels: [id]
      regex: '/docker/([a-z0-9]+)'
      replacement: '$1'
      target_label: container_id
```



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
      - 10.0.0.131:9100
      - 10.0.0.132:9100
      - 10.0.0.133:9100
```

### 2. Docker 容器

推荐使用 [google/cadvisor](google/cadvisor) 来监控容器：

```bash
docker run --name cadvisor -d \
	-p 8080:8080 \
	-v /:/rootfs:ro \
  -v /var/run:/var/run:ro \
  -v /sys:/sys:ro \
  -v /var/lib/docker/:/var/lib/docker:ro \
  -v /dev/disk/:/dev/disk:ro \
  google/cadvisor
```

### 3. 日志

对于没有设置监控或不容易进行监控的遗留应用程序，重写、修补、重构程序以暴露内部状态的成本很高，而使用日志数据作为抓取时间序列数据的来源则更具有可行性。

在 [examples](https://github.com/google/mtail/tree/master/examples) 中提供了日志解析模板。

```bash
docker run -dP \
   --name myapp-mtail \
   --volumes-from myapp \
   -v examples:/etc/mtail \
   mtail --logs /var/log/myapp --progs /etc/mtail
```

### 4. 黑盒监控

可以使用探针监控来查看应用程序的外部状态，[Blackbox exporter](https://github.com/prometheus/blackbox_exporter)。

先指定要嗅探的配置信息：

```yaml
modules:
  http_2xx:
    prober: http
    timeout: 5s
    http:
      valid_status_codes: []
      method: GET
  icmp_check:
    prober: icmp
    timeout: 5s
    icmp:
      preferred_ip_protocol: "ip4"
  dns_examplecom_check:
    prober: dns
    dns:
      preferred_ip_protocol: "ip4"
      query_name: "www.example.com"
  dns_tcp_example:
    prober: dns
    dns:
      transport_protocol: "tcp" # defaults to "udp"
      preferred_ip_protocol: "ip4" #  defaults to "ip6"
      query_name: "www.prometheus.io"
```

再根据配置文件运行：

```bash
docker run --rm -d \
	-p 9115:9115 \
	-v `pwd`:/config \
	--name blackbox_exporter \
	prom/blackbox-exporter:master \
	--config.file=/config/prober.yml
```



## 服务发现

对于主机比较少时编辑配置还可以，但随着数量上升就该选择更优雅的形式了。

### 1. 基于文件

仅仅前进了一小步，但与配置管理工具结合起来倒是很好用。

```yaml
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

```yaml
# prometheus/targets/prometheus-servers.yaml
- targets:
  - 10.0.0.131:9090
  labels:
    app: prometheus
    job: prometheus
```

```yaml
# prometheus/targets/nodes-linux.yaml
- targets:
  - 10.0.0.131:9100
  - 10.0.0.132:9100
  - 10.0.0.133:9100
  labels:
    app: node-exporter
    job: node
```

### 2. 基于 API

暂不考虑该形式，待后期直接上 k8s。

### 3. 基于 DNS

可配合 [docker-dnsmasq](https://github.com/jpillora/docker-dnsmasq) 快速使用。

```yaml
# prometheus 设置
- job_name: 'dns-srv'
  metrics_path: "/metrics"
  dns_sd_configs:
  - names: ['_prometheus._tcp.example.com']
```

```bash
# dnsmasq 解析 srv
# A SRV record sending LDAP for the example.com domain to ldapserver.example.com port 289
# srv-host=_ldap._tcp.example.com,ldapserver.example.com,389
srv-host =_prometheus._tcp.example.com,dns1.example.com,9100
srv-host =_prometheus._tcp.example.com,dns2.example.com,9100
srv-host =_prometheus._tcp.example.com,dns3.example.com,9100
```

```bash
# dnsmasq 解析 ip
dns1.example.com 10.0.0.131
dns2.example.com 10.0.0.132
dns3.example.com 10.0.0.133
```



## 图形界面

可使用 [grafana](https://hub.docker.com/r/grafana/grafana) 完成图形界面，还提供了方便的 [Dashboards](https://grafana.com/grafana/dashboards?plcmt=footer) 来导入他人的作品。

```bash
docker run --restart=always -d \
	-p 3000:3000 \
	--name grafana \
	grafana/grafana
```

稍后访问 `10.0.0.128:3000` 并使用 `admin/admin` 进行登录，在 `Configuration` 启用 `Prometheus`，然后就可以在 `Dashboards` 的 `Manage` 中查看了。



## 警报

良好的警报应该具备以下特征：

1. 适当数量的警报，关注症状而不是原因
2. 应设置正确的警报优先级
3. 警报应包括适当的上下文，以便它们可以立即使用

我们会在 Prometheus 服务器上编写警报规则，这些规则将使用收集的指标并在指定的阈值或标准上触发警报，还可以为警报添加一些上下文。当指标达到阈值或标准时，会生成一个警报并将其推送到 Alertmanager。

可以参考一些报警规则 [Awesome Prometheus alerts](https://awesome-prometheus-alerts.grep.to/)。

### alertmanager

Alertmanager 会对警报进行去重、分组，然后路由到不同的接收器，如电子邮件、短信或 SaaS 服务等。

```bash
docker run --restart=always -d \
	-p 9093:9093 \
	-v /path/alertmanager.yml:/etc/alertmanager/alertmanager.yml \
	--name alertmanager \
	prom/alertmanager
```

### 配置注意项

默认 `prometheus.yml` 中 `alertmanager:9093` 在 hosts 解析下才会生效，可手动指定 `ip:port` 解决。

`alertmanager.yml` 默认情况下所有警报都组合在一起，指定 `group_by: ['instance']` 可根据实例组合在一起。

更多配置可见 [route](https://prometheus.io/docs/alerting/latest/configuration/#route)。


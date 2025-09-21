import{_ as a,c as n,a as e,o as p}from"./app-BoSqM2g3.js";const t={};function l(o,s){return p(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus"><span>Prometheus</span></a></h1><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p>前往<a href="https://prometheus.io/download/" target="_blank" rel="noopener noreferrer">官网</a>下载核心：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> prometheus-2.24.1.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 链接</span></span>
<span class="line"><span class="token builtin class-name">cd</span> /usr/local/</span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-sv</span> prometheus-2.24.1.linux-amd64 prometheus</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试</span></span>
<span class="line"><span class="token builtin class-name">cd</span> prometheus</span>
<span class="line">./prometheus <span class="token comment"># 可在对应 ip 的 9090 端口访问</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将 prometheus 注册为服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">tee</span> /etc/systemd/system/prometheus.service <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;</span>
<span class="line">[Unit]</span>
<span class="line">Description=Prometheus Server</span>
<span class="line">Documentation=https://prometheus.io/docs/introduction/overview/</span>
<span class="line">After=network-online.target</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">Restart=on-failure</span>
<span class="line">ExecStart=/usr/local/prometheus/prometheus \\</span>
<span class="line">  --config.file=/usr/local/prometheus/prometheus.yml \\</span>
<span class="line">  --storage.tsdb.path=/usr/local/prometheus/data</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用</span></span>
<span class="line"><span class="token function">sudo</span> systemctl daemon-reload <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start prometheus <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">sudo</span> systemctl status prometheus</span>
<span class="line"></span></code></pre></div><p>使用 <a href="https://hub.docker.com/u/prom" target="_blank" rel="noopener noreferrer">Docker</a> 或 <a href="https://github.com/cloudalchemy/ansible-prometheus" target="_blank" rel="noopener noreferrer">Ansible</a> 则简单许多：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">9090</span>:9090 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /path/to/config:/etc/prometheus <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> prometheus <span class="token punctuation">\\</span></span>
<span class="line">  prom/prometheus</span>
<span class="line"></span></code></pre></div><h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><p>默认 <a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/" target="_blank" rel="noopener noreferrer">prometheus.yml</a> 定义了 4 个 YAML 块：<code>global</code>、<code>alerting</code>、<code>rule_files</code> 和 <code>scrape_configs</code>。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># my global config</span></span>
<span class="line"><span class="token key atrule">global</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span>     15s <span class="token comment"># Set the scrape interval to every 15 seconds. Default is every 1 minute.</span></span>
<span class="line">  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># Evaluate rules every 15 seconds. The default is every 1 minute.</span></span>
<span class="line">  <span class="token comment"># scrape_timeout is set to the global default (10s).</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Alertmanager configuration</span></span>
<span class="line"><span class="token key atrule">alerting</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">static_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># - alertmanager:9093</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Load rules once and periodically evaluate them according to the global &#39;evaluation_interval&#39;.</span></span>
<span class="line"><span class="token key atrule">rule_files</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># - &quot;first_rules.yml&quot;</span></span>
<span class="line">  <span class="token comment"># - &quot;second_rules.yml&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># A scrape configuration containing exactly one endpoint to scrape:</span></span>
<span class="line"><span class="token comment"># Here it&#39;s Prometheus itself.</span></span>
<span class="line"><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># The job name is added as a label \`job=&lt;job_name&gt;\` to any timeseries scraped from this config.</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;prometheus&#39;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># metrics_path defaults to &#39;/metrics&#39;</span></span>
<span class="line">    <span class="token comment"># scheme defaults to &#39;http&#39;.</span></span>
<span class="line"></span>
<span class="line">    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;localhost:9090&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3><p>这是 Prometheus 的核心技术，通过重新标记，可以控制、管理并标准化指标。</p><p>例如在 Prometheus Web UI 的 <code>/targets</code> 页面中的 <code>Labels</code>。</p><p>有两个阶段可以重新标记：在抓取之前使用 <code>relabel_configs</code>，在抓取之后使用 <code>metric_relabel_configs</code>。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;docker&#39;</span></span>
<span class="line">  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;10.0.0.131:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10.0.0.132:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;10.0.0.133:8080&#39;</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token key atrule">metric_relabel_configs</span><span class="token punctuation">:</span></span>
<span class="line">   <span class="token comment"># 通过重新标记来删除指标</span></span>
<span class="line">   <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>__name__<span class="token punctuation">]</span></span>
<span class="line">      <span class="token key atrule">separator</span><span class="token punctuation">:</span> <span class="token string">&#39;,&#39;</span></span>
<span class="line">      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;(container_tasks_state|container_memory_failures_total)&#39;</span></span>
<span class="line">      <span class="token key atrule">action</span><span class="token punctuation">:</span> drop</span>
<span class="line">    <span class="token comment"># 替换标签值</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span></span>
<span class="line">      <span class="token key atrule">regex</span><span class="token punctuation">:</span> <span class="token string">&#39;/docker/([a-z0-9]+)&#39;</span></span>
<span class="line">      <span class="token key atrule">replacement</span><span class="token punctuation">:</span> <span class="token string">&#39;$1&#39;</span></span>
<span class="line">      <span class="token key atrule">target_label</span><span class="token punctuation">:</span> container_id</span>
<span class="line"></span></code></pre></div><h2 id="监控示例" tabindex="-1"><a class="header-anchor" href="#监控示例"><span>监控示例</span></a></h2><h3 id="_1-node-exporter" tabindex="-1"><a class="header-anchor" href="#_1-node-exporter"><span>1. node exporter</span></a></h3><p>以系统指标 <a href="https://prometheus.io/download/#node_exporter" target="_blank" rel="noopener noreferrer">node_exporter</a> 为示例，可参照 <a href="https://gist.github.com/jarek-przygodzki/735e15337a3502fea40beba27e193b04" target="_blank" rel="noopener noreferrer">node_exporter-as-systemd-service</a> 进行配置：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建用户</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">useradd</span> <span class="token parameter variable">-M</span> <span class="token parameter variable">-s</span> /bin/false node_exporter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 解压</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> ~/node_exporter-1.1.1.linux-amd64.tar.gz <span class="token parameter variable">-C</span> /usr/local/bin/ --strip-components<span class="token operator">=</span><span class="token number">1</span> node_exporter-1.1.1.linux-amd64/node_exporter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 将 node_exporter 注册为服务</span></span>
<span class="line"><span class="token function">sudo</span> <span class="token function">tee</span> /etc/systemd/system/node_exporter.service <span class="token operator">&lt;&lt;</span><span class="token string">&quot;EOF&quot;</span>
<span class="line">[Unit]</span>
<span class="line">Description=Node Exporter</span>
<span class="line"></span>
<span class="line">[Service]</span>
<span class="line">User=node_exporter</span>
<span class="line">Group=node_exporter</span>
<span class="line">EnvironmentFile=-/etc/sysconfig/node_exporter</span>
<span class="line">ExecStart=/usr/local/bin/node_exporter \\</span>
<span class="line">  --collector.ntp \\</span>
<span class="line">  --collector.mountstats \\</span>
<span class="line">  --collector.systemd \\</span>
<span class="line">  --collector.tcpstat \\</span>
<span class="line">  $OPTIONS</span>
<span class="line"></span>
<span class="line">[Install]</span>
<span class="line">WantedBy=multi-user.target</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启用</span></span>
<span class="line"><span class="token function">sudo</span> systemctl daemon-reload <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">sudo</span> systemctl start node_exporter <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> node_exporter <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token function">sudo</span> systemctl status node_exporter</span>
<span class="line"></span></code></pre></div><p>根据上面示例，增加多个主机，最后在监控服务的 <code>prometheus.yml</code> 文件追加：</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;node_exporter&#39;</span></span>
<span class="line">  <span class="token comment"># 静态配置</span></span>
<span class="line">    <span class="token key atrule">static_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line">      <span class="token punctuation">-</span> 10.0.0.132<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line">      <span class="token punctuation">-</span> 10.0.0.133<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-docker-容器" tabindex="-1"><a class="header-anchor" href="#_2-docker-容器"><span>2. Docker 容器</span></a></h3><p>推荐使用 <a href="google/cadvisor">google/cadvisor</a> 来监控容器：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--name</span> cadvisor <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /:/rootfs:ro <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /var/run:/var/run:ro <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /sys:/sys:ro <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /var/lib/docker/:/var/lib/docker:ro <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> /dev/disk/:/dev/disk:ro <span class="token punctuation">\\</span></span>
<span class="line">  google/cadvisor</span>
<span class="line"></span></code></pre></div><h3 id="_3-日志" tabindex="-1"><a class="header-anchor" href="#_3-日志"><span>3. 日志</span></a></h3><p>对于没有设置监控或不容易进行监控的遗留应用程序，重写、修补、重构程序以暴露内部状态的成本很高，而使用日志数据作为抓取时间序列数据的来源则更具有可行性。</p><p>在 <a href="https://github.com/google/mtail/tree/master/examples" target="_blank" rel="noopener noreferrer">examples</a> 中提供了日志解析模板。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-dP</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--name</span> myapp-mtail <span class="token punctuation">\\</span></span>
<span class="line">  --volumes-from myapp <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">-v</span> examples:/etc/mtail <span class="token punctuation">\\</span></span>
<span class="line">  mtail <span class="token parameter variable">--logs</span> /var/log/myapp <span class="token parameter variable">--progs</span> /etc/mtail</span>
<span class="line"></span></code></pre></div><h3 id="_4-黑盒监控" tabindex="-1"><a class="header-anchor" href="#_4-黑盒监控"><span>4. 黑盒监控</span></a></h3><p>可以使用探针监控来查看应用程序的外部状态，<a href="https://github.com/prometheus/blackbox_exporter" target="_blank" rel="noopener noreferrer">Blackbox exporter</a>。</p><p>先指定要嗅探的配置信息：</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">modules</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">http_2xx</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">prober</span><span class="token punctuation">:</span> http</span>
<span class="line">    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s</span>
<span class="line">    <span class="token key atrule">http</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">valid_status_codes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token key atrule">method</span><span class="token punctuation">:</span> GET</span>
<span class="line">  <span class="token key atrule">icmp_check</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">prober</span><span class="token punctuation">:</span> icmp</span>
<span class="line">    <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 5s</span>
<span class="line">    <span class="token key atrule">icmp</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span></span>
<span class="line">  <span class="token key atrule">dns_examplecom_check</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">prober</span><span class="token punctuation">:</span> dns</span>
<span class="line">    <span class="token key atrule">dns</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span></span>
<span class="line">      <span class="token key atrule">query_name</span><span class="token punctuation">:</span> <span class="token string">&quot;www.example.com&quot;</span></span>
<span class="line">  <span class="token key atrule">dns_tcp_example</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">prober</span><span class="token punctuation">:</span> dns</span>
<span class="line">    <span class="token key atrule">dns</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">transport_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;tcp&quot;</span> <span class="token comment"># defaults to &quot;udp&quot;</span></span>
<span class="line">      <span class="token key atrule">preferred_ip_protocol</span><span class="token punctuation">:</span> <span class="token string">&quot;ip4&quot;</span> <span class="token comment">#  defaults to &quot;ip6&quot;</span></span>
<span class="line">      <span class="token key atrule">query_name</span><span class="token punctuation">:</span> <span class="token string">&quot;www.prometheus.io&quot;</span></span>
<span class="line"></span></code></pre></div><p>再根据配置文件运行：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--rm</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-p</span> <span class="token number">9115</span>:9115 <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-v</span> <span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>:/config <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">--name</span> blackbox_exporter <span class="token punctuation">\\</span></span>
<span class="line"> prom/blackbox-exporter:master <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">--config.file</span><span class="token operator">=</span>/config/prober.yml</span>
<span class="line"></span></code></pre></div><h2 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现"><span>服务发现</span></a></h2><p>对于主机比较少时编辑配置还可以，但随着数量上升就该选择更优雅的形式了。</p><h3 id="_1-基于文件" tabindex="-1"><a class="header-anchor" href="#_1-基于文件"><span>1. 基于文件</span></a></h3><p>仅仅前进了一小步，但与配置管理工具结合起来倒是很好用。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># prometheus/prometheus.yml</span></span>
<span class="line"><span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;prometheus&#39;</span></span>
<span class="line">    <span class="token key atrule">file_sd_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">files</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> targets/prometheus<span class="token punctuation">-</span><span class="token important">*.yaml</span></span>
<span class="line">      <span class="token key atrule">refresh_interval</span><span class="token punctuation">:</span> 2m</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;node_exporter&#39;</span></span>
<span class="line">    <span class="token key atrule">file_sd_configs</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">files</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> targets/nodes<span class="token punctuation">-</span><span class="token important">*.yaml</span></span>
<span class="line">      <span class="token key atrule">refresh_interval</span><span class="token punctuation">:</span> 2m</span>
<span class="line"></span></code></pre></div><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># prometheus/targets/prometheus-servers.yaml</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9090</span></span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> prometheus</span>
<span class="line">    <span class="token key atrule">job</span><span class="token punctuation">:</span> prometheus</span>
<span class="line"></span></code></pre></div><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># prometheus/targets/nodes-linux.yaml</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> 10.0.0.131<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line">  <span class="token punctuation">-</span> 10.0.0.132<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line">  <span class="token punctuation">-</span> 10.0.0.133<span class="token punctuation">:</span><span class="token number">9100</span></span>
<span class="line">  <span class="token key atrule">labels</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">app</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>exporter</span>
<span class="line">    <span class="token key atrule">job</span><span class="token punctuation">:</span> node</span>
<span class="line"></span></code></pre></div><h3 id="_2-基于-api" tabindex="-1"><a class="header-anchor" href="#_2-基于-api"><span>2. 基于 API</span></a></h3><p>暂不考虑该形式，待后期直接上 k8s。</p><h3 id="_3-基于-dns" tabindex="-1"><a class="header-anchor" href="#_3-基于-dns"><span>3. 基于 DNS</span></a></h3><p>可配合 <a href="https://github.com/jpillora/docker-dnsmasq" target="_blank" rel="noopener noreferrer">docker-dnsmasq</a> 快速使用。</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># prometheus 设置</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;dns-srv&#39;</span></span>
<span class="line">  <span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> <span class="token string">&quot;/metrics&quot;</span></span>
<span class="line">  <span class="token key atrule">dns_sd_configs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">names</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;_prometheus._tcp.example.com&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># dnsmasq 解析 srv</span></span>
<span class="line"><span class="token comment"># A SRV record sending LDAP for the example.com domain to ldapserver.example.com port 289</span></span>
<span class="line"><span class="token comment"># srv-host=_ldap._tcp.example.com,ldapserver.example.com,389</span></span>
<span class="line">srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns1.example.com,9100</span>
<span class="line">srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns2.example.com,9100</span>
<span class="line">srv-host <span class="token operator">=</span>_prometheus._tcp.example.com,dns3.example.com,9100</span>
<span class="line"></span></code></pre></div><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># dnsmasq 解析 ip</span></span>
<span class="line">dns1.example.com <span class="token number">10.0</span>.0.131</span>
<span class="line">dns2.example.com <span class="token number">10.0</span>.0.132</span>
<span class="line">dns3.example.com <span class="token number">10.0</span>.0.133</span>
<span class="line"></span></code></pre></div><h2 id="图形界面" tabindex="-1"><a class="header-anchor" href="#图形界面"><span>图形界面</span></a></h2><p>可使用 <a href="https://hub.docker.com/r/grafana/grafana" target="_blank" rel="noopener noreferrer">grafana</a> 完成图形界面，还提供了方便的 <a href="https://grafana.com/grafana/dashboards?plcmt=footer" target="_blank" rel="noopener noreferrer">Dashboards</a> 来导入他人的作品。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-p</span> <span class="token number">3000</span>:3000 <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">--name</span> grafana <span class="token punctuation">\\</span></span>
<span class="line"> grafana/grafana</span>
<span class="line"></span></code></pre></div><p>稍后访问 <code>10.0.0.128:3000</code> 并使用 <code>admin/admin</code> 进行登录，在 <code>Configuration</code> 启用 <code>Prometheus</code>，然后就可以在 <code>Dashboards</code> 的 <code>Manage</code> 中查看了。</p><h2 id="警报" tabindex="-1"><a class="header-anchor" href="#警报"><span>警报</span></a></h2><p>良好的警报应该具备以下特征：</p><ol><li>适当数量的警报，关注症状而不是原因</li><li>应设置正确的警报优先级</li><li>警报应包括适当的上下文，以便它们可以立即使用</li></ol><p>我们会在 Prometheus 服务器上编写警报规则，这些规则将使用收集的指标并在指定的阈值或标准上触发警报，还可以为警报添加一些上下文。当指标达到阈值或标准时，会生成一个警报并将其推送到 Alertmanager。</p><p>可以参考一些报警规则 <a href="https://awesome-prometheus-alerts.grep.to/" target="_blank" rel="noopener noreferrer">Awesome Prometheus alerts</a>。</p><h3 id="alertmanager" tabindex="-1"><a class="header-anchor" href="#alertmanager"><span>alertmanager</span></a></h3><p>Alertmanager 会对警报进行去重、分组，然后路由到不同的接收器，如电子邮件、短信或 SaaS 服务等。</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-p</span> <span class="token number">9093</span>:9093 <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">-v</span> /path/alertmanager.yml:/etc/alertmanager/alertmanager.yml <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token parameter variable">--name</span> alertmanager <span class="token punctuation">\\</span></span>
<span class="line"> prom/alertmanager</span>
<span class="line"></span></code></pre></div><h3 id="配置注意项" tabindex="-1"><a class="header-anchor" href="#配置注意项"><span>配置注意项</span></a></h3><p>默认 <code>prometheus.yml</code> 中 <code>alertmanager:9093</code> 在 hosts 解析下才会生效，可手动指定 <code>ip:port</code> 解决。</p><p><code>alertmanager.yml</code> 默认情况下所有警报都组合在一起，指定 <code>group_by: [&#39;instance&#39;]</code> 可根据实例组合在一起。</p><p>更多配置可见 <a href="https://prometheus.io/docs/alerting/latest/configuration/#route" target="_blank" rel="noopener noreferrer">route</a>。</p>`,63)])])}const r=a(t,[["render",l]]),i=JSON.parse('{"path":"/os/linux/prometheus.html","title":"Prometheus","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[{"level":3,"title":"标签","slug":"标签","link":"#标签","children":[]}]},{"level":2,"title":"监控示例","slug":"监控示例","link":"#监控示例","children":[{"level":3,"title":"1. node exporter","slug":"_1-node-exporter","link":"#_1-node-exporter","children":[]},{"level":3,"title":"2. Docker 容器","slug":"_2-docker-容器","link":"#_2-docker-容器","children":[]},{"level":3,"title":"3. 日志","slug":"_3-日志","link":"#_3-日志","children":[]},{"level":3,"title":"4. 黑盒监控","slug":"_4-黑盒监控","link":"#_4-黑盒监控","children":[]}]},{"level":2,"title":"服务发现","slug":"服务发现","link":"#服务发现","children":[{"level":3,"title":"1. 基于文件","slug":"_1-基于文件","link":"#_1-基于文件","children":[]},{"level":3,"title":"2. 基于 API","slug":"_2-基于-api","link":"#_2-基于-api","children":[]},{"level":3,"title":"3. 基于 DNS","slug":"_3-基于-dns","link":"#_3-基于-dns","children":[]}]},{"level":2,"title":"图形界面","slug":"图形界面","link":"#图形界面","children":[]},{"level":2,"title":"警报","slug":"警报","link":"#警报","children":[{"level":3,"title":"alertmanager","slug":"alertmanager","link":"#alertmanager","children":[]},{"level":3,"title":"配置注意项","slug":"配置注意项","link":"#配置注意项","children":[]}]}],"git":{"updatedTime":1637154410000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":3,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"os/linux/prometheus.md"}');export{r as comp,i as data};

import{_ as o,M as l,p,q as i,a1 as t,R as n,t as a,N as c}from"./framework-e3e34937.js";const r={},d={href:"https://www.freedesktop.org/software/systemd/man/systemd.unit.html",target:"_blank",rel:"noopener noreferrer"},m={href:"http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html",target:"_blank",rel:"noopener noreferrer"};function u(k,s){const e=l("ExternalLinkIcon");return p(),i("div",null,[s[4]||(s[4]=t(`<h1 id="守护系统-systemd" tabindex="-1"><a class="header-anchor" href="#守护系统-systemd" aria-hidden="true">#</a> 守护系统 systemd</h1><p>Systemd 设计的目标是，为系统的启动和管理提供一整套的完整解决方案。</p><p>根据 Linux 惯例，字母 <code>d</code> 是守护进程（daemon）的缩写。Systemd 这个名字的含义，就是它要守护整个系统。</p><p>Systemd 的优点是功能强大，使用方便，缺点是体系庞大，非常复杂。事实上，现在还有很多人反对使用 Systemd，理由就是它过于复杂，与操作系统的其他部分强耦合，违反 ”keep simple，keep stupid“ 的 Unix 哲学。</p><blockquote><p>原文实在是太详细了，实在没必要重复整理。</p></blockquote><h2 id="实战" tabindex="-1"><a class="header-anchor" href="#实战" aria-hidden="true">#</a> 实战</h2><p>模拟一个操作基本的操作流程：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 有些软件支持 Systemd，安装时，会自动在 \`/usr/lib/systemd/system\` 目录添加一个配置文件</span>
<span class="token comment"># 然后就可以让其开机自启了</span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> httpd
<span class="token comment"># 上面的命令相当于在 \`/etc/systemd/system\` 目录添加一个符号链接，指向 \`/usr/lib/systemd/system\` 里面的 \`httpd.service\` 文件。</span>
<span class="token comment"># 这是因为开机时，Systemd 只执行 \`/etc/systemd/system\` 目录里面的配置文件。这也意味着，如果把修改后的配置文件放在该目录，就可以达到覆盖原始配置的效果。</span>

<span class="token comment"># 设置开机启动以后，软件并不会立即启动，必须等到下一次开机。如果想现在就运行该软件，那么要执行 \`systemctl start\` 命令。</span>
<span class="token function">sudo</span> systemctl start httpd
<span class="token comment"># 执行上面的命令以后，有可能启动失败，因此要用systemctl status命令查看一下该服务的状态。</span>

<span class="token comment"># 终止正在运行的服务，需要执行 \`systemctl stop\` 命令。</span>
<span class="token function">sudo</span> systemctl stop httpd.service
<span class="token comment"># 有时候，该命令可能没有响应，服务停不下来。这时候就不得不&quot;杀进程&quot;了，向正在运行的进程发出kill信号。</span>
<span class="token function">sudo</span> systemctl <span class="token function">kill</span> httpd.service
<span class="token comment"># 此外，重启服务要执行systemctl restart命令。</span>
<span class="token function">sudo</span> systemctl restart httpd.service

<span class="token comment"># 一个服务怎么启动，完全由它的配置文件决定。</span>
systemctl <span class="token function">cat</span> sshd.service

<span class="token comment"># 修改配置文件以后，需要重新加载配置文件，然后重新启动相关服务。</span>
<span class="token comment"># 重新加载配置文件</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 重启相关服务</span>
<span class="token function">sudo</span> systemctl restart foobar
</code></pre></div><h2 id="系统管理" tabindex="-1"><a class="header-anchor" href="#系统管理" aria-hidden="true">#</a> 系统管理</h2><p>Systemd 并不是一个命令，而是一组命令，涉及系统管理的方方面面。</p><h3 id="_1-systemctl" tabindex="-1"><a class="header-anchor" href="#_1-systemctl" aria-hidden="true">#</a> 1. systemctl</h3><p><code>systemctl</code> 是 Systemd 的主命令，用于管理系统。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重启系统</span>
<span class="token function">sudo</span> systemctl <span class="token function">reboot</span>

<span class="token comment"># 关闭系统，切断电源</span>
<span class="token function">sudo</span> systemctl poweroff

<span class="token comment"># CPU停止工作</span>
<span class="token function">sudo</span> systemctl <span class="token function">halt</span>

<span class="token comment"># 暂停系统</span>
<span class="token function">sudo</span> systemctl <span class="token function">suspend</span>

<span class="token comment"># 让系统进入冬眠状态</span>
<span class="token function">sudo</span> systemctl hibernate

<span class="token comment"># 让西荣进入交互式休眠状态</span>
<span class="token function">sudo</span> systemctl hybrid-sleep

<span class="token comment"># 启动进入救援状态</span>
<span class="token function">sudo</span> systemctl rescue
</code></pre></div><h3 id="_2-systemd-analyze" tabindex="-1"><a class="header-anchor" href="#_2-systemd-analyze" aria-hidden="true">#</a> 2. systemd-analyze</h3><p><code>systemd-analyze</code> 命令用于查看启动耗时。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看启动耗时</span>
systemd-analyze                                                                                       

<span class="token comment"># 查看每个服务的启动耗时</span>
systemd-analyze blame

<span class="token comment"># 显示瀑布状的启动过程流</span>
systemd-analyze critical-chain

<span class="token comment"># 显示指定服务的启动流</span>
systemd-analyze critical-chain atd.service
</code></pre></div><h3 id="_3-hostnamectl" tabindex="-1"><a class="header-anchor" href="#_3-hostnamectl" aria-hidden="true">#</a> 3. hostnamectl</h3><p><code>hostnamectl</code>命令用于查看当前主机的信息。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示当前主机的信息</span>
hostnamectl

<span class="token comment"># 设置主机名。</span>
<span class="token function">sudo</span> hostnamectl set-hostname rhel7
</code></pre></div><h3 id="_4-localectl" tabindex="-1"><a class="header-anchor" href="#_4-localectl" aria-hidden="true">#</a> 4. localectl</h3><p><code>localectl</code>命令用于查看本地化设置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看本地化设置</span>
localectl

<span class="token comment"># 设置本地化参数。</span>
<span class="token function">sudo</span> localectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_GB.utf8
<span class="token function">sudo</span> localectl set-keymap en_GB
</code></pre></div><h3 id="_5-timedatectl" tabindex="-1"><a class="header-anchor" href="#_5-timedatectl" aria-hidden="true">#</a> 5. timedatectl</h3><p><code>timedatectl</code>命令用于查看当前时区设置。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前时区设置</span>
timedatectl

<span class="token comment"># 显示所有可用的时区</span>
timedatectl list-timezones                                                                                   
<span class="token comment"># 设置当前时区</span>
<span class="token function">sudo</span> timedatectl set-timezone America/New_York
<span class="token function">sudo</span> timedatectl set-time YYYY-MM-DD
<span class="token function">sudo</span> timedatectl set-time HH:MM:SS
</code></pre></div><h3 id="_6-loginctl" tabindex="-1"><a class="header-anchor" href="#_6-loginctl" aria-hidden="true">#</a> 6. loginctl</h3><p><code>loginctl</code>命令用于查看当前登录的用户。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出当前session</span>
loginctl list-sessions

<span class="token comment"># 列出当前登录用户</span>
loginctl list-users

<span class="token comment"># 列出显示指定用户的信息</span>
loginctl show-user ruanyf
</code></pre></div><h2 id="unit" tabindex="-1"><a class="header-anchor" href="#unit" aria-hidden="true">#</a> Unit</h2><p>Systemd 可以管理所有系统资源。不同的资源统称为 Unit（单位）。</p><p>Unit 一共分成12种。</p><blockquote><ul><li>Service unit：系统服务</li><li>Target unit：多个 Unit 构成的一个组</li><li>Device Unit：硬件设备</li><li>Mount Unit：文件系统的挂载点</li><li>Automount Unit：自动挂载点</li><li>Path Unit：文件或路径</li><li>Scope Unit：不是由 Systemd 启动的外部进程</li><li>Slice Unit：进程组</li><li>Snapshot Unit：Systemd 快照，可以切回某个快照</li><li>Socket Unit：进程间通信的 socket</li><li>Swap Unit：swap 文件</li><li>Timer Unit：定时器</li></ul></blockquote><p><code>systemctl list-units</code> 命令可以查看当前系统的所有 Unit 。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出正在运行的 Unit</span>
systemctl list-units

<span class="token comment"># 列出所有Unit，包括没有找到配置文件的或者启动失败的</span>
systemctl list-units <span class="token parameter variable">--all</span>

<span class="token comment"># 列出所有没有运行的 Unit</span>
systemctl list-units <span class="token parameter variable">--all</span> <span class="token parameter variable">--state</span><span class="token operator">=</span>inactive

<span class="token comment"># 列出所有加载失败的 Unit</span>
systemctl list-units <span class="token parameter variable">--failed</span>

<span class="token comment"># 列出所有正在运行的、类型为 service 的 Unit</span>
systemctl list-units <span class="token parameter variable">--type</span><span class="token operator">=</span>service
</code></pre></div><h3 id="_1-unit-的状态" tabindex="-1"><a class="header-anchor" href="#_1-unit-的状态" aria-hidden="true">#</a> 1. Unit 的状态</h3><p><code>systemctl status</code> 命令用于查看系统状态和单个 Unit 的状态。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示系统状态</span>
systemctl status

<span class="token comment"># 显示单个 Unit 的状态</span>
sysystemctl status bluetooth.service

<span class="token comment"># 显示远程主机的某个 Unit 的状态</span>
systemctl <span class="token parameter variable">-H</span> root@rhel7.example.com status httpd.service
</code></pre></div><p>除了 <code>status</code> 命令，<code>systemctl</code> 还提供了三个查询状态的简单方法，主要供脚本内部的判断语句使用。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 显示某个 Unit 是否正在运行</span>
systemctl is-active application.service

<span class="token comment"># 显示某个 Unit 是否处于启动失败状态</span>
systemctl is-failed application.service

<span class="token comment"># 显示某个 Unit 服务是否建立了启动链接</span>
systemctl is-enabled application.service
</code></pre></div><h3 id="_2-unit-管理" tabindex="-1"><a class="header-anchor" href="#_2-unit-管理" aria-hidden="true">#</a> 2. Unit 管理</h3><p><strong>对于用户来说，最常用的是下面这些命令，用于启动和停止 Unit（主要是 service）。</strong></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 立即启动一个服务</span>
<span class="token function">sudo</span> systemctl start apache.service

<span class="token comment"># 立即停止一个服务</span>
<span class="token function">sudo</span> systemctl stop apache.service

<span class="token comment"># 重启一个服务</span>
<span class="token function">sudo</span> systemctl restart apache.service

<span class="token comment"># 杀死一个服务的所有子进程</span>
<span class="token function">sudo</span> systemctl <span class="token function">kill</span> apache.service

<span class="token comment"># 重新加载一个服务的配置文件</span>
<span class="token function">sudo</span> systemctl reload apache.service

<span class="token comment"># 重载所有修改过的配置文件</span>
<span class="token function">sudo</span> systemctl daemon-reload

<span class="token comment"># 显示某个 Unit 的所有底层参数</span>
systemctl show httpd.service

<span class="token comment"># 显示某个 Unit 的指定属性的值</span>
systemctl show <span class="token parameter variable">-p</span> CPUShares httpd.service

<span class="token comment"># 设置某个 Unit 的指定属性</span>
<span class="token function">sudo</span> systemctl set-property httpd.service <span class="token assign-left variable">CPUShares</span><span class="token operator">=</span><span class="token number">500</span>
</code></pre></div><h3 id="_3-依赖关系" tabindex="-1"><a class="header-anchor" href="#_3-依赖关系" aria-hidden="true">#</a> 3. 依赖关系</h3><p>Unit 之间存在依赖关系：A 依赖于 B，就意味着 Systemd 在启动 A 的时候，同时会去启动 B。</p><p><code>systemctl list-dependencies</code> 命令列出一个 Unit 的所有依赖。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl list-dependencies nginx.service
</code></pre></div><p>上面命令的输出结果之中，有些依赖是 Target 类型（详见下文），默认不会展开显示。如果要展开 Target，就需要使用 <code>--all</code> 参数。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl list-dependencies <span class="token parameter variable">--all</span> nginx.service
</code></pre></div><h2 id="unit-的配置文件" tabindex="-1"><a class="header-anchor" href="#unit-的配置文件" aria-hidden="true">#</a> Unit 的配置文件</h2><p>每一个 Unit 都有一个配置文件，告诉 Systemd 怎么启动这个 Unit 。</p><p>Systemd 默认从目录 <code>/etc/systemd/system/</code> 读取配置文件。但是，里面存放的大部分文件都是符号链接，指向目录 <code>/usr/lib/systemd/system/</code>，真正的配置文件存放在那个目录。</p><p><code>systemctl enable</code> 命令用于在上面两个目录之间，建立符号链接关系。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> clamd@scan.service
<span class="token comment"># 等同于</span>
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;/usr/lib/systemd/system/clamd@scan.service&#39;</span> <span class="token string">&#39;/etc/systemd/system/multi-user.target.wants/clamd@scan.service&#39;</span>
</code></pre></div><p>如果配置文件里面设置了开机启动，<code>systemctl enable</code> 命令相当于激活开机启动。</p><p>与之对应的，<code>systemctl disable</code> 命令用于在两个目录之间，撤销符号链接关系，相当于撤销开机启动。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl disable clamd@scan.service
</code></pre></div><p>配置文件的后缀名，就是该 Unit 的种类，比如 <code>sshd.socket</code> 。如果省略，Systemd 默认后缀名为 <code>.service</code>，所以 <code>sshd</code> 会被理解成 <code>sshd.service</code> 。</p><h3 id="_1-配置文件的状态" tabindex="-1"><a class="header-anchor" href="#_1-配置文件的状态" aria-hidden="true">#</a> 1. 配置文件的状态</h3><p><code>systemctl list-unit-files</code> 命令用于列出所有配置文件。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出所有配置文件</span>
systemctl list-unit-files

<span class="token comment"># 列出指定类型的配置文件</span>
systemctl list-unit-files <span class="token parameter variable">--type</span><span class="token operator">=</span>service
</code></pre></div><p>这个命令会输出一个列表。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl list-unit-files

UNIT FILE              STATE
chronyd.service        enabled
clamd@.service         static
clamd@scan.service     disabled
</code></pre></div><p>这个列表显示每个配置文件的状态，一共有四种。</p><ul><li>enabled：已建立启动链接</li><li>disabled：没建立启动链接</li><li>static：该配置文件没有 <code>[Install]</code> 部分（无法执行），只能作为其他配置文件的依赖</li><li>masked：该配置文件被禁止建立启动链接</li></ul><p>注意，从配置文件的状态无法看出，该 Unit 是否正在运行。这必须执行前面提到的 <code>systemctl status</code> 命令。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl status bluetooth.service
</code></pre></div><p>一旦修改配置文件，就要让 SystemD 重新加载配置文件，然后重新启动，否则修改不会生效。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart httpd.service
</code></pre></div><h3 id="_2-配置文件的格式" tabindex="-1"><a class="header-anchor" href="#_2-配置文件的格式" aria-hidden="true">#</a> 2. 配置文件的格式</h3><p>配置文件就是普通的文本文件，可以用文本编辑器打开。</p><p><code>systemctl cat</code> 命令可以查看配置文件的内容。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token function">cat</span> atd.service

<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>ATD daemon

<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/bin/atd

<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre></div><p>从上面的输出可以看到，配置文件分成几个区块。每个区块的第一行，是用方括号表示的区别名，比如 <code>[Unit]</code> 。注意，配置文件的区块名和字段名，都是大小写敏感的。</p><p>每个区块内部是一些等号连接的键值对。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>Section<span class="token punctuation">]</span>
<span class="token assign-left variable">Directive1</span><span class="token operator">=</span>value
<span class="token assign-left variable">Directive2</span><span class="token operator">=</span>value
</code></pre></div><p>注意，键值对的等号两侧不能有空格。</p><h3 id="_3-配置文件的区块" tabindex="-1"><a class="header-anchor" href="#_3-配置文件的区块" aria-hidden="true">#</a> 3. 配置文件的区块</h3><p><code>[Unit]</code> 区块通常是配置文件的第一个区块，用来定义 Unit 的元数据，以及配置与其他 Unit 的关系。它的主要字段如下：</p><ul><li><code>Description</code>：简短描述</li><li><code>Documentation</code>：文档地址</li><li><code>Requires</code>：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败</li><li><code>Wants</code>：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败</li><li><code>BindsTo</code>：与<code>Requires</code>类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行</li><li><code>Before</code>：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动</li><li><code>After</code>：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动</li><li><code>Conflicts</code>：这里指定的 Unit 不能与当前 Unit 同时运行</li><li><code>Condition...</code>：当前 Unit 运行必须满足的条件，否则不会运行</li><li><code>Assert...</code>：当前 Unit 运行必须满足的条件，否则会报启动失败</li></ul><p><code>[Install]</code> 通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。它的主要字段如下：</p><ul><li><code>WantedBy</code>：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入<code>/etc/systemd/system</code>目录下面以 Target 名 + <code>.wants</code>后缀构成的子目录中</li><li><code>RequiredBy</code>：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入<code>/etc/systemd/system</code>目录下面以 Target 名 + <code>.required</code>后缀构成的子目录中</li><li><code>Alias</code>：当前 Unit 可用于启动的别名</li><li><code>Also</code>：当前 Unit 激活（enable）时，会被同时激活的其他 Unit</li></ul><p><code>[Service]</code> 区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。它的主要字段如下：</p><ul><li><code>Type</code>：定义启动时的进程行为。它有以下几种值。</li><li><code>Type=simple</code>：默认值，执行<code>ExecStart</code>指定的命令，启动主进程</li><li><code>Type=forking</code>：以 fork 方式从父进程创建子进程，创建后父进程会立即退出</li><li><code>Type=oneshot</code>：一次性进程，Systemd 会等当前服务退出，再继续往下执行</li><li><code>Type=dbus</code>：当前服务通过D-Bus启动</li><li><code>Type=notify</code>：当前服务启动完毕，会通知<code>Systemd</code>，再继续往下执行</li><li><code>Type=idle</code>：若有其他任务执行完毕，当前服务才会运行</li><li><code>ExecStart</code>：启动当前服务的命令</li><li><code>ExecStartPre</code>：启动当前服务之前执行的命令</li><li><code>ExecStartPost</code>：启动当前服务之后执行的命令</li><li><code>ExecReload</code>：重启当前服务时执行的命令</li><li><code>ExecStop</code>：停止当前服务时执行的命令</li><li><code>ExecStopPost</code>：停止当其服务之后执行的命令</li><li><code>RestartSec</code>：自动重启当前服务间隔的秒数</li><li><code>Restart</code>：定义何种情况 Systemd 会自动重启当前服务，可能的值包括<code>always</code>（总是重启）、<code>on-success</code>、<code>on-failure</code>、<code>on-abnormal</code>、<code>on-abort</code>、<code>on-watchdog</code></li><li><code>TimeoutSec</code>：定义 Systemd 停止当前服务之前等待的秒数</li><li><code>Environment</code>：指定环境变量</li></ul>`,83)),n("p",null,[s[1]||(s[1]=a("Unit 配置文件的完整字段清单，请参考")),n("a",d,[s[0]||(s[0]=a("官方文档")),c(e)]),s[2]||(s[2]=a("。"))]),s[5]||(s[5]=t(`<h2 id="target" tabindex="-1"><a class="header-anchor" href="#target" aria-hidden="true">#</a> Target</h2><p>启动计算机的时候，需要启动大量的 Unit。如果每一次启动，都要一一写明本次启动需要哪些 Unit，显然非常不方便。Systemd 的解决方案就是 Target。</p><p>简单说，Target 就是一个 Unit 组，包含许多相关的 Unit 。启动某个 Target 的时候，Systemd 就会启动里面所有的 Unit。从这个意义上说，Target 这个概念类似于&quot;状态点&quot;，启动某个 Target 就好比启动到某种状态。</p><p>传统的 <code>init</code> 启动模式里面，有 RunLevel 的概念，跟 Target 的作用很类似。不同的是，RunLevel 是互斥的，不可能多个 RunLevel 同时启动，但是多个 Target 可以同时启动。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看当前系统的所有 Target</span>
systemctl list-unit-files <span class="token parameter variable">--type</span><span class="token operator">=</span>target

<span class="token comment"># 查看一个 Target 包含的所有 Unit</span>
systemctl list-dependencies multi-user.target

<span class="token comment"># 查看启动时的默认 Target</span>
systemctl get-default

<span class="token comment"># 设置启动时的默认 Target</span>
<span class="token function">sudo</span> systemctl set-default multi-user.target

<span class="token comment"># 切换 Target 时，默认不关闭前一个 Target 启动的进程，</span>
<span class="token comment"># systemctl isolate 命令改变这种行为，</span>
<span class="token comment"># 关闭前一个 Target 里面所有不属于后一个 Target 的进程</span>
<span class="token function">sudo</span> systemctl isolate multi-user.target
</code></pre></div><p>Target 与 传统 RunLevel 的对应关系如下。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>Traditional runlevel      New target name     Symbolically linked to<span class="token punctuation">..</span>.

Runlevel <span class="token number">0</span>           <span class="token operator">|</span>    runlevel0.target -<span class="token operator">&gt;</span> poweroff.target
Runlevel <span class="token number">1</span>           <span class="token operator">|</span>    runlevel1.target -<span class="token operator">&gt;</span> rescue.target
Runlevel <span class="token number">2</span>           <span class="token operator">|</span>    runlevel2.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">3</span>           <span class="token operator">|</span>    runlevel3.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">4</span>           <span class="token operator">|</span>    runlevel4.target -<span class="token operator">&gt;</span> multi-user.target
Runlevel <span class="token number">5</span>           <span class="token operator">|</span>    runlevel5.target -<span class="token operator">&gt;</span> graphical.target
Runlevel <span class="token number">6</span>           <span class="token operator">|</span>    runlevel6.target -<span class="token operator">&gt;</span> reboot.target
</code></pre></div><p>它与 <code>init</code> 进程的主要差别如下。</p><p><strong>（1）默认的 RunLevel</strong>（在<code>/etc/inittab</code>文件设置）现在被默认的 Target 取代，位置是<code>/etc/systemd/system/default.target</code>，通常符号链接到<code>graphical.target</code>（图形界面）或者<code>multi-user.target</code>（多用户命令行）。</p><p><strong>（2）启动脚本的位置</strong>，以前是<code>/etc/init.d</code>目录，符号链接到不同的 RunLevel 目录 （比如<code>/etc/rc3.d</code>、<code>/etc/rc5.d</code>等），现在则存放在<code>/lib/systemd/system</code>和<code>/etc/systemd/system</code>目录。</p><p><strong>（3）配置文件的位置</strong>，以前<code>init</code>进程的配置文件是<code>/etc/inittab</code>，各种服务的配置文件存放在<code>/etc/sysconfig</code>目录。现在的配置文件主要存放在<code>/lib/systemd</code>目录，在<code>/etc/systemd</code>目录里面的修改可以覆盖原始设置。</p><h2 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h2><p>Systemd 统一管理所有 Unit 的启动日志。带来的好处就是，可以只用<code>journalctl</code> 一个命令，查看所有日志（内核日志和应用日志）。日志的配置文件是 <code>/etc/systemd/journald.conf</code> 。</p><p><code>journalctl</code> 功能强大，用法非常多。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看所有日志（默认情况下 ，只保存本次启动的日志）</span>
<span class="token function">sudo</span> journalctl

<span class="token comment"># 查看内核日志（不显示应用日志）</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-k</span>

<span class="token comment"># 查看系统本次启动的日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-0</span>

<span class="token comment"># 查看上一次启动的日志（需更改设置）</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-1</span>

<span class="token comment"># 查看指定时间的日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span><span class="token operator">=</span><span class="token string">&quot;2012-10-30 18:17:16&quot;</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;20 min ago&quot;</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> yesterday
<span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> <span class="token string">&quot;2015-01-10&quot;</span> <span class="token parameter variable">--until</span> <span class="token string">&quot;2015-01-11 03:00&quot;</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">--since</span> 09:00 <span class="token parameter variable">--until</span> <span class="token string">&quot;1 hour ago&quot;</span>

<span class="token comment"># 显示尾部的最新10行日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-n</span>

<span class="token comment"># 显示尾部指定行数的日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-n</span> <span class="token number">20</span>

<span class="token comment"># 实时滚动显示最新日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-f</span>

<span class="token comment"># 查看指定服务的日志</span>
<span class="token function">sudo</span> journalctl /usr/lib/systemd/systemd

<span class="token comment"># 查看指定进程的日志</span>
<span class="token function">sudo</span> journalctl <span class="token assign-left variable">_PID</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># 查看某个路径的脚本的日志</span>
<span class="token function">sudo</span> journalctl /usr/bin/bash

<span class="token comment"># 查看指定用户的日志</span>
<span class="token function">sudo</span> journalctl <span class="token assign-left variable">_UID</span><span class="token operator">=</span><span class="token number">33</span> <span class="token parameter variable">--since</span> today

<span class="token comment"># 查看某个 Unit 的日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">--since</span> today

<span class="token comment"># 实时滚动显示某个 Unit 的最新日志</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-f</span>

<span class="token comment"># 合并显示多个 Unit 的日志</span>
journalctl <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-u</span> php-fpm.service <span class="token parameter variable">--since</span> today

<span class="token comment"># 查看指定优先级（及其以上级别）的日志，共有8级</span>
<span class="token comment"># 0: emerg</span>
<span class="token comment"># 1: alert</span>
<span class="token comment"># 2: crit</span>
<span class="token comment"># 3: err</span>
<span class="token comment"># 4: warning</span>
<span class="token comment"># 5: notice</span>
<span class="token comment"># 6: info</span>
<span class="token comment"># 7: debug</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-p</span> err <span class="token parameter variable">-b</span>

<span class="token comment"># 日志默认分页输出，--no-pager 改为正常的标准输出</span>
<span class="token function">sudo</span> journalctl --no-pager

<span class="token comment"># 以 JSON 格式（单行）输出</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> nginx.service <span class="token parameter variable">-o</span> json

<span class="token comment"># 以 JSON 格式（多行）输出，可读性更好</span>
<span class="token function">sudo</span> journalctl <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> nginx.serviceqq
 <span class="token parameter variable">-o</span> json-pretty

<span class="token comment"># 显示日志占据的硬盘空间</span>
<span class="token function">sudo</span> journalctl --disk-usage

<span class="token comment"># 指定日志文件占据的最大空间</span>
<span class="token function">sudo</span> journalctl --vacuum-size<span class="token operator">=</span>1G

<span class="token comment"># 指定日志文件保存多久</span>
<span class="token function">sudo</span> journalctl --vacuum-time<span class="token operator">=</span>1years
</code></pre></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,16)),n("p",null,[n("a",m,[s[3]||(s[3]=a("原文：Systemd 入门教程")),c(e)])])])}const g=o(r,[["render",u],["__file","systemd.html.vue"]]);export{g as default};

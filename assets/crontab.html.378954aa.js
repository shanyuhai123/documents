import{d as e}from"./app.221f0787.js";const a={},t=e('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>系统定时任务，解放双手，从定时器开始～</p><h2 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>crontab [选项] [参数]</p></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h2><table><thead><tr><th style="text-align:center;">选项</th><th style="text-align:center;">含义</th></tr></thead><tbody><tr><td style="text-align:center;">-e</td><td style="text-align:center;">编辑该用户的计时器设置。</td></tr><tr><td style="text-align:center;">-l</td><td style="text-align:center;">列出该用户的计时器设置。</td></tr><tr><td style="text-align:center;">-r</td><td style="text-align:center;">删除该用户的计时器设置。</td></tr><tr><td style="text-align:center;">-u</td><td style="text-align:center;">指定要设定计时器的用户名称。</td></tr></tbody></table><h2 id="crontab-文件" tabindex="-1"><a class="header-anchor" href="#crontab-文件" aria-hidden="true">#</a> crontab 文件</h2><p>crontab 文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令，格式如下：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>minute（分） hour（时） day（天） month（月） week（周） command（命令）\n</code></pre></div><p>在以上各个字段中，还可以使用以下特殊字符：</p><ul><li>*：代表所有可能的值；</li><li>,：可以表示一个分隔；</li><li>-：可以表示一个区间；</li><li>/：可以表示一个间隔频率，每隔该时间段。</li></ul><blockquote><p>全局任务计划列列表：<code>cat /etc/crontab</code>。</p><p>anacron 可用于解决在服务器处于关机状态导致 crontab 计划无法执行的情况，在检测周期内判断是否有定时任务在关机后没有执行，若存在，则在特定的时间段内重新执行这些特定任务。</p></blockquote><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><p>首先需要执行 <code>crondtab -e</code> 启用编辑。</p><ul><li><p>每天凌晨 1:30 分重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">30</span> <span class="token number">1</span> * * * systemctl restart docker.service\n</code></pre></div></li><li><p>每月 1、10、20 日的 23:59 重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">59</span> <span class="token number">23</span> <span class="token number">1,10</span>,20 * * systemctl restart docker.service\n</code></pre></div></li><li><p>每月 1 到 10 日的 4:45 重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">45</span> <span class="token number">4</span> <span class="token number">1</span>-10 * * systemctl restart docker.service\n</code></pre></div></li><li><p>每隔两分钟重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code>*/2 * * * * systemctl restart docker.service\n</code></pre></div></li><li><p>每月 10 到 20 日每隔两日的 4:45 重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">45</span> <span class="token number">4</span> <span class="token number">10</span>-20/2 * * systemctl restart docker.service\n</code></pre></div></li><li><p>晚上 11 点到早上 7 点之间每隔一个小时重启 docker 服务：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token number">0</span> <span class="token number">23</span>-7/1 * * * systemctl restart docker.service\n</code></pre></div></li></ul>',15);a.render=function(e,a){return t};export default a;

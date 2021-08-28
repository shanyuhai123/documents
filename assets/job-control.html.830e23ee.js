import{e}from"./app.984671f0.js";const o={},d=e('<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2><p>在日常一些使用情况下希望将一些正在执行的命令移至后台，避免关闭</p><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><ol><li>在正在运行命令的控制台按下 <code>Ctrl + Z</code></li><li>执行 <code>jobs</code> 可查看后台运行的命令，此时会发现之前执行的命令处于 <code>suspended</code> 状态</li><li>执行 <code>bg %n</code>，<code>n</code> 为对应的 job ID</li><li>再执行 <code>jobs</code> 即可发现命令处于 <code>running</code> 状态了</li><li>但关闭该 session 后 <code>jobs</code> 也会停止</li><li>解决方案是使用 <code>disown %n</code>，关闭 session 后可发现其依旧在运行</li></ol><blockquote><p>更快进入后台的方法？</p><p>例如在 <code>npm run serve</code> 后加上 <code>&amp;</code> 即可，等价 <code>npm run serve &amp;</code></p></blockquote>',5);o.render=function(e,o){return d};export{o as default};

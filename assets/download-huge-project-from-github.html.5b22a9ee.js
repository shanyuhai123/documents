import{d as e}from"./app.221f0787.js";const i={},t=e('<h2 id="问题详情" tabindex="-1"><a class="header-anchor" href="#问题详情" aria-hidden="true">#</a> 问题详情</h2><p>最近准备开始查看 Vuetify 的一些实现步骤，直接在 Github 上阅读不是很方便，所以就想下载下来阅读。 结果下载时下载速度总是只有 4kb/s - 6kb/s，下载到最后还会报错……</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>早期在 Windows 下设置 socks5 代理是没有问题的，但是 Manjaro 下遇到了问题，下载速度依然很慢。 就想到了另外一种取巧的方法，在之前使用 Gitee（码云）的时候提供了下载 Github 项目的服务。</p><h2 id="操作步骤" tabindex="-1"><a class="header-anchor" href="#操作步骤" aria-hidden="true">#</a> 操作步骤</h2><ol start="0"><li>这次以 clone <code>vuetify</code> 为示例</li><li>进入码云官网，点击新建项目</li><li>回到 Github 你想要 clone 的项目位置，如：<code>https://github.com/vuetifyjs/vuetify</code></li><li>下拉到最下方，导入已有项目：<code>https://github.com/vuetifyjs/vuetify.git</code></li><li>点击确认后，等待完成（大概会等待 5 分钟）</li><li>像你在 Github 上一样将项目 <code>clone</code> 下来即可（实测 1mb/s+）</li></ol>',6);i.render=function(e,i){return t};export default i;

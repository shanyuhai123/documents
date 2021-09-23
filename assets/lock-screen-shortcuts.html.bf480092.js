import{e}from"./app.76078c72.js";import{_ as o}from"./plugin-vue_export-helper.5a098b48.js";const c={},a=e('<h1 id="锁屏快捷键" tabindex="-1"><a class="header-anchor" href="#锁屏快捷键" aria-hidden="true">#</a> 锁屏快捷键</h1><h2 id="已有配置" tabindex="-1"><a class="header-anchor" href="#已有配置" aria-hidden="true">#</a> 已有配置</h2><h3 id="_1-desktop-behavior" tabindex="-1"><a class="header-anchor" href="#_1-desktop-behavior" aria-hidden="true">#</a> 1. Desktop Behavior</h3><p>在快捷键（Shortcuts）多番查找无果后，将目光放在了 Desktop 上。</p><p><code>Desktop Behavior</code> &gt; <code>Screen Locking</code> &gt; <code>Keyboard shortcut</code>。</p><p>接着输入对应的快捷键，Windows 下锁屏快捷键为 <code>Win + R</code>，此处保持一致。</p><h3 id="_2-shortcuts" tabindex="-1"><a class="header-anchor" href="#_2-shortcuts" aria-hidden="true">#</a> 2. Shortcuts</h3><p>在 <code>Desktop Behavior</code> 修改后惊奇的发现该部分也发生了变化。</p><p><code>Shortcuts</code> &gt; <code>Global Shortcuts</code> &gt; <code>System Settings</code> &gt; <code>Lock Session</code>。</p><p>可以注意到 <code>Lock Session</code> 的快捷键配置从空白变为了 <code>Win + R</code>，所以直接改该配置也是可以的。至于为什么此处命名为 <code>Lock Session</code> 就不得而知了。</p><h2 id="命令配置" tabindex="-1"><a class="header-anchor" href="#命令配置" aria-hidden="true">#</a> 命令配置</h2><p>当然可以直接使用命令来完成锁屏功能。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 在命令行输入 screensaver，按下 tab 等待补全选项</span>\nxdg-screensaver\n<span class="token comment"># 在得到的命令前追加 man</span>\n<span class="token function">man</span> xdg-screensaver\n<span class="token comment"># 阅读手册后得到结果</span>\nxdg-screensaver lock\n<span class="token comment"># 执行后进入锁屏</span>\n</code></pre></div><p>得到锁屏指令后，再绑定到对应的快捷键即可。</p><p><code>Shortcuts</code> &gt; <code>Custom Shortcuts</code> &gt; <code>Edit</code> &gt; <code>New</code> &gt; <code>Global Shortcuts</code> &gt; <code>Command/URL</code>。</p><p>依次配置好 <code>Trigger（触发器 Shortcuts &quot;Win + L&quot;）</code> 和 <code>Action（命令 Command &quot;xdg-screensaver lock&quot;）</code> ，测试结果成功。</p>',16);var d=o(c,[["render",function(e,o){return a}]]);export{d as default};

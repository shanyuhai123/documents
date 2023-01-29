import{_ as e,p as o,q as c,a1 as d}from"./framework-49860b1b.js";const t={},s=d('<h1 id="同步-vscode-配置" tabindex="-1"><a class="header-anchor" href="#同步-vscode-配置" aria-hidden="true">#</a> 同步 VSCode 配置</h1><p>用于同步编辑器的配置。</p><blockquote><p>gist 页面会存在访问限制，最好备好代理工具。</p></blockquote><h2 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1. 安装</h3><p>在 <code>EXTENSIONS</code> 中搜索 <code>Settings Sync</code> 并安装。</p><h3 id="_2-生成-token" tabindex="-1"><a class="header-anchor" href="#_2-生成-token" aria-hidden="true">#</a> 2. 生成 token</h3><p>进入 Github，点击头像的 <code>Settings</code>，再点击 <code>Developer settings</code>，再点击 <code>Personal access tokens</code>，随后点击 <code>Generate new token</code> 即可根据提示生成 <strong>token</strong>。</p><ol><li>Note 部分可以输入你可以理解的提示，例如 <code>vscode settings sync</code>；</li><li>Select scopes 部分仅需要勾选 <code>gist</code> 即可，<strong>请勿给其余的权限</strong>。</li><li>最后点击 <code>Generate token</code> 即可生成 token。</li></ol><h3 id="_3-编辑-settings-sync-配置" tabindex="-1"><a class="header-anchor" href="#_3-编辑-settings-sync-配置" aria-hidden="true">#</a> 3. 编辑 Settings Sync 配置</h3><p>在第一次安装 <code>Settings Sync</code> 插件时会弹出一个弹窗让你填写配置。</p><p>有两个选项 <code>LOGIN WITH GITHUB</code>、 <code>EDIT CONFIGURATION</code>，此处点击 <code>EDIT CONFIGURATION</code>。</p><p>当后续想再次编辑时你可以更改对应 <code>Settings JSON</code>，也可以在编辑器中按下 <code>Ctrl + Shift + P</code>，然后输入 <code>sync</code> 找到 <code>Advanced Options</code> 选中在打开 <code>Open Options</code>。</p><h3 id="_4-上传配置" tabindex="-1"><a class="header-anchor" href="#_4-上传配置" aria-hidden="true">#</a> 4. 上传配置</h3><p>上传配置需要你提供创建编辑 <code>gist</code> 的权限，也就是之前生成的 <strong>token</strong>，在配置界面填入 <code>token</code>，该插件会自动保存配置。</p><p>接着随便打开一个页面，按下 <code>Shift + Alt + U</code> 即可上传你的配置。稍后可以在编辑器控制台的输出(<code>OUTPUT</code>)标签看到上传信息，上传完成后会得到一个 <code>Gist ID</code>。回到 Github，点击头像的 <code>Your gists</code> 可看到新增的 <code>gist</code>。</p><h3 id="_5-下载配置" tabindex="-1"><a class="header-anchor" href="#_5-下载配置" aria-hidden="true">#</a> 5. 下载配置</h3><p>你可以自己使用这一份配置，也可以分享给他人，仅需你将自己的 <code>Gist ID</code> 分享出去即可。如果忘了 <code>Gist ID</code> 可以回到 Github，点击头像的 <code>Your gists</code> 找到对应的 <code>gist</code>，此时浏览器的地址栏就是你的 <code>Gist ID</code>，或者在 <code>Embed</code> 处查看。</p><p>在配置界面填入对应的 <code>Gist ID</code>，再随便打开一个页面，按下 <code>Shift + Alt + D</code> 即可下载你的配置，稍后可以在编辑器控制台的输出(<code>OUTPUT</code>)标签看到下载信息。</p>',19),n=[s];function a(i,r){return o(),c("div",null,n)}const l=e(t,[["render",a],["__file","settings-sync.html.vue"]]);export{l as default};

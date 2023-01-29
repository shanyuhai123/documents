import{_ as s,M as t,p as c,q as h,Q as e,t as r,N as a,a1 as n}from"./framework-49860b1b.js";const i={},l=n('<h1 id="认识-chrome" tabindex="-1"><a class="header-anchor" href="#认识-chrome" aria-hidden="true">#</a> 认识 Chrome</h1><p>身为前端，面对的最多莫过于浏览器了。</p><h2 id="修改人性化设置" tabindex="-1"><a class="header-anchor" href="#修改人性化设置" aria-hidden="true">#</a> 修改人性化设置</h2><p>Chrome 浏览器总是会提供一些 “人性化” 设置，所以我们需要去关闭它。</p><p>在浏览器地址栏输入 <code>chrome://flags/</code> 即可进入设置界面。</p><h3 id="_1-显示完整地址" tabindex="-1"><a class="header-anchor" href="#_1-显示完整地址" aria-hidden="true">#</a> 1. 显示完整地址</h3><p>在 <code>93.0.4577.63</code> 中已经找不到对应的设置了，仅可以右键地址栏然后选择 “总是选择完整地址”。</p><h3 id="_2-禁止标签页缩略图预览" tabindex="-1"><a class="header-anchor" href="#_2-禁止标签页缩略图预览" aria-hidden="true">#</a> 2. 禁止标签页缩略图预览</h3><p>在 <code>chrome://flags/</code> 中搜索 <code>Tab Hover Card Images</code>，然后禁用即可。</p><h2 id="获取-chromium-源码" tabindex="-1"><a class="header-anchor" href="#获取-chromium-源码" aria-hidden="true">#</a> 获取 Chromium 源码</h2>',10),d={href:"https://source.chromium.org/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},p=n(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,2),u={href:"https://developers.google.com/web/tools/chrome-devtools",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.chromium.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://source.chromium.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://bugs.chromium.org/p/chromium/issues/list",target:"_blank",rel:"noopener noreferrer"};function b(k,x){const o=t("ExternalLinkIcon");return c(),h("div",null,[l,e("p",null,[r("可以通过 "),e("a",d,[r("Chromium Code Search"),a(o)]),r(" 在线查看源码，也可以"),e("a",m,[r("下载"),a(o)]),r("到本地查看：")]),p,e("ol",null,[e("li",null,[e("a",u,[r("Chrome Developer Tools"),a(o)])]),e("li",null,[e("a",_,[r("The Chromium Projects"),a(o)])]),e("li",null,[e("a",f,[r("Chromium Code Search"),a(o)])]),e("li",null,[e("a",g,[r("Chromium bugs"),a(o)])])])])}const v=s(i,[["render",b],["__file","index.html.vue"]]);export{v as default};

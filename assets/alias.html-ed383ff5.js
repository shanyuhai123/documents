import{_ as s,p as n,q as e,a1 as t}from"./framework-e3e34937.js";const o={};function p(c,a){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="别名-alias" tabindex="-1"><a class="header-anchor" href="#别名-alias" aria-hidden="true">#</a> 别名 alias</h1><p>alias 可用于设置指令的别名，固化则需要存放于 <code>~/.bashrc</code> 或 <code>~/.zshrc</code> 中。</p><blockquote><p>有的时候命令历史提示会更好用，也就是需要更加了解 <code>zsh</code> 的生态。</p></blockquote><h2 id="常用规则" tabindex="-1"><a class="header-anchor" href="#常用规则" aria-hidden="true">#</a> 常用规则</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查找进程</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">pg</span><span class="token operator">=</span><span class="token string">&#39;ps aux | grep $1&#39;</span>

<span class="token comment"># 随机字符串</span>
<span class="token builtin class-name">alias</span> random-str<span class="token operator">=</span><span class="token string">&quot;base64 /dev/urandom | tr -d &#39;/+&#39; | dd bs=32 count=1 2&gt;/dev/null &amp;&amp; echo <span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token comment"># 获取 ip</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">myip</span><span class="token operator">=</span><span class="token string">&quot;curl -s myip.ipip.net | grep -oE &#39;<span class="token entity" title="\\b">\\b</span>([0-9]{1,3}\\.){3}[0-9]{1,3}<span class="token entity" title="\\b">\\b</span>&#39;&quot;</span>

<span class="token comment"># 设置代理</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gfw</span><span class="token operator">=</span><span class="token string">&quot;export ALL_PROXY=socks5://127.0.0.1:1080 &amp;&amp; curl ipinfo.io&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ugfw</span><span class="token operator">=</span><span class="token string">&quot;unset ALL_PROXY&quot;</span>
</code></pre></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">docker_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">docker</span> inspect <span class="token parameter variable">--format</span> <span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token variable">$1</span>
<span class="token punctuation">}</span>

<span class="token comment"># docker_ip some-container</span>
</code></pre></div>`,7)]))}const i=s(o,[["render",p],["__file","alias.html.vue"]]);export{i as default};

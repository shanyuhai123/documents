import{e as a}from"./app.b60e9bc9.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const n={},e=a(`<h1 id="\u522B\u540D-alias" tabindex="-1"><a class="header-anchor" href="#\u522B\u540D-alias" aria-hidden="true">#</a> \u522B\u540D alias</h1><p>alias \u53EF\u7528\u4E8E\u8BBE\u7F6E\u6307\u4EE4\u7684\u522B\u540D\uFF0C\u56FA\u5316\u5219\u9700\u8981\u5B58\u653E\u4E8E <code>~/.bashrc</code> \u6216 <code>~/.zshrc</code> \u4E2D\u3002</p><blockquote><p>\u6709\u7684\u65F6\u5019\u547D\u4EE4\u5386\u53F2\u63D0\u793A\u4F1A\u66F4\u597D\u7528\uFF0C\u4E5F\u5C31\u662F\u9700\u8981\u66F4\u52A0\u4E86\u89E3 <code>zsh</code> \u7684\u751F\u6001\u3002</p></blockquote><h2 id="\u5E38\u7528\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u89C4\u5219" aria-hidden="true">#</a> \u5E38\u7528\u89C4\u5219</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u67E5\u627E\u8FDB\u7A0B</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">pg</span><span class="token operator">=</span><span class="token string">&#39;ps aux | grep $1&#39;</span>

<span class="token comment"># \u968F\u673A\u5B57\u7B26\u4E32</span>
<span class="token builtin class-name">alias</span> random-str<span class="token operator">=</span><span class="token string">&quot;base64 /dev/urandom | tr -d &#39;/+&#39; | dd bs=32 count=1 2&gt;/dev/null &amp;&amp; echo <span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token comment"># \u83B7\u53D6 ip</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">myip</span><span class="token operator">=</span><span class="token string">&quot;curl -s myip.ipip.net | grep -oE &#39;<span class="token entity" title="\\b">\\b</span>([0-9]{1,3}\\.){3}[0-9]{1,3}<span class="token entity" title="\\b">\\b</span>&#39;&quot;</span>

<span class="token comment"># \u8BBE\u7F6E\u4EE3\u7406</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">gfw</span><span class="token operator">=</span><span class="token string">&quot;export ALL_PROXY=socks5://127.0.0.1:1080 &amp;&amp; curl ipinfo.io&quot;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ugfw</span><span class="token operator">=</span><span class="token string">&quot;unset ALL_PROXY&quot;</span>
</code></pre></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> docker</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">docker_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    docker inspect --format <span class="token string">&#39;{{.NetworkSettings.IPAddress}}&#39;</span> <span class="token variable">$1</span>
<span class="token punctuation">}</span>

<span class="token comment"># docker_ip some-container</span>
</code></pre></div>`,7);function t(o,p){return e}var i=s(n,[["render",t]]);export{i as default};

import{r as e,c as t,a as n,b as p,F as o,d as a,e as c,o as r}from"./app.874e1a09.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";const i={},u=n("h1",{id:"frp-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frp-\u548C-nginx-\u5171\u7528-80-\u7AEF\u53E3","aria-hidden":"true"},"#"),a(" FRP \u548C Nginx \u5171\u7528 80 \u7AEF\u53E3")],-1),k=a("\u867D\u7136\u5728 "),d={href:"https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"},h=a("FRP"),x=a(" \u5B98\u7F51\u4E2D\u7ED9\u4E86 web \u670D\u52A1\u914D\u7F6E\u7684\u793A\u4F8B\uFF0C\u4F46\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\u5B58\u5728\u4E24\u4E2A\u95EE\u9898\uFF1A"),m=c(`<ul><li>\u6709\u65F6\u90E8\u5206\u8D44\u6E90\u627E\u4E0D\u5230\uFF0C\u5BFC\u81F4\u9875\u9762\u65E0\u6CD5\u6E32\u67D3</li><li>\u57DF\u540D\u540E\u9762\u8FD8\u5E26\u4E00\u4E2A\u7AEF\u53E3\uFF0C\u5B9E\u5728\u6709\u70B9\u4E11</li></ul><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="_1-\u670D\u52A1\u5668\u7AEF-frp-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-\u670D\u52A1\u5668\u7AEF-frp-\u914D\u7F6E" aria-hidden="true">#</a> 1. \u670D\u52A1\u5668\u7AEF FRP \u914D\u7F6E</h3><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bind_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>
<span class="token key attr-name">vhost_http_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">8080</span>
<span class="token key attr-name">subdomain_host</span> <span class="token punctuation">=</span> <span class="token value attr-value">frp.xxx.com</span>
</code></pre></div><h3 id="_2-\u670D\u52A1\u5668\u7AEF-nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u670D\u52A1\u5668\u7AEF-nginx-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u670D\u52A1\u5668\u7AEF Nginx \u914D\u7F6E</h3><p>\u5229\u7528\u6B63\u5219\u6765\u5339\u914D\u6240\u6709\u7684 <code>frp</code> \u4E8C\u7EA7\u57DF\u540D\u3002</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token comment"># /etc/nginx/conf.d/frp.conf</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>  frp.xxx.com *.frp.xxx.com</span><span class="token punctuation">;</span>

  <span class="token comment">#charset koi8-r;</span>
  <span class="token comment">#access_log  /var/log/nginx/host.access.log  main;</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>              http://127.0.0.1:7000</span><span class="token punctuation">;</span>
    <span class="token comment"># \u6B64\u5904\u7B80\u5199</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span>        Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>


  <span class="token comment">#error_page  404              /404.html;</span>

  <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_3-\u57DF\u540D\u89E3\u6790\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-\u57DF\u540D\u89E3\u6790\u914D\u7F6E" aria-hidden="true">#</a> 3. \u57DF\u540D\u89E3\u6790\u914D\u7F6E</h3><p>\u6839\u636E Nginx \u7684\u914D\u7F6E\u6DFB\u52A0\u4E24\u9879\uFF1A</p><ul><li><code>frp.xxx.com</code></li><li><code>*.frp.xxx.com</code></li></ul><h3 id="_4-\u5BA2\u6237\u7AEF-frp-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_4-\u5BA2\u6237\u7AEF-frp-\u914D\u7F6E" aria-hidden="true">#</a> 4. \u5BA2\u6237\u7AEF FRP \u914D\u7F6E</h3><p><strong>\u5BA2\u6237\u7AEF\u7684 Nginx \u914D\u7F6E\u4E3A\u9ED8\u8BA4\u65F6\u5C31\u53EF\u4EE5\u4F7F\u7528\uFF0C\u6B64\u5904\u7701\u7565\u3002</strong></p><div class="language-ini ext-ini"><pre class="language-ini"><code><span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">common</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">server_addr</span> <span class="token punctuation">=</span> <span class="token value attr-value">xxx.xx.xx.xxx</span>
<span class="token key attr-name">server_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">7000</span>

<span class="token comment"># [ssh] \u7701\u7565</span>

<span class="token header"><span class="token punctuation">[</span><span class="token section-name selector">web1</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">type</span> <span class="token punctuation">=</span> <span class="token value attr-value">http</span>
<span class="token key attr-name">local_ip</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">local_port</span> <span class="token punctuation">=</span> <span class="token value attr-value">80</span>
<span class="token key attr-name">subdomain</span> <span class="token punctuation">=</span> <span class="token value attr-value">sub1</span>
</code></pre></div><h2 id="\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a> \u6D4B\u8BD5</h2><p>\u6700\u540E\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBF\u95EE <code>sub1.frp.xxx.com</code> \u5373\u53EF\u5C55\u73B0\u6548\u679C\u3002</p>`,15);function _(v,g){const s=e("OutboundLink");return r(),t(o,null,[u,n("p",null,[k,n("a",d,[h,p(s)]),x]),m],64)}var E=l(i,[["render",_]]);export{E as default};

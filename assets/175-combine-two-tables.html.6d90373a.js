import{e as a}from"./app.e8c3854e.js";import{_ as n}from"./plugin-vue_export-helper.5a098b48.js";const s={},e=a(`<h1 id="\u7EC4\u5408\u4E24\u4E2A\u8868" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u4E24\u4E2A\u8868" aria-hidden="true">#</a> \u7EC4\u5408\u4E24\u4E2A\u8868</h1><p>\u6570\u636E\u5E93<a href="/backend/mysql/join-and-union">\u591A\u8868\u67E5\u8BE2</a>\u3002</p><h2 id="outer-join" tabindex="-1"><a class="header-anchor" href="#outer-join" aria-hidden="true">#</a> outer join</h2><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
  p<span class="token punctuation">.</span>FirstName<span class="token punctuation">,</span>
  p<span class="token punctuation">.</span>LastName<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>City<span class="token punctuation">,</span>
  a<span class="token punctuation">.</span>State
<span class="token keyword">FROM</span> Person p
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Address a
  <span class="token keyword">ON</span> p<span class="token punctuation">.</span>PersonId <span class="token operator">=</span> a<span class="token punctuation">.</span>PersonId
</code></pre></div>`,4);function t(o,p){return e}var i=n(s,[["render",t]]);export{i as default};

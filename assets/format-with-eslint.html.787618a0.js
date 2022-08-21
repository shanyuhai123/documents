import{r as o,c as p,a as n,b as e,F as c,d as s,e as t,o as i}from"./app.838f6760.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const l={},u=n("h1",{id:"eslint-\u683C\u5F0F\u5316",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eslint-\u683C\u5F0F\u5316","aria-hidden":"true"},"#"),s(" ESLint \u683C\u5F0F\u5316")],-1),d=s("\u683C\u5F0F\u5316\u63D2\u4EF6 "),k={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},h=s("ESLint"),g=s("\u3002"),_=t(`<h2 id="eslint-\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#eslint-\u4F9D\u8D56" aria-hidden="true">#</a> ESLint \u4F9D\u8D56</h2><p>\u5B89\u88C5\u4F9D\u8D56\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token function">npm</span> init -y

<span class="token comment"># \u5B89\u88C5 eslint</span>
<span class="token function">npm</span> i eslint -D
<span class="token comment"># \u5982\u679C\u9700\u8981\u652F\u6301 ts</span>
<span class="token function">npm</span> i typescript -D
</code></pre></div><p>\u521D\u59CB\u5316 eslint\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># https://docs.npmjs.com/cli/v7/commands/npx</span>
npx eslint --init
</code></pre></div><p>\u68C0\u6D4B\u548C\u683C\u5F0F\u5316\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code>npx eslint yourfile.js
npx eslint yourfile.js --fix
</code></pre></div><p>\u4E5F\u53EF\u4EE5\u914D\u7F6E <code>package.json</code> script\uFF1A</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js ./ --fix&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u81F3\u4E8E\u5728 <code>git hooks</code> \u5904\u6DFB\u52A0 <code>lint</code>\uFF0C\u6B64\u5904\u5C31\u4E0D\u5C55\u5F00\u4E86\u3002</p><h2 id="\u542F\u7528\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u542F\u7528\u63D2\u4EF6" aria-hidden="true">#</a> \u542F\u7528\u63D2\u4EF6</h2><p>\u4EE5\u4E0A\u90FD\u662F\u547D\u4EE4\u884C\u5B8C\u6210\u7684\u3002\u5F53\u5E0C\u671B\u5728\u7F16\u8F91\u5668 <code>VSCode</code> \u4E2D\u83B7\u5F97\u66F4\u597D\u7684\u5C55\u793A\u5219\u9700\u8981\u5B89\u88C5\u4E00\u4E9B\u63D2\u4EF6\uFF1A</p><ol><li><code>Vetur</code> \u66F4\u597D\u7684\u652F\u6301 <code>Vue</code> \u6587\u4EF6(\u4E0E\u683C\u5F0F\u5316\u65E0\u5173)\uFF1B</li><li><code>ESLint</code> \u652F\u6301\u81EA\u52A8\u683C\u5F0F\u5316\u3002</li></ol><p>\u914D\u7F6E <code>ESLint</code> \u540E\u5728\u7F16\u8F91\u5668\u4E2D\u4FDD\u5B58(<code>Ctrl + S</code>)\u5373\u4F1A\u81EA\u52A8\u683C\u5F0F\u5316\u3002</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// eslint + format</span>
<span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;.vue&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;vue&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6\u8BF4\u660E</h2>`,16),v=s("\u914D\u7F6E\u6587\u4EF6\u540D\u4E3A "),m={href:"https://eslint.org/docs/user-guide/configuring/",target:"_blank",rel:"noopener noreferrer"},x=s(".eslintrc"),f=s("\u3002"),b=t(`<h3 id="\u89E3\u6790\u53C2\u6570-parseroptions" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790\u53C2\u6570-parseroptions" aria-hidden="true">#</a> \u89E3\u6790\u53C2\u6570 parserOptions</h3><p>\u9ED8\u8BA4\u89E3\u6790\u5668\uFF08parser\uFF09 \u4E3A <code>espree</code>\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4E3A <code>babel</code> \u6216 <code>typescript</code> \u7684\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  parserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    ecmaVersion<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    parser<span class="token operator">:</span> <span class="token string">&#39;@typescript-eslint/parser&#39;</span><span class="token punctuation">,</span>
    sourceType<span class="token operator">:</span> <span class="token string">&#39;module&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u73AF\u5883-env" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883-env" aria-hidden="true">#</a> \u73AF\u5883 env</h3><p>\u4E0D\u540C\u7684\u73AF\u5883\u53EF\u4EE5\u63D0\u4F9B\u4E0D\u540C\u7684\u73AF\u5883\u5168\u5C40\u53D8\u91CF\u3002\u4F8B\u5982 <code>browser</code> \u73AF\u5883\u4E0B\u53EF\u4EE5\u4F7F\u7528 <code>window</code> \u5168\u5C40\u53D8\u91CF\uFF1B<code>node</code> \u73AF\u5883\u4E0B\u53EF\u4EE5\u4F7F\u7528 <code>node</code> \u4E00\u7CFB\u5217\u53D8\u91CF\uFF1B<code>jest</code> \u73AF\u5883\u4E0B\u53EF\u4EE5\u4F7F\u7528 <code>describe</code>\u3001<code>test</code> \u7B49\uFF1B<code>es(/d+)</code> \u5219\u5BF9\u5E94\u4E86 <code>EcmaScript</code> \u7684\u79CD\u79CD\u7279\u6027\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0C\u5F88\u591A\u65F6\u5019\u5F15\u5165\u5E76\u4E0D\u77E5\u540D\u7684\u7B2C\u4E09\u65B9\u5305\u5462\uFF1F\u5219\u53EF\u4F7F\u7528 <code>globals</code>\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  globals<span class="token operator">:</span> <span class="token punctuation">{</span>
    someLib<span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A</p><ul><li><code>false</code>\u3001<code>&quot;readable&quot;</code>\u3001<code>&quot;readonly&quot;</code> \u7B49\u4EF7</li><li><code>true</code>\u3001<code>&quot;writeable&quot;</code>\u3001<code>&quot;writable&quot;</code> \u7B49\u4EF7</li></ul><h3 id="\u6269\u5C55-extends" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55-extends" aria-hidden="true">#</a> \u6269\u5C55 extends</h3><p>\u7C7B\u4F3C\u4E8E <code>babel</code> \u7684 <code>presets</code> \u6982\u5FF5\u4E00\u81F4\uFF0C\u662F\u4E00\u6574\u5957\u89C4\u8303\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;eslint:recommended&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;standard&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8BF4\u660E\uFF1A</p>`,13),q=n("li",null,[n("code",null,"eslint"),s(" \u4E3A\u5B98\u65B9\u6269\u5C55")],-1),j=n("code",null,"plugin",-1),y=s(" \u4E3A\u63D2\u4EF6\u7C7B\u578B\u6269\u5C55\uFF0C"),S=n("code",null,"vue",-1),E=s(" \u53EF\u4EE5\u624B\u52A8\u8C03\u6574\u4E3A "),L=n("code",null,"vue3",-1),V=s("\uFF0C\u5177\u4F53\u770B "),w={href:"https://eslint.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},O=s("eslint-plugin-vue"),D=n("li",null,[n("code",null,"eslint-config"),s(" \u5E38\u5E38\u6765\u81EA\u4E00\u4E9B\u56E2\u961F\u7684\u7EA6\u675F\uFF0C\u5982 "),n("code",null,"eslint-config-airbnb"),s("\u3001"),n("code",null,"eslint-config-standard"),s("\u3001"),n("code",null,"eslint-config-google")],-1),N=t(`<h3 id="\u63D2\u4EF6-plugins" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6-plugins" aria-hidden="true">#</a> \u63D2\u4EF6 plugins</h3><p><code>ESLint</code> \u9ED8\u8BA4\u53EF\u4EE5\u68C0\u6D4B <code>JavaScript</code>\uFF0C\u800C\u5982\u679C\u60F3\u68C0\u6D4B\u66F4\u591A\uFF0C\u4F8B\u5982 <code>Vue</code>\u3001<code>TypeScript</code> \u5219\u9700\u8981\u53E6\u884C\u6DFB\u52A0\u89E3\u6790\u4E86\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;@typescript-eslint&#39;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u89C4\u5219-rules" tabindex="-1"><a class="header-anchor" href="#\u89C4\u5219-rules" aria-hidden="true">#</a> \u89C4\u5219 rules</h3><p>\u5F53 <code>extends</code> \u4E2D\u90E8\u5206\u89C4\u5219\u4E0D\u5408\u4F60\u53E3\u5473\u65F6\u53EF\u5728\u6B64\u4E00\u4E00\u4FEE\u6539\u3002</p><h2 id="\u63D2\u4EF6-prettier" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6-prettier" aria-hidden="true">#</a> \u63D2\u4EF6 Prettier</h2>`,6),B=s("\u5728\u4E4B\u524D\u4ECB\u7ECD\u4E86 "),C=n("code",null,"plugins",-1),T=s(" \u53EF\u4EE5\u652F\u6301\u66F4\u591A\u7684\u6587\u4EF6\u683C\u5F0F\uFF0C\u90A3 "),A={href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"},F=s("prettier"),P=s(" \u5219\u662F\u4E13\u4E1A\u7684\u3002"),J=t(`<h3 id="prettier-\u4F9D\u8D56\u53CA\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#prettier-\u4F9D\u8D56\u53CA\u914D\u7F6E" aria-hidden="true">#</a> Prettier \u4F9D\u8D56\u53CA\u914D\u7F6E</h3><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 prettier</span>
<span class="token function">yarn</span> <span class="token function">add</span> prettier --exact -D
<span class="token comment"># \u914D\u7F6E</span>
<span class="token builtin class-name">echo</span> module.exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span> .prettierrc.js
<span class="token function">touch</span> .prettierignore
</code></pre></div>`,2),W=s("\u5728 "),z=n("code",null,".prettierrc.js",-1),G=s(" \u4E2D\u53EF\u5BF9"),H={href:"https://prettier.io/docs/en/options.html",target:"_blank",rel:"noopener noreferrer"},I=s("\u914D\u7F6E"),K=s("\u7A0D\u4F5C\u4FEE\u6539\u3002"),M=t(`<h3 id="\u642D\u914D-eslint-\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u642D\u914D-eslint-\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> \u642D\u914D ESLint \u4E00\u8D77\u4F7F\u7528</h3><p>\u9996\u5148\u51C6\u5907\u63D2\u4EF6\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> eslint-plugin-prettier -D
</code></pre></div><p>\u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;standard&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:vue/essential&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;plugin:prettier/recommended&#39;</span> <span class="token comment">// \u653E\u5728\u6700\u540E\u53EF\u4EE5\u8986\u76D6\u4E4B\u524D\u89C4\u5219</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5);function Q(R,U){const a=o("OutboundLink");return i(),p(c,null,[u,n("p",null,[d,n("a",k,[h,e(a)]),g]),_,n("p",null,[v,n("a",m,[x,e(a)]),f]),b,n("ul",null,[q,n("li",null,[j,y,S,E,L,V,n("a",w,[O,e(a)])]),D]),N,n("p",null,[B,C,T,n("a",A,[F,e(a)]),P]),J,n("p",null,[W,z,G,n("a",H,[I,e(a)]),K]),M],64)}var Z=r(l,[["render",Q]]);export{Z as default};

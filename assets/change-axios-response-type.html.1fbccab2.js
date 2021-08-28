import{r as s,o as n,c as a,a as p,b as t,F as o,e,d as c}from"./app.984671f0.js";const l={},r=e('<h1 id="修改-axios-response-返回类型" tabindex="-1"><a class="header-anchor" href="#修改-axios-response-返回类型" aria-hidden="true">#</a> 修改 axios response 返回类型</h1><h2 id="typescript-错误的类型提示" tabindex="-1"><a class="header-anchor" href="#typescript-错误的类型提示" aria-hidden="true">#</a> TypeScript 错误的类型提示</h2><p>在 axios 相应拦截中修改了返回值：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> \n  err <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre></div><p>但是使用时发现返回值类型依然是 <code>AxiosResponse&lt;any&gt;</code>：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = AxiosPromise&lt;any&gt;</span>\n</code></pre></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2>',7),k=c("解决方案参考："),i={href:"https://github.com/axios/axios/issues/1510",target:"_blank",rel:"noopener noreferrer"},u=c("How to use Axios with TypeScript when using response interceptors (AxiosResponse issue)"),g=e('<h3 id="_1-修改定义" tabindex="-1"><a class="header-anchor" href="#_1-修改定义" aria-hidden="true">#</a> 1. 修改定义</h3><p>这并不是一个好的方案，会影响到其他内容。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// src/types/axios/axios.d.ts</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;axios&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosInstance</span> <span class="token punctuation">{</span>\n    <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">head</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;./node_modules/@types&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;./src/types/&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="_2-指定返回类型" tabindex="-1"><a class="header-anchor" href="#_2-指定返回类型" aria-hidden="true">#</a> 2. 指定返回类型</h3>',5),d=c("这是一个更好的选择，在 "),f={href:"https://github.com/axios/axios/pull/1605",target:"_blank",rel:"noopener noreferrer"},y=c("Allow custom return types(PR)"),b=c(" 中："),x=e('<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosInstance</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise<span class="token punctuation">;</span>\n  <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise<span class="token punctuation">;</span>\n  defaults<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">;</span>\n  interceptors<span class="token operator">:</span> <span class="token punctuation">{</span>\n    request<span class="token operator">:</span> AxiosInterceptorManager<span class="token operator">&lt;</span>AxiosRequestConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    response<span class="token operator">:</span> AxiosInterceptorManager<span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">head</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>可以看到增加了 <code>R</code> 指定返回类型，当没手动制定时会根据 <code>T</code> 进行推导，这样就可以得到一个良好的解决方式：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = Promise&lt;User&gt;</span>\n</code></pre></div><p>但作为接口而言，一般会加一层封装：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AxiosResponseData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  code<span class="token operator">:</span> <span class="token builtin">number</span>\n  message<span class="token operator">:</span> <span class="token builtin">string</span>\n  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> AxiosResponseData<span class="token operator">&lt;</span>User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = Promise&lt;AxiosResponseData&lt;User[]&gt;&gt;</span>\n</code></pre></div><p>如果在响应拦截做了处理，则可以省略这一部分，毕竟每个 <code>interface</code> 都加这个还是有些麻烦的。</p>',6);l.render=function(e,c){const l=s("OutboundLink");return n(),a(o,null,[r,p("p",null,[k,p("a",i,[u,t(l)])]),g,p("p",null,[d,p("a",f,[y,t(l)]),b]),x],64)};export{l as default};

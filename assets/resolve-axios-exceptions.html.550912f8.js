import{r as s,o as n,c as a,a as p,F as t,d as o,b as e}from"./app.23afa273.js";const c={},l=o('<h1 id="处理-axios-返回类型错误" tabindex="-1"><a class="header-anchor" href="#处理-axios-返回类型错误" aria-hidden="true">#</a> 处理 axios 返回类型错误</h1><h2 id="typescript-错误的类型提示" tabindex="-1"><a class="header-anchor" href="#typescript-错误的类型提示" aria-hidden="true">#</a> TypeScript 错误的类型提示</h2><p>在 axios 相应拦截中修改了返回值：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> response<span class="token punctuation">.</span>data\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> \n  err <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre></div><p>但是使用时发现返回值类型依然是 <code>AxiosResponse&lt;any&gt;</code>：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = AxiosPromise&lt;any&gt;</span>\n</code></pre></div><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2>',7),r=e("解决方案参考："),k={href:"https://github.com/axios/axios/issues/1510",target:"_blank",rel:"noopener noreferrer"},i=e("How to use Axios with TypeScript when using response interceptors (AxiosResponse issue)"),u=o('<h3 id="修改定义" tabindex="-1"><a class="header-anchor" href="#修改定义" aria-hidden="true">#</a> 修改定义</h3><p>这并不是一个好的方案，会影响到其他内容。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// src/types/axios/axios.d.ts</span>\n<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>\n\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;axios&#39;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosInstance</span> <span class="token punctuation">{</span>\n    <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">head</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><div class="language-json ext-json"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;./node_modules/@types&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;./src/types/&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="指定返回类型" tabindex="-1"><a class="header-anchor" href="#指定返回类型" aria-hidden="true">#</a> 指定返回类型</h3>',5),g=e("这是一个更好的选择，在 "),d={href:"https://github.com/axios/axios/pull/1605",target:"_blank",rel:"noopener noreferrer"},f=e("Allow custom return types(PR)"),y=e(" 中："),b=o('<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AxiosInstance</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise<span class="token punctuation">;</span>\n  <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> AxiosPromise<span class="token punctuation">;</span>\n  defaults<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">;</span>\n  interceptors<span class="token operator">:</span> <span class="token punctuation">{</span>\n    request<span class="token operator">:</span> AxiosInterceptorManager<span class="token operator">&lt;</span>AxiosRequestConfig<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n    response<span class="token operator">:</span> AxiosInterceptorManager<span class="token operator">&lt;</span>AxiosResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span> <span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">head</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">put</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n  <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token operator">=</span> AxiosResponse<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> config<span class="token operator">?</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>可以看到增加了 <code>R</code> 指定返回类型，当没手动制定时会根据 <code>T</code> 进行推导，这样就可以得到一个良好的解决方式：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> User<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = Promise&lt;User&gt;</span>\n</code></pre></div><p>但作为接口而言，一般会加一层封装：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">AxiosResponseData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>\n  code<span class="token operator">:</span> <span class="token builtin">number</span>\n  message<span class="token operator">:</span> <span class="token builtin">string</span>\n  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token builtin">string</span>\n  age<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> res <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> AxiosResponseData<span class="token operator">&lt;</span>User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">T</span></span> <span class="token operator">=</span> <span class="token keyword">typeof</span> res\n<span class="token comment">// type T = Promise&lt;AxiosResponseData&lt;User[]&gt;&gt;</span>\n</code></pre></div>',5);c.render=function(o,e){const c=s("OutboundLink");return n(),a(t,null,[l,p("p",null,[r,p("a",k,[i,p(c)])]),u,p("p",null,[g,p("a",d,[f,p(c)]),y]),b],64)};export default c;

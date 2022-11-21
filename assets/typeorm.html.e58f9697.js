import{r as o,c as e,a as n,b as t,F as c,d as s,e as p,o as l}from"./app.b7a98728.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";const k={},r=n("h1",{id:"typeorm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#typeorm","aria-hidden":"true"},"#"),s(" TypeORM")],-1),i=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),d={href:"https://typeorm.io/",target:"_blank",rel:"noopener noreferrer"},m=s("TypeORM"),y=s(" \u662F\u4E00\u4E2A "),h={href:"https://en.wikipedia.org/wiki/Object-relational_mapping",target:"_blank",rel:"noopener noreferrer"},g=s("ORM"),f=s(" \u6846\u67B6\u3002"),w=p(`<p>\u53EF\u7B80\u5355\u7406\u89E3\u4E3A\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>\u6570\u636E\u5E93\u7684\u8868\uFF08table\uFF09 --&gt; \u7C7B\uFF08class\uFF09
\u8BB0\u5F55\uFF08record\uFF0C\u884C\u6570\u636E\uFF09--&gt; \u5BF9\u8C61\u5B9E\u4F8B\uFF08object\uFF09
\u5B57\u6BB5\uFF08field\uFF09--&gt; \u5BF9\u8C61\u7684\u5C5E\u6027\uFF08attribute\uFF09
</code></pre></div><p>\u4EE5\u4E0B\u6709\u4E00\u4E9B\u7279\u6027\uFF08\u597D\u5904\uFF09\u7684\u8BF4\u660E\uFF0C\u4F46\u7CDF\u7CD5\u7684\u662F\u5B66\u4E60 ORM \u7684\u6210\u672C\u5E76\u4E0D\u4F4E\uFF0C\u4E8E\u662F\u6709\u4E86\u8FD9\u7BC7\u6284\u5199\uFF08\u76F8\u5BF9\u539F\u6587\u7B5B\u51CF\uFF09\u3002</p><h2 id="\u5206\u6B65\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u5206\u6B65\u6307\u5357" aria-hidden="true">#</a> \u5206\u6B65\u6307\u5357</h2><h3 id="_1-\u521B\u5EFA\u4E00\u4E2A\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u4E00\u4E2A\u6A21\u578B" aria-hidden="true">#</a> 1. \u521B\u5EFA\u4E00\u4E2A\u6A21\u578B</h3><p>\u4F7F\u7528\u6570\u636E\u5E93\u4ECE\u521B\u5EFA\u8868\u5F00\u59CB\u3002\u5982\u4F55\u544A\u8BC9 TypeORM \u521B\u5EFA\u6570\u636E\u5E93\u8868\uFF1F\u7B54\u6848\u662F - \u901A\u8FC7\u6A21\u578B\u3002\u5E94\u7528\u7A0B\u5E8F\u4E2D\u7684\u6A21\u578B\u5373\u6570\u636E\u5E93\u7684\u8868\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5B58\u5728 <code>Photo</code> \u6A21\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5E76\u4E14\u5E0C\u671B\u5C06 photos \u5B58\u50A8\u5728\u6570\u636E\u5E93\u4E2D\u3002\u8981\u5728\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u5185\u5BB9\uFF0C\u9996\u5148\u9700\u8981\u4E00\u4E2A\u6570\u636E\u5E93\u8868\uFF0C\u5E76\u4ECE\u6A21\u578B\u4E2D\u521B\u5EFA\u6570\u636E\u5E93\u8868\u3002\u4F46\u662F\u5E76\u975E\u6240\u6709\u6A21\u578B\uFF0C\u53EA\u6709\u5B9A\u4E49\u4E3A entities \u7684\u6A21\u578B\u624D\u4F1A\u88AB\u4F7F\u7528\u3002</p><h3 id="_2-\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F53" aria-hidden="true">#</a> 2. \u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F53</h3><p>\u5B9E\u4F53\u662F\u7531 <code>@Entity</code> \u88C5\u9970\u5668\u88C5\u9970\u7684\u6A21\u578B\u3002\u5C06\u4E3A\u6B64\u6A21\u578B\u521B\u5EFA\u6570\u636E\u5E93\u8868\u3002</p><p>\u5C06 <code>Photo</code> \u6A21\u578B\u8F6C\u4E3A\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u6B64\u5904\u91C7\u7528 Active Record \u6A21\u5F0F\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\uFF0C\u5C06\u4E3A <code>Photo</code> \u5B9E\u4F53\u521B\u5EFA\u4E00\u4E2A\u6570\u636E\u5E93\u8868\uFF0C\u4F46\u6CA1\u6709\u6307\u660E\u54EA\u4E2A\u5B57\u6BB5\u5C5E\u4E8E\u54EA\u4E00\u5217\u3002</p><h3 id="_3-\u6DFB\u52A0\u8868\u5217" tabindex="-1"><a class="header-anchor" href="#_3-\u6DFB\u52A0\u8868\u5217" aria-hidden="true">#</a> 3. \u6DFB\u52A0\u8868\u5217</h3><p>\u8981\u6DFB\u52A0\u6570\u636E\u5217\uFF0C\u53EA\u9700\u8981\u5C06\u8981\u751F\u6210\u7684\u5B9E\u4F53\u5C5E\u6027\u52A0\u4E0A <code>@Column</code> \u88C5\u9970\u5668\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isPublished<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u73B0\u5728\uFF0C<code>id</code>\u3001<code>name</code>\u3001<code>description</code>\u3001<code>filename</code>\u3001<code>views</code> \u548C <code>isPublished</code> \u5217\u5C06\u4F1A\u88AB\u6DFB\u52A0\u5230 <code>Photo</code> \u8868\u4E2D\u3002\u6570\u636E\u5E93\u4E2D\u7684\u5217\u7C7B\u578B\u4F1A\u6839\u636E\u5C5E\u6027\u7C7B\u578B\u63A8\u65AD\uFF0C\u4F8B\u5982\uFF1A<code>number</code> \u5C06\u4F1A\u88AB\u8F6C\u4E3A <code>integer</code>\uFF0C<code>string</code> \u5C06\u88AB\u8F6C\u4E3A <code>varchar</code>\uFF0C<code>boolean</code> \u5C06\u88AB\u8F6C\u4E3A <code>bool</code> \u7B49\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u624B\u52A8\u6307\u5B9A\u7C7B\u578B\u3002</p><p>\u6211\u4EEC\u5DF2\u7ECF\u751F\u6210\u4E86\u4E00\u4E2A\u5305\u542B\u5217\u7684\u6570\u636E\u5E93\u8868\uFF0C\u4F46\u662F\u522B\u5FD8\u4E86\uFF0C\u6BCF\u4E2A\u6570\u636E\u5E93\u8868\u5FC5\u987B\u5305\u542B\u4E3B\u952E\u7684\u5217\u3002</p><h3 id="_4-\u521B\u5EFA\u4E3B\u5217" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u4E3B\u5217" aria-hidden="true">#</a> 4. \u521B\u5EFA\u4E3B\u5217</h3><p>\u6BCF\u4E2A\u8868\u5FC5\u987B\u81F3\u5C11\u6709\u4E00\u4E2A\u4E3B\u952E\uFF0C\u8FD9\u662F\u5FC5\u987B\u7684\uFF0C\u65E0\u6CD5\u907F\u514D\u3002\u8981\u4F7F\u5217\u6210\u4E3A\u4E3B\u952E\uFF0C\u53EF\u4F7F\u7528 <code>@PrimaryColumn</code> \u88C5\u9970\u5668\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isPublished<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_5-\u521B\u5EFA\u81EA\u52A8\u751F\u6210\u7684\u5217" tabindex="-1"><a class="header-anchor" href="#_5-\u521B\u5EFA\u81EA\u52A8\u751F\u6210\u7684\u5217" aria-hidden="true">#</a> 5. \u521B\u5EFA\u81EA\u52A8\u751F\u6210\u7684\u5217</h3><p>\u5047\u8BBE\u4F60\u5E0C\u671B <code>id</code> \u5217\u81EA\u52A8\u751F\u6210\uFF0C\u4E3A\u6B64\u4F60\u9700\u8981\u5C06 <code>@PrimaryColumn</code> \u66FF\u6362\u4E3A <code>@PrimaryGeneratedColumn</code> \u88C5\u9970\u5668\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isPublished<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_6-\u5217\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_6-\u5217\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 6. \u5217\u6570\u636E\u7C7B\u578B</h3><p>\u5728\u6DFB\u52A0\u8868\u5217\u4E2D\u4ECB\u7ECD\u4E86\u9ED8\u8BA4\u6620\u5C04\u7C7B\u578B\uFF0C\u4F46\u5B9E\u9645\u4E0A\u5E76\u975E\u60F3\u8981\u7684\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    length<span class="token operator">:</span> <span class="token number">100</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&quot;text&quot;</span><span class="token punctuation">)</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&quot;double&quot;</span><span class="token punctuation">)</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isPublished<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_7-\u6570\u636E\u5E93\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#_7-\u6570\u636E\u5E93\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> 7. \u6570\u636E\u5E93\u589E\u5220\u6539\u67E5</h3><p>\u5728 Active Record \u6A21\u5F0F\u4E0B\u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
photo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;photo name&quot;</span>
photo<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&quot;photo description&quot;</span>
photo<span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token string">&quot;photo filename&quot;</span>
photo<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// \u4FDD\u5B58/\u66F4\u65B0</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u5220\u9664</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u67E5\u8BE2</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> skip<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> take<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;photo name&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53\u4F7F\u7528 <code>save</code> \u4FDD\u5B58\u5B9E\u4F53\u65F6\uFF0C\u5B83\u603B\u662F\u5148\u5C1D\u8BD5\u4F7F\u7528\u7ED9\u5B9A\u7684\u5B9E\u4F53 ID \u5728\u6570\u636E\u5E93\u4E2D\u67E5\u627E\u5B9E\u4F53\uFF0C\u5982\u679C\u627E\u5230\u5219\u66F4\u65B0\u6570\u636E\u5E93\u4E2D\u7684\u8FD9\u4E00\u884C\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u63D2\u5165\u4E00\u4E2A\u65B0\u884C\u3002</p><h3 id="_8-\u521B\u5EFA\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_8-\u521B\u5EFA\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB" aria-hidden="true">#</a> 8. \u521B\u5EFA\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB</h3><p>\u8981\u4E0E\u53E6\u4E00\u4E2A\u7C7B\u521B\u5EFA\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB\uFF0C\u9700\u8981\u5728\u5F53\u524D\u7C7B\u5305\u542B\u53E6\u4E00\u4E2A\u7C7B\u7684\u4FE1\u606F\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> OneToOne<span class="token punctuation">,</span> JoinColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./Photo&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PhotoMetadata</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;int&#39;</span><span class="token punctuation">)</span>
  height<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;int&#39;</span><span class="token punctuation">)</span>
  width<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  orientation<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  compressed<span class="token operator">:</span> <span class="token builtin">boolean</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  comment<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span>type <span class="token operator">=&gt;</span> Photo<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  photo<span class="token operator">:</span> Photo
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD9\u91CC\u4F7F\u7528\u4E86\u4E00\u4E2A\u540D\u4E3A <code>@OneToOne</code> \u7684\u88C5\u9970\u5668\uFF0C\u5B83\u5141\u8BB8\u5728\u4E24\u4E2A\u5B9E\u4F53\u4E4B\u95F4\u521B\u5EFA\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB\u3002<code>type =&gt; Photo</code> \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u60F3\u8981\u4E0E\u4E4B\u5EFA\u7ACB\u5173\u7CFB\u7684\u5B9E\u4F53\u7684\u7C7B\u3002\u7531\u4E8E\u7279\u5B9A\u8BED\u8A00\u7684\u5173\u7CFB\uFF0C\u53EA\u80FD\u4F7F\u7528\u4E00\u4E2A\u8FD4\u56DE\u7C7B\u7684\u51FD\u6570\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u4F7F\u7528\u8BE5\u7C7B\u3002\u540C\u65F6\u4E5F\u53EF\u4EE5\u628A\u5B83\u5199\u6210 <code>() =&gt; Photo</code>\uFF0C\u4F46\u662F <code>type =&gt; Photo</code> \u663E\u5F97\u4EE3\u7801\u66F4\u6709\u53EF\u8BFB\u6027\u3002<code>type</code> \u53D8\u91CF\u672C\u8EAB\u4E0D\u5305\u542B\u4EFB\u4F55\u5185\u5BB9\u3002</p><p>\u8FD8\u6709 <code>@JoinColumn</code> \u88C5\u9970\u5668\uFF0C\u8868\u660E\u5B9E\u4F53\u952E\u7684\u5BF9\u5E94\u5173\u7CFB\u3002\u5173\u7CFB\u53EF\u4EE5\u65F6\u5355\u5411\u7684\u6216\u53CC\u5411\u7684\u3002\u4F46\u662F\u53EA\u6709\u4E00\u65B9\u53EF\u4EE5\u62E5\u6709\uFF0C\u5728\u5173\u7CFB\u7684\u6240\u6709\u8005\u65B9\u4E2D\u9700\u8981\u4F7F\u7528 <code>@JoinColumn</code> \u88C5\u9970\u5668\u3002</p><h3 id="_9-\u4FDD\u5B58\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_9-\u4FDD\u5B58\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB" aria-hidden="true">#</a> 9. \u4FDD\u5B58\u4E00\u5BF9\u4E00\u7684\u5173\u7CFB</h3><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
photo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;photo name&quot;</span>
photo<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&quot;photo description&quot;</span>
photo<span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token string">&quot;photo filename&quot;</span>
photo<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PhotoMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
metadata<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">640</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">480</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>compressed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>comment <span class="token operator">=</span> <span class="token string">&quot;metadata comment&quot;</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>orientation <span class="token operator">=</span> <span class="token string">&quot;portait&quot;</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>photo <span class="token operator">=</span> photo<span class="token punctuation">;</span> <span class="token comment">// \u8054\u63A5\u4E24\u8005</span>

<span class="token comment">// \u5148\u4FDD\u5B58 photo</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u518D\u4FDD\u5B58 photo \u7684 metadata</span>
<span class="token keyword">await</span> metadata<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_10-\u53CD\u5411\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_10-\u53CD\u5411\u5173\u7CFB" aria-hidden="true">#</a> 10. \u53CD\u5411\u5173\u7CFB</h3><p>\u5173\u7CFB\u53EF\u4EE5\u662F\u5355\u5411\u7684\u6216\u53CC\u5411\u7684\u3002\u76EE\u524D PhotoMetadata \u548C Photo \u4E4B\u95F4\u7684\u5173\u7CFB\u662F\u5355\u5411\u7684\u3002\u5173\u7CFB\u7684\u6240\u6709\u8005\u65F6 PhotoMetadata\uFF0C\u800C Photo \u5BF9 PhotoMetadata \u4E00\u65E0\u6240\u77E5\u3002\u8FD9\u4F7F\u5F97\u4ECE Photo \u4E2D\u8BBF\u95EE PhotoMetadata \u53D8\u5F97\u5F88\u590D\u6742\u3002\u8981\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5728\u5B83\u4EEC\u4E4B\u95F4\u5EFA\u7ACB\u53CC\u5411\u5173\u7CFB\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// PhotoMetadata.ts</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PhotoMetadata</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7701\u7565\u5176\u4ED6\u5217 */</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span>type <span class="token operator">=&gt;</span> Photo<span class="token punctuation">,</span> photo <span class="token operator">=&gt;</span> photo<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  photo<span class="token operator">:</span> Photo
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// Photo.ts</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7701\u7565\u5176\u4ED6\u5217 */</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span>type <span class="token operator">=&gt;</span> PhotoMetadata<span class="token punctuation">,</span> photoMetadata <span class="token operator">=&gt;</span> photoMetadata<span class="token punctuation">.</span>photo<span class="token punctuation">)</span>
  metadata<span class="token operator">:</span> PhotoMetadata
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u5E94\u8BE5\u4EC5\u5728\u5173\u7CFB\u7684\u4E00\u4FA7\u4F7F\u7528 <code>@JoinColumn</code> \u88C5\u9970\u5668\uFF0C\u5173\u7CFB\u7684\u62E5\u6709\u65B9\u5305\u542B\u6570\u636E\u5E93\u4E2D\u5177\u6709\u5916\u952E\u7684\u5217\u3002</p><h3 id="_11-\u53D6\u51FA\u5173\u7CFB\u5BF9\u8C61\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_11-\u53D6\u51FA\u5173\u7CFB\u5BF9\u8C61\u7684\u6570\u636E" aria-hidden="true">#</a> 11. \u53D6\u51FA\u5173\u7CFB\u5BF9\u8C61\u7684\u6570\u636E</h3><p>\u5728\u5B8C\u6210 <strong>\u53CD\u5411\u5173\u7CFB</strong> \u540E\u624D\u53EF\u4EE5\u4F7F\u7528\u8BE5\u65B9\u6CD5\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;metadata&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;metadata&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4F7F\u7528 find \u9009\u9879\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\u5982\u679C\u9700\u8981\u66F4\u590D\u6742\u7684\u67E5\u8BE2\uFF0C\u5219\u5E94\u8BE5\u4F7F\u7528 <code>QueryBuilder</code>\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">createQueryBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;photo&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">innerJoinAndSelect</span><span class="token punctuation">(</span><span class="token string">&#39;photo.metadata&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;metadata&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_12-\u4F7F\u7528-cascades-\u81EA\u52A8\u4FDD\u5B58\u76F8\u5173\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_12-\u4F7F\u7528-cascades-\u81EA\u52A8\u4FDD\u5B58\u76F8\u5173\u5BF9\u8C61" aria-hidden="true">#</a> 12. \u4F7F\u7528 cascades \u81EA\u52A8\u4FDD\u5B58\u76F8\u5173\u5BF9\u8C61</h3><p>\u53EF\u4EE5\u5728\u5173\u7CFB\u4E2D\u8BBE\u7F6E <code>cascades</code> \u9009\u9879\uFF0C\u8FD9\u65F6\u5C31\u53EF\u4EE5\u4FDD\u5B58\u5176\u4ED6\u5BF9\u8C61\u7684\u540C\u65F6\u4FDD\u5B58\u76F8\u5173\u5BF9\u8C61\u3002\u4E0D\u77E5\u8FD9\u6837\u662F\u5426\u4F1A\u5F62\u6210\u4E8B\u52A1\uFF1F</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7701\u7565\u5176\u4ED6\u5217 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> PhotoMetadata<span class="token punctuation">,</span> <span class="token punctuation">(</span>photoMetadata<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> photoMetadata<span class="token punctuation">.</span>photo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    cascade<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  metadata<span class="token operator">:</span> PhotoMetadata<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5728\u4F7F\u7528\u65F6\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
photo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;photo name&quot;</span>
photo<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&quot;photo description&quot;</span>
photo<span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token string">&quot;photo filename&quot;</span>
photo<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PhotoMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
metadata<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">640</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">480</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>compressed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>comment <span class="token operator">=</span> <span class="token string">&quot;metadata comment&quot;</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>orientation <span class="token operator">=</span> <span class="token string">&quot;portait&quot;</span><span class="token punctuation">;</span>
metadata<span class="token punctuation">.</span>photo <span class="token operator">=</span> photo<span class="token punctuation">;</span>

photo<span class="token punctuation">.</span>metadata <span class="token operator">=</span> metadata<span class="token punctuation">;</span>

<span class="token comment">// \u5148\u4FDD\u5B58 photo</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_13-\u521B\u5EFA\u591A\u5BF9\u4E00-\u4E00\u5BF9\u591A\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_13-\u521B\u5EFA\u591A\u5BF9\u4E00-\u4E00\u5BF9\u591A\u5173\u7CFB" aria-hidden="true">#</a> 13. \u521B\u5EFA\u591A\u5BF9\u4E00/\u4E00\u5BF9\u591A\u5173\u7CFB</h3><p>\u5047\u8BBE\u4E00\u4E2A photo \u6709\u4E00\u4E2A author\uFF0C\u6BCF\u4E2A author \u90FD\u53EF\u4EE5\u6709\u591A\u4E2A photos\u3002\u521B\u5EFA\u4E00\u4E2A <code>Author</code> \u5B9E\u4F53\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  BaseEntity<span class="token punctuation">,</span>
  Column<span class="token punctuation">,</span>
  Entity<span class="token punctuation">,</span>
  OneToMany<span class="token punctuation">,</span>
  PrimaryGeneratedColumn<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./photo.entity&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Author</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Photo<span class="token punctuation">,</span> <span class="token punctuation">(</span>photo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> photo<span class="token punctuation">.</span>author<span class="token punctuation">)</span>
  photos<span class="token operator">:</span> Photo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>Author</code> \u5305\u542B\u53CD\u5411\u5173\u7CFB\u3002<code>@OneToMany</code> \u603B\u662F\u53CD\u5411\u7684\uFF0C\u5E76\u4E14\u603B\u662F\u4E0E <code>@ManyToOne</code> \u4E00\u8D77\u51FA\u73B0\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7701\u7565\u5176\u4ED6\u5217 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Author<span class="token punctuation">,</span> <span class="token punctuation">(</span>author<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> author<span class="token punctuation">.</span>photos<span class="token punctuation">)</span>
  author<span class="token operator">:</span> Author<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_14-\u521B\u5EFA\u591A\u5BF9\u591A\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_14-\u521B\u5EFA\u591A\u5BF9\u591A\u5173\u7CFB" aria-hidden="true">#</a> 14. \u521B\u5EFA\u591A\u5BF9\u591A\u5173\u7CFB</h3><p>\u5047\u8BBE\u4E00\u4E2A photo \u53EF\u4EE5\u653E\u5728\u591A\u4E2A album \u4E2D\uFF0C\u6BCF\u4E2A album \u53EF\u4EE5\u5B58\u653E\u591A\u4E2A photo\u3002\u521B\u5EFA\u4E00\u4E2A <code>Album</code> \u5B9E\u4F53\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  BaseEntity<span class="token punctuation">,</span>
  Column<span class="token punctuation">,</span>
  Entity<span class="token punctuation">,</span>
  JoinTable<span class="token punctuation">,</span>
  ManyToMany<span class="token punctuation">,</span>
  PrimaryGeneratedColumn<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Photo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./photo.entity&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Album</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Photo<span class="token punctuation">,</span> <span class="token punctuation">(</span>photo<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> photo<span class="token punctuation">.</span>album<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinTable</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  photos<span class="token operator">:</span> Photo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>@JoinTable</code> \u9700\u8981\u6307\u5B9A\u8FD9\u662F\u5173\u7CFB\u7684\u6240\u6709\u8005\u65B9\u3002</p><p>\u63A5\u7740\u6DFB\u52A0\u53CD\u5411\u5173\u7CFB\u5230 <code>Photo</code> \u4E2D\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u7701\u7565\u5176\u4ED6\u5217 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Album<span class="token punctuation">,</span> <span class="token punctuation">(</span>album<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> album<span class="token punctuation">.</span>photos<span class="token punctuation">)</span>
  album<span class="token operator">:</span> Album<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u63A5\u7740\uFF0C\u6570\u636E\u5E93\u4E2D\u4F1A\u51FA\u73B0 <code>album_photos_photo</code> \u8054\u7ED3\u8868\u3002</p><p>\u4FDD\u5B58\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> album1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Album</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
album1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bears&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> album1<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> album2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Album</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
album2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Me&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> album2<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;photo name3&#39;</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&#39;photo description3&#39;</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token string">&#39;photo filename3&#39;</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>views <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
photo<span class="token punctuation">.</span>album <span class="token operator">=</span> <span class="token punctuation">[</span>album1<span class="token punctuation">,</span> album2<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;album&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53" aria-hidden="true">#</a> \u5B9E\u4F53</h2><p>\u57FA\u672C\u5B9E\u4F53\u7531\u5217\u548C\u5173\u7CFB\u7EC4\u6210\u3002\u6BCF\u4E2A\u5B9E\u4F53\u5FC5\u987B\u6709\u4E00\u4E2A\u4E3B\u5217\uFF0C\u5426\u5219\u8BE5\u5B9E\u4F53\u4E0D\u4F1A\u5728\u6570\u636E\u5E93\u4E2D\u751F\u6210\u5BF9\u5E94\u7684\u8868\u3002</p><h3 id="\u5B9E\u4F53\u5217\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u5217\u7C7B\u578B" aria-hidden="true">#</a> \u5B9E\u4F53\u5217\u7C7B\u578B</h3><p>\u53EF\u4EE5\u5C06\u5217\u7C7B\u578B\u6307\u5B9A\u4E3A <code>@Column</code> \u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u6216\u8005\u5728 <code>@Column</code> \u7684\u5217\u9009\u9879\u4E2D\u6307\u5B9A\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;int&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// or</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u5982\u679C\u8FD8\u6709\u5176\u4ED6\u53C2\u6570</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// or</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span> length<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD8\u6709\u4E00\u4E9B\u5E38\u7528\u7684\u7C7B\u578B\uFF1A</p><ul><li><p><code>enum</code> \u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> UserRole <span class="token punctuation">{</span>
  <span class="token constant">ADMIN</span> <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">EDITOR</span> <span class="token operator">=</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">,</span>
  <span class="token constant">GHOST</span> <span class="token operator">=</span> <span class="token string">&#39;ghost&#39;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;enum&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">enum</span><span class="token operator">:</span> UserRole<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> UserRole<span class="token punctuation">.</span><span class="token constant">GHOST</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  role<span class="token operator">:</span> Role
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> UserRoleType <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;editor&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;ghost&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;enum&#39;</span><span class="token punctuation">,</span>
    <span class="token keyword">enum</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;editor&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ghost&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;ghost&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  role<span class="token operator">:</span> Role
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><code>simple-array</code> \u7C7B\u578B\uFF1A</p><p>\u6CE8\u610F\u4E0D\u80FD\u5728\u503C\u91CC\u9762\u6709\u4EFB\u4F55\u9017\u53F7\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;simple-array&#39;</span><span class="token punctuation">)</span>
  hobbies<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span>hobbies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sleep&#39;</span><span class="token punctuation">]</span>
</code></pre></div></li><li><p><code>simple-json</code> \u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserProfile</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  nickname<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;simple-json&#39;</span><span class="token punctuation">)</span>
  profile<span class="token operator">:</span> UserProfile
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span>profile <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> nickname<span class="token operator">:</span> <span class="token string">&#39;Malkovich&#39;</span> <span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="\u5B9E\u4F53\u5217\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F53\u5217\u9009\u9879" aria-hidden="true">#</a> \u5B9E\u4F53\u5217\u9009\u9879</h3><p>\u8BE5\u9009\u9879\u53C2\u8003 <code>ColumnOptions</code> \u63A5\u53E3\uFF1A</p><ul><li><code>type: ColumnType</code>\uFF1A\u5217\u7C7B\u578B</li><li><code>name: string</code>\uFF1A\u6570\u636E\u5E93\u8868\u4E2D\u7684\u5217\u540D</li><li><code>length: number</code>\uFF1A\u5217\u7C7B\u578B\u7684\u957F\u5EA6\uFF0C\u4F8B\u5982\u521B\u5EFA <code>varchar(150)</code></li><li><code>width:number</code>\uFF1A\u5217\u7C7B\u578B\u7684\u663E\u793A\u8303\u56F4</li><li><code>onUpdate: string</code>\uFF1A<code>ON UPDATE</code> \u89E6\u53D1\u5668</li><li><code>nullable: boolean</code>\uFF1A\u5728\u6570\u636E\u5E93\u4E2D\u4F7F\u5217 <code>NULL</code> \u6216 <code>NOT NULL</code>\uFF0C\u9ED8\u8BA4 false</li><li><code>select: boolean</code>\uFF1A\u5B9A\u4E49\u5728\u67E5\u8BE2\u65F6\u662F\u5426\u9ED8\u8BA4\u6B64\u5217</li><li><code>default: string</code>\uFF1A\u6DFB\u52A0\u6570\u636E\u5E93\u5217\u7684 <code>DEFAULT</code> \u503C</li><li><code>primary: boolean</code>\uFF1A\u5C06\u5217\u6807\u8BB0\u4E3A\u4E3B\u8981\u5217</li><li><code>unique: boolean</code>\uFF1A\u5C06\u5217\u6807\u8BB0\u4E3A\u552F\u4E00\u5217</li><li><code>comment: string</code>\uFF1A\u6570\u636E\u5E93\u5217\u5907\u6CE8</li><li><code>precision: number</code>\uFF1A\u5341\u8FDB\u5236\u5217\u7684\u7CBE\u5EA6\uFF0C\u8FD9\u662F\u4E3A\u503C\u5B58\u50A8\u7684\u6700\u5927\u4F4D\u6570</li><li><code>scale: number</code>\uFF1A\u5341\u8FDB\u5236\u5217\u7684\u6BD4\u4F8B\uFF0C\u8868\u793A\u5C0F\u6570\u70B9\u53F3\u4FA7\u7684\u4F4D\u6570</li><li><code>zerofill: boolean</code>\uFF1A\u5C06 <code>ZEROFILL</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u6570\u5B57\u5217</li><li><code>unsigned: boolean</code>\uFF1A\u5C06 <code>UNSIGNED</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u6570\u5B57\u5217</li><li><code>charset: string</code>\uFF1A\u5B9A\u4E49\u5217\u5B57\u7B26\u96C6</li><li><code>collation: string</code>\uFF1A\u5B9A\u4E49\u5217\u6392\u5E8F\u89C4\u5219</li><li><code>enum: string[] | AnyEnum</code>\uFF1A\u5728 <code>enum</code> \u5217\u7C7B\u578B\u4E2D\u4F7F\u7528\uFF0C\u4EE5\u6307\u5B9A\u5141\u8BB8\u7684\u679A\u4E3E\u503C\u5217\u8868</li><li><code>asExpression: string</code>\uFF1A\u751F\u6210\u7684\u5217\u8868\u8FBE\u5F0F</li><li><code>generatedType: &#39;VIRTUAL&#39; | &#39;STORED&#39;</code>\uFF1A\u751F\u6210\u7684\u5217\u7C7B\u578B</li></ul><h3 id="\u5D4C\u5165\u5F0F\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5165\u5F0F\u5B9E\u4F53" aria-hidden="true">#</a> \u5D4C\u5165\u5F0F\u5B9E\u4F53</h3><p>\u76F8\u5BF9\u4E8E\u7EE7\u627F\u800C\u8A00\uFF0C\u7EC4\u5408\u53EF\u80FD\u662F\u66F4\u597D\u7684\u9009\u62E9\uFF0C\u4E0D\u8FC7\u8FD9\u4F1A\u5F71\u54CD\u6570\u636E\u5E93\u7684\u5217\u540D\u3002</p><p>\u7EC4\u5408\u4F1A\u51CF\u5C11\u4EE3\u7801\uFF0C\u4F46\u5E76\u4E0D\u4F1A\u5F71\u54CD\u6570\u636E\u5E93\uFF0C\u56E0\u4E3A\u672A\u63D0\u4F9B\u751F\u6210\u6570\u636E\u5E93\u8868\u6240\u5FC5\u9700\u7684 <code>@Entity</code> \u88C5\u9970\u5668\u548C <strong>\u4E3B\u952E</strong>\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  first<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  last<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Name<span class="token punctuation">)</span>
  name<span class="token operator">:</span> Name
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isActive<span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEnity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Name<span class="token punctuation">)</span>
  name<span class="token operator">:</span> Name
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  isActive<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6811\u5B9E\u4F53" tabindex="-1"><a class="header-anchor" href="#\u6811\u5B9E\u4F53" aria-hidden="true">#</a> \u6811\u5B9E\u4F53</h3><p>\u6811\u7ED3\u6784\u652F\u6301\u591A\u79CD\u7C7B\u578B\uFF0C\u9664 \u90BB\u63A5\u5217\u8868\u5916\u90FD\u53EF\u901A\u8FC7 <code>@Tree</code> \u88C5\u9970\u5668\u7B80\u5355\u533A\u5206\uFF1A</p><ul><li><code>nested-set</code>\uFF1A\u5D4C\u5957\u96C6\u3002\u5BF9\u8BFB\u53D6\u975E\u5E38\u6709\u6548\uFF0C\u4F46\u5BF9\u5199\u5165\u4E0D\u5229\uFF0C\u4E14\u4E0D\u80FD\u5728\u5D4C\u5957\u96C6\u4E2D\u6709\u591A\u4E2A\u6839</li><li><code>materialized-path</code>\uFF1A\u7269\u5316\u8DEF\u5F84\uFF08\u201C\u8DEF\u5F84\u679A\u4E3E\u201D\uFF09\u3002\u7B80\u5355\u6709\u6548</li><li><code>closure-table</code>\uFF1A\u95ED\u5408\u8868\u3002\u5728\u8BFB\u53D6\u548C\u5199\u5165\u65B9\u9762\u90FD\u5F88\u6709\u6548</li></ul><p>\u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// entity</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Tree</span></span><span class="token punctuation">(</span><span class="token string">&#39;closure-table&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Category</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token string">&#39;uuid&#39;</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">TreeChildren</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  children<span class="token operator">:</span> Category<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">TreeParent</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  parent<span class="token operator">:</span> Category<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5B58\u50A8\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a1&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">await</span> a1<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a11 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a11<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a11&#39;</span><span class="token punctuation">;</span>
a11<span class="token punctuation">.</span>parent <span class="token operator">=</span> a1<span class="token punctuation">;</span>
<span class="token keyword">await</span> a11<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a12 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a12<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a12&#39;</span><span class="token punctuation">;</span>
a12<span class="token punctuation">.</span>parent <span class="token operator">=</span> a1<span class="token punctuation">;</span>
<span class="token keyword">await</span> a12<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a111 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a111<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a111&#39;</span><span class="token punctuation">;</span>
a111<span class="token punctuation">.</span>parent <span class="token operator">=</span> a11<span class="token punctuation">;</span>
<span class="token keyword">await</span> a111<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> a112 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
a112<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;a112&#39;</span><span class="token punctuation">;</span>
a112<span class="token punctuation">.</span>parent <span class="token operator">=</span> a11<span class="token punctuation">;</span>
<span class="token keyword">await</span> a112<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u67E5\u8BE2\u6570\u636E\uFF1A</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token comment">// \u8FD4\u56DE\u6240\u6709</span>
<span class="token keyword">const</span> trees <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findTrees</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u6839</span>
<span class="token keyword">const</span> roots <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u5B50 Tree</span>
<span class="token keyword">const</span> a11 <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;a11&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findDescendantsTree</span><span class="token punctuation">(</span>a11<span class="token punctuation">)</span>

<span class="token comment">// \u8FD4\u56DE\u7236\u7EA7</span>
<span class="token keyword">const</span> a11 <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;a11&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findAncestorsTree</span><span class="token punctuation">(</span>a11<span class="token punctuation">)</span>
</code></pre></div>`,93),b=s("\u66F4\u591A\u67E5\u8BE2\u53C2\u8003 "),x={href:"https://typeorm.io/#/tree-entities/%E4%BD%BF%E7%94%A8%E6%A0%91%E5%AE%9E%E4%BD%93",target:"_blank",rel:"noopener noreferrer"},C=s("\u4F7F\u7528\u6811\u5B9E\u4F53"),v=s("\u3002"),P=p('<h2 id="\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u5173\u7CFB" aria-hidden="true">#</a> \u5173\u7CFB</h2><p>\u5173\u7CFB\u53EF\u4EE5\u5E2E\u52A9\u4F60\u8F7B\u677E\u5730\u4E0E\u76F8\u5173\u5B9E\u4F53\u5408\u4F5C\u3002</p><h3 id="joincolumn-jointable" tabindex="-1"><a class="header-anchor" href="#joincolumn-jointable" aria-hidden="true">#</a> JoinColumn &amp; JoinTable</h3><p><code>@JoinColumn</code> \u4E0D\u4EC5\u5B9A\u4E49\u4E86\u5173\u7CFB\u7684\u54EA\u4E00\u4FA7\u5305\u542B\u5E26\u6709\u5916\u952E\u7684\u8FDE\u63A5\u5217\uFF0C\u8FD8\u5141\u8BB8\u81EA\u5B9A\u4E49\u8FDE\u63A5\u5217\u540D\u548C\u5F15\u7528\u7684\u5217\u540D\u3002</p><p>\u5F53\u6211\u4EEC\u8BBE\u7F6E <code>@JoinColumn</code> \u65F6\uFF0C\u5B83\u4F1A\u81EA\u52A8\u5728\u6570\u636E\u5E93\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>propertyName + referenceColumnName</code> \u7684\u5217\u3002</p><p><code>@JoinTable</code> \u7528\u4E8E \u201C\u591A\u5BF9\u591A\u201D \u5173\u7CFB\uFF0C\u8054\u7ED3\u8868\u662F\u7531 TypeORM \u81EA\u52A8\u521B\u5EFA\u7684\u4E00\u4E2A\u7279\u6B8A\u7684\u5355\u72EC\u8868\u3002</p><h3 id="\u591A\u5BF9\u4E00\u548C\u4E00\u5BF9\u591A" tabindex="-1"><a class="header-anchor" href="#\u591A\u5BF9\u4E00\u548C\u4E00\u5BF9\u591A" aria-hidden="true">#</a> \u591A\u5BF9\u4E00\u548C\u4E00\u5BF9\u591A</h3><p>\u53EF\u4EE5\u5728 <code>@ManyToOne</code> / <code>@OneToMany</code> \u5173\u7CFB\u4E2D\u7701\u7565 <code>@JoinColumn</code>\uFF0C\u9664\u975E\u9700\u8981\u81EA\u5B9A\u4E49\u5173\u8054\u5217\u5728\u6570\u636E\u5E93\u4E2D\u7684\u540D\u79F0\u3002</p><p><code>@ManyToOne</code> \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\uFF0C\u4F46 <code>@OneToMany</code> \u5FC5\u987B\u642D\u914D <code>@ManyToOne</code> \u4F7F\u7528\u3002</p><p>\u5728\u8BBE\u7F6E <code>@ManyToOne</code> \u7684\u5730\u65B9\uFF0C\u76F8\u5173\u5B9E\u4F53\u5C06\u4F1A\u6709 \u201C\u5173\u8054 id\u201D \u548C\u5916\u952E\u3002</p>',10);function E(_,T){const a=o("OutboundLink");return l(),e(c,null,[r,i,n("p",null,[n("a",d,[m,t(a)]),y,n("a",h,[g,t(a)]),f]),w,n("p",null,[b,n("a",x,[C,t(a)]),v]),P],64)}var B=u(k,[["render",E]]);export{B as default};

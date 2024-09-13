import{_ as e,M as c,p as l,q as u,R as s,t as a,N as p,a1 as o}from"./framework-e3e34937.js";const k={},r={href:"https://typeorm.io/",target:"_blank",rel:"noopener noreferrer"},i={href:"https://en.wikipedia.org/wiki/Object-relational_mapping",target:"_blank",rel:"noopener noreferrer"},d={href:"https://typeorm.io/#/tree-entities/%E4%BD%BF%E7%94%A8%E6%A0%91%E5%AE%9E%E4%BD%93",target:"_blank",rel:"noopener noreferrer"};function m(y,n){const t=c("ExternalLinkIcon");return l(),u("div",null,[n[7]||(n[7]=s("h1",{id:"typeorm",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#typeorm","aria-hidden":"true"},"#"),a(" TypeORM")],-1)),n[8]||(n[8]=s("h2",{id:"介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),a(" 介绍")],-1)),s("p",null,[s("a",r,[n[0]||(n[0]=a("TypeORM")),p(t)]),n[2]||(n[2]=a(" 是一个 ")),s("a",i,[n[1]||(n[1]=a("ORM")),p(t)]),n[3]||(n[3]=a(" 框架。"))]),n[9]||(n[9]=o(`<p>可简单理解为：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>数据库的表（table） --&gt; 类（class）
记录（record，行数据）--&gt; 对象实例（object）
字段（field）--&gt; 对象的属性（attribute）
</code></pre></div><p>以下有一些特性（好处）的说明，但糟糕的是学习 ORM 的成本并不低，于是有了这篇抄写（相对原文筛减）。</p><h2 id="分步指南" tabindex="-1"><a class="header-anchor" href="#分步指南" aria-hidden="true">#</a> 分步指南</h2><h3 id="_1-创建一个模型" tabindex="-1"><a class="header-anchor" href="#_1-创建一个模型" aria-hidden="true">#</a> 1. 创建一个模型</h3><p>使用数据库从创建表开始。如何告诉 TypeORM 创建数据库表？答案是 - 通过模型。应用程序中的模型即数据库的表。</p><p>举个例子，存在 <code>Photo</code> 模型：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><p>并且希望将 photos 存储在数据库中。要在数据库中存储内容，首先需要一个数据库表，并从模型中创建数据库表。但是并非所有模型，只有定义为 entities 的模型才会被使用。</p><h3 id="_2-创建一个实体" tabindex="-1"><a class="header-anchor" href="#_2-创建一个实体" aria-hidden="true">#</a> 2. 创建一个实体</h3><p>实体是由 <code>@Entity</code> 装饰器装饰的模型。将为此模型创建数据库表。</p><p>将 <code>Photo</code> 模型转为一个实体，此处采用 Active Record 模式：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span>
  filename<span class="token operator">:</span> <span class="token builtin">string</span>
  views<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre></div><p>现在，将为 <code>Photo</code> 实体创建一个数据库表，但没有指明哪个字段属于哪一列。</p><h3 id="_3-添加表列" tabindex="-1"><a class="header-anchor" href="#_3-添加表列" aria-hidden="true">#</a> 3. 添加表列</h3><p>要添加数据列，只需要将要生成的实体属性加上 <code>@Column</code> 装饰器：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

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
</code></pre></div><p>现在，<code>id</code>、<code>name</code>、<code>description</code>、<code>filename</code>、<code>views</code> 和 <code>isPublished</code> 列将会被添加到 <code>Photo</code> 表中。数据库中的列类型会根据属性类型推断，例如：<code>number</code> 将会被转为 <code>integer</code>，<code>string</code> 将被转为 <code>varchar</code>，<code>boolean</code> 将被转为 <code>bool</code> 等，当然也可以手动指定类型。</p><p>我们已经生成了一个包含列的数据库表，但是别忘了，每个数据库表必须包含主键的列。</p><h3 id="_4-创建主列" tabindex="-1"><a class="header-anchor" href="#_4-创建主列" aria-hidden="true">#</a> 4. 创建主列</h3><p>每个表必须至少有一个主键，这是必须的，无法避免。要使列成为主键，可使用 <code>@PrimaryColumn</code> 装饰器：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

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
</code></pre></div><h3 id="_5-创建自动生成的列" tabindex="-1"><a class="header-anchor" href="#_5-创建自动生成的列" aria-hidden="true">#</a> 5. 创建自动生成的列</h3><p>假设你希望 <code>id</code> 列自动生成，为此你需要将 <code>@PrimaryColumn</code> 替换为 <code>@PrimaryGeneratedColumn</code> 装饰器：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

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
</code></pre></div><h3 id="_6-列数据类型" tabindex="-1"><a class="header-anchor" href="#_6-列数据类型" aria-hidden="true">#</a> 6. 列数据类型</h3><p>在添加表列中介绍了默认映射类型，但实际上并非想要的类型：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>

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
</code></pre></div><h3 id="_7-数据库增删改查" tabindex="-1"><a class="header-anchor" href="#_7-数据库增删改查" aria-hidden="true">#</a> 7. 数据库增删改查</h3><p>在 Active Record 模式下使用：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
photo<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;photo name&quot;</span>
photo<span class="token punctuation">.</span>description <span class="token operator">=</span> <span class="token string">&quot;photo description&quot;</span>
photo<span class="token punctuation">.</span>filename <span class="token operator">=</span> <span class="token string">&quot;photo filename&quot;</span>
photo<span class="token punctuation">.</span>isPublished <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// 保存/更新</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 删除</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 查询</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> skip<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> take<span class="token operator">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> isPublished<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;photo name&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>当使用 <code>save</code> 保存实体时，它总是先尝试使用给定的实体 ID 在数据库中查找实体，如果找到则更新数据库中的这一行，如果没有则插入一个新行。</p><h3 id="_8-创建一对一的关系" tabindex="-1"><a class="header-anchor" href="#_8-创建一对一的关系" aria-hidden="true">#</a> 8. 创建一对一的关系</h3><p>要与另一个类创建一对一的关系，需要在当前类包含另一个类的信息：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Entity<span class="token punctuation">,</span> BaseEntity<span class="token punctuation">,</span> PrimaryGeneratedColumn<span class="token punctuation">,</span> Column<span class="token punctuation">,</span> OneToOne<span class="token punctuation">,</span> JoinColumn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;typeorm&#39;</span>
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
</code></pre></div><p>这里使用了一个名为 <code>@OneToOne</code> 的装饰器，它允许在两个实体之间创建一对一的关系。<code>type =&gt; Photo</code> 是一个函数，返回想要与之建立关系的实体的类。由于特定语言的关系，只能使用一个返回类的函数，而不是直接使用该类。同时也可以把它写成 <code>() =&gt; Photo</code>，但是 <code>type =&gt; Photo</code> 显得代码更有可读性。<code>type</code> 变量本身不包含任何内容。</p><p>还有 <code>@JoinColumn</code> 装饰器，表明实体键的对应关系。关系可以时单向的或双向的。但是只有一方可以拥有，在关系的所有者方中需要使用 <code>@JoinColumn</code> 装饰器。</p><h3 id="_9-保存一对一的关系" tabindex="-1"><a class="header-anchor" href="#_9-保存一对一的关系" aria-hidden="true">#</a> 9. 保存一对一的关系</h3><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
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
metadata<span class="token punctuation">.</span>photo <span class="token operator">=</span> photo<span class="token punctuation">;</span> <span class="token comment">// 联接两者</span>

<span class="token comment">// 先保存 photo</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// 再保存 photo 的 metadata</span>
<span class="token keyword">await</span> metadata<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_10-反向关系" tabindex="-1"><a class="header-anchor" href="#_10-反向关系" aria-hidden="true">#</a> 10. 反向关系</h3><p>关系可以是单向的或双向的。目前 PhotoMetadata 和 Photo 之间的关系是单向的。关系的所有者时 PhotoMetadata，而 Photo 对 PhotoMetadata 一无所知。这使得从 Photo 中访问 PhotoMetadata 变得很复杂。要解决这个问题，我们应该在它们之间建立双向关系。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// PhotoMetadata.ts</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PhotoMetadata</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 省略其他列 */</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span>type <span class="token operator">=&gt;</span> Photo<span class="token punctuation">,</span> photo <span class="token operator">=&gt;</span> photo<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">JoinColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  photo<span class="token operator">:</span> Photo
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Photo.ts</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 省略其他列 */</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span>type <span class="token operator">=&gt;</span> PhotoMetadata<span class="token punctuation">,</span> photoMetadata <span class="token operator">=&gt;</span> photoMetadata<span class="token punctuation">.</span>photo<span class="token punctuation">)</span>
  metadata<span class="token operator">:</span> PhotoMetadata
<span class="token punctuation">}</span>
</code></pre></div><p>注意，我们应该仅在关系的一侧使用 <code>@JoinColumn</code> 装饰器，关系的拥有方包含数据库中具有外键的列。</p><h3 id="_11-取出关系对象的数据" tabindex="-1"><a class="header-anchor" href="#_11-取出关系对象的数据" aria-hidden="true">#</a> 11. 取出关系对象的数据</h3><p>在完成 <strong>反向关系</strong> 后才可以使用该方法：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;metadata&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;metadata&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>使用 find 选项很简单，但是如果需要更复杂的查询，则应该使用 <code>QueryBuilder</code>：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">createQueryBuilder</span><span class="token punctuation">(</span><span class="token string">&#39;photo&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">innerJoinAndSelect</span><span class="token punctuation">(</span><span class="token string">&#39;photo.metadata&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;metadata&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">getMany</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_12-使用-cascades-自动保存相关对象" tabindex="-1"><a class="header-anchor" href="#_12-使用-cascades-自动保存相关对象" aria-hidden="true">#</a> 12. 使用 cascades 自动保存相关对象</h3><p>可以在关系中设置 <code>cascades</code> 选项，这时就可以保存其他对象的同时保存相关对象。不知这样是否会形成事务？</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 省略其他列 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">OneToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> PhotoMetadata<span class="token punctuation">,</span> <span class="token punctuation">(</span>photoMetadata<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> photoMetadata<span class="token punctuation">.</span>photo<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    cascade<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  metadata<span class="token operator">:</span> PhotoMetadata<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在使用时：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> photo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Photo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
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

<span class="token comment">// 先保存 photo</span>
<span class="token keyword">await</span> photo<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_13-创建多对一-一对多关系" tabindex="-1"><a class="header-anchor" href="#_13-创建多对一-一对多关系" aria-hidden="true">#</a> 13. 创建多对一/一对多关系</h3><p>假设一个 photo 有一个 author，每个 author 都可以有多个 photos。创建一个 <code>Author</code> 实体：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
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
</code></pre></div><p><code>Author</code> 包含反向关系。<code>@OneToMany</code> 总是反向的，并且总是与 <code>@ManyToOne</code> 一起出现。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 省略其他列 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToOne</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Author<span class="token punctuation">,</span> <span class="token punctuation">(</span>author<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> author<span class="token punctuation">.</span>photos<span class="token punctuation">)</span>
  author<span class="token operator">:</span> Author<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="_14-创建多对多关系" tabindex="-1"><a class="header-anchor" href="#_14-创建多对多关系" aria-hidden="true">#</a> 14. 创建多对多关系</h3><p>假设一个 photo 可以放在多个 album 中，每个 album 可以存放多个 photo。创建一个 <code>Album</code> 实体：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
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
</code></pre></div><p><code>@JoinTable</code> 需要指定这是关系的所有者方。</p><p>接着添加反向关系到 <code>Photo</code> 中：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Photo</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 省略其他列 */</span>

  <span class="token decorator"><span class="token at operator">@</span><span class="token function">ManyToMany</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Album<span class="token punctuation">,</span> <span class="token punctuation">(</span>album<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> album<span class="token punctuation">.</span>photos<span class="token punctuation">)</span>
  album<span class="token operator">:</span> Album<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>接着，数据库中会出现 <code>album_photos_photo</code> 联结表。</p><p>保存数据：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> album1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Album</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre></div><p>查询：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">await</span> Photo<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> relations<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;album&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="实体" tabindex="-1"><a class="header-anchor" href="#实体" aria-hidden="true">#</a> 实体</h2><p>基本实体由列和关系组成。每个实体必须有一个主列，否则该实体不会在数据库中生成对应的表。</p><h3 id="实体列类型" tabindex="-1"><a class="header-anchor" href="#实体列类型" aria-hidden="true">#</a> 实体列类型</h3><p>可以将列类型指定为 <code>@Column</code> 的第一个参数，或者在 <code>@Column</code> 的列选项中指定：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;int&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// or</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;int&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// 如果还有其他参数</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> length<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// or</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;varchar&#39;</span><span class="token punctuation">,</span> length<span class="token operator">:</span> <span class="token number">200</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>还有一些常用的类型：</p><ul><li><p><code>enum</code> 类型：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> UserRole <span class="token punctuation">{</span>
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
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> UserRoleType <span class="token operator">=</span> <span class="token string">&#39;admin&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;editor&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;ghost&#39;</span>

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
</code></pre></div></li><li><p><code>simple-array</code> 类型：</p><p>注意不能在值里面有任何逗号。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Entity</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">BaseEntity</span> <span class="token punctuation">{</span>
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">PrimaryGeneratedColumn</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span>
  
  <span class="token decorator"><span class="token at operator">@</span><span class="token function">Column</span></span><span class="token punctuation">(</span><span class="token string">&#39;simple-array&#39;</span><span class="token punctuation">)</span>
  hobbies<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span>hobbies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;play&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sleep&#39;</span><span class="token punctuation">]</span>
</code></pre></div></li><li><p><code>simple-json</code> 类型：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">UserProfile</span> <span class="token punctuation">{</span>
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
</code></pre></div><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
user<span class="token punctuation">.</span>profile <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span> nickname<span class="token operator">:</span> <span class="token string">&#39;Malkovich&#39;</span> <span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="实体列选项" tabindex="-1"><a class="header-anchor" href="#实体列选项" aria-hidden="true">#</a> 实体列选项</h3><p>该选项参考 <code>ColumnOptions</code> 接口：</p><ul><li><code>type: ColumnType</code>：列类型</li><li><code>name: string</code>：数据库表中的列名</li><li><code>length: number</code>：列类型的长度，例如创建 <code>varchar(150)</code></li><li><code>width:number</code>：列类型的显示范围</li><li><code>onUpdate: string</code>：<code>ON UPDATE</code> 触发器</li><li><code>nullable: boolean</code>：在数据库中使列 <code>NULL</code> 或 <code>NOT NULL</code>，默认 false</li><li><code>select: boolean</code>：定义在查询时是否默认此列</li><li><code>default: string</code>：添加数据库列的 <code>DEFAULT</code> 值</li><li><code>primary: boolean</code>：将列标记为主要列</li><li><code>unique: boolean</code>：将列标记为唯一列</li><li><code>comment: string</code>：数据库列备注</li><li><code>precision: number</code>：十进制列的精度，这是为值存储的最大位数</li><li><code>scale: number</code>：十进制列的比例，表示小数点右侧的位数</li><li><code>zerofill: boolean</code>：将 <code>ZEROFILL</code> 属性设置为数字列</li><li><code>unsigned: boolean</code>：将 <code>UNSIGNED</code> 属性设置为数字列</li><li><code>charset: string</code>：定义列字符集</li><li><code>collation: string</code>：定义列排序规则</li><li><code>enum: string[] | AnyEnum</code>：在 <code>enum</code> 列类型中使用，以指定允许的枚举值列表</li><li><code>asExpression: string</code>：生成的列表达式</li><li><code>generatedType: &#39;VIRTUAL&#39; | &#39;STORED&#39;</code>：生成的列类型</li></ul><h3 id="嵌入式实体" tabindex="-1"><a class="header-anchor" href="#嵌入式实体" aria-hidden="true">#</a> 嵌入式实体</h3><p>相对于继承而言，组合可能是更好的选择，不过这会影响数据库的列名。</p><p>组合会减少代码，但并不会影响数据库，因为未提供生成数据库表所必需的 <code>@Entity</code> 装饰器和 <strong>主键</strong>。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Name</span> <span class="token punctuation">{</span>
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
</code></pre></div><h3 id="树实体" tabindex="-1"><a class="header-anchor" href="#树实体" aria-hidden="true">#</a> 树实体</h3><p>树结构支持多种类型，除 邻接列表外都可通过 <code>@Tree</code> 装饰器简单区分：</p><ul><li><code>nested-set</code>：嵌套集。对读取非常有效，但对写入不利，且不能在嵌套集中有多个根</li><li><code>materialized-path</code>：物化路径（“路径枚举”）。简单有效</li><li><code>closure-table</code>：闭合表。在读取和写入方面都很有效</li></ul><p>使用：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// entity</span>
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
</code></pre></div><p>存储数据：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Category</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre></div><p>查询数据：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 返回所有</span>
<span class="token keyword">const</span> trees <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findTrees</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 返回根</span>
<span class="token keyword">const</span> roots <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findRoots</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 返回子 Tree</span>
<span class="token keyword">const</span> a11 <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;a11&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findDescendantsTree</span><span class="token punctuation">(</span>a11<span class="token punctuation">)</span>

<span class="token comment">// 返回父级</span>
<span class="token keyword">const</span> a11 <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">findOne</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&#39;a11&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getTreeRepository</span><span class="token punctuation">(</span>Category<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">findAncestorsTree</span><span class="token punctuation">(</span>a11<span class="token punctuation">)</span>
</code></pre></div>`,93)),s("p",null,[n[5]||(n[5]=a("更多查询参考 ")),s("a",d,[n[4]||(n[4]=a("使用树实体")),p(t)]),n[6]||(n[6]=a("。"))]),n[10]||(n[10]=o('<h2 id="关系" tabindex="-1"><a class="header-anchor" href="#关系" aria-hidden="true">#</a> 关系</h2><p>关系可以帮助你轻松地与相关实体合作。</p><h3 id="joincolumn-jointable" tabindex="-1"><a class="header-anchor" href="#joincolumn-jointable" aria-hidden="true">#</a> JoinColumn &amp; JoinTable</h3><p><code>@JoinColumn</code> 不仅定义了关系的哪一侧包含带有外键的连接列，还允许自定义连接列名和引用的列名。</p><p>当我们设置 <code>@JoinColumn</code> 时，它会自动在数据库中创建一个名为 <code>propertyName + referenceColumnName</code> 的列。</p><p><code>@JoinTable</code> 用于 “多对多” 关系，联结表是由 TypeORM 自动创建的一个特殊的单独表。</p><h3 id="多对一和一对多" tabindex="-1"><a class="header-anchor" href="#多对一和一对多" aria-hidden="true">#</a> 多对一和一对多</h3><p>可以在 <code>@ManyToOne</code> / <code>@OneToMany</code> 关系中省略 <code>@JoinColumn</code>，除非需要自定义关联列在数据库中的名称。</p><p><code>@ManyToOne</code> 可以单独使用，但 <code>@OneToMany</code> 必须搭配 <code>@ManyToOne</code> 使用。</p><p>在设置 <code>@ManyToOne</code> 的地方，相关实体将会有 “关联 id” 和外键。</p>',10))])}const g=e(k,[["render",m],["__file","typeorm.html.vue"]]);export{g as default};

import{_ as a,p as n,q as t,a1 as s}from"./framework-49860b1b.js";const e={},p=s(`<h1 id="锚元素的哈希标记效果" tabindex="-1" data-v-fa61e268><a class="header-anchor" href="#锚元素的哈希标记效果" aria-hidden="true" data-v-fa61e268>#</a> 锚元素的哈希标记效果</h1><blockquote data-v-fa61e268><p data-v-fa61e268>锚元素(a 标签) 的 href 属性可包含哈希标记，其指向当前文档中的内部目标位置（HTML 元素的 ID）。</p></blockquote><h2 id="选项卡" tabindex="-1" data-v-fa61e268><a class="header-anchor" href="#选项卡" aria-hidden="true" data-v-fa61e268>#</a> 选项卡</h2><div class="language-vue" data-ext="vue" data-v-fa61e268><pre class="language-vue" data-v-fa61e268><code data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>style</span> <span class="token attr-name" data-v-fa61e268>lang</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>scss<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>scoped</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span><span class="token style" data-v-fa61e268><span class="token language-css" data-v-fa61e268>
<span class="token selector" data-v-fa61e268>.anchor-demo-1.tabs</span> <span class="token punctuation" data-v-fa61e268>{</span>
  <span class="token property" data-v-fa61e268>width</span><span class="token punctuation" data-v-fa61e268>:</span> 100px<span class="token punctuation" data-v-fa61e268>;</span>
  <span class="token property" data-v-fa61e268>height</span><span class="token punctuation" data-v-fa61e268>:</span> 60px<span class="token punctuation" data-v-fa61e268>;</span>
  <span class="token property" data-v-fa61e268>overflow</span><span class="token punctuation" data-v-fa61e268>:</span> hidden<span class="token punctuation" data-v-fa61e268>;</span>
  <span class="token property" data-v-fa61e268>color</span><span class="token punctuation" data-v-fa61e268>:</span> #fff<span class="token punctuation" data-v-fa61e268>;</span>
  <span class="token selector" data-v-fa61e268>.tab</span> <span class="token punctuation" data-v-fa61e268>{</span>
    <span class="token property" data-v-fa61e268>line-height</span><span class="token punctuation" data-v-fa61e268>:</span> 60px<span class="token punctuation" data-v-fa61e268>;</span>
    <span class="token property" data-v-fa61e268>text-align</span><span class="token punctuation" data-v-fa61e268>:</span> center<span class="token punctuation" data-v-fa61e268>;</span>
    <span class="token selector" data-v-fa61e268>&amp;#anchor-demo-one</span> <span class="token punctuation" data-v-fa61e268>{</span>
      <span class="token property" data-v-fa61e268>background</span><span class="token punctuation" data-v-fa61e268>:</span> #893615<span class="token punctuation" data-v-fa61e268>;</span>
    <span class="token punctuation" data-v-fa61e268>}</span>
    <span class="token selector" data-v-fa61e268>&amp;#anchor-demo-two</span> <span class="token punctuation" data-v-fa61e268>{</span>
      <span class="token property" data-v-fa61e268>background</span><span class="token punctuation" data-v-fa61e268>:</span> #A72310<span class="token punctuation" data-v-fa61e268>;</span>
    <span class="token punctuation" data-v-fa61e268>}</span>
    <span class="token selector" data-v-fa61e268>&amp;#anchor-demo-three</span> <span class="token punctuation" data-v-fa61e268>{</span>
      <span class="token property" data-v-fa61e268>background</span><span class="token punctuation" data-v-fa61e268>:</span> #0C1F22<span class="token punctuation" data-v-fa61e268>;</span>
    <span class="token punctuation" data-v-fa61e268>}</span>
  <span class="token punctuation" data-v-fa61e268>}</span>
<span class="token punctuation" data-v-fa61e268>}</span>
</span></span><span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>style</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>

<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>section</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-1 tabs<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>div</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>tab<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>id</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-one<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>内容1<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>div</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>div</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>tab<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>id</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-two<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>内容2<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>div</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>div</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>tab<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>id</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-three<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>内容3<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>div</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>section</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>

<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>section</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-1 links<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>a</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>link<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>href</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>#anchor-demo-one<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>1<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>a</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>a</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>link<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>href</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>#anchor-demo-two<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>2<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>a</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
  <span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>a</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>link<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>href</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>#anchor-demo-three<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>3<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>a</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>section</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
</code></pre></div><details class="custom-container details" data-v-fa61e268><summary data-v-fa61e268>效果</summary><section class="anchor-demo-1 tabs" data-v-fa61e268><div class="tab" id="anchor-demo-one" data-v-fa61e268>内容1</div><div class="tab" id="anchor-demo-two" data-v-fa61e268>内容2</div><div class="tab" id="anchor-demo-three" data-v-fa61e268>内容3</div></section><section class="anchor-demo-1 links" data-v-fa61e268><a class="link" href="#anchor-demo-one" data-v-fa61e268>1</a><a class="link" href="#anchor-demo-two" data-v-fa61e268>2</a><a class="link" href="#anchor-demo-three" data-v-fa61e268>3</a></section></details><h2 id="回到顶部" tabindex="-1" data-v-fa61e268><a class="header-anchor" href="#回到顶部" aria-hidden="true" data-v-fa61e268>#</a> 回到顶部</h2><div class="language-html" data-ext="html" data-v-fa61e268><pre class="language-html" data-v-fa61e268><code data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;</span>a</span> <span class="token attr-name" data-v-fa61e268>class</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>anchor-demo-2<span class="token punctuation" data-v-fa61e268>&quot;</span></span> <span class="token attr-name" data-v-fa61e268>href</span><span class="token attr-value" data-v-fa61e268><span class="token punctuation attr-equals" data-v-fa61e268>=</span><span class="token punctuation" data-v-fa61e268>&quot;</span>#<span class="token punctuation" data-v-fa61e268>&quot;</span></span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>回到顶部<span class="token tag" data-v-fa61e268><span class="token tag" data-v-fa61e268><span class="token punctuation" data-v-fa61e268>&lt;/</span>a</span><span class="token punctuation" data-v-fa61e268>&gt;</span></span>
</code></pre></div><details class="custom-container details" data-v-fa61e268><summary data-v-fa61e268>效果</summary><p data-v-fa61e268><a class="anchor-demo-2" href="#" data-v-fa61e268>回到顶部</a></p></details>`,8),o=[p];function c(l,u){return n(),t("div",null,o)}const v=a(e,[["render",c],["__scopeId","data-v-fa61e268"],["__file","anchor.html.vue"]]);export{v as default};

import{r as t,c as o,a as s,b as e,F as c,e as a,d as n,o as l}from"./app.fe0f6539.js";import{_ as r}from"./plugin-vue_export-helper.5a098b48.js";const u={},k=a(`<h1 id="\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570" aria-hidden="true">#</a> \u7F57\u9A6C\u6570\u5B57\u8F6C\u6574\u6570</h1><h2 id="\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83" aria-hidden="true">#</a> \u6BD4\u8F83</h2><p>\u82E5\u7F57\u9A6C\u6570\u5B57\u53F3\u4FA7\u6BD4\u5F53\u524D\u6570\u5B57\u5927\uFF0C\u5219\u5C06\u5F53\u524D\u6570\u5B57\u89C6\u4E3A\u8D1F\u503C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> RomanNum <span class="token punctuation">{</span>
  <span class="token string">&#39;I&#39;</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&#39;V&#39;</span><span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token string">&#39;X&#39;</span><span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token string">&#39;L&#39;</span><span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token string">&#39;C&#39;</span><span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token string">&#39;D&#39;</span><span class="token operator">=</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token string">&#39;M&#39;</span><span class="token operator">=</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isRomanNumeral <span class="token operator">=</span> <span class="token punctuation">(</span>roman<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> roman<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[IVXLCDM]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token operator">?.</span>length <span class="token operator">===</span> roman<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">romanToInt</span><span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isRomanNumeral</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span>
  
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> next
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      current <span class="token operator">=</span> RomanNum<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    next <span class="token operator">=</span> RomanNum<span class="token punctuation">[</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> current <span class="token operator">&lt;</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      sum <span class="token operator">-=</span> current
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      sum <span class="token operator">+=</span> current
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">return</span> sum
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u66F4\u66B4\u529B\u7684\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u66F4\u66B4\u529B\u7684\u6620\u5C04" aria-hidden="true">#</a> \u66F4\u66B4\u529B\u7684\u6620\u5C04</h2>`,5),i=n("\u8FD9\u90E8\u5206\u6765\u6E90\u4E8E "),m={href:"https://leetcode.com/problems/roman-to-integer/discuss/1191442/Functional-Typescript-Solution",target:"_blank",rel:"noopener noreferrer"},d=n("Functional Typescript Solution"),g=n("\uFF1A"),b=a(`<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> romanNumeralMap <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token constant">I</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token constant">V</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token constant">X</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token constant">L</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
  <span class="token constant">C</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token constant">D</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token constant">M</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
  <span class="token constant">CD</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
  <span class="token constant">CM</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span>
  <span class="token constant">XL</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
  <span class="token constant">XC</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token constant">IV</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token constant">IX</span><span class="token operator">:</span> <span class="token number">9</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> romanNumeralRegex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(CD|CM|XL|XC|IV|IX|M|D|C|L|X|V|I)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span>

<span class="token keyword">function</span> <span class="token function">romanToInt</span> <span class="token punctuation">(</span>s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> s
    <span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>romanNumeralRegex<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>numeral<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> romanNumeralMap<span class="token punctuation">[</span>numeral<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>acc<span class="token punctuation">,</span> n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> n<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,1);function h(f,x){const p=t("OutboundLink");return l(),o(c,null,[k,s("p",null,[i,s("a",m,[d,e(p)]),g]),b],64)}var w=r(u,[["render",h]]);export{w as default};

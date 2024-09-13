import{_ as o,M as e,p as c,q as l,a1 as a,R as p,t as s,N as r}from"./framework-e3e34937.js";const u={},k={href:"https://leetcode.com/problems/roman-to-integer/discuss/1191442/Functional-Typescript-Solution",target:"_blank",rel:"noopener noreferrer"};function i(m,n){const t=e("ExternalLinkIcon");return c(),l("div",null,[n[3]||(n[3]=a(`<h1 id="罗马数字转整数" tabindex="-1"><a class="header-anchor" href="#罗马数字转整数" aria-hidden="true">#</a> 罗马数字转整数</h1><h2 id="比较" tabindex="-1"><a class="header-anchor" href="#比较" aria-hidden="true">#</a> 比较</h2><p>若罗马数字右侧比当前数字大，则将当前数字视为负值。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">enum</span> RomanNum <span class="token punctuation">{</span>
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
</code></pre></div><h2 id="更暴力的映射" tabindex="-1"><a class="header-anchor" href="#更暴力的映射" aria-hidden="true">#</a> 更暴力的映射</h2>`,5)),p("p",null,[n[1]||(n[1]=s("这部分来源于 ")),p("a",k,[n[0]||(n[0]=s("Functional Typescript Solution")),r(t)]),n[2]||(n[2]=s("："))]),n[4]||(n[4]=a(`<div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> romanNumeralMap <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,1))])}const g=o(u,[["render",i],["__file","13-roman-to-integer.html.vue"]]);export{g as default};

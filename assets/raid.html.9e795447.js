import{r as t,c as e,a as r,b as n,F as a,d as l,e as d,o as i}from"./app.76078c72.js";import{_ as s}from"./plugin-vue_export-helper.5a098b48.js";const h={},c=r("h2",{id:"介绍",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),l(" 介绍")],-1),p={href:"https://zh.wikipedia.org/wiki/RAID",target:"_blank",rel:"noopener noreferrer"},I=l("RAID"),A=l(" 是廉价冗余磁盘阵列（Redundant Array of Inexpensive Disk），简称磁盘阵列。"),D=d('<p>RAID 是一种把一块及多块独立的物理磁盘按不同的技术方式组合起来形成一个磁盘组，在逻辑上（做完 RAID，装系统后）看起来就是一块大的磁盘，可以提供比单个物理磁盘更大的存储容量或更高的存储性能，同时又能提供不同级别数据冗余备份的一种技术。</p><p>RAID 分为两类：软 RAID，系统层面实现的，性能差，基本上不选择；硬 RAID，硬件层面（又分为主板板载 RAID，功能弱 0、1，和独立 RAID，功能强 0、1、5、10）实现，性能好。</p><p>RAID 可以通过不同的技术方案将多个物理磁盘组成磁盘阵列，这个不同的技术就被称为 RAID 级别：</p><table><thead><tr><th style="text-align:center;">RAID 级别</th><th style="text-align:center;">最大容错</th><th style="text-align:center;">可用容量</th><th style="text-align:center;">读取性能</th><th style="text-align:center;">写入性能</th><th style="text-align:center;">安全性</th><th style="text-align:center;">目的</th></tr></thead><tbody><tr><td style="text-align:center;">RAID 0</td><td style="text-align:center;">0</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">n</td><td style="text-align:center;">一个硬盘异常，全部硬盘都会异常</td><td style="text-align:center;">追求最大容量、速度</td></tr><tr><td style="text-align:center;">RAID 1</td><td style="text-align:center;">n-1</td><td style="text-align:center;">1</td><td style="text-align:center;">n</td><td style="text-align:center;">1</td><td style="text-align:center;">高，一个正常即可</td><td style="text-align:center;">追求最大安全性</td></tr><tr><td style="text-align:center;">RAID 5</td><td style="text-align:center;">1</td><td style="text-align:center;">n-1</td><td style="text-align:center;">n-1</td><td style="text-align:center;">n-1</td><td style="text-align:center;">高</td><td style="text-align:center;">追求最大容量、最小预算</td></tr><tr><td style="text-align:center;">RAID 10</td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">n</td><td style="text-align:center;"></td><td style="text-align:center;">高</td><td style="text-align:center;">综合RAID 0/1优点，理论速度较快</td></tr></tbody></table><p>可以从以上获知 RAID 提供的好处为：</p><ul><li>提升数据安全性；</li><li>提升数据读写性能；</li><li>提供更大的单一逻辑磁盘数据容量存储。</li></ul><h2 id="raid-级别" tabindex="-1"><a class="header-anchor" href="#raid-级别" aria-hidden="true">#</a> RAID 级别</h2><h3 id="raid-0" tabindex="-1"><a class="header-anchor" href="#raid-0" aria-hidden="true">#</a> RAID 0</h3><p>RAID 又称为 Stripe（条带化）或 Striping（条带模式），它在所有 RAID 级别中具有最高的存储性能。</p><p>RAID 0 提高存储性能的原理是把连续的数据分散到多个磁盘上存取。这样，系统有数据读写请求就可以在多个磁盘并行的执行，每个磁盘读写属于它自己的那部分数据请求。这种数据上的并行操作可以充分利用总线的带宽，显著提高磁盘性能整体存取性能。</p><p>要制作 RAID 0 要求至少是 1 块物理磁盘，一般用来做 RAID 的不同磁盘大小最好一样（可以充分发挥并行优势）。而数据分散存储于不同的磁盘上，在读写的时候可以实现并发，所以，RAID 0 读写性能最好，但是没有容错功能，即任何一个磁盘的损坏会导致整个 RAID 的全部数据丢失。生产中使用单盘，要做成 RAID 0，否则可能无法使用。</p><p>若四块磁盘组成 RAID 0（即逻辑磁盘），这时候逻辑磁盘的容量为 4 块磁盘之和。系统发出的 IO 数据请求会被转化为 4 项操作，其中的每一项操作都对应于一块物理磁盘，从理论上来说该并行操作的行为会使磁盘读写速度提升了 4 倍。但由于总线带宽等多种因素的影响，实际的提升速率肯定会低于理论值。</p><h3 id="raid-1" tabindex="-1"><a class="header-anchor" href="#raid-1" aria-hidden="true">#</a> RAID 1</h3><p>RAID 1 又称为 Mirror 或 Mirroring（镜像），它的宗旨是最大限度的保证用户数据的可用性和可修复性。RAID 1 的操作方式是把用户写入一个磁盘的数据完全复制到另外的磁盘上，从而实现存储多份数据。</p><p>要制作 RAID 1要求至少是 2 块物理磁盘，整个 RAID 大小等于多个磁盘中最小的那块磁盘的容量，所以最好使用大小一致的磁盘，否则就浪费了。在存储时同时写入两块磁盘，实现了数据备份完整，但相对降低了写入性能，但是读取数据可以并发，相当于多块 RAID 0 的读取效。</p><h3 id="raid-5" tabindex="-1"><a class="header-anchor" href="#raid-5" aria-hidden="true">#</a> RAID 5</h3><p>RAID 5 是一种存储性能、数据安全和存储成本兼顾的存储解决方案（穷人的选择）。</p><p>要制作 RAID 5 要求至少是 3 块物理磁盘，可以提供热备盘实现故障的恢复。其采用奇偶校验，可靠性强，且只有同时损坏两块硬盘时数据才会完全损坏，系统会根据存储的奇偶校验位重建数据，临时提供服务，此时如果有热备盘，系统还会自动在热备盘上重建故障磁盘上的数据。</p><p>啥都可以，啥也不可以。</p>',19),R=l("后续了解到 RAID 5 是一种很"),x={href:"https://www.v2ex.com/t/597017",target:"_blank",rel:"noopener noreferrer"},g=l("糟糕的选择"),y=l("，重新构建时炸列，讨论的后续"),o={href:"https://www.v2ex.com/t/597378",target:"_blank",rel:"noopener noreferrer"},u=l("测试情况"),f=l("。"),b=r("h3",{id:"raid-10",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#raid-10","aria-hidden":"true"},"#"),l(" RAID 10")],-1),w=r("p",null,"攒攒钱，加一块硬盘搞成 RAID 10。RAID 10 可以分为 0+1，也可以分为 1+0。",-1),k=r("p",null,"RAID 1+0，是先将四块磁盘在纵向上分别两两做镜像，镜像后再在横向上做条带。",-1),m=r("p",null,"RAID 0+1，是先将四块硬盘中横向上两两做条带，然后在纵向上做镜像。",-1),v=r("p",null,"可以看出两者在读写的性能上没有太大差别，但是发生故障的概率上， RAID 0+1 是远大于 RAID 1+0 的，所以一般情况选择 RAID 1+0。",-1);var _=s(h,[["render",function(l,d){const s=t("OutboundLink");return i(),e(a,null,[c,r("p",null,[r("a",p,[I,n(s)]),A]),D,r("p",null,[R,r("a",x,[g,n(s)]),y,r("a",o,[u,n(s)]),f]),b,w,k,m,v],64)}]]);export{_ as default};

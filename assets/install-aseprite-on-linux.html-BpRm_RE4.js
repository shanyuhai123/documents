import{_ as l,c as r,a as s,b as o,d as a,e as t,f as i,r as p,o as c}from"./app-DNXRdI82.js";const d={};function h(u,e){const n=p("RouteLink");return c(),r("div",null,[e[5]||(e[5]=s('<h1 id="在-linux-下安装-aseprite" tabindex="-1"><a class="header-anchor" href="#在-linux-下安装-aseprite"><span>在 Linux 下安装 Aseprite</span></a></h1><blockquote><p>由于使用 <code>yay</code> 安装失败，于是另辟蹊径</p><p><a href="https://www.bilibili.com/video/BV1Vh411a7SS/" target="_blank" rel="noopener noreferrer">视频版</a></p></blockquote><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h2>',3)),o("p",null,[e[2]||(e[2]=a("虽然也可以本地安装依赖编译，但为了避免对现有的环境造成影响，选择了 Docker，需要准备好 ")),t(n,{to:"/backend/docker/init.html"},{default:i(()=>e[0]||(e[0]=[a("Docker")])),_:1}),e[3]||(e[3]=a(" 及 ")),t(n,{to:"/backend/docker/compose.html"},{default:i(()=>e[1]||(e[1]=[a("Docker Compose")])),_:1}),e[4]||(e[4]=a(" 环境。"))]),e[6]||(e[6]=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>如果你可以访问 <a href="https://github.com/shanyuhai123/docker-aseprite-linux" target="_blank" rel="noopener noreferrer">Github</a>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># clone</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:shanyuhai123/docker-aseprite-linux.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译</span></span>
<span class="line"><span class="token builtin class-name">cd</span> docker-aseprite-linux</span>
<span class="line"><span class="token function">docker-compose</span> build</span>
<span class="line"><span class="token function">docker-compose</span> up</span>
<span class="line"></span></code></pre></div><p>缺乏网络代理的情况下可用 <a href="https://gitee.com/shanyuhai123/docker-aseprite-linux" target="_blank" rel="noopener noreferrer">Gitee</a>：</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">https://gitee.com/shanyuhai123/docker-aseprite-linux.git</span>
<span class="line"></span></code></pre></div><p>安装完成后执行 <code>docker-aseprite-linux/output/aseprite/build/bin/aseprite</code> 即可启动。</p><h2 id="汉化" tabindex="-1"><a class="header-anchor" href="#汉化"><span>汉化</span></a></h2><p>已从 <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=1333477949" target="_blank" rel="noopener noreferrer">Aseprite汉化及界面调整教程</a> 下载并修改部分配置，即 <code>dependencies</code> 中 <code>.aseprite-extension</code> 后缀的文件。</p><h3 id="设置-language-和-theme" tabindex="-1"><a class="header-anchor" href="#设置-language-和-theme"><span>设置 Language 和 Theme</span></a></h3><ol><li>打开 Aseprite，点击菜单栏 Edit =&gt; Preferences</li><li>在 Preferences 窗口点击左侧的 Extensions =&gt; Add Extension</li><li>弹出文件选择框，依次选择 <code>hanhua-1.2.23.aseprite-extension</code> 和 <code>zhuti-xiangsu.aseprite-extension</code> 文件</li><li>在 Preferences 窗口点击左侧的 General =&gt; Language =&gt; zh</li><li>在 Preferences 窗口点击左侧的 Theme =&gt; aseprite.theme.pixel</li></ol><p>以上修改记得 Apply =&gt; OK</p>`,11))])}const m=l(d,[["render",h],["__file","install-aseprite-on-linux.html.vue"]]),k=JSON.parse('{"path":"/design/pixel/install-aseprite-on-linux.html","title":"在 Linux 下安装 Aseprite","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"汉化","slug":"汉化","link":"#汉化","children":[{"level":3,"title":"设置 Language 和 Theme","slug":"设置-language-和-theme","link":"#设置-language-和-theme","children":[]}]}],"git":{"updatedTime":1637385365000,"contributors":[{"name":"shanyuhai123","username":"shanyuhai123","email":"864299347@qq.com","commits":6,"url":"https://github.com/shanyuhai123"}]},"filePathRelative":"design/pixel/install-aseprite-on-linux.md"}');export{m as comp,k as data};

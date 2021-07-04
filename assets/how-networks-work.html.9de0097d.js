import{r as e,o as t,c as a,a as n,w as s,F as d,d as r,b as l}from"./app.221f0787.js";const o={},h=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"一直以来，从输入链接到页面显示内容经历了什么是一个非常常规的面试题，而 《网络是怎样连接的》目录已经很好的回答了这个问题。")],-1),i=r('<h2 id="第一章-浏览器生成消息-探索浏览器内部" tabindex="-1"><a class="header-anchor" href="#第一章-浏览器生成消息-探索浏览器内部" aria-hidden="true">#</a> 第一章 浏览器生成消息 -- 探索浏览器内部</h2><h3 id="_1-生成-http-请求消息" tabindex="-1"><a class="header-anchor" href="#_1-生成-http-请求消息" aria-hidden="true">#</a> 1. 生成 HTTP 请求消息</h3><p>生成 HTTP 前需要解析 URL：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 1. HTTP 协议</span>\nhttp://user:password@www.shanyuhai.top:80/dir/index.html\n<span class="token comment"># user 用户名（可省略）</span>\n<span class="token comment"># password 密码（可省略）</span>\n<span class="token comment"># www.shanyuhai.top Web 服务器域名</span>\n<span class="token comment"># 80 端口（可省略）</span>\n<span class="token comment"># /dir/index.html 文件的路径名</span>\n\n<span class="token comment"># 2. FTP 协议</span>\nftp://user:password@ftp.shanyuhai.top:21/dir/index.html\n<span class="token comment"># user 用户名（可省略）</span>\n<span class="token comment"># password 密码（可省略）</span>\n<span class="token comment"># ftp.shanyuhai.top FTP 服务器域名</span>\n<span class="token comment"># 21 端口（可省略）</span>\n<span class="token comment"># /dir/index.html 文件的路径名</span>\n\n<span class="token comment"># 3. 客户端本地文件</span>\nfile://localhost/home/shanyuhai/project/network/index.html\n<span class="token comment"># localhost 计算机名（可省略）</span>\n<span class="token comment"># /home/shanyuhai/project/network/index.html 文件的路径名</span>\n\n<span class="token comment"># mailto 邮件</span>\nmailto:shanyuhai@shanyuhai.top\n<span class="token comment"># shanyuhai@shanyuhai.top 邮件地址</span>\n\n<span class="token comment"># news 新闻组</span>\nnews:comp.protocols.tcp\n<span class="token comment"># comp.protocols.tcp 新闻组名</span>\n</code></pre></div><p>HTTP 主要方法：</p>',5),c=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"方法"),n("th",null,"含义")])],-1),p=n("td",{style:{"text-align":"center"}},"GET",-1),u=l("获取 URI 指定的信息。如果 URI 指定的是文件，则返回文件的内容；如果 URI 指定的是 "),x={href:"https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E7%BD%91%E5%85%B3%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},g=l("CGI 程序"),m=l("，则返回该程序的输出数据。"),b=n("tr",null,[n("td",{style:{"text-align":"center"}},"POST"),n("td",null,"从客户端向服务器发送数据。一般用于发送表单中填写数据等情况。")],-1),P=n("tr",null,[n("td",{style:{"text-align":"center"}},"HEAD"),n("td",null,"和 GET 基本相同，只不过它只返回 HTTP 的消息头（message header），而不返回数据的内容。用于获取文件最后更新时间等信息。")],-1),k=n("tr",null,[n("td",{style:{"text-align":"center"}},"OPTIONS"),n("td",null,"用于通知或查询通信选项。")],-1),y=n("tr",null,[n("td",{style:{"text-align":"center"}},"PUT"),n("td",null,"替换 URI 指定的服务器上的文件。如果 URI 指定的文件不存在，则创建该文件。")],-1),_=n("tr",null,[n("td",{style:{"text-align":"center"}},"DELETE"),n("td",null,"删除 URI 指定的服务器上的文件。")],-1),w=n("tr",null,[n("td",{style:{"text-align":"center"}},"TRACE"),n("td",null,"将服务器收到的请求行和头部（header）直接反给客户端。用于在使用代理的环境中检查改写请求的情况。")],-1),f=n("tr",null,[n("td",{style:{"text-align":"center"}},"CONNECT"),n("td",null,"使用代理传输加密消息时使用。")],-1),I=r('<p>在了解以上基础后就可以生成请求消息了：</p><div class="language-text ext-text"><pre class="language-text"><code>&lt;方法&gt;&lt;空格&gt;&lt;URI&gt;&lt;空格&gt;&lt;HTTP 版本&gt;\n&lt;字段名1&gt;:&lt;字段值&gt;\n&lt;字段名2&gt;:&lt;字段值&gt;\n&lt;字段名n&gt;:&lt;字段值&gt;\n&lt;空行&gt;\n&lt;消息体&gt;\n</code></pre></div><p>第一行为<strong>请求行</strong>，通过这一行就可以大致了解请求的内容。</p><p>第二部分一堆字段名被称为<strong>消息头</strong>，每行包含一个头字段，用于表示请求行的附加信息。消息头的行数根据具体可变，一直延伸到空行为止。</p><p><strong>消息体（message body）</strong> 包含客户端向服务器发送的数据，例如用 POST 方法向服务器发送的网页表单数据。</p><h3 id="_2-向-dns-服务器查询-web-服务器的-ip-地址" tabindex="-1"><a class="header-anchor" href="#_2-向-dns-服务器查询-web-服务器的-ip-地址" aria-hidden="true">#</a> 2. 向 DNS 服务器查询 Web 服务器的 IP 地址</h3><p>IP 地址类似于你的住址 “xx 栋 xx 单元 xx 室”，找到 IP 地址后就可以将生成的请求发到对应的服务器了。</p><p>实际的 IP 地址是一串 32 比特的数字，按照 8 比特（1 字节）为一组分成 4 组，分别用十进制表示然后再用圆点隔开。但仅凭这一串数字是无法得知哪是网络号，哪是主机号，因此我们还需要格外的信息（子网掩码）来表示 IP 地址的内部结构，子网掩码为 1 的部分表示网络号，子网掩码为 0 的表示主机号。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>为什么说主机号全为 0/1 呢，是因为 <code>255</code> 等价于 <code>11111111</code>，<code>0</code> 等价于 <code>00000000</code>。</p></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 1.IP 地址主体的表示方式</span>\n\t<span class="token number">10.11</span>.12.13\n\n<span class="token comment"># 2.采用与 IP 地址主体相同的格式表示子网掩码的方法</span>\n\t<span class="token number">10.11</span>.12.13/255.255.255.0\n\t \n<span class="token comment"># 3.采用网络号比特数来表示子网掩码的方法</span>\n\t<span class="token number">10.11</span>.12.13/24\n\t\n<span class="token comment"># 4.表示子网的地址</span>\n\t<span class="token number">10.11</span>.12.0/24\n<span class="token comment"># 主机号部分的比特全部为 0,这个地址表示的不是单独一台计算机，而是代表整个子网</span>\n\n<span class="token comment"># 5.表示子网内广播的地址</span>\n\t<span class="token number">10.11</span>.12.255/24\n<span class="token comment"># 主机号部分的比特全部为 1,这个地址表示对整个子网进行广播</span>\n</code></pre></div><p>为了解决人方便记忆域名，机器又能快捷高效找到 IP，引入了 DNS 机制。</p><p>浏览器调用操作系统中的 <code>Socket</code> 库解析器来处理域名，之后解析器经过网卡向 DNS 发送查询消息（当然解析器也并不具备使用网络收发数据的功能，它是委托给操作系统内部的协议栈来执行），解析器取出 DNS 返回的响应消息中的 IP 地址，并将其写入浏览器指定的内存地址中。<strong>这样浏览器就得到了 IP 地址。</strong></p><h3 id="_3-全世界-dns-服务器的大接力" tabindex="-1"><a class="header-anchor" href="#_3-全世界-dns-服务器的大接力" aria-hidden="true">#</a> 3. 全世界 DNS 服务器的大接力</h3><p>信息分布在多台 DNS 服务器中，这些 DNS 服务器相互接力配合，从而查找出要查询的信息。</p><p>DNS 域名都是用句点来分隔的，比如 <code>docs.shanyuhai.top</code>，这里的句点代表了不同的层次结构。在域名中，越靠右的位置表示其层级越高。因此 <code>top</code> 域的下一层是 <code>shanyuhai</code>，再下一层才是 <code>docs</code>。</p><p>如何找到 DNS 信息关键在于怎么找到要访问的 Web 服务器归属哪一台 DNS 管理，互联网中存在许多的 DNS 服务器，肯定不能一台台去找，可以根据上一段中描述的层级关系进行查找。也就是说 <code>docs.shanyuhai.top</code> 这个域的 DNS 服务器地址需要注册到 <code>shanyuhai.top</code> 域的 DNS 服务器地址，而 <code>shanyuhai.top</code> 这个域的 DNS 服务器地址需要注册到 <code>top</code> 域的 DNS 服务器地址。这样我们就可以通过上级 DNS 服务器查询出下级 DNS 服务器的 IP 地址。</p><p><strong>实际上，<code>top</code> 域上面还有一层，被称为根域，所以完整的域名为 <code>docs.shanyuhai.top.</code>，根域就是最后的那个句点。</strong> 不过一般都不写最后的句点，因此根域常常被忽略。虽然作为用户根域没有显示，但根域的 DNS 信息会保存在所有的 DNS 服务器中。</p><p>那么 DNS 服务器的接力就很明显了：</p><div class="language-text ext-text"><pre class="language-text"><code>1. 客户端：计算机向最近的 DNS 服务器查询 `docs.shanyuhai.top` 的 IP 地址\n2. 最近的 DNS 服务器：未找到该信息，但我保存了根域 DNS 服务器的地址\n3. 根域：我不知道，你可以去 `top` 域问问\n4. com 域：我不知道，你可以去 `shanyuhai.top` 域问问\n5. shanyuhai.top 域：我也不知道，你可以去 `docs.shanyuhai.top` 域问问\n6. Web 服务器：我知道，IP 地址是 xxx.xxx.xxx.xxx\n</code></pre></div><p>不是每一次查询都会走以上步骤，DNS 服务器具有缓存的功能，当在缓存时间内时会直接返回上次查询到的结果。</p><h3 id="_4-委托协议栈发送消息" tabindex="-1"><a class="header-anchor" href="#_4-委托协议栈发送消息" aria-hidden="true">#</a> 4. 委托协议栈发送消息</h3><p>生成了 HTTP 请求消息，也知道了 IP 地址，那么就可以委托操作系统内部的协议栈向目标 IP 地址发送数据了。</p><p>这个收发数据的操作可以简化为：</p><ol><li><p>创建套接字（创建套接字阶段）</p><p>简单理解为调用 <code>Socket</code> 库中的 <code>socket</code> 程序就完成了，当然这会返回一个描述符用于区别不同的数据收发操作。</p></li><li><p>将管道连接到服务器端的套接字上（连接阶段）</p><p>简单理解为调用 <code>Socket</code> 库中的 <code>connect</code> 程序就完成了。该程序需要指定描述符、服务器 IP 地址和端口号三个参数。</p><p>想要连接到服务器上指定 Web 程序的套接字，而如何知道套接字就又是一个问题了，端口号可以解决该问题。为什么不直接使用服务器的套接字，个人认为套接字是动态变化的，而端口号是可以固定的。</p><p>既然连接服务器的套接字时需要知道其端口号，那客户端的端口号呢？客户端在创建套接字时会，协议栈会随便创建一个端口号，然后将该端口号通知给服务器。</p></li><li><p>收发数据（通信阶段）</p><p><strong>发</strong>简单理解为调用 <code>Socket</code> 库中的 <code>write</code> 程序将数据送入套接字。</p><p><strong>收</strong>简单理解为调用 <code>Socket</code> 库中的 <code>read</code> 程序将收到的响应消息放到内存（接收缓冲区）。</p></li><li><p>断开管道并删除套接字（断开阶段）</p><p>简单理解为调用 <code>Socket</code> 库中的 <code>close</code> 程序就完成了。最终，连接在套接字之间的管道会断开，套接字本身也会被删除。</p></li></ol><h2 id="第二章-用电信号传递-tcp-ip-探索协议栈和网卡" tabindex="-1"><a class="header-anchor" href="#第二章-用电信号传递-tcp-ip-探索协议栈和网卡" aria-hidden="true">#</a> 第二章 用电信号传递 TCP/IP -- 探索协议栈和网卡</h2><h3 id="_1-创建套接字" tabindex="-1"><a class="header-anchor" href="#_1-创建套接字" aria-hidden="true">#</a> 1. 创建套接字</h3>',26),S=l("虽然书中以 Windows 为示例，但个人认为以 Linux 来介绍更好，毕竟在 "),T=l("Linux 中一切皆文件"),D=l("，之后更便于观测。"),A=r('<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">lsof</span> -i\n\nCOMMAND    PID      <span class="token environment constant">USER</span>   FD   TYPE DEVICE SIZE/OFF NODE NAME\nchrome    <span class="token number">2056</span> shanyuhai   39u  IPv4 <span class="token number">163847</span>      0t0  TCP yuan.local:42732-<span class="token operator">&gt;</span><span class="token number">185.199</span>.111.153:https <span class="token punctuation">(</span>ESTABLISHED<span class="token punctuation">)</span>\n</code></pre></div><p>创建套接字时，首先分配一个套接字所需的内存空间，然后向其中写入初始状态。</p><h3 id="_2-连接服务器" tabindex="-1"><a class="header-anchor" href="#_2-连接服务器" aria-hidden="true">#</a> 2. 连接服务器</h3><p>网线一直都是连着的。连接实际上指的是通信双方交换控制信息，在套接字中记录这些必要信息并准备数据收发的一连串操作。</p><p>控制信息大体上可以分为两类：</p><ol><li>头部中记录的信息；</li><li>套接字（协议栈中的内存空间）中记录的信息。</li></ol><table><thead><tr><th style="text-align:center;">字段名称</th><th style="text-align:center;">长度（比特）</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:center;">发送方端口号</td><td style="text-align:center;">16</td><td>发送网络包的程序的端口号</td></tr><tr><td style="text-align:center;">接收方端口号</td><td style="text-align:center;">16</td><td>网络包的接收方程序的端口号</td></tr><tr><td style="text-align:center;">序号（发送数据的顺序编号）</td><td style="text-align:center;">32</td><td>发送方告知接收方该网络包发送的数据相当于所有数据的第几个字节</td></tr><tr><td style="text-align:center;">ACK 号（接收数据的顺序编号）</td><td style="text-align:center;">32</td><td>接收方告知发送方已经收到了所有数据的第几个字节。其中，ACK 是 acknowledge 的缩写</td></tr><tr><td style="text-align:center;">数据偏移量</td><td style="text-align:center;">4</td><td>表示数据部分的起始位置，也可以认为表头的长度</td></tr><tr><td style="text-align:center;">保留</td><td style="text-align:center;">6</td><td>该字段保留，现在未使用</td></tr><tr><td style="text-align:center;">控制位</td><td style="text-align:center;">6</td><td>该字段的每个比特分别表示以下通信控制含义。<br>URG：表示紧急指针字段有效<br>ACK：表示接收数据序号字段有效，一般表示数据已被接收方收到<br>PSH：表示通过 flush 操作发送的数据<br>RST：强制断开连接，用于异常中断的情况<br>SYN：发送方和接收方相互确认序号，表示连接操作<br>FIN：表示断开连接</td></tr><tr><td style="text-align:center;">窗口</td><td style="text-align:center;">16</td><td>接收方告知发送方窗口大小（即无需等待确认可一起发送的数据量）</td></tr><tr><td style="text-align:center;">校验和</td><td style="text-align:center;">16</td><td>用来检查是否出现错误</td></tr><tr><td style="text-align:center;">紧急指针</td><td style="text-align:center;">16</td><td>表示应急处理的数据位置</td></tr><tr><td style="text-align:center;">可选字段</td><td style="text-align:center;">可变长度</td><td>除了上面的固定头部字段之外，还可以添加可选字段，但除了连接操作之外，很少使用可选字段</td></tr></tbody></table><p>连接的第一步是在 TCP 模块处创建表示连接控制信息的头部。通过 TCP 头部中的发送方和接收方端口号可以找到要连接的套接字。服务器的 TCP 模块同样会设置好控制信息的头部，并设置 ACK 为 1（表示已经收到相应的网络包）后返回响应。</p><h3 id="_3-收发数据" tabindex="-1"><a class="header-anchor" href="#_3-收发数据" aria-hidden="true">#</a> 3. 收发数据</h3><ol><li>将 HTTP 请求消息交给协议栈</li><li>对较大的数据进行拆分</li><li>使用 ACK 号确认网络包已收到</li><li>根据网络包平均往返时间调整 ACK 号等待时间</li><li>使用窗口有效管理 ACK 号</li><li>ACK 与窗口的合并</li><li>接收 HTTP 响应消息</li></ol><h3 id="_4-从服务器断开并删除套接字" tabindex="-1"><a class="header-anchor" href="#_4-从服务器断开并删除套接字" aria-hidden="true">#</a> 4. 从服务器断开并删除套接字</h3><p>服务器或客户端都可以在数据发送完毕后发起断开，当最后返回 ACK 号通信就结束了。</p><p>用来通信的套接字也就不再使用了，但它并不会立即删除，而是会等待一会儿。</p><p>例如客户端发起断开，客户端最后返回的 ACK 号丢失了，服务器会再一次发送 <code>FIN</code>，若此时客户端之前的套接字被释放且恰好被另一程序使用（客户端端口号是从空闲的端口号中随意选择的），这样就会导致新的套接字执行断开操作。</p><h3 id="_5-ip-与以太网的包收发操作" tabindex="-1"><a class="header-anchor" href="#_5-ip-与以太网的包收发操作" aria-hidden="true">#</a> 5. IP 与以太网的包收发操作</h3><p>TCP 模块在执行连接、收发、断开等各阶段操作时，都需要委托 IP 模块将数据封装成包发送给通信对象。</p><p>IP 模块负责添加两个头部：</p><ol><li>MAC 头部：以太网用的头部，包含 MAC 地址</li><li>IP 头部：IP 用的头部，包含 IP 地址</li></ol>',18),C=r('<p>尽管说 IP 模块负责将包发送给对方，但实际上将包从发送方传输到接收方的工作是由集线器、路由器等网络设备来完成的，因此 IP 模块仅仅是整个包传输过程中的入口而已。</p><h3 id="_6-udp-协议的收发操作" tabindex="-1"><a class="header-anchor" href="#_6-udp-协议的收发操作" aria-hidden="true">#</a> 6. UDP 协议的收发操作</h3><p>不需要重发的数据用 UDP 发送。</p><h2 id="第三章-从网线到网络设备-探索集线器、交换机和路由器" tabindex="-1"><a class="header-anchor" href="#第三章-从网线到网络设备-探索集线器、交换机和路由器" aria-hidden="true">#</a> 第三章 从网线到网络设备 -- 探索集线器、交换机和路由器</h2><h3 id="_1-信号在网线和集线器中传输" tabindex="-1"><a class="header-anchor" href="#_1-信号在网线和集线器中传输" aria-hidden="true">#</a> 1. 信号在网线和集线器中传输</h3><p>信号在网络传输中会衰减，还会受到噪声干扰而失真。</p><p>信号本身也是一种带有电压变化的电流，其本质和噪声的电流是一样的，所以信号和噪声的电流就会混杂在一起。局域网中使用的是双绞线，这样设计通过两根信号线的缠绕抵消外源性噪声，通过改变节距抑制内源性噪声。</p><h3 id="_2-交换机的包转发操作" tabindex="-1"><a class="header-anchor" href="#_2-交换机的包转发操作" aria-hidden="true">#</a> 2. 交换机的包转发操作</h3><p>交换机先接收信号并将其还原为数字信息，然后再重新转化成信号并发送出去。</p><p>交换机根据 MAC 地址表查找 MAC 地址，然后将信号发送到相应端口。</p><h3 id="_3-路由器的包转发操作" tabindex="-1"><a class="header-anchor" href="#_3-路由器的包转发操作" aria-hidden="true">#</a> 3. 路由器的包转发操作</h3><p>家用路由器常常集成了集线器与交换机的功能。</p><p>路由器是基于 IP 设计的，而交换机是基于以太网设计的。</p><h3 id="_4-路由器的附加功能" tabindex="-1"><a class="header-anchor" href="#_4-路由器的附加功能" aria-hidden="true">#</a> 4. 路由器的附加功能</h3><ol><li>将私有地址转为公有地址</li><li>包过滤</li></ol><h2 id="第四章-通过接入网进入互联网内部-探索接入网和网络运营商" tabindex="-1"><a class="header-anchor" href="#第四章-通过接入网进入互联网内部-探索接入网和网络运营商" aria-hidden="true">#</a> 第四章 通过接入网进入互联网内部 -- 探索接入网和网络运营商</h2><h3 id="_1-adsl-接入网的结构和工作方式" tabindex="-1"><a class="header-anchor" href="#_1-adsl-接入网的结构和工作方式" aria-hidden="true">#</a> 1. ADSL 接入网的结构和工作方式</h3><p>所谓接入网，就是指连接互联网与家庭、公司网络的通信线路。一般家用的接入网方式包括 ADSL、FTTH、CATV、电话线、ISDN 等，公司则还可能使用专线。</p><p>用户端路由器发出的网络包通过 ADSL Modem（调制解调器，又称 “猫”）和电话线到电话局，然后到达 ADSL 和网络运营商（即 ISP，互联网服务提供商）。</p><h3 id="_2-光纤接入网-ftth" tabindex="-1"><a class="header-anchor" href="#_2-光纤接入网-ftth" aria-hidden="true">#</a> 2. 光纤接入网（FTTH）</h3><p>FTTH 是一种基于光纤的接入网技术。ADSL 是由多个频段的信号组成，比较复杂，但光纤信号却非常简单，亮表示 1，暗表示 0。光敏元件再根据光的亮度产生不同的电压。</p><h3 id="_3-接入网中使用的-ppp-和隧道" tabindex="-1"><a class="header-anchor" href="#_3-接入网中使用的-ppp-和隧道" aria-hidden="true">#</a> 3. 接入网中使用的 PPP 和隧道</h3><p>PPPoE 是将 PPP 消息装入以太网包进行传输的方式。</p><p>所谓隧道，就类似于套接字之间建立的 TCP 连接，可以将包原封不动地搬运到另一端。</p><h3 id="_4-网络运营商的内部" tabindex="-1"><a class="header-anchor" href="#_4-网络运营商的内部" aria-hidden="true">#</a> 4. 网络运营商的内部</h3><p>互联网的实体并不是由一个组织运营管理的单一网络，而是由多个运营商网络相互连接组成。</p><h3 id="_5-跨越运营商的网络包" tabindex="-1"><a class="header-anchor" href="#_5-跨越运营商的网络包" aria-hidden="true">#</a> 5. 跨越运营商的网络包</h3><p>互联网内部使用 BGP 机制在运营商之间交换路由信息。</p><p>运营商之间可以直接连接，也可以通过 IX 连接，无论哪种方式，最终网络包都会到达服务器所在的运营商。</p><h2 id="第五章-服务器端的局域网有什么玄机" tabindex="-1"><a class="header-anchor" href="#第五章-服务器端的局域网有什么玄机" aria-hidden="true">#</a> 第五章 服务器端的局域网有什么玄机</h2><h3 id="_1-web-服务器的部署地点" tabindex="-1"><a class="header-anchor" href="#_1-web-服务器的部署地点" aria-hidden="true">#</a> 1. Web 服务器的部署地点</h3><p>Web 服务器可以部署在公司，也可以部署在数据中心，数据中心往往会提供一些附加服务。</p><h3 id="_2-防火墙的结构和原理" tabindex="-1"><a class="header-anchor" href="#_2-防火墙的结构和原理" aria-hidden="true">#</a> 2. 防火墙的结构和原理</h3><p>防火墙可分为包过滤、应用层网关、电路层网关等几种形式。</p><p>包过滤方式的防火墙可根据接收方 IP 地址、发送方 IP 地址、接收方端口号、发送发端口号、控制位等信息判断是否允许某个包通过。</p><h3 id="_3-通过将请求平分给多台服务器来平衡负载" tabindex="-1"><a class="header-anchor" href="#_3-通过将请求平分给多台服务器来平衡负载" aria-hidden="true">#</a> 3. 通过将请求平分给多台服务器来平衡负载</h3><p>轮询会导致连续的操作走不同的服务器，可能产生一些糟糕的影响。</p><p>为了避免上述的行为，可以使用一种叫做负载均衡器的设备，由负载均衡器来转发请求。</p><h3 id="_4-使用缓存服务器来分担负载" tabindex="-1"><a class="header-anchor" href="#_4-使用缓存服务器来分担负载" aria-hidden="true">#</a> 4. 使用缓存服务器来分担负载</h3><p>由缓存服务引出了正向代理与反向代理。</p><h3 id="_5-内容分发服务" tabindex="-1"><a class="header-anchor" href="#_5-内容分发服务" aria-hidden="true">#</a> 5. 内容分发服务</h3><p>当缓存服务器部署在服务器端时，虽然可以减少 Web 服务器的负载，但依然无法减少互联网中的流量。</p><p>于是就出现了 CDSP 与主要的供应商签约并部署多台缓存服务器，最后售卖给 Web 服务器运营者。</p><h2 id="第六章-请求到达-web-服务器-响应返回浏览器-短短几秒的-漫长旅行-迎来终点" tabindex="-1"><a class="header-anchor" href="#第六章-请求到达-web-服务器-响应返回浏览器-短短几秒的-漫长旅行-迎来终点" aria-hidden="true">#</a> 第六章 请求到达 Web 服务器，响应返回浏览器 -- 短短几秒的 “漫长旅行” 迎来终点</h2><h3 id="_1-服务器概览" tabindex="-1"><a class="header-anchor" href="#_1-服务器概览" aria-hidden="true">#</a> 1. 服务器概览</h3><p>使用描述符来替代套接字的原因：</p><ol><li>等待连接的套接字中没有客户端 IP 地址和端口号</li><li>使用描述符这一种信息比较简单</li></ol><h3 id="_2-服务器的接收操作" tabindex="-1"><a class="header-anchor" href="#_2-服务器的接收操作" aria-hidden="true">#</a> 2. 服务器的接收操作</h3><p>网卡的 MAC 模块将网络包从信号还原为数字信息，检验 FCS 并存入缓冲区。网卡驱动会根据 MAC 头部判断协议栈类型，并将包交给相应的协议栈。</p><p>当网络包转交到协议栈时，IP 模块会首先开始工作：</p><ol><li>判断是不是发给自己的</li><li>判断网络包是否被分片，是则需要等待全部抵达并重新组成包</li><li>将包转交给 TCP 模块或 UDP 模块</li></ol><h3 id="_3-web-服务器程序解释请求消息并作出响应" tabindex="-1"><a class="header-anchor" href="#_3-web-服务器程序解释请求消息并作出响应" aria-hidden="true">#</a> 3. Web 服务器程序解释请求消息并作出响应</h3><p>Web 服务器公开的目录实际上是虚拟目录，还提供 <code>rewrite</code> 功能来重写文件夹或文件名。</p><h3 id="_4-浏览器响应消息并显示内容" tabindex="-1"><a class="header-anchor" href="#_4-浏览器响应消息并显示内容" aria-hidden="true">#</a> 4. 浏览器响应消息并显示内容</h3><p>要显示内容，首先需要判断响应消息中的数据属于哪种类型，根据类型来进行对应的展示。</p><h2 id="附录-网络包的旅程" tabindex="-1"><a class="header-anchor" href="#附录-网络包的旅程" aria-hidden="true">#</a> 附录 网络包的旅程</h2>',56);o.render=function(r,l){const o=e("OutboundLink"),N=e("RouterLink");return t(),a(d,null,[h,n("img",{src:r.$withBase("/computer/how-networks-work-1.jpg"),alt:"how-networks-work-1"},null,8,["src"]),i,n("table",null,[c,n("tbody",null,[n("tr",null,[p,n("td",null,[u,n("a",x,[g,n(o)]),m])]),b,P,k,y,_,w,f])]),I,n("p",null,[S,n(N,{to:"/os/linux/everything-is-a-file.html#_4-%E5%A5%97%E6%8E%A5%E5%AD%97%E6%96%87%E4%BB%B6%EF%BC%88socket%EF%BC%89"},{default:s((()=>[T])),_:1}),D]),A,n("img",{src:r.$withBase("/computer/how-networks-work-2.jpg"),alt:"how-networks-work-2"},null,8,["src"]),C,n("img",{src:r.$withBase("/computer/how-networks-work-3.jpg"),alt:"how-networks-work-3"},null,8,["src"]),n("img",{src:r.$withBase("/computer/how-networks-work-4.jpg"),alt:"how-networks-work-4"},null,8,["src"])],64)};export default o;

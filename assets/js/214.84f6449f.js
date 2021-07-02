(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{669:function(t,a,s){"use strict";s.r(a);var e=s(31),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前置"}},[t._v("#")]),t._v(" 前置")]),t._v(" "),s("p",[t._v("虽然在 "),s("a",{attrs:{href:"https://github.com/fatedier/frp/blob/master/README_zh.md#%E9%80%9A%E8%BF%87%E8%87%AA%E5%AE%9A%E4%B9%89%E5%9F%9F%E5%90%8D%E8%AE%BF%E9%97%AE%E9%83%A8%E7%BD%B2%E4%BA%8E%E5%86%85%E7%BD%91%E7%9A%84-web-%E6%9C%8D%E5%8A%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("FRP"),s("OutboundLink")],1),t._v(" 官网中给了 web 服务配置的示例，但在实际使用中存在两个问题：")]),t._v(" "),s("ul",[s("li",[t._v("有时部分资源找不到，导致页面无法渲染")]),t._v(" "),s("li",[t._v("域名后面还带一个端口，实在有点丑")])]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("h3",{attrs:{id:"_1-服务器端-frp-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务器端-frp-配置"}},[t._v("#")]),t._v(" 1. 服务器端 FRP 配置")]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("bind_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("7000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("vhost_http_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("8080")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("subdomain_host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("frp.xxx.com")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-服务器端-nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-服务器端-nginx-配置"}},[t._v("#")]),t._v(" 2. 服务器端 Nginx 配置")]),t._v(" "),s("p",[t._v("利用正则来匹配所有的 "),s("code",[t._v("frp")]),t._v(" 二级域名。")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /etc/nginx/conf.d/frp.conf")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  frp.xxx.com *.frp.xxx.com")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#access_log  /var/log/nginx/host.access.log  main;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" /")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("              http://127.0.0.1:7000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处简写")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("        Host "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#error_page  404              /404.html;")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_page")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" = /50x.html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token directive"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v("   /usr/share/nginx/html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-域名解析配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-域名解析配置"}},[t._v("#")]),t._v(" 3. 域名解析配置")]),t._v(" "),s("p",[t._v("根据 Nginx 的配置添加两项：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("frp.xxx.com")])]),t._v(" "),s("li",[s("code",[t._v("*.frp.xxx.com")])])]),t._v(" "),s("h3",{attrs:{id:"_4-客户端-frp-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-客户端-frp-配置"}},[t._v("#")]),t._v(" 4. 客户端 FRP 配置")]),t._v(" "),s("p",[s("strong",[t._v("客户端的 Nginx 配置为默认时就可以使用，此处省略。")])]),t._v(" "),s("div",{staticClass:"language-ini extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ini"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("common")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server_addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("xxx.xx.xx.xxx")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("server_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("7000")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [ssh] 省略")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("web1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("http")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("local_ip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("127.0.0.1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("local_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("80")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("subdomain")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("sub1")]),t._v("\n")])])]),s("h2",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("p",[t._v("最后通过浏览器访问 "),s("code",[t._v("sub1.frp.xxx.com")]),t._v(" 即可展现效果。")])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{650:function(s,a,t){"use strict";t.r(a);var n=t(31),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"proxychains-ng"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxychains-ng"}},[s._v("#")]),s._v(" proxychains-ng")]),s._v(" "),t("p",[s._v("浏览器代理及应用代理均不存在问题，而终端代理总是出现各种奇怪的问题。")]),s._v(" "),t("p",[s._v("曾经使用以下方式，然后不知道被自己更新了什么就都失效了。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ALL_PROXY")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ALL_PROXY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("socks5://127.0.0.1:1080\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global http.proxy "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'socks5://127.0.0.1:1080'")]),s._v("\n")])])]),t("p",[s._v("最后接触了 "),t("a",{attrs:{href:"https://github.com/rofl0r/proxychains-ng",target:"_blank",rel:"noopener noreferrer"}},[s._v("proxychains-ng"),t("OutboundLink")],1),s._v("，感觉其更加强大与简单。")]),s._v(" "),t("p",[s._v("安装：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pacman -S proxychains-ng\n")])])]),t("p",[s._v("修改配置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/proxychains.conf\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释掉 proxy_dns")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_dns")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最后一行改为对应的代理")]),s._v("\nsocks5 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1080")]),s._v("\n")])])]),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("curl")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("proxychains "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" www.google.com\n")])])])]),s._v(" "),t("li",[t("p",[s._v("git")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("proxychains "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:rofl0r/proxychains-ng.git\n")])])])]),s._v(" "),t("li",[t("p",[s._v("yay")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("proxychains yay -S microsoft-edge\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
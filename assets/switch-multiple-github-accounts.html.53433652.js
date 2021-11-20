import{c as l,o as s,F as t,a as n,d as e}from"./app.89b3b21c.js";import{_ as a}from"./plugin-vue_export-helper.5a098b48.js";var c="/git/github-add-ssh-key.png";const o={},i=n("h2",{id:"\u4F7F\u7528\u573A\u666F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u573A\u666F","aria-hidden":"true"},"#"),e(" \u4F7F\u7528\u573A\u666F")],-1),u=n("p",null,"\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u5E38\u5E38\u8981\u5BF9\u591A\u4E2A github \u8D26\u53F7\u8FDB\u884C\u5207\u6362\u3002\u6BD4\u5982\uFF0C\u81EA\u5DF1\u7684\u3001\u516C\u53F8\u7684\u3001\u5C0F\u53F7\u3002",-1),r=n("h2",{id:"\u5207\u6362\u6B65\u9AA4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5207\u6362\u6B65\u9AA4","aria-hidden":"true"},"#"),e(" \u5207\u6362\u6B65\u9AA4")],-1),h=n("ol",null,[n("li",null,[n("p",null,"\u521B\u5EFA ssh key")]),n("li",null,[n("p",null,"\u5C06 public key \u4E0A\u4F20\u81F3\u670D\u52A1\u5668(\u540D\u5B57\u968F\u610F\u5373\u53EF)"),n("p",null,[n("img",{src:c,alt:""})])]),n("li",null,[n("p",null,[e("\u5728 "),n("code",null,"~/.ssh/"),e(" \u76EE\u5F55\u4E0B\u521B\u5EFA config \u6587\u4EF6")]),n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"vim"),e(` \uFF5E/.ssh/config
`)])])])]),n("li",null,[n("p",null,"config \u5185\u5BB9"),n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,`# \u6B63\u5E38\u4F7F\u7528\u7684 rsa
Host github.com
HostName github.com
IdentityFile ~/.ssh/id_rsa
 
# new \u65B0\u8D26\u53F7
Host new
HostName github.com
IdentityFile ~/.ssh/id_rsa_new
`)])])]),n("li",null,[n("p",null,"clone \u9879\u76EE"),n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# \u539F\u9879\u76EE\u5730\u5740\u4E3A"),e(`
`),n("span",{class:"token function"},"git"),e(` clone git@github.com:xxxxxx/xxx.git
`),n("span",{class:"token comment"},"# \u4FEE\u6539\u4E3A "),e(`
`),n("span",{class:"token function"},"git"),e(` clone git@new:xxxxxx/xxx.git
`)])])])]),n("li",null,[n("p",null,"push \u9879\u76EE"),n("p",null,[e("\u56E0\u4E3A\u5728\u4E00\u5F00\u59CB clone \u7684\u65F6\u5019\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86\uFF0C\u6240\u4EE5 push \u65F6\u5C31\u65E0\u9700\u914D\u7F6E\u4E86\u3002\u4E0D\u8FC7\u6211\u4EEC\u8FD8\u9700\u8981 "),n("code",null,"git config"),e(" \u4FEE\u6539\u4E00\u4E0B\u672C\u5730\u7684 "),n("code",null,"user.name"),e(" \u548C "),n("code",null,"user.email"),e(" \u6765\u4FDD\u8BC1\u662F\u540C\u4E00\u4E2A\u4EBA\u4FEE\u6539\u4E86, \u5426\u5219\u4F1A\u5E94\u7528\u5168\u5C40\u7684 "),n("code",null,"config"),e(" \u8BBE\u7F6E")])])],-1);function d(g,p){return s(),l(t,null,[i,u,r,h],64)}var m=a(o,[["render",d]]);export{m as default};

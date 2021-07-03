(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{514:function(e,a,t){"use strict";t.r(a);var r=t(31),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),t("blockquote",[t("p",[e._v("Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.")]),e._v(" "),t("p",[e._v("-- "),t("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[e._v("lerna"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("对于维护多个 "),t("code",[e._v("package")]),e._v(" 来说，都会遇到一个选择，是选择 "),t("code",[e._v("mono-repo")]),e._v(" 还是 "),t("code",[e._v("multi-repo")]),e._v("。"),t("code",[e._v("multi-repo")]),e._v(" 一个模块（module）一个仓库（repository），而 "),t("code",[e._v("mono-repo")]),e._v(" 是所有模块整合在一个仓库，"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义来源"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),t("p",[t("code",[e._v("lerna")]),e._v(" 初始化分为两种模式："),t("code",[e._v("fix")]),e._v("（默认，锁定模式，项目内的所有 package 共用版本号）、"),t("code",[e._v("independent")]),e._v("（独立模式，每个 "),t("code",[e._v("package")]),e._v(" 拥有独立版本号）。个人认为大部分情况下都应该使用独立模式，即每个 "),t("code",[e._v("package")]),e._v(" 都有自己的版本号。")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i lerna -g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init lerna-repo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" lerna-repo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# lerna")]),e._v("\nlerna init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--independent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成下方文件夹")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#lerna-repo")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#├── lerna.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#├── package.json")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#└── packages")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建 packages")]),e._v("\nlerna create pkg-1 -y\nlerna create pkg-2 -y\n")])])]),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[e._v("#")]),e._v(" 依赖")]),e._v(" "),t("h3",{attrs:{id:"_1-工具依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-工具依赖"}},[e._v("#")]),e._v(" 1. 工具依赖")]),e._v(" "),t("p",[e._v("对于 "),t("code",[e._v("eslint")]),e._v("、"),t("code",[e._v("commit-lint")]),e._v(" 等工具依赖，可以直接使用 "),t("code",[e._v("yarn")]),e._v(" 或 "),t("code",[e._v("npm")]),e._v(" 安装到顶层。")]),e._v(" "),t("h3",{attrs:{id:"_2-package-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-package-依赖"}},[e._v("#")]),e._v(" 2. package 依赖")]),e._v(" "),t("p",[e._v("针对 package 的依赖可以交由 "),t("code",[e._v("lerna")]),e._v(" 安装。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("所有 packages")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" module1\n")])])])]),e._v(" "),t("li",[t("p",[e._v("单独 package")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("lerna "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" module1 packages/pkg-1\n")])])])]),e._v(" "),t("li",[t("p",[e._v("卸载")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 所有")]),e._v("\nlerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -- "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yarn remove pkg-2"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 指定")]),e._v("\nlerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" --scope"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("pkg-1 "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yarn remove pkg-2"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 或使用空格替代 `=`")]),e._v("\nlerna "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" --scope pkg-1 "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yarn remove pkg-2"')]),e._v("\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"_3-workspaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-workspaces"}},[e._v("#")]),e._v(" 3. workspaces")]),e._v(" "),t("p",[e._v("为了减少子模块的重复依赖可以使用 "),t("code",[e._v("workspaces")]),e._v(" 将依赖提取到上级目录。")]),e._v(" "),t("p",[e._v("启用该模式非常简单：")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("在 "),t("code",[e._v("lerna.json")]),e._v(" 中添加 "),t("code",[e._v('"useWorkspaces": true')])])]),e._v(" "),t("li",[t("p",[e._v("在 "),t("code",[e._v("package.json")]),e._v(" 中添加 "),t("code",[e._v('"workspaces": ["packages/*"]')])]),e._v(" "),t("p",[e._v("按照约定俗成将模块放置于 "),t("code",[e._v("packages")]),e._v(" 目录下")])])]),e._v(" "),t("p",[e._v("有时候也会希望不同的模块走不同的依赖版本，这需要使用 "),t("a",{attrs:{href:"https://classic.yarnpkg.com/blog/2018/02/15/nohoist/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nohoist"),t("OutboundLink")],1),e._v("：")]),e._v(" "),t("blockquote",[t("p",[e._v("注意，需要模块为 "),t("code",[e._v("private")])])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"workspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"packages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"packages/*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nohoist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"**/vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"**/vue/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("也可以在模块中进行设置：")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"workspaces"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nohoist"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue/**"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[t("code",[e._v("lerna bootstrap")]),e._v(" 也提供了参数 "),t("a",{attrs:{href:"https://github.com/chinanf-boy/lerna-zh/blob/master/commands/bootstrap/README.zh.md#--nohoist-glob",target:"_blank",rel:"noopener noreferrer"}},[e._v("--nohoist"),t("OutboundLink")],1),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"更多命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多命令"}},[e._v("#")]),e._v(" 更多命令")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/publish#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna publish")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/version#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna version")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/bootstrap#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna bootstrap")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/list#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna list")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna changed")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna diff")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/exec#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna exec")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/run#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna run")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/init#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna init")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/add#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna add")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/clean#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna clean")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/import#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna import")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/link#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna link")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/create#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna create")]),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/info#readme",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("lerna info")]),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);
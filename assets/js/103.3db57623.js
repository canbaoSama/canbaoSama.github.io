(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{902:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"potrace-生成-svg-图片并采用-svgo-批量压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#potrace-生成-svg-图片并采用-svgo-批量压缩"}},[t._v("#")]),t._v(" potrace 生成 svg 图片并采用 svgo 批量压缩")]),t._v(" "),s("p",{staticClass:"date"},[t._v("2024/01/01 20:20:20 \n"),s("span",{staticClass:"leancloud_visitors",attrs:{id:"/blog/vue/CreateSvg.html"}},[s("i",{staticClass:"shni shn-eye-fill"}),t._v(" "),s("i",{staticClass:"leancloud-visitors-count"})])]),t._v(" "),s("p",[t._v("个人做的工具类项目，会不断补充新的前端可用工具、文档、新技术等")]),t._v(" "),s("h3",{attrs:{id:"生成-svg-格式图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成-svg-格式图片"}},[t._v("#")]),t._v(" 生成 svg 格式图片")]),t._v(" "),s("p",[t._v("原理是利用 "),s("span",{staticClass:"text-green"},[t._v("potrace")]),t._v(" 生成 svg 格式的"),s("span",{staticClass:"text-green"},[t._v("剪影")]),t._v(",可以通过各类配置修改生成的 svg 图片数据，可替换成不同颜色、大小等等等等")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Potrace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("trace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" svg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DOMParser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 替换成图片src")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newImgsrc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("data:image/svg+xml;charset=utf-8,")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生成的 svg 数据，可直接贴到 dome 节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" doc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseFromString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image/svg+xml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("生成的 svg 图片会存在很多垃圾重复的数据，需要压缩一番，可以采用 "),s("a",{attrs:{href:"https://www.npmjs.com/package/svgo",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm svgo"),s("OutboundLink")],1),s("br"),t._v("\n将整个文件夹下的 svg 图片压缩，可以参考 github 上我项目上的代码 "),s("a",{attrs:{href:"https://github.com/canbaoSama/viteComponents/blob/master/src/command/svgo.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("svgo"),s("OutboundLink")],1),s("br"),t._v("\nsvgo 是 node 环境中使用的，需要采用 node 的命令格式触发压缩，"),s("br"),t._v("\n也可直接 fork 我的代码，将代码中的文件夹地址替换成你的 svg 文件夹地址，然后执行 svgo 命令即可")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("展示")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/09/26/yOleXHKIj63NRFs.jpg",alt:"图片"}})])]),t._v(" "),s("base-valine"),t._v(" "),s("el-backtop",{attrs:{"visibility-height":0}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{743:function(a,s,t){a.exports=t.p+"assets/img/docker_ci_01.912b2837.png"},744:function(a,s,t){a.exports=t.p+"assets/img/docker_ci_02.b9260b41.png"},745:function(a,s,t){a.exports=t.p+"assets/img/docker_ci_03.1229a43e.png"},892:function(a,s,t){"use strict";t.r(s);var n=t(21),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"基于-docker-gitlab-gitlab-runner-搭建完整的自动化-ci-cd-流程-linux-二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于-docker-gitlab-gitlab-runner-搭建完整的自动化-ci-cd-流程-linux-二"}},[a._v("#")]),a._v(" 基于 Docker（gitlab, gitlab-runner） 搭建完整的自动化 CI，CD 流程（Linux）（二）")]),a._v(" "),s("h2",{attrs:{id:"手摸手实现-docker-安装-gitlab-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手摸手实现-docker-安装-gitlab-runner"}},[a._v("#")]),a._v(" 手摸手实现 Docker 安装 gitlab-runner")]),a._v(" "),s("p",{staticClass:"date"},[a._v("2022/06/22 15:41:20 \n"),s("span",{staticClass:"leancloud_visitors",attrs:{id:"/blog/tool/DockerCI_02.html"}},[s("i",{staticClass:"shni shn-eye-fill"}),a._v(" "),s("i",{staticClass:"leancloud-visitors-count"})])]),a._v(" "),s("p",[a._v("以我自己的 "),s("span",{staticClass:"text-green"},[a._v("ubuntu22.04")]),a._v(" 版本为例")]),a._v(" "),s("h3",{attrs:{id:"安装-gitlab-runner"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-gitlab-runner"}},[a._v("#")]),a._v(" 安装 gitlab runner")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab-runner "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /home/gitlab-runner/config:/etc/gitlab-runner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /var/run/docker.sock:/var/run/docker.sock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  gitlab/gitlab-runner:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 说明")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run \n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("                             "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#后台运行，全称：detach")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),a._v(" always               "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#容器自启动")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" gitlab-runner           "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置容器名称为gitlab-runner")]),a._v("\ngitlab/gitlab-runner:latest    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#镜像的名称，这里也可以写镜像ID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"runner-注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#runner-注册"}},[a._v("#")]),a._v(" runner 注册")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进入Runner")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" gitlab-runner "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 进行注册")]),a._v("\ngitlab-runner register\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("然后按照提示输入，可以参考下图。\ntoken 和 url 采用 gitlab中的参数，具体查看路径为：gitlab项目 -> 设置 -> CI/CD -> Runner 下的 url 和 token（参考图片2）\n"),s("img",{attrs:{src:t(743),alt:"图片"}})]),s("div",{staticClass:"image-name"},[a._v("图片1：注册runner")]),s("p"),a._v(" "),s("p",[a._v("如果你查看到当前项目的有效可用的 runner 如下图时，代表成功了")]),a._v(" "),s("p",[s("img",{attrs:{src:t(744),alt:"图片"}})]),s("div",{staticClass:"image-name"},[a._v("图片2：CI/CD")]),s("p"),a._v(" "),s("p",[a._v("然后点击 runner 的编辑按钮进入修改界面，按下图修改默认配置\n"),s("img",{attrs:{src:t(745),alt:"图片"}})]),s("div",{staticClass:"image-name"},[a._v("图片3：runner 配置")]),s("p"),a._v(" "),s("base-valine"),a._v(" "),s("el-backtop",{attrs:{"visibility-height":0}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);
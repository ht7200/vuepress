# VuePress

## 介绍：
VuePress 由两部分组成：一部分是支持用 Vue 开发主题的极简静态网站生成器，另一个部分是为书写技术文档而优化的默认主题。它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

### 它是如何工作的？

事实上，一个 VuePress 网站是一个由 [Vue](https://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router) 和 [webpack](https://webpack.js.org/) 驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML

### 主要特性：
- 在 Markdown 文件中使用 Vue 组件的能力
- Vue 驱动的自定义主题系统
- 自动生成 Service Worker
- 基于 Git 的 “最后更新时间”

## 搭建

### 全局安装VuePress

`yarn global add vuepress # 或者：npm install -g vuepress`

### 新建文件夹
可以手动右键新建，也可以使用下面的命令新建文件夹：

`mkdir project`

### 项目初始化
进入到project文件夹中，使用命令行初始化项目:

`yarn init -y # 或者 npm init -y`

将会创建一个package.json文件，长这样子：

```
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```
#### 按照下面的目录结构创建文件或者文件夹
```
project
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── public
│       └── config.js
└── package.json
```
config.js是VuePress必要的配置文件，它导出一个javascript对象。

你可以先加入如下配置：
```
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
**public**这个文件夹是用来放置静态资源的，打包出来之后会放在.vuepress/dist/的根目录。

#### 首页(像VuePress文档主页一样)
在docs文件夹下面创建一个`README.md`
默认的主题提供了一个首页，像下面一样设置`home:true`即可，可以把下面的设置放入`README.md`中，待会儿你将会看到跟`VuePress`一样的主页。
```
---
home: true
heroImage: /logo.jpg
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```
ps：你需要放一张图片到public文件夹中。

#### 在 `package.json` 里添加两个启动命令:
```
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
#### 启动你的VuePress：
默认是`localhost:8080`端口。
```
yarn docs:dev # 或者：npm run docs:dev
```

#### 基本配置：
最标准的当然是[官方文档](https://vuepress.vuejs.org/zh/default-theme-config/),可以自己的需求来配置`config.js`。
也可以参考本项目的配置：[GitLab](http://10.10.10.45:8000/ht7200/FE-DOC.git)

## 一个命令行发布到github上：
#### 在 `docs/.vuepress/config.js` 中设置正确的 base:
如果你打算发布到 `https://<USERNAME>.github.io/`，则可以省略这一步，因为 base 默认即是 `"/"`。

如果你打算发布到 `https://<USERNAME>.github.io/<REPO>/`，则将 base 设置为 `"/<REPO>/"`。
```
module.exports = {
  base: '/test/', // 比如你的仓库是test
}
```
#### 创建脚步文件 for Mac 

在`project`的根目录下，创建一个`deploy.sh`文件：
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -
```
#### 创建脚步文件 for Windows:
在`project`的根目录下，创建一个`build.bat`文件：
```
@echo off 

echo building...
npm run build
```

在`project`的根目录下，创建一个`deploy.bat`文件：
```
@echo off 

call build.bat
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f http://10.10.10.45:8000/ht7200/FE-DOC.git master:gh-pages

cd ../../..
```

#### 设置package.json：
```
{
  "name": "gfe-doc",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "d": "bash deploy.sh",
    "wd": "deploy.bat"
  }
}
```
#### 部署：
然后你每次可以运行下面的命令行，来把最新更改推到`github`上：
- Mac:
```
npm run d
```
- Windows:
```
npm run wd
```
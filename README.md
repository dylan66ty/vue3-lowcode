## 介绍
一个低代码平台的前端部分，靠拖拉拽生成页面的demo.
<p>
目前还只是一个简单的模板，后面可能会继续完善这个项目。感兴趣的小伙伴可以根据自己的需要去调整, 通过这个项目或许你可以接触到 vue3 很多有趣的新特性和玩法。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/vue-v3.2.0%2B-%23407fbc" alt="vue">
   <img src="https://img.shields.io/github/license/dylan66ty/vue3-lowcode.svg" alt="license">
</p>

## 功能清单
- [x] 物料区组件预览 
- [x] 从物料区拖拽组件到画布中渲染
- [x] 组件的复制、删除、查看、导入节点
- [x] 组件属性设置
- [x] 撤消、重做
- [x] 保存、预览
- [x] 画布 schema 导入、导出
- [x] 嵌套拖拽
- [ ] 页面树
- [ ] 组件的事件
- [ ] 出码 

## 克隆本项目
```shell
# ssh
git clone git@github.com:dylan66ty/vue3-lowcode.git

# https 
git clone https://github.com/dylan66ty/vue3-lowcode.git
```

## 安装

```shell
pnpm install 
```

## 运行
```shell
pnpm run serve
```

## 打包
```shell
pnpm run build
```


## 部分功能演示
<p>
 <a href="https://dylan66ty.github.io/vue3-lowcode">
 预览
 </a>
</p>

<img src="https://dylan66ty.github.io/vue3-lowcode/example.png" />


## 兼容环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## 技术栈

- 编程语言：TypeScript
- 构建工具：Webpack
- 前端框架：Vue 3.x
- 路由工具：Vue Router 4.x
- UI 框架：Element Plus
- CSS 预编译：Sass
- CSS 框架：Tailwind
- 代码规范：ESLint、Prettier
- 自动部署：GitHub Actions

## Star
如果您觉得这个项目有帮助，请点个 star 支持下吧。您的 star 是作者持续更新的动力。

## License
[MIT](./LICENSE)

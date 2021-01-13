# vue-admin
原型是根据[vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)做了一些修改
> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。
目前版本为 `v4.0+` 基于 `vue-cli` 进行构建

对前端不是很了解 所以就是一边看一边搜 根据自己想要的修改了一些 整合自己的后端基础版本 完成了登录注销等 获取用户信息附带信息是写死的

[后端仓库-CloudBase](https://github.com/Zyfgoup/CloudBase) 使用SpringCloud Alibaba构建的 包含一些基础模块

动态路由是先把所有的页面都定义在asyncRoutes中

然后根据登录的角色 去匹配路由meta里的角色来生成路由

然后根据路由生成菜单

暂时没太看明白这里的具体逻辑 后面懂了再写  原作者重写了导航栏这一部分 不是用的ElementUI 所以对获取路由变成菜单的逻辑还不是很懂




详解(有空再写)



## Build Setup
```bash
# 克隆项目
git clone https://github.com/PanJiaChen/vue-admin-template.git

# 进入项目目录
cd vue-admin-template

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 [http://localhost:9528](http://localhost:9528)

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```


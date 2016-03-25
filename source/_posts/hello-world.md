---
title: 从jekyll切换到hexo
categories:
- hexo
---

### 快速安装及部署

- `npm install hexo-cli -g`
- `hexo init blog`

`hexo init`会连带执行`cd blog && npm i`。

`hexo init`是clone自https://github.com/hexojs/hexo-theme-landscape.git，并默认使用landscape主题。

`hexo server`启动服务。`hexo s --debug`以调试模式启动, 并保存到debug.log文件中。

<!-- more -->

### 配置

- 换主题(NexT.Pisces)
  - `git clone https://github.com/iissnan/hexo-theme-next themes/next`
  - 修改_config.yml中的下列配置, 并重启服务
    - theme: next
    - language: zh-Hans (默认为en)
  - 修改themes/next/_config.yml中的配置
    - scheme: Pisces (默认为Muse)
    - avatar: 指定博客头像
- 其它常用配置
  - _config.yml
    - title
    - author
    - description (站点描述)
    - disqus_shortname (使用disqus作为评论系统)
    - baidu_analytics (谷歌的被墙了，不支持CNZZ，只能用百度/腾讯的)
    - swiftype_key (Swiftype 搜索)
  - themes/next/_config.yml

  - 文章摘要：写文章时，用`<!-- more -->`分隔，则只把它之前的内容显示在首页

- 添加标签云/分类/关于页
  - [添加标签云](http://theme-next.iissnan.com/theme-settings.html#标签云页面面)
    `hexo new page tags` (注：要加上 `type: tags` 字段)
  - `hexo new page categories`  (注：要加上 `type: categories` 字段)
  - `hexo new page about` (注：要加上 `type: about` 字段)

- RSS订阅 `npm install hexo-generator-feed --save`
- Sitemap站长地图 `npm install hexo-generator-sitemap --save`

### 命令

- 写博客相关命令
    Hexo常用命令：

    - `hexo new "postName"`       #新建文章
    - `hexo new page "pageName"`  #新建页面
    - `hexo generate`             #生成静态页面至public目录
    - `hexo server`               #开启预览访问端口（默认端口4000，'ctrl + c'关闭server）
    - `hexo deploy`               #将.deploy目录部署到GitHub

- 当然，如果每次输入那么长命令，那么一定想到用简写：

    - hexo n == hexo new
    - hexo g == hexo generate
    - hexo s == hexo server
    - hexo d == hexo deploy

- 其它的，还可以复合命令：

    `hexo deploy -g`
    `hexo server -g`

有时候生成的网页出错了，而生成的rss其实没有清除，那么用下面的命令，再重新生成吧

    hexo clean

## Hexo资源

- [Github](https://github.com/hexojs/hexo)
- [主题列表](https://hexo.io/themes/)
- [NexT Theme - 推荐主题](https://github.com/iissnan/hexo-theme-next)
- [为什么选hero而不是ghost和jekyll](http://www.maintao.com/2014/hexo-beginner's-guide/)
- [Hexo搭建Github-Pages博客填坑教程](http://www.jianshu.com/p/35e197cb1273)

### 常见问题

- timezone: 'Asia/Shanghai'
  时区之前写成'+8:00', 结果造成添加云标签出错 (https://github.com/hexojs/hexo/issues/1374)
- TODO: 部署到github并添加readme.md, hero在deploy时会删除它
- TODO: 同时管理两个github账号

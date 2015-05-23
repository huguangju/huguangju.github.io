---
layout: post
title: Sails.js 目录结构
description: "Sails.js 目录结构"
category: [blog]
tags : [Sails.js]
duoshuo: true
---

## 目录结构
  + Assets
    + **概述**

      Assets在服务器存放外部可直接访问的静态资源文件。在Sails中，当你启动项目时，会通过一个隐藏的临时目录(.tmp/public/)来处理和同步assets/ 目录下的文件。.tmp/public目录下的内容是Sails实际对外提供的服务- 大致等同于experss中的"public”目录，或者类似其它web服务器，例如Apache的"www”目录。中间步骤，Sails会为客户端准备/预编译assets - 如LESS,CoffeeScript, SASS, spritesheets, Jade templates,等等。

    + **静态中间件**

      在幕后，Sails用Express的 static middleware 为assets服务。你可以在/config/http.js 配置这个中间件 (e.g. 缓存设置) 。

    + **index.html**

      Sails跟大多数服务器一样以index.html为默认页面 <!-- more -->

    + **优先级**

      重要提示：```静态中间件（static middleware）```在Sails```路由器（router）```之后安装。如果你定义了一个自定义路由，但在你的assets目录中也有一个路径起冲突的文件，自定义路由会在它到达静态中间件之前拦截它。 例如，你创建了一个assets/index.html文件，没在config/routes.js 文件中定义路由时，它默认会被当成首页。但是你定义了自定义的路由，如'/': ‘FooController.bar’，则定义的路由优先。

    + **默认任务**

      ```资源管道(asset pipeline)```捆绑在Sails中，是一系列Grunt任务，配置了常规的默认设置，使您的项目更加一致和高效。整个前端资源的工作流程是完全可定制，同时它提供了一些默认的任务，开箱即用。Sails可以很容易地配置新的任务（configure new tasks），以满足你的需求。

      Sails中有如下默认配置：
        + 自动 LESS/JST/Coffeescript编译
        + 可选的资源注入、压缩、合并
        + 准备Web公共目录
        + 文件监听和同步
        + 生产环境的文件监听和同步

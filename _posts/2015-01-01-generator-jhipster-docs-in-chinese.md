---
layout: post
title: generator-jhipster 中文文档(翻译中)
description: "Spring Data JPA中文文档"
category: [blog]
tags : [java, 文档, 翻译]
duoshuo: true
---

![generator-jhipster](/assets/images/post/2015-01-01-1.png)
<!-- more -->

## 目标

Our goal is to generate for you a complete and modern Web app, unifying:<br/>
我们的目标是为你生成一个完整和现代化的Web应用程序，总的来说：

A high-performance and robust Java stack on the server side with Spring Boot<br/>
用Spring Boot在服务器端创建高性能和健壮Java堆栈，应用于

A sleek, modern, mobile-first front-end with AngularJS and Bootstrap<br/>
用AngularJS 和Bootstrap构建时髦、现代化、移动优先的前端界面

A powerful workflow to build your application with Yeoman, Bower, Grunt and Maven<br/>
基于Yeoman、Bower、Grunt、Maven 的强大工作流构建的应用

# 示例和源码

You can checkout a sample generated application here.<br/>
你可以从[这里](https://github.com/jhipster/jhipster-sample-app)检出一个已生成的应用

JHipster is Open Source, and all developement is done on Github<br/>
JHipster是开源的，所有开发在[Github](https://github.com/jhipster/generator-jhipster)完成

If you want to code with us, feel free to join!<br/>
如果你想参与编码，欢迎随时加入我们！

If you like the project, please give us a star on Github<br/>
如果你喜这个项目，请在Github上给我们加星

## 版本变更
[http://jhipster.github.io/releases.html](http://jhipster.github.io/releases.html)

## 介绍

### PPT
[PPT](http://jhipster.github.io/presentation/)


### 技术栈

#### 客户端技术栈

单页应用：

+ Responsive Web Design 响应式网页设计
+ HTML5 Boilerplate HTML样板
+ Twitter Bootstrap
+ AngularJS
+ Full internationalization support with Angular Translate  用Angular Translate提供完全的国际化支持
+ Optional Compass / Sass support for CSS design  CSS设计提供可选的 Compass / Sass支持
+ Optional WebSocket support with the Atmosphere framework 使用 Atmosphere 框架提供可选的WebSocket支持

With the great Yeoman development workflow:
用 Yeoman 开发工作流：

+ Easy installation of new JavaScript libraries with Bower 用Bower安装新的javaScript库更容易
+ Build, optimization and live reload with Grunt or Gulp.js 用Grunt 或 Gulp.js 构建、性能优化和实时加载
+ Testing with Karma and PhantomJS 用Karma 和 PhantomJS做测试

And what if a single Web page application isn't enough for your needs?
但如果仅仅是一个单页应用，能满足你的需求吗？

+ Support for the Thymeleaf template engine, to generate Web pages on the server side  支持Thymeleaf模板引擎，用于在服务器端生成页面
Technology stack on the server side 服务器端技术栈


一个完整的Spring应用：

+ Spring Boot for easy application configuration 用Spring Boot 简化应用配置
+ Maven or Gradle configuration for building, testing and running the application 使用Maven 或 Gradle 构建、测试和运行应用
+ "development" and "production" profiles (both for Maven and Gradle) “开发” 和 “生产” 环境profiles (Maven和Gradle都支持)
+ Spring Security (安全框架)
+ Spring MVC REST + Jackson
+ Optional WebSocket support with the Atmosphere framework 使用 Atmosphere 框架提供可选的WebSocket支持
+ Spring Data JPA + Bean Validation(数据验证)
+ Database updates with Liquibase 使用Liquibase作数据库更新
+ MongoDB support if you'd rather use NoSQL instead of a classical relational database 提供MongoDB支持(如果你不想用传统关系型数据库而是用NoSQL)


生产环境准备：

+ Monitoring with Metrics 用Metrics作监控
+ Caching with ehcache (local cache) or hazelcast (distributed cache) 用ehcache 作缓存(本地缓存) 或者用hazelcast(分布式缓存)
+ Optional HTTP session clustering with hazelcast 可选的 hazelcast HTTP会话集群支持
+ Optimized static resources (gzip filter, HTTP cache headers) 优化静态资源(gzip过滤，HTTP缓存头)
+ Log management with Logback, configurable at runtime 用Logback 做日志管理，可在运行时配置
+ Connection pooling with HikariCP for optimum performance 用HikariCP数据库连接池使性能更优化
+ Builds a standard WAR file or an executable JAR file 构建一个标准的WAR文件或可执行文件

### 项目运行效果

首页<br/>
![generator-jhipster](/assets/images/post/2015-01-01-2.png)
<br/>监控<br/>
![generator-jhipster](/assets/images/post/2015-01-01-3.png)
<br/>其中一个生成的表单<br/>
![generator-jhipster](/assets/images/post/2015-01-01-4.png)
<br/>日志管理<br/>
![generator-jhipster](/assets/images/post/2015-01-01-5.png)
<br/>生成的“Book”实体<br/>
![generator-jhipster](/assets/images/post/2015-01-01-6.png)

### 视屏教程
<iframe width="560" height="315" src="//www.youtube.com/embed/fbEnchNPHSc" frameborder="0" allowfullscreen></iframe>


## 文档
### 安装JHipster

#### 本地安装 vs. Docker

我们提供两种使用JHipster的方式：

+ You can do a "local installation", which is the classical way of working with JHipster. Everything is installed on your machine, which can be a little complex to set up, but that's how most people usually work. In case of doubt, choose this installation.
          你可以用“本地安装”，这是使用Jhipster的经典方式。 一切都被安装在你的机器，它的安装可能有点复杂，但大多数人通常是这样做的。如有疑问，请选择此安装。
+ You can use a "Docker" container, which brings you a lightweight, virtualized container with everything already installed. You don't have to worry about installing everything. But Docker is a rather young tool, and you need to know how to use Linux quite well.
         你可以用“[Docker](https://www.docker.io/)” 容器，一个一切都安装就绪，经量级、虚拟化的容器。你不必担心安装的一切，但Docker是一相当年轻的工具，并且需要你熟练地使用Linux。

<br/>
##### 本地安装（推荐普通用户使用）

+ Install Java from the Oracle website. 安装[Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
+ Depending on your preferences, install either [Maven](http://maven.apache.org/) or [Gradle](http://www.gradle.org/). 根据你的喜好，选择安装[Maven](http://maven.apache.org/)或是[Gradle](http://www.gradle.org/)。
+ Install Git from git-scm.com. We recommend you also use a tool like SourceTree if you are starting with Git. 安装Git(git-scm.com)，如果你刚开始用[Git](http://git-scm.com/)，我们推荐你使用像[SourceTree](http://www.sourcetreeapp.com/)一样的工具。
+ Install Node.js from the Node.js website. This will also install npm, which is the node package manager we are using in the next commands. 安装[Node.js](http://nodejs.org/)，它同时会安装```npm```，一个Node包管理器，我们会在下边的命令中使用它。
+ 安装Yeoman: ```npm install -g yo```
+ 安装Bower: ```npm install -g bower```
+ 安装JHipster: ```npm install -g generator-jhipster```
+ To find more information, tips and help, please have a look at the Yeoman "getting starting" guide before submitting a bug.
如需了解更多信息、提示和帮助。提交bug前请看“Yeoman入门指南”。


##### Docker安装（高级用户）

###### 介绍

JHipster has a specific jhipster-docker project, which provides a Docker container.<br/>
JHipster有一个特殊的jhipster-docker项目，提供了一个Docker容器。

This project makes a Docker "Trusted build" that is available on:<br/>
这个项目使得Docker“可靠构建”变得有效：<br/>
https://registry.hub.docker.com/u/jdubois/jhipster-docker/<br/>
This image will allow you to run JHipster inside Docker.<br/>
这允许你在Docker中运行JHipster。




















<br/>
<br/>
<br/>

> 本文翻译自[http://jhipster.github.io/](http://jhipster.github.io/)<br/>
> by [Hu Guangju](http://www.jediego.com)
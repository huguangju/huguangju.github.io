---
layout: post
title: Sails.js 简介
description: "Sails.js 简介"
category: [blog]
tags : [Sails.js]
duoshuo: true
---

![Sails.js](/assets/images/post/2015-05-17-1.png)

## 什么是 Sails.js?

Sails可以很轻松地构建定制的企业级的Node.js应用。
它被设计成模仿类似Ruby on Rails框架的MVC模式，
但具备现代应用所需要的特征：具有**可扩展**、**面向服务架构**(service-oriented architecture)的**数据驱动**(data-driven)的API。
它尤其擅长构建聊天、实时仪表板，或多人游戏; 但你也可以以它为基础来构建任何Web应用。

> Sails确实是一个Web框架。但退一步，这意味着什么？我们有时谈论的“web” ， 是指它是“前端Web ”。
  我们认为它类似于Web标准，或HTML5 ，CSS3的概念; 就像Backbone、Angular，或jQuery框架。
  Sails不是一个那样的Web框架 。
  Sails可以与Angular和Backbone很好地配合，但你绝不会使用这些库代替Sails。
  在另一方面，我们有时候谈论的“Web框架” ，指的是“后端Web。 ”
  它们产生了类似于REST，或者HTTP或WebSockets这样的概念; 和如Java或Ruby或node.js技术。
  一个“后端Web”框架可以帮助你做像构建API ，提供HTML文件，并发处理数十万用户之类的事。Sails是后者 。

<!-- more -->

## 特性

Sails是最流行的Node.js MVC框架。它专注于快速构建可用于生产环境的Node.js应用，用几周而不是几个月完成它。
[More](http://sailsjs.org/#!/features)

+ **100% JavaScript**

  以 Sails 为基础构建的应用意味着它完全是用JavaScript编写的，从而可以编写前后端统一的应用。

+ **任意数据库**

  Sails 绑定了强大的ORM ，用 ```Waterline``` 提供了一个简的数据访问层，不管你使用的什么数据库。

+ **强大的映射**

  Sails 提供了一个类似于关系模型的新方式，旨在使数据建模更加实用。

+ **自动生成 REST APIs**

  Sails 带有```蓝图(blueprints)```，帮助你快速启动应用程序的后台，而无需编写任何代码。

+ **简单的 WebSocket 支持**

  Sails 为你翻译传入的套接字消息，它们在你的 Sails 应用中会自动兼容每一条路由。

+ **可重用的安全策略**

  Sails 默认提供了基本的安全和基于角色的访问控制。

+ **与前端分离**

  Sails 被设计成与任何前端策略兼容; 无论是Angular, Backbone, iOS/ObjC, Android/Java, Windows Phone，或所有别的东西。

+ **灵活的构建管道**

  Sails 附带Grunt，这意味着你的整个前端资源的工作流是完全可定制，并支持所有已经存在的Grunt模块。

+ **坚如磐石的基础**

  Sails 基于 Node.js 构建的，使用```Express```处理HTTP请求，并封装socket.io用于管理WebSockets。

## 约定优于配置

Sails 和其它的MVC Web应用框架一样完成许多相同的目标，采用了许多相同的方法。这样做是有目的的。一致的方式使应用程序开发更可预测和方便大家参与。

想象一下，当你用Sails建立一个全新的应用时，如果你的团队中有人已经用过像Zend, Laravel, CodeIgniter, Cake, Grails, Django, ASP.NET MVC,
或者Rails ，Sails会让他们感到很熟悉。不仅如此，借助在过去已经熟悉的的基本模式，让他们可以快速了解Sails项目，并大体知道如何编码;
无论他们的背景是PHP、Ruby、Java、C＃，或用node.js。无论你写的第二个应用，或者是第三个，每次创建一个新的Sails应用，你就开始一个健全的，
熟悉的样板，提升你的工作效率。在很多情况下，你甚至可以重复利用一些你的后端代码。

### 历史

> 并不是Sails发明了这个概念 —— 它已经存在多年。
  甚至之前的那句“约定优于配置”（或CoC）是通过Ruby on Rails而流行，
  它是JavaBeans规范在许多方面的核心原则，在90年代末和21世纪初，针对传统的Java Web框架普遍的极其冗长的XML配置。

## 松耦合

强迫一个万能的方法来开发的时代已经结束了。我们需要的工具，使我们能够挑选适合我们的要求的组件。
事实上，这只是简单的懒于创造东西任何其他方式。Sails的做法是松散耦合的组件形式，以便他们可以从你的应用中随意添加或删除。

Node at its core has created a “can do” culture eager to experiment and make things work。
Sails拥抱这种态度，并尽力为他们的工作提供工具。
在Sails中的自动化的水平直接关系到你使用Node的花费的时间。
Sails有足够的灵活性，当你有时间，它让你探索和创造，当你时间紧迫，它也提供了自动化。

Sails完成这种松耦合使用plain-old require，没有特殊手法。
other than the time to craft components that can be part of the whole but don’t need to be present
in order for the whole to work。
例如，控制器，模型和配置文件只是Node模块。
Sails使用了一些约定，以辅助开发。
Sails可以推断出Controllers文件夹下的UserController.js是一个用户控制器
另一个涉及例子策略(policies)：策略让你的一些代码在控制器上执行，或者指定的控制器的action。
很酷的部分是，与controller/action连接策略的配置文件是分开的。
这意味着你可以写一堆不同的策略，它们在Sails应用之间可以方便使用。
你随后可以决定要它们应用到哪个controller/action。

Sails核心由20个不同的```hook```组成：修改服务器运行时(server runtime)，添加中间件，绑定路由监听器，或以其他方式在框架上添加附加的功能。
这让你可以覆盖或禁用Sails每一个组件和配置参数。这些hook在Sails启动时加载。
你甚至可以让你的hook本身具备一次性配置的能力。这实际上是hook和服务之间的主要区别之一。

松耦合的另一个例子是配置文件。需要为你的项目提供一些配置吗？没问题。
在config文件夹中创建一个使用module.exports模式的文件，所有sails全局对象都在该模块中访问到。

Sails的几乎每一个组件可以被省略，改写，或扩展。例如，
Sails拥有一批工具称为蓝图(blueprints)。这些蓝图使项目真正容易启动，路由和CRUD操作更。
但是，假设你要使用的读取，更新和删除这些操作，需要在创建action时细心一点。
没问题，只要创建的action并且不影响其他CRUD操作。
你的自定义action为blueprint action的一部分。它就是这么简单。

## 安装
通过命令行安装最新的稳定发布版

```bash
sudo npm -g install sails
```
> 在Windows上（或者Mac的Homebrew）不需要加sudo

## 创建新的Sails项目

```bash
sails new testProject && $_
```

然后启动服务：

```bash
sails lift
```

启动后可通过http://localhost:1337/ 访问

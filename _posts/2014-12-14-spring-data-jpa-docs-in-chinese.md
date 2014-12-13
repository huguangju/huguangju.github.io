---
layout: post
title: Spring Data JPA中文文档
description: "Spring Data JPA中文文档"
category: [blog]
tags : [java, spring data jpa, 翻译]
duoshuo: true
---

> 本文翻译自[Spring Data JPA - Reference Documentation](http://docs.spring.io/spring-data/jpa/docs/1.5.0.RC1/reference/html/index.html)<br/>
> by [Carson](http://www.jediego.com)

##目录

+ 前言
+ 项目信息
+ 第一部分. 参考文档
  + 1.使用Spring Data Respositories
    + 1.1.核心概念
    + 1.2.Query方法
      + 1.2.1.定义respository接口
        + 微调respository定义
      + 1.2.2.定义查询方法
        + Query查询策略
        + Query创建
        + Query表达式
        + Query参数处理
		<!-- more -->
      + 1.2.3.创建Repository实例
        + XML配置
        + JavaConfig
        + 独立使用
    + 1.3. 自定义Spring Data respositories实现
      + 1.3.1. 对某个repositories添加自定义行为
      + 1.3.2. 对所有repositories添加自定义行为
    + 1.4.Spring Data扩展
      + 1.4.1. Web支持
        + 基本的web支持
        + 对Pageables的多媒体支持
      + 1.4.2. Repository populators
      + 1.4.3. 其它web支持
        + Spring MVC领域类web绑定
        + Web分页
  + 2.JPA Respositories
    + 2.1.介绍
      + 2.1.1. Spring 命名空间
      + 2.1.2. 基于注解的配置
    + 2.2.持久化实体
      + 2.2.1. 保存实体
    + 2.3.Query方法
      + 2.3.1 Query查询策略
      + 2.3.2 Query创建
      + 2.3.3 用JPA NamedQueries
      + 2.3.4 用@Query
      + 2.3.5 用命名参数
      + 2.3.6 用SpEL表达式
      + 2.3.7 修改查询
      + 2.3.8 应用查询提示
    + 2.4.规范
    + 2.5.事务
      + 2.5.1 事务查询方法
    + 2.6.锁
    + 2.7.审计
      + 2.7.1. 基础
        + 基于注解的审计元数据
        + 基于接口的审计元数据
        + AuditorAware
      + 2.7.2. 通用审计 配置
    + 2.8.其它
      + 2.8.1. 合并持久化单元
      + 2.8.2. 类路径扫描@Entity类和JPA映射文件
      + 2.8.3. CDI 集成
+ 第二部分. 附录
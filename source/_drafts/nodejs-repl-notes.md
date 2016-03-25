---
title: nodejs REPL 笔记
tags:
  - nodejs
date: 2016-03-25 11:57:30
---


**Read-Eval-Print-Loop (REPL)**: 交互式运行环境

```js
// 进入REPL模式
$ node
// 输入.help可查看帮助选项（所有选项皆以.开头）
```

**NODE_NO_READLINE=1**

使用环境变量 `NODE_NO_READLINE=1` 打开 node，可以进入高级编辑模式，会开启 REPL 模式，并允许使用 rlwrap。

> alias node="env NODE_NO_READLINE=1 rlwrap node"

## 持久化历史

默认地，REPL会保存REPL session历史记录到用户目录下的 `.node_repl_history` 文件下。
设置环境变量 `NODE_REPL_HISTORY=""` 会禁用这个行为。

## REPL特性

- `ctrl + D` 和 `.exit` 类似: 退出
- `ctrl + C` 和 `.break` 类似: 按两次退出
- 支持`Tab`自动补全 (全局或局部变量)
- 可输入多行表达式
- 核心模块在访问时会即时加载到环境中 (如：访问`fs`就会`required` `fs`模块到`global.fs`变量上)
- 特殊变量 `_`(下划线)保存了上次表达式的结果
- REPL支持在全局域里访问任何变量。将变量赋值个和REPLServer关联的上下文对象，可以显示地将变量暴露给 REPL
  ```js
  const repl = require('repl');
  var msg = 'message';
  repl.start('> ').context.m = msg;
  ```
  则
  ```js
  > m // 输出'message'
  ```
- 自定义Object显示 (用对象的 `inspect()`函数)

## REPLServer类

> 继承自 `Readline` 接口

## Tips

### REPL环境内部使用eval函数来评估表达式的执行结果

例如：
```js
> foo='bar'; // 返回'bar'
> var foo='bar'; // 返回undefined
```
> 以上表达式相当于分别是 `console.log(eval("foo='bar'"));` 和 `console.log(eval("var foo='bar'"));`
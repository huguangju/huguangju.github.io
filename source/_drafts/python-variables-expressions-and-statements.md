---
title: Python 变量、表达式和语句
tags:
- Python
---


### 类型

```python
type('Hello World') # <type 'str'>
type(1)             # <type 'int'>
type(1.1)           # <type 'float'>
type('1')           # <type 'str'>
```
> 在Python中 **0开头的数字** 表示八进制；**0b开头的数字**表示二进制 ；**0x开头的数字**表示十六进制

### 变量

```python
message = 'Hello World' #
gloabl COUNT = 7        # 全局变量
```

### 运算符

```python
5 ** 2 # 25; ** 在python中用于乘方操作，其余运算符于其它编程语言无异
```

```python
59 / 60   # 0
59 / 60.0 # 0.8333333333333334; 任意一个值为浮点数则值为浮点数
```
> Python使用**舍去式除法**, 当两个数都为整数时结果也为整数，会舍去小数部分。
注：在Python3中这个除法的结果是浮点数。要用**//**操作符来明确表示舍去式除法

### 字符串操作

```python
'hello' * 3 # 'hellohellohello'; 操作符 * 用于字符串时，表示重复操作
```

### 注释

```python
# 这是单行注释
'''
这是多行注释
'''
```

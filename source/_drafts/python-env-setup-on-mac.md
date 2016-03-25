---
title: Mac上搭建Python开发环境
tags:
- python
---

## 安装python

`brew install python`


## 更改pypi国内镜像源

**PyPI (the Python Package Index)**:

### 临时使用

  `pip install -i http://mirrors.aliyun.com/pypi/simple/ some-package`

### 设为默认

修改 `~/.pip/pip.conf` (没有就创建一个), 修改index-url至aliyun，例如

```
[global]
trusted-host = mirrors.aliyun.com
index-url = http://mirrors.aliyun.com/pypi/simple/
```

+ 镜像列表
  - 阿里云：http://mirrors.aliyun.com/pypi/simple/
  - 豆瓣：http://pypi.douban.com/simple/
  - 教育网：https://pypi.tuna.tsinghua.edu.cn/simple/
  - 中国科学技术大学： http://pypi.mirrors.ustc.edu.cn/simple/

### 参考

- http://topmanopensource.iteye.com/blog/2004853
- https://linzhen.net/change-pypi-mirrors-under-mac/
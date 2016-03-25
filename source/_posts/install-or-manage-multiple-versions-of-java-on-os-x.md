---
title: 在OS X系统上为Java安装和维护多个版本JDK
tags:
 - java
categories:
 - java
date: 2016-03-25 11:55:19
---


在不同java项目之间来回切换，可能会遇到java版本不一致而导致报错，目前存在Jdk1.6、7、8新旧版交替的情况，这就需要有快捷的方式来切换JDK。

```java
Exception in thread "main" java.lang.UnsupportedClassVersionError:
org/apache/maven/wrapper/MavenWrapperMain :
Unsupported major.minor version 51.0
```
<!-- more -->

各java版本与之对应的主版本号：
```
J2SE 8 = 52,
J2SE 7 = 51,
J2SE 6.0 = 50,
J2SE 5.0 = 49,
JDK 1.4 = 48,
JDK 1.3 = 47,
JDK 1.2 = 46,
JDK 1.1 = 45
```

JDK安装步骤略过。[传送](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

查看java 1.7 Home目录：`/usr/libexec/java_home -v 1.7`

```
/System/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk1.7.0_75.jdk/Contents/Home
/Library/Java/JavaVirtualMachines/jdk1.8.0_60.jdk/Contents/Home
```

其中1.6.0.jdk是系统自带的。

## 方式一：bash

打开~/.bash_profile文件，追加以下内容：

```bash
# Mac默认自带了一个jdk6版本
export JAVA_6_HOME=`/usr/libexec/java_home -v 1.6`
# 设置 JDK 7
export JAVA_7_HOME=`/usr/libexec/java_home -v 1.7`
# 设置 JDK 8
export JAVA_8_HOME=`/usr/libexec/java_home -v 1.8`

# 默认JDK 6
export JAVA_HOME=$JAVA_6_HOME

# alias命令动态切换JDK版本
alias jdk6="export JAVA_HOME=$JAVA_6_HOME"
alias jdk7="export JAVA_HOME=$JAVA_7_HOME"
alias jdk8="export JAVA_HOME=$JAVA_8_HOME"
```

然后执行 `source ~/.bash_profile` 使配置生效，避免每次都要执行source，可在`~/.zshrc`中追加一行：
```
# automatically sourced .bash_profile
. ~/.bash_profile
```

现在只需要在终端执行 `jdk8` 就可使用 `java -version` 查看到已切换版本成功。


## 方式二：jenv

### 手动安装

[jenv github](https://github.com/gcuisinier/jenv)

1. 检出项目到 `~/.jenv`

`git clone https://github.com/gcuisinier/jenv.git ~/.jenv`

2. 添加 `~/.jenv/bin` 到 `$PATH` 以便可以在命令行访问 `jenv`

```bash
echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc

set PATH $HOME/.jenv/bin $PATH
```

3. 用 `jenv init` 使脚本生效和具有自动完成

```bash
echo 'eval "$(jenv init -)"' >> ~/.zshrc
```

4. 重启shell使path设置生效。使用方式如下

```bash
exec $SHELL -l
```

5. 配置JVM路径 (注：以你的JDK实际安装路径为准)

```bash
jenv add /Library/Java/JavaVirtualMachines/jdk1.7.0_75.jdk/Contents/Home
```

依次添加各个版本JDK，然后执行 `jenv versions` 可查看已受jenv管理的jdk

6. 配置使用哪个JDK (全局、当前目录或者当前shell实例)

```bash
# set global
jenv global 1.7
# current directory
# jenv local 1.7
# current shell session
# jenv shell  1.7
```

查看当前使用的jdk版本：`java -version`

7. 配置JVM选项 (与上边类似，有全局、当前目录或者当前shell实例的应用范围)

```bash
jenv global-options "-Xmx512m"
```

查看当前配置项：`jenv info java`

### 用 `brew cask` 安装 (推荐)

```bash
brew tap caskroom/cask  // 添加 Github 上的 caskroom/cask 库
brew install brew-cask  // 安装 brew-cask
brew install jenv
```
安装成功，输出信息如下

```bash
==> Downloading https://github.com/gcuisinier/jenv/archive/0.4.4.tar.gz
==> Downloading from https://codeload.github.com/gcuisinier/jenv/tar.gz/0.4.4
######################################################################## 100.0%
==> Caveats
To use Homebrew's directories rather than ~/.jenv add to your profile:
  export JENV_ROOT=/usr/local/var/jenv

To enable shims and autocompletion add to your profile:
  if which jenv > /dev/null; then eval "$(jenv init -)"; fi
==> Summary
🍺  /usr/local/Cellar/jenv/0.4.4: 76 files, 55.8K, built in 11 seconds
```

在 `~/.zshrc` 中追加路径及初始化jenv

```bash
export JENV_ROOT=/usr/local/Cellar/jenv/0.4.4
if which jenv > /dev/null; then eval "$(jenv init -)"; fi
```

接下来添加jdk到jenv的方式跟上边一样

参考：
> http://chessman-126-com.iteye.com/blog/2162466
> http://stackoverflow.com/questions/26252591/mac-os-x-and-multiple-java-versions
> http://www.jayway.com/2014/01/15/how-to-switch-jdk-version-on-mac-os-x-maverick/
> http://javahabit.com/2015/03/30/install-or-manage-multiple-versions-of-java-on-os-x/



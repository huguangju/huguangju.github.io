---
title: 图片渐进加载占位
tags:
- 图片优化
categories:
- 优化
---

最近我浏览 Medium 时看到了一个不错的图片加载效果：首先加载一张模糊地小图，然后再过渡成大图。我想研究一下它是怎么实现的。
{% img /images/2016-3-15-14.gif %}

<!-- more -->

> 图片来源：https://medium.com/@cwodtke/the-myths-of-ux-design-product-design-whatever-they-call-it-this-week-ef37a39cac6b#.9efhxcqu5

## Medium的实现

图片加载过程如下：

1. **在显示图片的地方生成一个div**。Medium使用了一个带有`padding-bottom`的`<div/>`，并设置其值为百分比。
Medium uses a `<div/>` with a padding-bottom set to a percentage, which corresponds to the aspect ratio of the image. Thus, they prevent reflows while the images are loaded since everything is rendered in its final position. This has also been referred to as intrinsic placeholders.
2. **加载缩略图**。At the moment, they seem to be requesting small JPEG thumbnails with a very low quality (e.g. 20%). The markup for this small image is returned in the initial HTML as an `<img/>`, so the browser starts fetching them right away.
3. 一旦图片加载完成，**它会被画在`<convas/>`中**。Then, the image data is taken and passed through a custom `blur()` function You can see it, a bit scrambled, in the `main-base.bundle` JS file. This function is similar, though not identical, to StackBlur’s blur function. At the same time, the main image is requested.
4. 大图加载完成后会显示出来，同时`canvas`会被隐藏。

得益于CSS动画，这个转变过程会很流畅。

### HTML结构

展示图片的HTML结构如下：

```html
<figure>
  <div>
    <div/> <!-- 这个div保持宽高比，以免占位图所在的地方坍塌 -->
    <div>
      <img/> <!-- this is a tiny image with a resolution of e.g. ~27x17 and low quality -->
      <canvas/> <!-- takes the above image and applies a blur filter -->
      <img/> <!-- the large image to be displayed -->
      <noscript/> <!-- fallback for no JS -->
    </div>
  </div>
</figure>
```

这是一个具体的例子：

```html
<figure name="3195" id="3195" class="graf--figure graf--layoutCroppedHeightPreview graf--first">
  <div class="aspectRatioPlaceholder is-locked">
    <div class="aspectRatioPlaceholder-fill" style="padding-bottom: 30%;"></div>
    <div class="progressiveMedia js-progressiveMedia graf-image is-canvasLoaded is-imageLoaded" data-image-id="1*jD71n-JSj1pw9XmC9yUU7g.png" data-width="2339" data-height="1427" data-scroll="native">
      <img src="https://cdn-images-1.medium.com/freeze/fit/t/60/18/1*jD71n-JSj1pw9XmC9yUU7g.png?q=20" crossorigin="anonymous" class="progressiveMedia-thumbnail js-progressiveMedia-thumbnail">
      <canvas class="progressiveMedia-canvas js-progressiveMedia-canvas" width="75" height="22"></canvas>
      <img class="progressiveMedia-image js-progressiveMedia-image" data-src="https://cdn-images-1.medium.com/fit/t/1600/480/1*jD71n-JSj1pw9XmC9yUU7g.png" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*jD71n-JSj1pw9XmC9yUU7g.png">
      <noscript class="js-progressiveMedia-inner">&lt;img class="progressiveMedia-noscript js-progressiveMedia-inner" src="https://cdn-images-1.medium.com/fit/t/1600/480/1*jD71n-JSj1pw9XmC9yUU7g.png"&gt;</noscript>
    </div>
  </div>
</figure>
```

## 用CSS的Blur来模拟这个效果

<p data-height="430" data-theme-id="0" data-slug-hash="yYjPER" data-default-tab="result" data-user="jmperez" class="codepen">See the Pen <a href="http://codepen.io/jmperez/pen/yYjPER/">Reproducing Medium loading image effect</a> by José Manuel Pérez (<a href="http://codepen.io/jmperez">@jmperez</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

## 值得这么做吗

对，这是重点。

## 变体

### 行内图片数据

### 模糊效果

### 其它改善占位图的方式：Google图片搜索

### 更高级的方式：Fackbook的 200字节技术

### LQIP: 低质量图像占位符(Low Quality Image Placeholders)

## 总结

> 原文: https://jmperezperez.com/medium-image-progressive-loading-placeholder/



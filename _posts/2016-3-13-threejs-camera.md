---
layout: post
title: 摄像头原理【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,threejs摄像头原理
description: 解析threejs透视实现原理，用参数来进行直接的演示
tags: [threejs, web]
---
之前提过threejs主要由**舞台**，**摄像头**和**演员**组成。**舞台**并没有特别需要讲解的地方，基本上引入three.js就是完成舞台搭建了。（当然three.js可以根据实际情况进行压缩，这里涉及比较后面的内容，暂时不提）

这次讲的就是摄像头透视原理。

首先在现实世界中，透视是个什么样的存在？

![透视图](/img/2016-3-13-threejs-camera/e1.png)

学过绘画的同学应该比较熟悉，我们要在一张纸（平面）上绘制出立体效果，那么就要对远近的物体进行大小的缩放，这就是透视的原理了。

那么形成这种透视的摄像头是什么样子呢？

![透视图](/img/2016-3-13-threejs-camera/e2.png)

图里人的位置就代表摄像头。

了解这一点后，我们来看看，threejs里的透视长什么样？

threejs有两种摄像头。

### 透视镜头

![透视镜头](/img/2016-3-13-threejs-camera/e3.png)

对应的参数也不同，<a href="http://threejs.org/docs/index.html#Reference/Cameras/PerspectiveCamera" target="_blank">透视镜头</a>

`PerspectiveCamera( fov, aspect, near, far )`

`fov`表示视锥的垂直角度，单位是deg，以侧面图表示如下

![透视镜头](/img/2016-3-13-threejs-camera/e5.png)

`aspect`则是视锥的长宽比

![透视镜头](/img/2016-3-13-threejs-camera/e6.png)

`near`和`far`是视锥的近点及远点

![透视镜头](/img/2016-3-13-threejs-camera/e7.png)

除了上面4个预设参数外，`PerspectiveCamera`还有个可调参数`zoom`，控制画面显示大小。简单理解成把画面进行缩放就行。

接着`PerspectiveCamera`还有不同的方法：

**`·setLens ( focalLength, frameSize )`**

鱼眼系统，因为地球是圆的，所以我们看到的东西除了线性透视外有时候还会有一定弧度，这个方法就是用来产生弧度效果，具体可参照这篇文章，有对应的算法……  
<a href="http://www.bobatkins.com/photography/technical/field_of_view.html" target="_blank">鱼眼效果</a>

![鱼眼效果](/img/2016-3-13-threejs-camera/e8.jpg)

**`.setViewOffset ( fullWidth, fullHeight, x, y, width, height )`**

裁切镜头，就是把摄像头里得到的画面切成N份。

`fullWidth, fullHeight` 为被切分的镜头总长宽

`x, y, width, height` 为所得到的切分镜头的起点及长宽

**`.updateProjectionMatrix ()`**

镜头投影矩阵更新函数，一般放在render里，因为每次镜头产生变化后需要执行。

**`.clone ()`**

复制镜头对象

**`.toJSON ()`**

将镜头里的数据以json格式输出。

### 另一种是正投镜头

`OrthographicCamera( left, right, top, bottom, near, far )`

![正投镜头](/img/2016-3-13-threejs-camera/e4.png)

正投的参数比较简单，看图就行了，分别代表正方体的长宽高，而且正投镜头只有`.updateProjectionMatrix ()`, `.clone ()`, `.toJSON ()` 3种方法。

至于这两种镜头官网有个示例，我稍微改了下，用来让大家可以更直观的了解里面的参数(xyz用来调整镜头朝向)。

<a href="/example/2016-3-13-threejs-camera/camera.html" target="_blank" class="demo">透视镜头与正投镜头参数调整</a>

![透视镜头与正投镜头](/img/2016-3-13-threejs-camera/e9.png)


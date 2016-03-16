---
layout: post
title: 摄像头原理【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,threejs摄像头原理
description: 解析threejs透视实现原理，用参数来进行直接的演示
tags: [threejs,web前端]
---
*一大段碎碎念，可跳过*

刚看了疯狂动物城Zootopia，因为我一直对迪士尼动画有很高的好感度，所以没啥好说的，直接打满分了。

不过在搜了一些影评后发现很多都会有一个“这是一部超越了动画的动画”，大概意思就是动画的深度本不能够达到这么深，呐，这又何尝不是一个偏见呢。虽然真人电影比动画在票房上的确有压倒性优势。

因为最近Zootopia风头正劲，所以这里也不进行点评了，若干个月或年之后我大概会把Zootopia的感悟写在【另一个次元的人生】吧。

这里只提一个场景，就是兔茱迪破获失踪案后，被要求上台演讲，演讲内容并不好，但是在下台的时候她问绵羊副市长“我说的怎么样？”，副市长抱着她说“说的太棒了，你是我的骄傲”。当时我以为那和茱迪第一次从警校毕业，副市长抱住她说“你是我们的骄傲”一样，一句普通的夸奖。然而在故事结束后才发现这是多么讽刺的一句话。更讽刺的是，副市长两次都是出于真心说出这句话。

看完电影后虽然觉得故事很棒，但是总觉得那个场景似曾相识，现在才想起来，狮子王里，刀疤安慰辛巴时让人感觉也是如此的真诚。很多时候动漫游戏并不只是动漫游戏，你能看到的东西取决于你自己本身思想的高度。

——————————

那个场景大概没什么人有印象，我总是会去在意奇怪的地方……

啊，技术文前面写这么多私人的东西，这篇到时候转内网，前面这段会删……

有同学表示我之前自己吐槽自己的文章风格显得我的文章很low，应该以严肃的态度来写一篇技术文章，这样才能显示出专业度。我觉得很有道理，但是这前面不自觉的就插了这么一大段……

**下面是正文。**

——————————

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

对应的参数也不同，[透视镜头](http://threejs.org/docs/index.html#Reference/Cameras/PerspectiveCamera)

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

鱼眼系统，因为地球是圆的，所以我们看到的东西除了线性透视外有时候还会有一定弧度，这个方法就是用来产生弧度效果，具体可参照这篇文章，有对应的算法……[鱼眼效果](http://www.bobatkins.com/photography/technical/field_of_view.html)

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

[透视镜头与正投镜头参数调整](/example/2016-3-13-threejs-camera/camera.html)

![透视镜头与正投镜头](/img/2016-3-13-threejs-camera/e9.png)


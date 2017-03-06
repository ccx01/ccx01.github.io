---
layout: post
title: 动作游戏中的碰撞系统
keywords: Sign,Sign的博客,形而上学,游戏,碰撞系统
description:动作游戏中的碰撞系统
tags: [animation]
---
对于熟悉动作游戏系统制作的玩家来说，这个应该算是常识了，不过还是写一下吧。

毕竟，可能有些同学还没看过。

在动作游戏里，角色的『图』与实际产生的效果是不完全对等的。

例如这样一个动作：

<img src="http://upload-images.jianshu.io/upload_images/3575020-78639ac9c8bb1e85.gif?imageMogr2/auto-orient/strip">

怎么才能判断，这个角色的『脚』踢中对手呢？

很显然，靠图像识别是不现实的，就算技术上能检测出图中哪一部分是『脚』，但实际应用如果真这么做就会显得很蠢。

所以这种情况下，我们就需要用个『东西』来代替，并告知游戏系统，这个『东西』是『脚』。

在传统的动作格斗类游戏里，这个『东西』是一个矩形方块：



<img src="http://upload-images.jianshu.io/upload_images/3575020-2a4f315950d73203.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

图中，红色方块即用来代替『脚』的东西。

而蓝色方块代替的是角色的『身体』。

身体正下方的『十字标记』是角色的『位置』。

完整的分解图：

<img src="http://upload-images.jianshu.io/upload_images/3575020-bb6c2ad3ef63f1ce.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-595abaf66b9a40ba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-a1cd157aef3cbfe5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-2df6de88bd4c0d0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-2a4f315950d73203.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-5279295b626b2cc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-e41b1aefae0f5c0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-1f9c3e489b49839c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-56c41e0cc498dba0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-0d9569008d0bccdc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-5ffb99e81a334004.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-299e2f4ea76b01ac.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-83db40066eaa3139.gif?imageMogr2/auto-orient/strip">

也就是说，如果把角色的动画去掉的话，实际上，动作格斗游戏就是几个不停消失出现的方块的游戏。

而这些方块就是组成动作游戏碰撞系统的关键了。

首先，多个方块之间的碰撞计算是很简单的。

比如要判断这两个方块是否碰撞，那么只要分别判断红色方块4个点是否有一个在蓝色方块之内即可。

<img src="http://upload-images.jianshu.io/upload_images/3575020-a0a9cf5a0f03398e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-39a118fe7355e291.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

判断点a是否在蓝色方框内，那么只要知道a的横轴是否大于x小于y，a的纵轴是否大于z小于x即可。

这样的只算只需要重复4次，就可以判定当前的红色方框是否与蓝色方块碰撞。

在代码上，这种也叫做aabb碰撞盒检测，应该是性能最高的一种碰撞检测。

了解了碰撞原理后，我们就可以继续往下看：

<img src="http://upload-images.jianshu.io/upload_images/3575020-2f9cf393e293e46f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

角色出现打击效果了。

什么时候出现打击效果？很明显，当角色A『攻击部位』的方框碰撞到角色B『身体部位』的方框时，就说明A打中B了。

由此，我们回到前面的图，可以看出，方框主要可以分为两种：



<img src="http://upload-images.jianshu.io/upload_images/3575020-2a4f315950d73203.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

<『打击框』与『受击框』。

而这些框随着角色动画，不断的移动甚至隐藏自己的位置。

当碰撞成立时，在碰撞的位置上加入打击特效，如此就会在视觉上呈现动作格斗的效果了。

当然，除了这两个框以外，还有一个重要的框体，就是角色身下的那个十字。

这个是角色的『定位框』，也是角色的正确位置所在，它主要用来判断角色之间的实际距离，最经常被用于『投技』。

<img src="http://upload-images.jianshu.io/upload_images/3575020-888ce90173c00d25.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

触发投技是需要固定距离的，而『投技框』不同与『打击框』与『受击框』。『定位框』是个固定大小以及固定于角色基本位置的框体。

<img src="http://upload-images.jianshu.io/upload_images/3575020-1df6e80f045a49fd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

当两个角色的『定位框』发生碰撞，即可触发投技。（有些动作游戏没有投技，比如超级玛丽，魂斗罗，就不需要这一项）

当然，除了这3种标准的框体，很多时候我们还可以自己定义一些奇奇怪怪的框体。

比如我在格斗节奏中就增加了一种『攻击范围』的框体，当『攻击范围』与『受击框』产生碰撞时，带有『攻击范围』的本体就会触发一些行为，或者改变角色技能，这个主要是我用来写AI的，不过感觉有点没太必要……

最后，由于格斗游戏中，框体众多，为了更贴近动画呈现的效果，一个角色可能会有多个『打击框』与『受击框』。

<img src="http://upload-images.jianshu.io/upload_images/3575020-563bca4ff55a0f3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-156486f2663cddcd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


<img src="http://upload-images.jianshu.io/upload_images/3575020-e34d17e95a19225e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

而同一个角色的不同框体是没有必要产生碰撞的，因此，动作游戏需要有『碰撞池』，专门用来放置框体。

比如『碰撞池1』里放角色A的『攻击框』，『碰撞池2』里放角色A的『受击框』，『碰撞池3』里放角色B的『攻击框』，『碰撞池4』里放角色B的『受击框』。

那么在角色碰撞计算时，只要计算『碰撞池1』与『碰撞池4』的碰撞情况，以及『碰撞池2』与『碰撞池3』的碰撞情况就足够了。

这样可以减少很多计算量。

很多3d游戏的碰撞系统其实和这个原理相识，只是框体变成了立方体。

————

实际上在代码中，有很多更为精致的碰撞方式，比如圆形碰撞，方向矩形碰撞，物理引擎之类的。

根据实际情况选择合适的碰撞代码即可。

————

<img src="http://upload-images.jianshu.io/upload_images/3575020-2d82cc2a3c484933?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


这里记录了另一个宇宙的故事
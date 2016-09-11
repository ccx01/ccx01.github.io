---
layout: post
title: ElfA制作流程(2)【cocos creator横版游戏制作记录】
keywords: Sign,Sign的博客,技术文章,web开发,cocos creator,横版游戏,web game
description: 最近忽然想通了，为什么不借助游戏引擎制作呢？
tags: [animation, web]
---
基于cocos creator制作一款横版游戏。

**这不是教程**

--------

## Day 3

被连续技搞的头疼。

首先是查了很多方法，都没有很好的处理帧动画中的位移偏差，在动画里直接加position动画，值居然是绝对值。

最后只好手动补足偏差。如图。

![位移偏差补值](/img/2016-9-5-cocos-ElfA2/e1.png)

想弃cocos坑直接直接写的念头一闪而过。

动作勉强是能用了，然后有连续技的问题，不过连续技不是cocos的锅。

逻辑还是没理清。

## Day 4

想要把操作独立出来，但是忽然发现读不到对象内部操作，一开始打算把内部方法暴露出来，想了下，还是把虚拟手柄塞到角色库里了。

![虚拟手柄](/img/2016-9-5-cocos-ElfA2/e2.png)

今天处理连续技，但是之前的框架搭建的比较随便，所以要重新构架一下。

首先就是要考虑清楚角色动作与命令之间的关系。

比如Day2的时候遇到的


>animation的play方法多次调用会有问题，所以在按键触发事件时，要限制play的调用次数：

当时是对动画播放进行判定。

>```javascript
>action: function (ani) {
>    if(!this.anim.currentClip || this.anim.currentClip.name != ani) {
>        this.anim.play(ani);
>    }
>},
>```

但是如果角色有自己的动作池时就不会有这问题：

```javascript
statePool: function(s) {
    if(this.state == s) return;
    // 状态池
    this.state = s;
    switch(s) {
        case "combo0":
            this.anim.play("athena-c0");
        break;
        case "combo1":
            this.anim.play("athena-c1");
        break;
        case "combo2":
            this.anim.play("athena-c2");
        break;
        case "combo3":
            this.anim.play("athena-c3");
        break;
        case "stand":
            this.anim.play("athena-stand");
        break;
        case "walk":
            this.anim.play("athena-walk");
        break;
    }
},
```

有了动作池以后就对应的需要命令序列

```javascript
combo: function () {
    // 指令输入
    this.skillPool.push("combo" + this.comboNext);

    this.comboNext++;
    if(this.comboNext > 4) {
        this.comboNext = 0;
    }
    this.skill();
},
```

不过连续技还是没有完成，连续技逻辑还是需要理一理。

虚拟摇杆的部分，因为摇杆是按照触摸位置来查找的，但是试了以后发现里面的每个节点位置position属性很蛋疼，内部节点是相对父节点的位置，但是坐标系原点又在左下角，而且如果不勾选fit height 和fit weight的时候，会因为浏览器的一些顶部条产生些许偏差。

![无fit](/img/2016-9-5-cocos-ElfA2/e3.png)

勾选后无法填充满画面，不过如果对触摸位置有要求的话，感觉导出的时候还是钩上比较好。

![fit](/img/2016-9-5-cocos-ElfA2/e4.png)

![效果](/img/2016-9-5-cocos-ElfA2/e5.gif)

今天有种没有得到最优解的感觉。

就像一个普通流页面内部元素却全用`position:absolute`布局的感觉。

虽然也能用，但是就是有点不爽。

## Day 5

命令池 指令收集后何时触发是个问题

目前链式触发，但是结束点不好判断

```javascript
this.anim.on('finished',  function() {
    self.command();
}, this);
```

walk锁

combo锁

用了多个锁，现在一团乱麻

实现了，但是感觉还是有点乱

多点触控改为单点，规避一些坑

位置偏移适应脚本修正

![fit](/img/2016-9-5-cocos-ElfA2/e6.png)

```javascript
moveOffset: function(offset) {
    // 动画偏移修正
    if(this.node.scaleX < 0) {
        offset *= -1;
    }
    this.node.x += offset;
},
```

一整天都在优化连续技

动画事件绑定有点不太靠谱，经常出现动画结束函数比动画开始函数早一步执行，所以最后决定还是把锁加在帧事件上

![fit](/img/2016-9-5-cocos-ElfA2/e6.png)

```javascript
skillStart: function () {
    this.comboLock = true;
    this.canMove = false;
},

skillEnd: function () {
    this.canMove = true;
    this.comboLock = false;
    this.skill();
},
```

找zIndex找半天……

人物层级根据y轴来判断

```javascript
update: function (dt) {
    this.node.x += this.xSpeed * dt;
    this.node.y += this.ySpeed * dt;
    this.node.zIndex = 1000 - this.node.y;
},
```

![效果](/img/2016-9-5-cocos-ElfA2/e7.gif)


<a href="http://ccx01.github.io/post/cocos-ElfA1">ElfA制作流程(1)</a>

<a href="http://ccx01.github.io/post/cocos-ElfA2">ElfA制作流程(2)</a>

<a href="http://ccx01.github.io/post/cocos-ElfA3">ElfA制作流程(3)</a>

<a href="http://ccx01.github.io/post/cocos-ElfA4">ElfA制作流程(4)</a>
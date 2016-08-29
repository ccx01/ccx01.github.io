---
layout: post
title: ElfA制作流程(1)【cocos creator横版游戏制作记录】
keywords: Sign,Sign的博客,技术文章,web开发,cocos creator,横版游戏,web game
description: 最近忽然想通了，为什么不借助游戏引擎制作呢？
tags: [animation, web]
---
基于cocos creator制作一款横版游戏。

--------

这里是废话。

因为一直致力于写游戏，最近忽然想通了，为什么不借助游戏引擎制作呢？

之前一直不接受游戏引擎，原因主要是个人想法有点狭隘，因为我太在意别人的看法，我不希望听到，“哦，你这游戏是用引擎做的吧”，而且说话的口气好像，“切，要是有游戏引擎我也能做，这么简单的东西。”

这种话就像一个只见了你几面的人，对你匆匆下的定论：“你这个人就是这种性格……”

说实话，我以前会觉得这种话很令人添堵，毕竟没有自信。

虽然现在也没有，但是想通以后，就“呵呵，who TM care”。

不过忽然要借助游戏引擎，起因是下载了个unity3d做的ios游戏，优化的实在太糟糕，于是脑袋里忽然就闪过个念头，我去试试用unity3d做个游戏看看吧。

但是动手做之前忽然有点纠结，我是要做个app游戏还是web游戏？我个人还是倾向于后者。原因解释过很多遍，我希望我的玩家打开链接就能玩到我的游戏。

查了下，发现cocos出了个开发工具cocos creator，于是顺便下下来。

装完unity和cocos，结果unity账号连不上，而且要在web上玩unity游戏，貌似还需要玩家先装个unity播放器……所以先从cocos开始了。

废话结束。

--------

首先提一下cocos creator。

它有不少优点，其中最重要的一点就是，*canvas内部结构可视化*！

![所见即所得](/img/2016-8-29-cocos-ElfA1/e1.jpg)

我们平时在做canvas游戏时，最蛋疼的莫过于在画布上摸索位置，当然，一般来说我们都会自己写个可视化函数，但也比较麻烦。

其他的优点比如集成了不少库，自适应，依赖关系之类的，这些可以在官网上查到。

不过在我的观念里，所谓游戏引擎就是指针对单一类型的游戏的制作工具，比如RPG制作大师，mugen，魔兽地图编辑器等等。

因此相对于其他的*传统的游戏引擎*来说，cocos creator与其说是游戏引擎，不如说更像flash一类的开发工具，它没有特定的游戏类型的限制，这导致它的开发难度，或者说学习成本相对来说偏高。这感觉就像用RPG制作大师制作一个格斗游戏或用mugen做一个魔兽战争一样。

不过对于有canvas游戏开发经历的人来说，里面的机制大同小异，所以偏开发工具无特定游戏类型某种程度上反而是件好事。

另外，除此之外cocos2d-js-min.js居然有1m多……比box2d.js，three.js大多了………………

这属于不能接受的范畴吗？

并不是，所以开始cocos creator制作游戏的流程吧。

## Day 1

确定要做横版过关游戏，要先确定主角。

所以很自然的到mugen里找角色。

![mugen](/img/2016-8-29-cocos-ElfA1/e2.png)

人物包推荐去<a href="http://mugenchara.blog.shinobi.jp/" target="_blank">一日一mugen</a>找。

角色的所有图片用Fighter Factory导出，这个不记得是否包含在mugen内了。

![角色图片](/img/2016-8-29-cocos-ElfA1/e3.png)

每个角色的图片大概在500-1500张之间，因为格斗游戏的人物动作比横版游戏多，而且细致，所以制作横版游戏时，很多图片不是必要的，筛选一下，然后用TexturePacker拼成cocos需要的格式。

![plist](/img/2016-8-29-cocos-ElfA1/e4.png)

![plist](/img/2016-8-29-cocos-ElfA1/e5.png)

最后主角还是决定用雅典娜，因为格斗游戏和横版游戏角色移动方式略有不同，而找了几个，只有雅典娜有这样的走路角度(跑步的话倒是大部分角色都有)……

![雅典娜](/img/2016-8-29-cocos-ElfA1/e6.png)

准备工作差不多就是这样了，接着就是游戏名。

但实在想不出什么名字，因为电脑是暗夜精灵，所以就临时起名ELfA，A是Athena的A……

接着照着教程，把所有需要的文件放进cocos creator。

第一天就这样了。

## Day 2

在示例代码的基础上进行初步阅读以及修改，首先，添加人物动画。照着教程做，有些机制要搞清楚，比如animation和sprite节点，其他倒是没什么。

![雅典娜](/img/2016-8-29-cocos-ElfA1/e7.png)

![雅典娜](/img/2016-8-29-cocos-ElfA1/e8.gif)

依样画葫芦的添加雅典娜的其他动画。

接着修改示例代码，绑定键盘事件，这样雅典娜就能在画布上移动了。

```javascript
//athena.js
action: function (ani) {
    if(!this.anim.currentClip || this.anim.currentClip.name != ani) {
        this.anim.play(ani);
    }
},

setInputControl: function () {
    var self = this;
    // 添加键盘事件监听
    cc.eventManager.addListener({
        event: cc.EventListener.KEYBOARD,
        onKeyPressed: function(keyCode, event) {
            switch(keyCode) {
                case cc.KEY.j:
                    self.xSpeed = 0;
                    self.ySpeed = 0;
                    self.action("athena-atk");
                    break;
            }
            switch(keyCode) {
                case cc.KEY.a:
                    self.xSpeed = - self.xMaxSpeed;
                    self.action("athena-walk");
                    if(self.node.scaleX > 0) {
                        self.node.scaleX *= -1;
                    }
                    break;
                case cc.KEY.d:
                    self.xSpeed = self.xMaxSpeed;
                    self.action("athena-walk");
                    if(self.node.scaleX < 0) {
                        self.node.scaleX *= -1;
                    }
                    break;
                case cc.KEY.w:
                    self.ySpeed = self.yMaxSpeed;
                    self.action("athena-walk");
                    break;
                case cc.KEY.s:
                    self.ySpeed = - self.yMaxSpeed;
                    self.action("athena-walk");
                    break;
            }
        },
        onKeyReleased: function(keyCode, event) {
            switch(keyCode) {
                case cc.KEY.a:
                case cc.KEY.d:
                    self.xSpeed = 0;
                    break;
                case cc.KEY.w:
                case cc.KEY.s:
                    self.ySpeed = 0;
                    break;
            }
            if(self.xSpeed === 0 && self.ySpeed === 0) {
                self.action("athena-stand");
            }
        }
    }, self.node);
},
```

代码不是很难，稍微看一下就能明白，至少比操作面板上的各种参数更好理解……

不过为了找里面的API真的是蛋疼。

animation的play方法多次调用会有问题，所以在按键触发事件时，要限制play的调用次数：

```javascript
action: function (ani) {
    if(!this.anim.currentClip || this.anim.currentClip.name != ani) {
        this.anim.play(ani);
    }
},
```

最后再在全局控制的game.js里加上雅典娜的移动限制。

cocos里的节点是“暴露”式存在，可以直接调用。

暂时没找到画布实际大小的属性值，加上画布会自适应，所以暂时固定了范围值。

```javascript
//game.js
update: function (dt) {
    this.athena.x = Math.min(Math.max(this.athena.x, -400), 400);
    this.athena.y = Math.min(Math.max(this.athena.y, -170), -30);
},
```

![雅典娜](/img/2016-8-29-cocos-ElfA1/e9.gif)

这个gif有点糟- -，虽然360k但是还是掉了好多帧。

第二天结束，对了，这个系列不是教程。

这个算是个人制作的记录吧，实时的。（这个记录写完的瞬间忽然觉得，与其每天抽几乎一个小时写这个，不如把这些时间拿去写游戏……这东西到底有没有意义，因为心态不稳，所以这个系列可能随时太监，不过游戏肯定会写完的。）

对于抱着学习web游戏制作的心理偶然来到这里的同学，如果这些能看的懂的话，说明你其实已经独立制作过web游戏了，大概是来找素材或灵感的吧。那么有兴趣可以一起交流下。至于觉得没有讲到重点的同学，可以要失望了，也许以后我大概会出个详细的制作教程。
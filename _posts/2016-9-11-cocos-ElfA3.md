---
layout: post
title: ElfA制作流程(3)【cocos creator横版游戏制作记录】
keywords: Sign,Sign的博客,技术文章,web开发,cocos creator,横版游戏,web game
description: 最近忽然想通了，为什么不借助游戏引擎制作呢？
tags: [animation, web]
---
基于cocos creator制作一款横版游戏。

**这不是教程**

--------

## Day 6

原来动画剪辑可以不需要偏移修正…………

<a href="http://www.cocos.com/docs/creator/asset-workflow/trim.html" target="_blank">图像资源的自动剪裁</a>

size mode选择raw

不过这样一开始fighter factory的导出方法就不行了，不能直接导出全部图片，而是导出gif，然后取出gif中所有图片

直接导出全图片所得到的结果

![自动裁切](/img/2016-9-5-cocos-ElfA2/e7.png)

从gif导出的结果

![统一大小](/img/2016-9-5-cocos-ElfA2/e8.png)

![raw](/img/2016-9-5-cocos-ElfA2/e9.gif)

不过直接导出，依然可能存在很多问题，有时候还是要自己手动去调整动画帧，简直体力活。

另外，其他角色的分解图要保持一样大小和位置………………

忽然明白为啥动画会有个专门的动画师专业………………

调试的时候发现，攻击与移动同时判定的时候总觉得有“指令冲突”，好像是ui组件的按键问题，感觉有点像300ms的click事件……但是pc端也是一样。

查了下发现是touchend没有进一步判断……

用touch的位置来模拟虚拟手柄是不是错误的方式……

--------

开始添加碰撞检测

总觉得cocos的手册含糊的地方还是很多

试了下，碰撞组件只是依附在节点上的东西，而动画剪辑并不是一个节点。

需要要新建个节点专门挂载碰撞组件。

然而为了配合动画产生和注销碰撞框，函数还是要挂载在帧动画上。这点真的和flash很像。不过cocos creator没有一个帧动画函数的预览，这就有点麻烦了。

碰撞框大小没有直接的修改函数，查了一晚上，最后把组件捞出来这样实现：

```javascript
this.playerHit.getComponents(cc.Collider)[0].size.width = w;
this.playerHit.getComponents(cc.Collider)[0].size.height = h;
```

心好累……

碰撞框已经实现，现在需要打击伤害，不过伤害属性一直无法外部引用，找不到位置……

只好这样：

```javascript
this.playerHit.setPosition(x, y);
this.playerHit.getComponents(cc.Collider)[0].size.width = w;
this.playerHit.getComponents(cc.Collider)[0].size.height = h;
this.playerHit.getComponents("playerHit")[0].damage = 100;
```

都是强行实现……

接下来就是打击框与受击框的区域了

横板过关比格斗游戏多个z轴，因此碰撞时需要检测一下z轴范围。

格斗游戏的打击框与受击框

![格斗游戏框](/img/2016-9-5-cocos-ElfA2/e10.png)

横板过关的打击框与受击框

![横版过关游戏框](/img/2016-9-5-cocos-ElfA2/e11.png)

因为横版没有下段攻击，所以受击框可以集中在上半身，这样也可以避免z轴判定放的太宽导致攻击范围的判定显得很奇怪。

然后，糟糕的事来了，我们要找碰撞框的父节点，然后提取zIndex……

node里面找component，简直蛋疼

受击框直接绑定在节点上，打击框则靠预制资源生成

```javascript
onCollisionEnter: function (other, self) {
    if(Math.abs(other.node.zIndex - self.node.parent.zIndex) < 20) {
        // z轴判定，超出范围不进行碰撞
        var face = - Math.abs(self.node.parent.scaleX) / self.node.parent.scaleX;
        other.node.getComponent("enemy").hurt(face);
    }
},
```

总觉得这又是一个糟糕的实现方法。

效果：

![横版过关游戏框](/img/2016-9-5-cocos-ElfA2/e12.gif)

倒地的图在图片帧处理时又没摆好位置，plist不知道怎么直接修改，又要重新拼图，眼泪掉下来……

## Day 7

倒地的图位置偏移暂时不修改了，话说，自从把这个项目和工作联动后，从项目组那拿到来了游戏内部的角色分解图，有动画师的支援省了不少事……

当年我甚至连动作分解图原画都亲自画……比如那个T-night，所以进度慢到发指。

哎……

不过，项目组内的资源目前属于不能公开阶段，而且看这文章的同学大概有很大一部分没办法得到专业动画师的支援，所以，我们继续来讨论独立游戏人的素养吧。

今天加特技duang……

当然，特效还是从角色包里扒，这里稍微提一句，这样做出来的游戏属于同人爱好作品……呐，大家懂的。

打击框因为设置为碰撞后注销，因此效果资源不能挂在碰撞框上。

从物理角度来说，打击效果应该属于受击者，但是从资源来说，打击效果需要跟着打击者。

所以，新建个打击效果预制资源，然后挂在player节点下。

为了打击效果又新建了两个效果位置属性，这样应该是不对的，不过做到现在，其实我还没完全弄清楚里面私有属性到底有几种类型。

```javascript
hitEffectPrefabShow: function () {
    // 打击效果,效果位置在建立打击框时设置
    this.hitEffect = cc.instantiate(this.hitEffectPrefab);
    this.node.addChild(this.hitEffect);
    this.hitEffect.setPosition(this.ex, this.ey);
},
```

加入打击效果后

![打击效果](/img/2016-9-11-cocos-ElfA3/e1.gif)

打击特效有了，受击反馈需要对应调整，否则打击感比较糟。

角色要添加倒地起身动作，倒地需要有无敌状态。

之前很多命名感觉都不太合适……

新增加无敌状态

```javascript
invincible: function(bool) {
    // 禁用受击碰撞框，无敌状态
    this.node.getComponents(cc.Collider)[0].enabled = bool;
},
```

![倒地](/img/2016-9-11-cocos-ElfA3/e2.gif)

倒地起身贴图，以及代码优化等最后再做。

先写个简单的AI，让敌人角色跟随玩家移动，所以敌人的脚本需要引入player的node。

这里有个地方要注意，预制资源是无法引用到节点的，所以需要在js创建预制资源的时候，把整个游戏对象传进资源里。

```javascript
var newEnemy = cc.instantiate(this.enemyPrefab);
    newEnemy.getComponent('enemy').game = this;
```

暂时用随机数控制一下频率，不知道有没有其他更好的方法控制AI

```javascript
AI: function () {
    if(Math.random() < 0.95) return;
    if(Math.random() > 0.8) {
        var xs, ys;
        if(this.game.athena.x > this.node.x) {
            xs = this.xMaxSpeed;
        } else {
            xs = - this.xMaxSpeed;
        }
        if(this.game.athena.y > this.node.y) {
            ys = this.yMaxSpeed;
        } else {
            ys = - this.yMaxSpeed;
        }
        this.move(xs, ys);
    } else {
        this.move(0, 0);
    }
},
```

攻击方式没有独立出来，果然还是不行，明天看来又要回到连续技的调试中。

音效倒是可以先加，配合打击效果一起出现

```javascript
hitEffectPrefabShow: function () {
    // 打击效果,效果位置在建立打击框时设置
    this.hitEffect = cc.instantiate(this.hitEffectPrefab);
    this.node.addChild(this.hitEffect);
    this.hitEffect.setPosition(this.ex, this.ey);
    
    cc.audioEngine.playEffect(this.hitAudio, false);
},
```

另外给角色加了影子……但是影子叠在人物层上方了，而且之后有跳起或者其他会导致影子变形的地方，可能影子还要特殊处理，所以目前也就不管了。

![影子](/img/2016-9-11-cocos-ElfA3/e3.png)

虽然今天还有1-2个小时，不过有点不想再写了，就到这吧。

真是怠惰啊……
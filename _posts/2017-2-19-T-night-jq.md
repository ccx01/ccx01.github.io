---
layout: post
title: 月千之夜
keywords: Sign,Sign的博客,形而上学,游戏
description: 这个是2012年做的一个游戏。
tags: [acg]
---
这个是2012年做的一个PC端html5游戏。

<iframe frameborder="0" width="100%" height="auto" src="https://v.qq.com/iframe/player.html?vid=h037654ivcy&tiny=0&auto=0" allowfullscreen></iframe>

========

主角的控制方式：

左键移动，

按Q键角色会朝鼠标方向冲刺，冲刺位移距离大，但是冲刺过程不是无敌的，且伤害一般。

按W键将会朝鼠标方向发个子弹，子弹击中敌人会使敌人出现暂时无法动弹的状态，伤害很高。

按E键会边旋转边移动，类似LOL里盖伦的E，同样过程不是无敌的，伤害一般。

BOSS的行为模式：

BOSS只有头部会攻击敌人（近距离咬），其他部位会把人弹开。

BOSS只有身上发光的地方受到攻击才会受到伤害，其他区域被攻击也不会少血。

BOSS身上的光随着血量变化，导致BOSS的AI也发生一些变化。

========

当时做这个的时候，pc端的浏览器性能其实还不是很好，很多条件限制，手机端的web更是一塌糊涂。

那时候有稍微了解一些js游戏引擎，但是没有找到合适的，要么帮助不大，要么就是要重新改写引擎核心代码。所以后来想了下，就自己动手写个游戏引擎了。

当时居然能写出一个游戏引擎，我自己都觉得惊讶。不过在那时候的心气很高，总是要和大神去比较，偏偏这个世界的大神莫名其妙的多，得到的结论就是自己做的就跟渣一样，<b>真正的游戏制作者都是怪物</b>。而且游戏做完第一章后，不知道给谁玩，渐渐的没有了后续。

<i>*我眼中的游戏制作者是指某种人群，不是特指从事游戏行业的人。游戏也是指某种事物，比如一段音乐，一个滑板，甚至一本书都可以是游戏。</i>

照例吐槽完毕，开始正文。

月千之夜的名字是当时结合这个游戏的设定起的，不过很大一部分原因也是因为当时一直在循环《月千一夜》这首歌。

这个游戏的主线是时空跳跃，关键词就是“跃迁”，正好和“月千”同音。

说到游戏的故事主线，这个故事的世界观非常庞大，为了这个故事，我画过对应的漫画，做过视频，也出过游戏。在众多半成品的平行世界的作品中，这个世界是我最想展示出来的，但是这次暂时就先不介绍这个故事了。

这次主要介绍游戏的制作。

代码部分忘的差不多了，所以基本上就讲讲框架搭建。

js结构

<img src="http://upload-images.jianshu.io/upload_images/3575020-4e5d98b88a3f25ff?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-4e5d98b88a3f25ff?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


chapter

<img src="http://upload-images.jianshu.io/upload_images/3575020-410fd8fc4ebb79c8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-410fd8fc4ebb79c8?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


characters

<img src="http://upload-images.jianshu.io/upload_images/3575020-c7d323614c9b3fea?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-c7d323614c9b3fea?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


jquery是一开始引用的，后来发现其实有点多余……

那时候的想法是一种“插卡式游戏引擎”，类似于在FC游戏机上插上卡带进行游戏的概念，在代码上就是引用不同的关卡js，关卡js就会引用当前关卡所需要的角色js。

一年以后，我才知道这种逻辑在js代码上叫模块化- -。

而除了关卡和角色，游戏还需要控制管理器，图片管理器，以及音频管理器。

然后除了这些外，游戏引擎制作的过程中会产生很多碎片化的功能片段，大部分片段可以重复使用，于是增加一个“收破烂”的js。最后还要在对应的js上留一些后门用来调试。

所有的这些，全是靠对游戏制作的理解来完成的，只是恰巧用了js来实现。我觉得这就是游戏人，所以也一直以游戏人自居，而不是一个程序员。

<b>一个游戏人可以不知道当前他所使用的工具详细的名称，但是他可以凭借对游戏的理解很好的使用这个工具。</b>

接下来是游戏的美术部分，这些部分都是亲手画的。那时候也是莫名的固执……

<img src="http://upload-images.jianshu.io/upload_images/3575020-d1bad9288f859feb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-d1bad9288f859feb?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


头像 + 按键（分组挺乱的）

<img src="http://upload-images.jianshu.io/upload_images/3575020-e7136c90c6e7d0d9?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e7136c90c6e7d0d9?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


这个世界设定是双主角的，第二关开始就换一个角色了，可惜没有继续制作下去。

角色分解图

主角

<img src="http://upload-images.jianshu.io/upload_images/3575020-948b6aa337c0c0c3?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-948b6aa337c0c0c3?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-a89c5874d7a6a852?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-a89c5874d7a6a852?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


boss

<img src="http://upload-images.jianshu.io/upload_images/3575020-2906e86aa91e30fe?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-2906e86aa91e30fe?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


npc

<img src="http://upload-images.jianshu.io/upload_images/3575020-21746b1cae8d28c8?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-21746b1cae8d28c8?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


击中效果

<img src="http://upload-images.jianshu.io/upload_images/3575020-db34d1704e493eac?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-db34d1704e493eac?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


地图（后来随手加的）

<img src="http://upload-images.jianshu.io/upload_images/3575020-d818b8a2a12263ea?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-d818b8a2a12263ea?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


ui

<img src="http://upload-images.jianshu.io/upload_images/3575020-4390888e1c3b3080?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-4390888e1c3b3080?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


剩下一些ui是用css画的，这个游戏属于canvas+dom结合的类型。

过场漫画

<img src="http://upload-images.jianshu.io/upload_images/3575020-306776599e1b0dce?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-306776599e1b0dce?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-6c7ecf6ba41905cb?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-6c7ecf6ba41905cb?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-1c7136a6f9d2672c?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-1c7136a6f9d2672c?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-072e952a869f150a?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-072e952a869f150a?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-b0d74215aff72b47?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-b0d74215aff72b47?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-8cc88141d70b1a64?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-8cc88141d70b1a64?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


<img src="http://upload-images.jianshu.io/upload_images/3575020-bc61672a1360da1d?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-bc61672a1360da1d?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


胜利场景

<img src="http://upload-images.jianshu.io/upload_images/3575020-e4510bb8b94f6891?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e4510bb8b94f6891?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


失败场景

<img src="http://upload-images.jianshu.io/upload_images/3575020-0e60430dbdca41d3?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-0e60430dbdca41d3?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


这个游戏的地址是 http://ccx01.com/game/T-night-jq/ 不过只能在pc上玩，因为我没有兼容移动端。

话说这游戏超难的，我当年完全没注意到……因为当年我过关率是80%左右（有窍门）。最近重新玩，过关率只剩下20%了……（就算知道窍门……）

2014年的时候，有针对移动端重写的版本，下次再介绍吧。

<img src="http://upload-images.jianshu.io/upload_images/3575020-2d82cc2a3c484933?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-2d82cc2a3c484933?imageMogr2/auto-orient/strip" style="cursor: zoom-in;">


这里记录了另一个宇宙的故事
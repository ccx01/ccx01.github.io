---
layout: post
title: 创建场景【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,threejs介绍
description: 简单的介绍了threejs的第一课创建场景
tags: [threejs, web]
---

最近沉迷口琴中，总觉得口琴比电脑游戏好玩多了……

如果你对一件事感兴趣，不管有多困难，你都会有一万种方法去完成……为了吹口琴，我甚至开始读五线谱……以后大概也会写一些口琴相关的代码吧。

这也不是第一次对一件事这么狂热，上一次貌似就是学习制作游戏的时候……不过已经是多年前……

这种热情要是点在某些技能点上就好了……

——————————

下面是正文

——————————

原本打算直接开始细讲threejs里的camera，不过之前一篇也说过了，深浅这种东西还是要拿捏一下，所以还是从0开始讲。

threejs官网有个场景创建的示例[Creating a scene](http://threejs.org/docs/index.html#Manual/Introduction/Creating_a_scene)

最后制作按照官方流程制作完成是这样的一个场景，转动的绿色立方体：

![转动的绿色立方体](/img/2016-2-21-whatstheejs/e1.png)

动图截失败了，可以点链接直接过去看，要加载个400+k的文件，悠着点……[效果](/example/2016-2-21-whatstheejs/3d.html)

现在我们看一下这400k+的threejs在这个旋转的立方体上做的什么。（实际上400k+中大部分代码什么事都没做……）

首先，引入了threejs后我们需要把它的场景实例化：

```javascript
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
```

`THREE.Scene()`是必须最优先实例化的对象，它是整个threejs里其他对象存在的前提。如果threejs里的每个对象都是一个演员，那么`THREE.Scene()`就是他们的舞台，所以想要让演员开始排练，先要搭建好舞台。scene的实例化没有什么参数，直接`var scene = new THREE.Scene();`就行了。

搭建好舞台后接下来就是摄像机了。我们所看见的并不是直接的现场，而是透过相机的现场直播，所以如果舞台太大演员太多，而相机只能拍到一部分演员的话，那我们能在屏幕上看到的只有相机拍摄到的部分。

相机一共有3种：`CubeCamera` `OrthographicCamera` `PerspectiveCamera`，在示例中用到的是`PerspectiveCamera`，`PerspectiveCamera( fov, aspect, near, far )` 里面的参数相对scene来说比较复杂。这个在下一篇文章会细讲，这篇只是最简单的入门介绍。

接下来是渲染器renderer，继续用舞台表演来解释的话，渲染器就相当于舞蹈团，选择哪个渲染器就只能使用对应渲染器的对象，你请了对应舞蹈团自然就是让该舞蹈团的成员登到舞台上表演。

render从代码角度分的话有好几种，具体就不列了，因为实际应用中主要还是分为`CSS3D` `CANVAS` `WEBGL`3种。示例中使用的是WEBGL渲染器`THREE.WebGLRenderer()`，这个也是threejs主要处理的渲染器。但实际上CSS3D是最简单的一个渲染器，上手任意，而且效果很赞，比如[3d元素周期表](http://threejs.org/examples/#css3d_periodictable)就是CSS3D渲染器制作，如果提取出CSS3D渲染器进行压缩，整个库就只有70+k，所以在threejs的学习中，建议先从css3d渲染器入手。

不过示例既然是以WEBGL渲染器来制作，那么继续讲解一下WEBGL渲染器吧。

`THREE.WebGLRenderer()`的参数很多，比camera还要复杂，不过这里我们可以直接留空。

接着`renderer.setSize`用来设置渲染器大小，这里要注意，摄像机的参数也包含了摄像区域的大小，但是这两个大小是不同的。渲染器的大小相当于演员的活动范围，而摄像机的大小决定了观众看到的区域。（Q:如果演员跑出渲染器范围会怎么样？A:这种情况用渲染器感觉更好解释，就是不渲染了，但是非要以演员为例进行解释的话，就是演员离场了，可能上厕所去了，那你管他干毛-____-|||）

`renderer.domElement`就是渲染器的dom对象实例了，记得把它放进`<body>`中间就行了，没其他特别需要注意的。

终于轮到演员登场了。

```javascript
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
```

可是因为这个是WEBGL渲染器，所以我一句话带过吧。-_____-|||

geometry是对象的框架，相当于演员的身材（骨架）。threejs里有几十种geometry可供选择……

material是对象的材质，相当于演员的服装（皮肤）。这个少一点，大概5个左右。

最后记得geometry和material要对应起来，用`Mesh( geometry, material )`就行了，相当于把对应的衣服穿在对应的演员身上，不过衣服是可选项，也就是说演员棵体表演是可以被允许的……

对了衣服有3种穿法，3种mesh。

`scene.add(cube);`把穿好衣服的演员放进舞台中，基本上就完成了，不过演员要动起来的话，就需要让时间运转起来。

```javascript
var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
};
```

raq后舞台上的演员就开始表演了，这里唯一要了解的就是`renderer.render(scene, camera);`调用后会实时的刷新摄像头与场景。`renderer.render`是renderer的方法，与前面的raq循环的render没关系。

至此示例里旋转的立方体就出现了。

——————————

这篇文章基本上只是把threejs第一个demo介绍一遍。之后几篇会对各个api进入深入的讲解。撒花，散场~

——————————

学习过程中，多一个版本的教程就是多一个方法，比较不同人的教程也是学习中一个很重要的过程。


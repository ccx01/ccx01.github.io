---
layout: post
title: css3d模块(2)【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,css3d模块
description: 解析threejs css3d模块
tags: [threejs, web]
---
距离<a href="http://ccx01.github.io/post/threejs-css3d" target="_blank">上一篇</a>有点时间了，上一篇主要介绍了css3d的基础实现。这篇讲threejs里的轨迹球`TrackballControls.js`。

首先，轨迹球的实现：

```javascript
controls = new THREE.TrackballControls( camera, renderer.domElement );
controls.addEventListener( 'change', render );
```

轨迹球库的作用将对各种事件进行处理。

```javascript
this.domElement.addEventListener( 'contextmenu', contextmenu, false );
this.domElement.addEventListener( 'mousedown', mousedown, false );
this.domElement.addEventListener( 'mousewheel', mousewheel, false );
this.domElement.addEventListener( 'MozMousePixelScroll', mousewheel, false ); // firefox

this.domElement.addEventListener( 'touchstart', touchstart, false );
this.domElement.addEventListener( 'touchend', touchend, false );
this.domElement.addEventListener( 'touchmove', touchmove, false );

window.addEventListener( 'keydown', keydown, false );
window.addEventListener( 'keyup', keyup, false );
```

TrackballControls里包含6种状态：

```javascript
var STATE = { 
    NONE: - 1,  //无状态
    ROTATE: 0,  //鼠标旋转
    ZOOM: 1,    //缩放
    PAN: 2,     //鼠标位移
    TOUCH_ROTATE: 3,    //触控旋转
    TOUCH_ZOOM_PAN: 4   //触控位移缩放
}
```

这6种状态分别有3个API

```javascript
    controls.noRotate = false;  //禁用旋转
    controls.noZoom = false;    //禁用缩放
    controls.noPan = false;     //禁用位移
```

值为true时就会禁用对应的操作。

而这3个操作又对应有3个速度值，API

```javascript
    controls.rotateSpeed = 1.0;  //旋转速度
    controls.zoomSpeed = 1.2;    //缩放速度
    controls.panSpeed = 0.3;     //位移速度
```

接下来两个值是

```javascript
    controls.staticMoving = false;          //无惯性模式
    controls.dynamicDampingFactor = 0.2;    //动态阻尼因子
```

惯性模式下，鼠标进行操作（位移，旋转，缩放）停止后，元素会继续“滑”一段时间。当`staticMoving为true时则在鼠标停止操作后，立即停止元素动作。（触控同理）

阻尼因子`dynamicDampingFactor`则相当于滑行过程的阻力，范围在0-1之间。

当`dynamicDampingFactor`设置为0时，元素将会一直运动，不会停下来。而当`dynamicDampingFactor`为1时，状态与`staticMoving`设为true相似。另外，大于1会出错……

实际操作一下就会了解了<a href="http://ccx01.github.io/example/2016-4-25-threejs-css3d/e1.html" target="_blank">惯性示例</a>。

```javascript
    controls.minDistance = 0;           //最小深度
    controls.maxDistance = Infinity;    //最大深度
```

这两个API限制缩放的深度。

```javascript
    controls.keys = [ 65 /*A*/, 83 /*S*/, 68 /*D*/ ];
```

锁死当前操作状态，不过仅限于按键按下时触发。

<a href="http://ccx01.github.io/example/2016-4-25-threejs-css3d/e1.html" target="_blank">同一个示例</a>，比如按住A键，此时不管鼠标左键还是右键进行拖动都是旋转，S键则是缩放，D是位移。键位可改。

只是介绍API的话也不是很难，之前还打算详细介绍轨迹球实现的算法，现在想想简直蛋疼。

下一篇讲核心CSS3DRenderer。
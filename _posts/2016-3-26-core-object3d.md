---
layout: post
title: Object3d【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
基类Object3D的API

## 图像对象的基类Object3D。

### 构造函数

**Object3D()**

该构造函数没有参数。

### 属性

**.id**

只读 – 当前对象实例的id。

**.uuid**

当前对象实例的UUID。它是自动分配的，因此不可编辑。

**.name**

对象名字（可重复）。

**.parent**

对象在图形场景中的父类对象。

**.children**

对象在图形场景中的子类对象数组。

**.position**

对象局部位置。

**.rotation**

对象局部旋转（欧拉角），单位为弧度。

**.scale**

对象局部缩放。

**.up**

向上方向。默认值为THREE.Vector3( 0, 1, 0 )。

**.matrix**

局部矩阵转换。

**.quaternion**

对象局部四元数旋转。

**.visible**

值为true时对对象进行渲染。

默认为true。

**.castShadow**

被渲染成阴影贴图。

默认为false。

**.receiveShadow**

贴图以烘培阴影效果呈现。

默认为false。

**.frustumCulled**

当值为true时，对象只有在摄像头视锥内才进行绘制。否则对象总是被绘制，即使它是不可见的。

默认为true。

**.matrixAutoUpdate**

当值为true时，它每一帧都会计算位置矩阵（旋转或四元）和缩放，并重新计算matrixWorld属性。

默认为true。

**.matrixWorldNeedsUpdate**

当值为true时，它会在当前帧里计算一遍matrixWorld，然后值归为false。

默认为false。

**.rotationAutoUpdate**

当值为true时，它每一帧都会计算旋转矩阵。

默认为true。

**.userData**

用于存储Object3d自定义数据的对象。它无法被函数直接引用，必须先克隆。

**.matrixWorld**

对象的全局转换。如果Object3d没有父类对象，那么它等同于局部转换。

### 方法

EventDispatcher方法可作用于这个类。

**.applyMatrix ( matrix)**

matrix - 矩阵

更新位置，旋转和缩放矩阵。

**.translateX ( distance )**

distance - 距离

将对象沿着x轴移动。

**.translateY ( distance )**

distance - 距离

将对象沿着y轴移动。

**.translateZ ( distance )**

distance - 距离

将对象沿着z轴移动。

**.localToWorld ( vector )**

vector - 局部向量

将局部向量转换为全局向量。

**.worldToLocal ( vector )**

vector - 全局向量

将全局向量转换为局部向量。

**.lookAt ( vector )**

vector - 全局指向向量

将对象全局指向目标点。

**.add ( object, ... )**

object - 对象

为当前对象添加子对象。可以添加任意个子对象。

**.remove ( object, ... )**

object - 对象

为当前对象移除子对象。可以移除任意个子对象。

**.traverse ( callback )**

callback - 第一个参数为object3D对象的函数

执行当前对象及其所有子类对象上的回调。

**.traverseVisible ( callback )**

callback - 第一个参数为object3D对象的函数

与traverse作用一样，但是只有可见对象的回调函数会被执行。可见对象的后裔对象回调函数也不执行。

**.traverseAncestors ( callback )**

callback - 第一个参数为object3D对象的函数

执行当前对象以及所有祖先对象的回调函数。

**.updateMatrix ()**

更新局部转换。

**.updateMatrixWorld ( force )**

更新对象及其子对象的全局转换。

**.clone ()**

复制对象及其后裔对象。

**.getObjectByName (name)**

name -- 匹配子类对象Object3d.name属性的字符串。

检索对象的子类对象，然后返回第一个匹配到的name。

**.getObjectById (id)**

id -- 对象id

检索对象的子类对象，然后返回第一个匹配到的id。

**.translateOnAxis (axis, distance)**

axis -- 对象空间内的规范化矢量

distance -- 位移距离

在对象空间内沿着轴移动。轴将被当作已规范化。

**.rotateOnAxis (axis, angle)**

axis -- 对象空间内的规范化矢量

angle -- 弧度角

在对象空间内沿着轴转动。轴将被当作已规范化。

**.raycast (raycaster, intersects)**

得到当前对象放射线的抽象类。需要Msh,Line,Points类对光线进行投射来实现这个方法。


### 源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/core/Object3D.js</a>

#### 附：

<a href="https://en.wikipedia.org/wiki/Universally_unique_identifier" target="_blank">UUID</a>

<a href="https://en.wikipedia.org/wiki/Euler_angles" target="_blank">欧拉角</a>


涉及到的api

<a href="http://ccx01.github.io/post/math-matrix4" target="_blank">四维矩阵Matrix4</a>

<a href="http://ccx01.github.io/post/math-vector3" target="_blank">三维向量Vector3</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Euler" target="_blank">欧拉Euler（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Quaternion" target="_blank">四元Quaternion（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Core/EventDispatcher" target="_blank">事件调度EventDispatcher（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Core/Raycaster" target="_blank">射线Raycaster（英文地址，中文更新中）</a>


#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Core/Object3D" target="_blank">http://threejs.org/docs/index.html#Reference/Core/Object3D</a>
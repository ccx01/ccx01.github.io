---
layout: post
title: Vector4【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
四维向量

### 构造函数

**Vector4( x, y, z, w )**

x -- 向量的x值，浮点数

y -- 向量的x值，浮点数

z -- 向量的z值，浮点数

w -- 向量的w值，浮点数

### 属性

**.x**

**.y**

**.z**

**.w**

### 方法

**.set ( x, y, z, w )**

设置向量的值。

**.setX ( x )**

x -- 浮点数

设置向量x值。

**.setY ( y )**

y -- 浮点数

设置向量y值。

**.setZ ( z )**

z -- 浮点数

设置向量z值。

**.setW ( w )**

w -- 浮点数

设置向量z值。

**.copy ( v )**

复制向量v到该向量。

**.fromArray ( array, offset )**

array -- 格式为[x, y, z, w]的数组。 

offset -- 可选的数组下标。

基于数组设置向量分量，格式[x, y, z, w]。

**.add ( v )**

该向量与向量v相加。

**.addVectors ( a, b )**

设置该向量为向量a和向量b的和。

**.addScaledVector ( v, s )**

设置该向量为向量v缩放s倍。

**.sub ( v )**

该向量减去向量v。

**.subVectors ( a, b )**

设置该向量为向量a减向量b的差。

**.multiplyScalar ( s ) **

该向量缩放s倍。

**.divideScalar ( s ) **

该向量除以s。

如果s为0，则向量设为( 0, 0, 0 )。

**.negate ()**

反转向量。

**.dot ( v )**

计算该向量与向量v的数量积。

**.lengthSq ()**

计算该向量的长度平方。

**.length ()**

计算该向量的长度。

**.lengthManhattan ()**

计算向量的Manhattan长度。

<a href="http://en.wikipedia.org/wiki/Taxicab_geometry" target="_blank">http://en.wikipedia.org/wiki/Taxicab_geometry</a>

**.normalize ()**

规格化向量。通过该向量除以其长度获得单位向量。

**.setLength ( l )**

规格化向量然并使其长度为l。

**.clamp ( min, max )**

min -- 四维向量。

max -- 四维向量。

如果该向量的x，y，z，w值大于向量max的x，y，z，w值，他将会被替换成相应的值。

如果该向量的x，y，z，w值小于向量min的x，y，z，w值，他将会被替换成相应的值。

**.clampScalar ( min, max )**

min -- 向量分量的最小值，浮点数。 

max -- 向量分量的最大值，浮点数。 

如果该向量的x，y，z，w值大于max值，他将会被替换成max值。

如果该向量的x，y，z，w值小于min值，他将会被替换成min值。

**.floor ()**

向量分量向下取整（朝负无穷向）。

**.ceil ()**

向量分量向上取整（朝正无穷向）。

**.round ()**

向量分量四舍五入取整。

**.roundToZero ()**

向量分量朝0取整（正数向下，负数向上）。

**.applyMatrix4 ( m )**

m -- 四维矩阵

通过矩阵变换向量。

**.addScalar ( Float )**

s -- 浮点数

向量分量分别加上s

**.min ( v )**

v -- 四维向量

如果该向量的x,y,z,w大于向量v的x,y,z,w，这用相应的值替换对应分量值。

**.max ( v )**

v -- 四维向量

如果该向量的x,y,z,w小于向量v的x,y,z,w，这用相应的值替换对应分量值。


**.setComponent ( index, value )**

index -- 0, 1, 2, 3

value -- 浮点数

如果index为0，则将x值替换为value。

如果index为1，则将y值替换为value。

如果index为2，则将z值替换为value。

如果index为3，则将w值替换为value。

**.transformDirection ( m )**

m -- 四维矩阵

由矩阵（四维矩阵的3×3子集）变换该向量的方向，然后规格化。

**.getComponent ( index )**

index -- 0, 1, 2, 3

如果index为0，则返回x值。

如果index为1，则返回y值。

如果index为2，则返回z值。

如果index为3，则返回w值。

**.lerp ( v, alpha )**

v -- 四维向量。

alpha -- 0到1之间的浮点数。

设置该向量与向量v的线性插值，alpha为线上的百分比点。

**.lerpVectors ( v1, v2, alpha )**

v1 -- 四维向量。

v2 -- 四维向量。

alpha -- 0到1之间的浮点数。

设置该向量为向量v1和v2之间以alpha为因子的线性插值。

**.setAxisAngleFromRotationMatrix ( m )**

m -- 四维向量

通过四维矩阵m定义的旋转轴和角度设置四维向量的值。m的3x3矩阵为纯粹的选择矩阵（未缩放）。

轴的值存在向量分量(x, y, z)中，旋转角度存在分量w中。

**.setAxisAngleFromQuaternion ( q )**

q -- 四元值

通过四维四元q定义的旋转轴和角度设置四维向量的值。

轴的值存在向量分量(x, y, z)中，旋转角度存在分量w中。

**.equals ( v )**

判断改向量与向量v是否完全相等。

**.clone ()**

克隆该向量。

**.toArray ( array, offset )**

array -- 存储向量的数组，可选。 

offset -- 数组的下标，可选。

返回数组[x, y, z, w]。

###源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector4.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/math/Vector4.js</a>

#### 附：

涉及到的api

<a href="http://ccx01.github.io/post/math-matrix4" target="_blank">四维矩阵Matrix4</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Euler" target="_blank">欧拉Euler（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Quaternion" target="_blank">四元Quaternion（英文地址，中文更新中）</a>

#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Math/Vector4" target="_blank">http://threejs.org/docs/index.html#Reference/Math/Vector4</a>
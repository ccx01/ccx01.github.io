---
layout: post
title: Vector3【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
三维向量

示例

```javascript
	var a = new THREE.Vector3( 1, 0, 0 );
	var b = new THREE.Vector3( 0, 1, 0 );

	var c = new THREE.Vector3();
	c.crossVectors( a, b );
```

## 三维向量

### 构造函数

**Vector3( x, y, z )**

x -- 向量的x值，浮点数

y -- 向量的x值，浮点数

z -- 向量的z值，浮点数

三维空间上的向量

### 属性

**.x**

**.y**

**.z**

### 方法

**.set ( x, y, z )**

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

**.copy ( v )**

复制向量v到该向量。

**.fromArray ( array, offset )**

array -- 格式为[x, y, z]的数组。 

offset -- 可选的数组下标。

基于数组设置向量分量，格式[x, y, z]。

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

**.distanceTo ( v )**

计算该向量与向量v的距离。

**.distanceToSquared ( v )**

计算该向量与向量v的距离的平方。

**.setLength ( l )**

规格化向量然并使其长度为l。

**.cross ( v )**

获取该向量与向量v的向量积。

**.crossVectors ( a, b )**

使该向量等于向量a与b的向量积

**.setFromMatrixPosition ( m )**

提取矩阵position信息对向量进行偏移。

**.setFromMatrixScale ( m )**

提取矩阵scale信息对向量进行缩放。

Sets this vector extracting scale from matrix transform.

**.clamp ( min, max )**

min -- 三维向量。

max -- 三维向量。

如果该向量的x，y或z值大于向量max的x，y或z值，他将会被替换成相应的值。

如果该向量的x，y或z值小于向量min的x，y或z值，他将会被替换成相应的值。

**.clampScalar ( min, max )**

min -- 向量分量的最小值，浮点数。 

max -- 向量分量的最大值，浮点数。 

如果该向量的x，y或z值大于max值，他将会被替换成max值。

如果该向量的x，y或z值小于min值，他将会被替换成min值。

**.clampLength ( min, max ) **

min -- 向量长度最小值，浮点数。 

max -- 向量长度最大值，浮点数。 

如果该向量的长度大于max值，他将会被替换成max值。

如果该向量的长度小于min值，他将会被替换成min值。

**.floor ()**

向量分量向下取整（朝负无穷向）。

**.ceil ()**

向量分量向上取整（朝正无穷向）。

**.round ()**

向量分量四舍五入取整。

**.roundToZero ()**

向量分量朝0取整（正数向下，负数向上）。

**.applyMatrix3 ( m )**

m -- 三维矩阵

与3x3矩阵相乘。

**.applyMatrix4 ( m )**

m -- 四维矩阵

与4x4矩阵相乘。

**.projectOnPlane ( planeNormal )**

planeNormal -- 平面法向量。

将该向量投影在平面上。

**.projectOnVector ( Vector3 )**

vector -- 三维向量

将该向量投影在另一个向量上。

**.addScalar ( Float )**

s -- 浮点数

向量分量分别加上s

**.divide ( v )**

v -- 三维向量

该向量除以向量v。

**.min ( v )**

v -- 三维向量

如果该向量的x值或y值或z值大于向量v的x或y值或z值，这用相应的值替换对应分量值。

**.max ( v )**

v -- 三维向量

如果该向量的x值或y值或z值小于向量v的x或y值或z值，这用相应的值替换对应分量值。


**.setComponent ( index, value )**

index -- 0, 1 或 2

value -- 浮点数

如果index为0，则将x值替换为value。

如果index为1，则将y值替换为value。

如果index为2，则将z值替换为value。

**.transformDirection ( m )**

m -- 四维矩阵

由矩阵（四维矩阵的3×3子集）变换该向量的方向，然后规格化。

**.multiplyVectors ( a, b )**

a -- 三维向量

b -- 三维向量

设置该向量为向量a与b的乘积。

**.getComponent ( index )**

index -- 0, 1 或 2

如果index为0，则返回x值。

如果index为1，则返回y值。

如果index为2，则返回z值。

**.applyAxisAngle ( axis, angle )**

axis -- 规格化的三维向量 

angle --弧度角

根据指定的轴与角度旋转该向量。

**.lerp ( v, alpha )**

v -- 三维向量。

alpha -- 0到1之间的浮点数。

设置该向量与向量v的线性插值，alpha为线上的百分比点。

**.lerpVectors ( v1, v2, alpha )**

v1 -- 三维向量。

v2 -- 三维向量。

alpha -- 0到1之间的浮点数。

设置该向量为向量v1和v2之间以alpha为因子的线性插值。

**.angleTo ( v )**

v -- 三维向量

返回该向量与向量v的弧度角。

**.setFromMatrixColumn ( index, matrix )**

index -- 0, 1, 2, 或 3 

matrix -- 四维矩阵

设置该向量的x,y,z为矩阵对应列的值。

**.reflect ( normal )**

normal -- 反射面，三维向量

获取normal正交的向量。normal被当做单位长度。

**.multiply ( v )**

v -- 三维向量

与向量v相乘。

**.applyProjection ( m )**

m -- 投影矩阵，四维矩阵。

该向量与矩阵m相乘，然后进行投影。

**.applyEuler ( euler )**

euler -- 欧拉角

通过将欧拉角转为四元数来让欧拉角转换应用在该向量上。

**.applyQuaternion ( quaternion )**

quaternion -- 四元

将四元转换应用在该向量。

**.project ( camera )**

camera — 应用在投影上的camera对象

通过camera对该向量进行投影。

**.unproject ( camera )**

camera — 应用在投影上的camera对象

通过camera对该向量取消投影。

**.equals ( v )**

判断改向量与向量v是否完全相等。

**.clone ()**

克隆该向量。

**.toArray ( array, offset )**

array -- 存储向量的数组，可选。 

offset -- 数组的下标，可选。

返回数组[x, y, z]。

###源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js</a>

#### 附：

涉及到的api

<a href="http://ccx01.github.io/post/math-matrix4" target="_blank">四维矩阵Matrix4</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Euler" target="_blank">欧拉Euler（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Quaternion" target="_blank">四元Quaternion（英文地址，中文更新中）</a>

#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Math/Vector3" target="_blank">http://threejs.org/docs/index.html#Reference/Math/Vector3</a>
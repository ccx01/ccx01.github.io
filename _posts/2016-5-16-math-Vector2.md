---
layout: post
title: Vector2【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
二维向量

示例

```javascript
	var a = new THREE.Vector2( 0, 1 );
	var b = new THREE.Vector2( 1, 0 );

	var d = a.distanceTo( b );
```

## 二维向量

### 构造函数

**Vector2( x, y )**

x -- 向量的x值，浮点数

y -- 向量的x值，浮点数

二维空间上的向量

### 属性

**.x**

**.y**

### 方法

**.set ( x, y )**

设置向量的值。

**.setX ( x )**

x -- 浮点数

设置向量x值。

**.setY ( y )**

y -- 浮点数

设置向量y值。

**.copy ( v )**

复制向量v到该向量。

**.fromArray ( array, offset )**

array -- 长度为2的数组。 

offset -- 可选的数组下标。

设置向量x值为array[0]，y值为array[1]。

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

如果s为0，则向量设为( 0, 0 )。

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

规格化向量。

**.angle ()**

计算向量相对x轴的角度。

**.distanceTo ( v )**

计算该向量与向量v的距离。

**.distanceToSquared ( v )**

计算该向量与向量v的距离的平方。

**.setLength ( l )**

规格化向量然并使其长度为l。

**.clamp ( min, max )**

min -- 在所需范围内含有最小x，y值的向量。

max -- 在所需范围内含有最大x，y值的向量。

如果该向量的x，y值大于向量max的x，y值，他将会被替换成相应的值。

如果该向量的x，y值小于向量min的x，y值，他将会被替换成相应的值。

**.clampScalar ( min, max )**

min -- 向量分量的最小值，浮点数。 

max -- 向量分量的最大值，浮点数。 

如果该向量的x，y值大于max值，他将会被替换成max值。

如果该向量的x，y值小于min值，他将会被替换成min值。

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

**.lerp ( v, alpha )**

v -- 二维向量。

alpha -- 0到1之间的浮点数。

设置该向量与向量v的线性插值，alpha为线上的百分比点。

**.lerpVectors ( v1, v2, alpha )**

v1 -- 二维向量。

v2 -- 二维向量。

alpha -- 0到1之间的浮点数。

设置该向量为向量v1和v2之间以alpha为因子的线性插值。

**.setComponent ( index, value )**

index -- 0 或 1 

value -- 浮点数

如果index为0，则将x值替换为value。

如果index为1，则将y值替换为value。

**.addScalar ( s )**

s -- 浮点数

向量x和y值分别加上s。

**.getComponent ( index )**

index -- 0 或 1

如果index为0，则返回x值。

如果index为1，则返回y值。

**.min ( v )**

v -- 二维向量

如果该向量的x值或y值大于向量v的x或y值，这用相应的值替换对应分量值。

**.max ( v )**

v -- 二维向量

如果该向量的x值或y值小于向量v的x或y值，这用相应的值替换对应分量值。

**.equals ( v )**

判断改向量与向量v是否完全相等。

**.clone ()**

克隆该向量。

**.toArray ( array, offset )**

array -- 存储向量的数组，可选。 

offset -- 数组的下标，可选。

返回数组[x, y]。

###源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/math/Vector2.js</a>

#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Math/Vector2" target="_blank">http://threejs.org/docs/index.html#Reference/Math/Vector2</a>
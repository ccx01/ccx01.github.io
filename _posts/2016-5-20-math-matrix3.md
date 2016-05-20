---
layout: post
title: Matrix3【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
三维矩阵

## 三维矩阵

### 构造函数

**Matrix3()**

创建并初始化单位矩阵。

### 属性

**.elements**

矩阵值列表（列优先）。

### 方法

**.set ( n11, n12, n13, n21, n22, n23, n31, n32, n33 )**

通过所提供的行优先值n11..n33来设置矩阵值。

**.identity ()**

重置矩阵恒等式。

1, 0, 0

0, 1, 0

0, 0, 1

**.copy ( m )**

复制矩阵m到当前矩阵。

**.fromArray ( array )**

array -- 数组.

以列优先的方式将数组转为矩阵。

**.toArray ( array, offset ) **

array -- 存储向量的数组，可选 

offset -- 数组下标，可选

将矩阵的元素写入对应数组中。

**.multiplyScalar ( s ) **

矩阵所有值缩放s。

**.determinant ()**

计算并返回矩阵行列式。

<a href="http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm" target="_blank">http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm</a>

**.transpose () **

反转矩阵.

**.transposeIntoArray ( array )**

array -- 数组

将矩阵反转后存入数组，并返回未反转的矩阵。

**getInverse ( m, throwOnDegenerate ) **

m -- 四维矩阵

throwOnDegenerate -- Boolean值，如果为true，当矩阵为退化矩阵（不可逆）时抛出异常。

将矩阵转换为正确的矩阵m的逆矩阵。

**.clone ()**

克隆矩阵。

**.applyToVector3Array (a)**

array -- 数组 [vector1x, vector1y, vector1z, vector2x, vector2y, vector2z, ...]

矩阵与每个数组值进行相乘。

**.getNormalMatrix ( m )**

m -- 四维矩阵

将该矩阵设为所提供四维矩阵的一个平面（左上3x3区域）。平面矩阵是矩阵m的反转矩阵。

###源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/math/Matrix3.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/math/Matrix3.js</a>

#### 附：

涉及到的api

<a href="http://ccx01.github.io/post/math-vector3" target="_blank">三维向量Vector3</a>

<a href="http://ccx01.github.io/post/math-matrix4" target="_blank">四维矩阵Matrix4</a>

#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Math/Matrix3" target="_blank">http://threejs.org/docs/index.html#Reference/Math/Matrix3</a>
---
layout: post
title: Matrix4【threejs】[API]
keywords: Sign,Sign的博客,技术文章,web开发,threejs中文API
description: 将官网的api翻译为中文
tags: [api]
---
矩阵

示例

```javascript
	//简单的绕三个轴旋转
	var m = new THREE.Matrix4();
	var m1 = new THREE.Matrix4();
	var m2 = new THREE.Matrix4();
	var m3 = new THREE.Matrix4();
	var alpha = 0;
	var beta = Math.PI;
	var gamma = Math.PI/2;
	m1.makeRotationX( alpha );
	m2.makeRotationY( beta );
	m3.makeRotationZ( gamma );
	m.multiplyMatrices( m1, m2 );
	m.multiply( m3 );
```

## 四维矩阵

### 构造函数

**Matrix4()**

创建并初始化单位矩阵。

### 属性

**.elements**

矩阵值列表（列优先）。

### 方法

**.set ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 )**

通过所提供的行优先值n11..n44来设置矩阵值。

**.identity ()**

重置矩阵恒等式。

**.copy ( m )**

复制矩阵m到当前矩阵。

**.copyPosition ( m )**

复制矩阵m的平移分量到当前矩阵。

**.makeBasis ( xAxis, yAxis, zAxis )**

创建并返回由3个向量参数组成的矩阵。

**.extractBasis ( xAxis, yAxis, zAxis )**

提取并返回由3个单位向量参数组成的矩阵。

**.extractRotation ( m )**

提取矩阵m的旋转分量应用到当前矩阵。

**.lookAt ( eye, center, up, )**

构造一个以eye到center的方向为up方向的旋转矩阵。

**.multiply ( m )**

与矩阵m相乘。

**.multiplyMatrices ( a, b ) **

设置矩阵a行b列

**.multiplyToArray ( a, b, r ) **

设置矩阵a行b列，并且值存入数组r中

r可以是规则数组或TypedArray。

**.multiplyScalar ( s ) **

矩阵所有值缩放s。

**.determinant ()**

计算并返回矩阵行列式。

<a href="http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm" target="_blank">http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm</a>

**.transpose () **

反转矩阵.

**.flattenToArrayOffset ( flat, offset )**

将矩阵转为数组。

**.setPosition ( v ) **

用向量v作为矩阵的位置分量。

**.getInverse ( m ) **

将矩阵转换为m的逆矩阵。

<a href="http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm" target="_blank">http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm</a>

**.makeRotationFromEuler ( euler ) **

euler — 按顺序旋转向量, 例如, "XYZ".

按欧拉角旋转矩阵，其余矩阵计算恒等式。

默认顺序是"XYZ"。

**.makeRotationFromQuaternion ( q ) **

按四元角旋转矩阵，其余矩阵计算恒等式。

**.scale ( v ) **

矩阵的列乘以向量v。

**.compose ( translation, quaternion, scale ) **

以translation, quaternion, scale组成矩阵。

**.decompose ( translation, quaternion, scale )**

将矩阵分解为translation, quaternion, scale。

**.makeTranslation ( x, y, z ) **

平移矩阵。

**.makeRotationX ( theta ) **

theta — 弧度角

矩阵沿x轴旋转theta。

**.makeRotationY ( theta ) **

theta — 弧度角

矩阵沿y轴旋转theta。

**.makeRotationZ ( theta ) **

theta — 弧度角

矩阵沿z轴旋转theta。

**.makeRotationAxis ( axis, theta ) **

axis — 旋转轴，需要序列化。

theta — 弧度角

矩阵沿axis轴旋转theta。

<a href="http://www.gamedev.net/reference/articles/article1199.asp" target="_blank">http://www.gamedev.net/reference/articles/article1199.asp</a>

**.makeScale ( x, y, z ) **

缩放矩阵。

**.makeFrustum ( left, right, bottom, top, near, far ) **

创建视锥矩阵。

**.makePerspective ( fov, aspect, near, far ) **

创建透视投影矩阵。

**.makeOrthographic ( left, right, top, bottom, near, far ) **

创建正交投影矩阵。

**.clone ()**

克隆矩阵。

**.applyToVector3Array (a)**

array -- 数组 [vector1x, vector1y, vector1z, vector2x, vector2y, vector2z, ...]

矩阵与每个数组值进行相乘。

**.getMaxScaleOnAxis ()**

获取3个轴追到的缩放值。

###源码

<a href="https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js" target="_blank">https://github.com/mrdoob/three.js/blob/master/src/math/Matrix4.js</a>

#### 附：

涉及到的api

<a href="http://ccx01.github.io/post/math-vector3" target="_blank">三维向量Vector3</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Euler" target="_blank">欧拉Euler（英文地址，中文更新中）</a>

<a href="http://threejs.org/docs/index.html#Reference/Math/Quaternion" target="_blank">四元Quaternion（英文地址，中文更新中）</a>

#### 英文API地址:

<a href="http://threejs.org/docs/index.html#Reference/Math/Matrix4" target="_blank">http://threejs.org/docs/index.html#Reference/Math/Matrix4</a>
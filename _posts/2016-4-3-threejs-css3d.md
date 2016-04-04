---
layout: post
title: css3d模块(1)【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,css3d模块
description: 解析threejs透视实现原理，用参数来进行直接的演示
tags: [threejs, web]
---
相对来说，大家可能对3d模型渲染更感兴趣。不过我手头目前并没有可以用来讲的3d模型，而且模型渲染除了对threejs有所了解，还要有一定的webgl基础，所以难度跨幅比较大。

虽说css3d模块在3个渲染器中属于最容易理解的一个，但是难度和之前几篇相比还是以平方计算，所以分几篇来讲。

先看看这个最出名的例子，<a href="http://threejs.org/examples/#css3d_periodictable" target="_blank">3d元素周期表</a>

这个示例包括了大部分的css3d的api，实际上以此为基础进行稍微改造就能呈现不错的效果。比如<a href="http://ccx01.com/" target="_blank">我的个人站</a>。

![ccx01](/img/2016-4-3-threejs-css3d/e1.jpg)

*动图太大，就不截了，直接跳到对应链接去看吧*

好了，我们开始进入正题。

首先，要制作3d元素周期表效果，我们需要先引入4个js。

`three.min.js` 这个是threejs的主要代码，400+k。不过我们如果只用到css3d效果的话，可以对其进行模块定制压缩。我压缩了一个包含了CSS3DRenderer的css3d定制库<a href="http://ccx01.com/lv10/js/three.css3d.js" target="_blank">http://ccx01.com/lv10/js/three.css3d.js</a> 70+k。

`tween.min.js` tween库大家大概比较熟悉，负责各种过渡效果，虽然说没有也没关系，但是加一下还是比较好。

`TrackballControls.js` 轨迹球库，这个涉及几个很复杂的算法，下一篇讲。总之就是对页面全局进行操作的库。

`CSS3DRenderer.js` 这就是css3d渲染器的核心库了，可是居然没有集成在three.js里-___-

引用完js后，我们需要先定义几个全局变量。（当然，是否全局看情况而定，在当前作用域内全局即可）

```javascript
var camera, scene, renderer;
var controls;
```

`camera`,`scene`,`renderer` 和第一篇<a href="http://ccx01.github.io/post/creating-a-scene" target="_blank">创建场景【threejs】</a>里提到的作用一致。

而`controls`则是操作动作的封装。这个并非css3d独有，只是第一篇的时候没引入这个库。

```javascript
var w = window.innerWidth;
var h = window.innerHeight;

camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 3000;

scene = new THREE.Scene();

renderer = new THREE.CSS3DRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute';
document.getElementById( 'container' ).appendChild( renderer.domElement );
```

`camera`的定义可以查看<a href="http://ccx01.github.io/post/threejs-camera" target="_blank">摄像头原理【threejs】</a>。

`renderer`与第一篇不同的地方在于实现方式，它把id为container的元素当作容器来，相当于第一篇的画布canvas。

接下来就是这篇的重点了，css3d渲染器元素的实例化。

首先定义你的dom元素，已有或重新创建都行。例如

```javascript
var element = document.createElement( 'div' );
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
```

或

```html
<div class="element"></div>
<script>
var element = document.querySelector(".element");
</script>
```
不过如果要调用已有dom，记得克隆节点。

接着将element转换成threejs css3d对象

```javascript
var object = new THREE.CSS3DObject( element );
```

将dom元素element转换为object，这时得到的object就是<a href="http://ccx01.github.io/post/core-object3d" target="_blank">object3d对象</a>。

```javascript
scene.add( object );
```

将其添加进场景，这时候就会得到这样一个图案。

![css3d](/img/2016-4-3-threejs-css3d/e2.png)

好了，css3d就是这么，简单，本文到此结束。

![啪](/img/2016-4-3-threejs-css3d/e3.jpg)

好吧，要实现<a href="http://threejs.org/examples/#css3d_periodictable" target="_blank">3d元素周期表</a>的效果，只是添加一个元素是不够的。但实际上也足够了，其余的生成方式与这第一个元素的生成方式是一样的。

在批量生成新的元素之前，我们先看看，我们生成的这一个元素在dom里是什么样的。

```html
<div id="container">
	<!-- 容器 -->
	<div style="overflow: hidden; transform-style: preserve-3d; width: 1362px; height: 935px; position: absolute; perspective: 1284.44569359504px;">
		<!-- scene -->
		<div style="transform-style: preserve-3d; width: 1362px; height: 935px; transform: translate3d(0px, 0px, 1284.44569359504px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, -3000, 1) translate3d(681px, 467.5px, 0px);">
			<!-- camera -->
			<div class="element" style="position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); background-color: rgba(0, 127, 127, 0.25098);">
				<!-- object -->
			</div>
		</div>
	</div>
</div>
```

所有的3d效果其实就是改变元素的transform属性里的matrix3d。webgl与canvas其实也是同理，只是css3d相对更易查看。不过matrix3d也放在后面几篇讲。

接下来制作类似3d元素周期表效果。

首先一个element肯定是不够的，因此，用个循环来生成

```javascript
for ( var i = 0; i < 100; i ++ ) {

    var element = document.createElement( 'div' );
    element.className = 'element';
    element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';

    ...
}
```

接着在插入场景之前进行初始化

```javascript
var object = new THREE.CSS3DObject( element );
    object.position.x = 0;
    object.position.y = 0;
    object.position.z = 0;
    scene.add( object );
```

如果希望在一开始就进行动画，可以在插入场景后，再一次设置新的position

```javascript
object = new THREE.Object3D();  //构造函数
object.position.x = Math.random() * w * 2 - w;
object.position.y = Math.random() * h * 2 - h;
object.position.z = Math.random() * w * 2 - w;
```

这样就得到两组object的position,就能使用tween进行过渡动画。

除了改变position外，我们还能调整元素的rotation，直接修改属性，使用方法和上面的position是一样的，不过如果我们想要一些特殊的旋转角度，我们会用到.lookAt方法，这个方法是使当前对象指向向量点。

```javascript
var vector = new THREE.Vector3();
	vector.x = object.position.x * 2;
	vector.y = object.position.y * 2;
	vector.z = object.position.z;

	object.lookAt( vector );
```

有关object的API可以查看<a href="http://ccx01.github.io/post/core-object3d" target="_blank">object3d对象</a>。

这里可以看下3d元素周期表对每个element属性的算法。

```javascript
var targets = { table: [], sphere: [], helix: [], grid: [] };
var table = [
	"H", "Hydrogen", "1.00794", 1, 1,
	"He", "Helium", "4.002602", 18, 1,
	...
	"Uuo", "Ununoctium", "(294)", 18, 7
]
var object = new THREE.Object3D();
object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
object.position.y = - ( table[ i + 4 ] * 180 ) + 990;
targets.table.push( object );
```

3d元素周期表把所有的位置都写在一个数组内，然后遍历。接着写了球，圆柱，方格3种位置分布用来进行切换。这些算法下一篇会进行介绍。

做完上面的步骤后，我们就要加入动画的过渡效果了。

```javascript
function transform( targets, duration ) {

    TWEEN.removeAll();

    for ( var i = 0; i < objects.length; i ++ ) {

        var object = objects[ i ];
        var target = targets[ i ];

        new TWEEN.Tween( object.position )
            .to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
            // .delay(10 * i)
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

        new TWEEN.Tween( object.rotation )
            .to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration * 2 + duration )
            // .delay(duration)
            .easing( TWEEN.Easing.Exponential.InOut )
            .start();

    }

    new TWEEN.Tween( this )
        .to( {}, duration * 3 )
        .onUpdate( render )
        .start();

}
```

tween的玩法其实蛮多的，配合不同的图形算法，效果也会出奇的酷炫，这里先放上<a href="https://github.com/tweenjs/tween.js" target="_blank">tween的官方github地址</a>

最后，记得实现一下controls

```javascript
controls = new THREE.TrackballControls( camera, renderer.domElement );
controls.rotateSpeed = 3;	//旋转速度
controls.minDistance = 1000;	//最小深度
controls.maxDistance = 3000;	//最大深度
controls.addEventListener( 'change', render );
```

这篇先讲到这里吧，后面开始都是算法的领域。如果觉得这个还是看的云里雾里的同学可以吱个声，嫌太简单的同学自己去看API。
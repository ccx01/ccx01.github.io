---
layout: post
title: css3d模块(3)【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,css3d模块
description: 解析threejs css3d模块
tags: [threejs, web]
---
这篇开始解析`CSS3DRenderer.js`，这个是css3d的核心库。

距离上一篇居然隔了3个多月，很多细节忘的差不多了。

虽然是核心库，但是这个库的代码量只有上一篇轨迹球的一半，7k。

`CSS3DRenderer.js`css3d渲染器顾名思义，这个就是将threejs里的3d元素以css3d的方式来呈现。

我们先看下css3drenderer的实现代码。

```javascript
renderer = new THREE.CSS3DRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.domElement.style.position = 'absolute';
document.getElementById( 'container' ).appendChild( renderer.domElement );


renderer.render( scene, camera );
```

生成渲染器对象。

```javascript
renderer = new THREE.CSS3DRenderer();
```

设置渲染器尺寸。

```javascript
renderer.setSize()
```

为渲染器的dom对象（内部会生成一个div对象）。

```javascript
renderer.domElement
```

把生成的dom对象放在一开始配好的容器里。

```javascript
document.getElementById( 'container' ).appendChild( renderer.domElement );
```

生成的dom树。

![渲染器dom](/img/2016-8-14-threejs-css3d/e1.png)

渲染器内置入scene(场景)，camera(相机)。

```javascript
renderer.render( scene, camera );
```

至此场景渲染器就布置完成了。

嗯……

完成了？

嗯

等等！

渲染器完成了，那里面的元素呢？

也完成了，css3d渲染器就是这么简单~

撒花，完结~

![pa](/img/2016-4-3-threejs-css3d/e3.jpg)

事实上，代码写到这里css3d模块的确是已经实现完毕了，但是这的确会让人有点疑惑，里面元素我们还没开始写，怎么就完成了。

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

从最终的结果来看，我们只是实现了第一层的div，里面的scene，camera，object都没写过。

实际上在执行`renderer.render( scene, camera );`时，我们已经把生成的threejs对象scene，camera通过renderer实现了。

不过还要同学有疑问，那里面的元素呢？

嗯，我们的确没有创建内部的对象元素，但是这个对象并不是针对css3d而创建的。

创建3d对象

```javascript
object = new THREE.Object3D();
```

这个3d对象是一个threejs对象，也就是说，不仅仅是css3d，其他canvas，webgl渲染器一样能使用这个对象。关于object3d的api可以查看这里<a href="http://ccx01.github.io/docs/#参考/核心/Object3D" target="_blank">http://ccx01.github.io/docs/#参考/核心/Object3D</a>

既然我们这篇讲的是css3d模块，那么css3d模块要使用这个对象该怎么办？又会产生什么结果？

就像我们第一篇<a href="http://ccx01.github.io/post/creating-a-scene" target="_blank">创建场景</a>讲的一样，要调用对象，直接把他放进scene(场景)里就好了。

```javascript
scene.add( object );
```

这样做的结果是什么呢？

页面上会生成这样一个元素

```html
<div style="position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
    <!-- object -->
</div>
```

当然，既然是个div，那么对其进行dom操作也是可以的。

同样在元素生成之前也可以对其进行定制

```javascript
var element = document.createElement( 'div' );
element.className = 'element';
element.style.backgroundColor = 'rgba(0,0,0,1)';


var object = new THREE.CSS3DObject( element );
```

生成的元素变这样了

```html
<div class="element" style="position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); background-color: rgba(0, 0, 0, 1);">
    <!-- object -->
</div>
```

至此，大家是否发现了什么？

对，css3d主要是通过控制div的transform来实现threejs对象。

实际上`CSS3DRenderer.js`的核心代码是在对threejs的3d属性到css3d的transform进行计算转换（主要是对matrix3d的计算）。

```javascript
var getObjectCSSMatrix = function ( matrix ) {

    var elements = matrix.elements;

    return 'translate3d(-50%,-50%,0) matrix3d(' +
        epsilon( elements[ 0 ] ) + ',' +
        epsilon( elements[ 1 ] ) + ',' +
        epsilon( elements[ 2 ] ) + ',' +
        epsilon( elements[ 3 ] ) + ',' +
        epsilon( - elements[ 4 ] ) + ',' +
        epsilon( - elements[ 5 ] ) + ',' +
        epsilon( - elements[ 6 ] ) + ',' +
        epsilon( - elements[ 7 ] ) + ',' +
        epsilon( elements[ 8 ] ) + ',' +
        epsilon( elements[ 9 ] ) + ',' +
        epsilon( elements[ 10 ] ) + ',' +
        epsilon( elements[ 11 ] ) + ',' +
        epsilon( elements[ 12 ] ) + ',' +
        epsilon( elements[ 13 ] ) + ',' +
        epsilon( elements[ 14 ] ) + ',' +
        epsilon( elements[ 15 ] ) +
    ')';
};

    matrix.copy( camera.matrixWorldInverse );
    matrix.transpose();
    matrix.copyPosition( object.matrixWorld );
    matrix.scale( object.scale );

    matrix.elements[ 3 ] = 0;
    matrix.elements[ 7 ] = 0;
    matrix.elements[ 11 ] = 0;
    matrix.elements[ 15 ] = 1;

    style = getObjectCSSMatrix( matrix );
```

对`camera`的转换则需要引人`preserve-3d`。

不过`CSS3DRenderer.js`目前对camera的实现有点粗略，只实现了一个`fov`参数……所以不进行细讲

关于camera的完全形态可以看下这篇<a href="http://ccx01.github.io/post/threejs-camera" target="_blank">摄像头原理</a>。

之后我会试着去优化css3d的camera实现。

至此css3d篇算是完结了，撒花~

“那我是已经可以做所有threejs的css3d效果了吗？”

“当然不行”

“啊？那我们跟着教程学了这么久”

其实这几篇只讲了css3d的基础实现。严格来说，其实要讲的只有这篇，threejs3d对象和css3d的转换，但是对于scene，camera的依赖使得必须先讲清楚他们的作用。就像scene,camera可通过css3d实现一样，css3d元素的实现并不是只有`Object3D`一个对象，还要很多不同的threejs3d对象。比如`Sprite`。

因此这几篇只是讲完css3d的实现方式，之后开始讲解threejs各种对象，以及其他类型的渲染器。
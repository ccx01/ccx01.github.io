---
layout: post
title: css3d模块(4)【threejs】
keywords: Sign,Sign的博客,技术文章,web开发,css3d模块
description: 解析threejs css3d模块
tags: [threejs, web]
---
上一篇把css3d的基础库补全后，忽然发现个事，之前的教程貌似还是太不友好了。

教程本身重点在解析各个threejs的api，可是没有实例支撑。至少跨了3个月后再看的我，第一印象是如此。

虽然这么想，但是动笔的瞬间又看了遍之前的教程……总觉得已经是一行一行的讲解了，到底还有哪里没弄清楚……

我大概没有写教程的天分吧。

总之这一篇开始介绍css3d新的一些部分，同时会啰嗦的对前面部分再一次进行补全。

前面说过，css3d只是threejs其中一种渲染方式，因此threejs部分对象是可以由css3d来渲染，也可以由webgl来渲染。

不过css3d支持的对象稍微少一点，从代码量上就能看出来。

css3d完全分离出来只有75k左右，而webgl是300+k。当然，threejs的总代码量不是75+300这样计算，因为css3d里面大概60+k是基础对象，也就是可以和其他渲染器共用的部分……

那css3d具体能实现到什么程度，以及什么不能实现呢？

除了最广为人知的3d元素周期表，css3d也可以做这种效果：

![分子式](/img/2016-8-21-threejs-css3d-sprite/e1.gif)

这个是咖啡因分子结构，这里直接使用PDBLoader加载pdb文件，也就是说css3d模块同样支持加载器。

不过pdb文件本身其实也不是很复杂

![pdb](/img/2016-8-21-threejs-css3d-sprite/e4.png)

用<a href="http://spdbv.vital-it.ch/" target="_blank">Swiss-PdbViewer</a>打开的话长这样：

![分子式](/img/2016-8-21-threejs-css3d-sprite/e2.gif)

虽说看起来好像不难，但是我也不知道该怎么编辑这玩意-____-

那么，现在出现个问题，分子式这样的表现形式貌似和元素周期表差很多，是因为加载pdb的原因吗？

答案，不是。

pdb只是方便了信息存储。我们看一下另一种表现形式可能更好理解一点：

![密集球](/img/2016-8-21-threejs-css3d-sprite/e3.gif)

<a href="http://threejs.org/examples/#css3d_sprites" target="_blank">http://threejs.org/examples/#css3d_sprites</a>

这个浮动的小球似乎和元素周期表也不一样，元素周期表看起来就是“3d场景里的2d方块”，更直白的说，“就算我不用threejs大概也能做出3d元素周期表”这种感觉；而浮动的小球看起来就很有3d感，感觉就是“真3d”。

真的是这样吗？

3d排列小球的真相其实是这个

![3d球](/img/2016-8-21-threejs-css3d-sprite/e5.png)

<a href="http://threejs.org/examples/textures/sprite.png" target="_balnk">http://threejs.org/examples/textures/sprite.png</a>

没错，其实就是一张png而已。

但是，总觉得好像和之前css3d的表现不一样……

啊，原来它不会随着镜头旋转而旋转！

对，这个就是`Sprite`对象，它会始终保持朝向镜头方向。sprite的api可以查看<a href="http://ccx01.github.io/docs/#参考/对象/Sprite" target="_blank">http://ccx01.github.io/docs/#参考/对象/Sprite</a>。

实现代码：

```javascript
var image = document.createElement( 'img' );
    image.src = 'textures/sprite.png';

var object = new THREE.CSS3DSprite( image.cloneNode() );
```

等等，api里似乎是

```javascript
var map = THREE.ImageUtils.loadTexture( "sprite.png" );
var material = new THREE.SpriteMaterial( { map: map, color: 0xffffff, fog: true } );
var sprite = new THREE.Sprite( material );
scene.add( sprite );
```

这就是css3d的局限之处了，虽然说css3d可以渲染threejs对象，但是css3d获取的其实是threejs特制的css3d对象。

在之前示例中，使用css3d渲染的时候（div内部属性），对象的创建方法用的都是css3d版本：

```javascript
var details = document.createElement( 'div' );
details.className = 'details';
details.innerHTML = table[ i + 1 ] + '<br>' + table[ i + 2 ];
element.appendChild( details );

var object = new THREE.CSS3DObject( element );
```

不过，object对象如果只是普通的div表现时在css3d上还是通用的：

```javascript
var object = new THREE.Object3D();
object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

targets.table.push( object );
```

至此，css3d模块能力范围基本都已浮出水面了。css3d本质上还是在transform等属性上玩，实现立体效果没问题，但是离不开css的盒模型。而人物模型，水纹，烟雾等等效果，css3d就有心无力了。

就算如此，其实css3d可玩性还是蛮高的。毕竟相对其他渲染器来说，css3d是兼容性最好的一个，这里兼容性不是传统意义下的兼容（ie或其他浏览器的兼容），而是指机器硬件的支持，以及现代浏览器（大概从chrome40往上算吧）的兼容。

![ccx01](/img/2016-8-21-threejs-css3d-sprite/e6.gif)

下次开始开始进行webgl的探索。
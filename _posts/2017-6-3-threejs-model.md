---
layout: post
title: THREEJS中的3D(动画)模型
keywords: Sign,Sign的博客,游戏人生,哲学,THREEJS中的3D(动画)模型
description: THREEJS中的3D(动画)模型
tags: [web, threejs]
---
关于web模型，这是个很难讲的主题，因为它跨了比较多的领域，之前也在文章中吐槽过：

<img src="//upload-images.jianshu.io/upload_images/3575020-6f293315ee2a0ef8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-6f293315ee2a0ef8.png?imageMogr2/auto-orient/strip" data-image-slug="6f293315ee2a0ef8" data-width="680" data-height="502">


然而，当时并没有很好的去解释3d模型的原理，原因主要是模型经手的并不多，并没有形成很好的方法论，只能大致说一下当时项目中的处理的个例。

不过现在依然没有形成很好的方法论，只能说，可以处理的模型范围比之前广了一点。

在这之前我们可以先来了解一下为什么模型导出对我们来说这么困难。

首先，对前端的同学来说：

<img src="//upload-images.jianshu.io/upload_images/3575020-f9c681a9b2476f4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-f9c681a9b2476f4f.png?imageMogr2/auto-orient/strip" data-image-slug="f9c681a9b2476f4f" data-width="1901" data-height="1154">


<b>你们看得懂这个界面吗？</b>


<img src="//upload-images.jianshu.io/upload_images/3575020-533fa5c9fabe6684.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">



而对于看得懂这个界面的3d美术同学来说：



<img src="//upload-images.jianshu.io/upload_images/3575020-b46dbc5d4b8074dd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-b46dbc5d4b8074dd.png?imageMogr2/auto-orient/strip" data-image-slug="b46dbc5d4b8074dd" data-width="893" data-height="528">


<b>你们看得懂这个东西吗？</b>



<img src="//upload-images.jianshu.io/upload_images/3575020-533fa5c9fabe6684.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">


啥？你两个都很熟？

……

那你点进这篇文章干p啊！

<img src="//upload-images.jianshu.io/upload_images/3575020-0d431d30e232206b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-0d431d30e232206b.png?imageMogr2/auto-orient/strip" data-image-slug="0d431d30e232206b" data-width="191" data-height="180">


好了，进入正题，我们先从模型开始讲：

在这里按导出难度来区分，模型大致可以分为<b>无动画模型</b>和<b>带动画模型</b>两种。

因为目前3dsmax的模型接触的比较多，所以下面的3d软件都以3dsmax为例进行演示。

3dsmax导出前需要先安装插件，在threejs完整包里，你可以在utils\exporters\max下面看到这样3个文件



<img src="//upload-images.jianshu.io/upload_images/3575020-922783c8c48ab0f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-922783c8c48ab0f3.png?imageMogr2/auto-orient/strip" data-image-slug="922783c8c48ab0f3" data-width="349" data-height="172">


配置3dsmax中的系统路径



<img src="//upload-images.jianshu.io/upload_images/3575020-10b065fe97f29271.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-10b065fe97f29271.png?imageMogr2/auto-orient/strip" data-image-slug="10b065fe97f29271" data-width="331" data-height="370">




<img src="//upload-images.jianshu.io/upload_images/3575020-f0e2bd2083e5e10f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-f0e2bd2083e5e10f.png?imageMogr2/auto-orient/strip" data-image-slug="f0e2bd2083e5e10f" data-width="493" data-height="373">


然后插件管理器里把这个勾上



<img src="//upload-images.jianshu.io/upload_images/3575020-75c459860e548153.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-75c459860e548153.png?imageMogr2/auto-orient/strip" data-image-slug="75c459860e548153" data-width="275" data-height="347">




<img src="//upload-images.jianshu.io/upload_images/3575020-88aa2d260a1e53fe.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-88aa2d260a1e53fe.png?imageMogr2/auto-orient/strip" data-image-slug="88aa2d260a1e53fe" data-width="675" data-height="309">


之后，每次启动3dsmax时就会出现这些插件的界面：



<img src="//upload-images.jianshu.io/upload_images/3575020-f009afc552928197.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-f009afc552928197.png?imageMogr2/auto-orient/strip" data-image-slug="f009afc552928197" data-width="454" data-height="528">



<img src="//upload-images.jianshu.io/upload_images/3575020-54929b5950b5c087.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-54929b5950b5c087.png?imageMogr2/auto-orient/strip" data-image-slug="54929b5950b5c087" data-width="261" data-height="266">



<img src="//upload-images.jianshu.io/upload_images/3575020-2a77970c22a4566a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-2a77970c22a4566a.png?imageMogr2/auto-orient/strip" data-image-slug="2a77970c22a4566a" data-width="139" data-height="174">


————————————————————————————

<b>另外，上面那些步骤都不做也没关系，等到想要导出时，点一下</b>

<b><br></b>

<img src="//upload-images.jianshu.io/upload_images/3575020-9f219f4f00ed2349.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-9f219f4f00ed2349.png?imageMogr2/auto-orient/strip" data-image-slug="9f219f4f00ed2349" data-width="261" data-height="266">


找到对应脚本，确认就行了……

<img src="//upload-images.jianshu.io/upload_images/3575020-2a77970c22a4566a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

</div><br><p>接下来我们就可以开始导出模型了

我们先说说无动画模型，或者说

一、导出不带动画的模型数据

比如这样一个模型



<img src="//upload-images.jianshu.io/upload_images/3575020-e9dc65e254ccec74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e9dc65e254ccec74.png?imageMogr2/auto-orient/strip" data-image-slug="e9dc65e254ccec74" data-width="448" data-height="303">


你只要选中它



<img src="//upload-images.jianshu.io/upload_images/3575020-01cf3e2d12e883ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-01cf3e2d12e883ed.png?imageMogr2/auto-orient/strip" data-image-slug="01cf3e2d12e883ed" data-width="404" data-height="269">



<img src="//upload-images.jianshu.io/upload_images/3575020-c21e78e9d1d7adbb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-c21e78e9d1d7adbb.png?imageMogr2/auto-orient/strip" data-image-slug="c21e78e9d1d7adbb" data-width="303" data-height="369">


点击一下 导出 就完成了：



<img src="//upload-images.jianshu.io/upload_images/3575020-eea28ff991f91a88.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-eea28ff991f91a88.png?imageMogr2/auto-orient/strip" data-image-slug="eea28ff991f91a88" data-width="803" data-height="466">


然后把这个模型放到web页面里：



<img src="//upload-images.jianshu.io/upload_images/3575020-229eaaaff8ef5ff4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-229eaaaff8ef5ff4.png?imageMogr2/auto-orient/strip" data-image-slug="229eaaaff8ef5ff4" data-width="294" data-height="233">


因为导出的是个纯模型，为了不让大家产生误解，我稍微调了下代码里的颜色。而模型里看起来的“棱角分明”也是threejs代码设置的结果。

至此一个不带动画的3d模型已经完成了。

<b>SO……So easy？</b>

<b><br></b>

<img src="//upload-images.jianshu.io/upload_images/3575020-b362b37b4034b41e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-b362b37b4034b41e.png?imageMogr2/auto-orient/strip" data-image-slug="b362b37b4034b41e" data-width="483" data-height="318">


是的，不带动画的3d模型相对来说是简单很多，但是为了之后更好的理解带动画的模型，我们先来过一遍无动画模型的代码。

<img src="//upload-images.jianshu.io/upload_images/3575020-ffa3106ea709717b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

</div><br><p><b>metadata:</b>

模型里信息概要

<b>sourceFile</b>：源文件，比如model.obj，obj.max。

<b>generatedBy</b>： 转换的插件名称

<b>formatVersion</b>： 版本

<b>vertices</b>： 顶点数

<b>normals</b>： 与顶点对应的法线向量

<b>colors</b>： 与顶点对应的颜色值

<b>uvs</b>： uv映射

<b>triangles</b>： 三角形

<b>materials</b>： 材质

<b>materials：</b>

模型的材质，一个模型可同时包含多个材质，上图由于是用3dsmax里直接绘制的茶壶进行导出，所以基本上没有材质信息，而材质信息是一个模型里很重要并且略繁杂的信息，这里列一下比较常见的材质的属性：

<b>DbgIndex</b>： 材质索引

<b>DbgName</b>： 材质名称

<b>colorDiffuse</b>：漫射颜色

<b>colorSpecular</b>： 镜面颜色

<b>opacity</b>：透明度

<b>colorDiffuse</b>：镜面系数

<b>mapDiffuse</b>： 漫射贴图

<b>vertexColors</b>：顶点颜色

一般情况下，贴图模型导出后只需要把mapDiffuse里的贴图路径设置好就行，而其他的属性可以通过手动调整，来优化模型在web中显示的效果。（直接导出，web端的呈现效果多少会和软件中显示的效果有出入，因为web端的灯光之类的处理是由我们手动控制）

<b>vertices：</b>

顶点数据，这个数据是一个一维数组，每3个值组成一个点的位置，[x1,y1,z1,x2,y2,z2,x3...]



<img src="//upload-images.jianshu.io/upload_images/3575020-b8b888a8c6bb14f1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-b8b888a8c6bb14f1.png?imageMogr2/auto-orient/strip" data-image-slug="b8b888a8c6bb14f1" data-width="475" data-height="329">


<b>normals：</b>

顶点法线向量，配合顶点颜色，用来计算不同角度光照时的漫反射光的显示，同样是xyz循环的一维数组

<b>colors：</b>

顶点颜色，rgb循环的一维数组，与normals配合可以实现多种顶点颜色分布，这个涉及到着色器。



<img src="//upload-images.jianshu.io/upload_images/3575020-5fd017e758c4c3d2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-5fd017e758c4c3d2.png?imageMogr2/auto-orient/strip" data-image-slug="5fd017e758c4c3d2" data-width="369" data-height="478">


<b>uvs：</b>

uv映射，就是模型与贴图的对应关系，uvs并不是一维数组，基本上就是下图的数据化。



<img src="//upload-images.jianshu.io/upload_images/3575020-78df52da88a32d82.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-78df52da88a32d82.png?imageMogr2/auto-orient/strip" data-image-slug="78df52da88a32d82" data-width="860" data-height="646">


<b>faces：</b>

这个是threejs内的类型，存储了顶点vertices的索引，详情可参考<a href="https://threejs.org/docs/index.html#api/core/Face3" target="_blank">https://threejs.org/docs/index.html#api/core/Face3</a>在模型上的面（三角形）如下图

<img src="//upload-images.jianshu.io/upload_images/3575020-967e7be58bfe0c0d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

</div><br><p>至此，整个无动画模型的基础数据格式我们都了解了，threejs内有多种加载器，但是，最后threejs要解析的就是这样的json格式数据。

当然，对于这些数据，我们能手动修改的地方不多，如果模型出了问题，还是要在3d软件内进行调整。

<img src="//upload-images.jianshu.io/upload_images/3575020-096a99223c1a3343.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

</div><br><p>二、导出带动画的模型数据



<img src="//upload-images.jianshu.io/upload_images/3575020-c318bc1394f7ca4b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-c318bc1394f7ca4b.png?imageMogr2/auto-orient/strip" data-image-slug="c318bc1394f7ca4b" data-width="483" data-height="318">


之前导出模型只要点一下就行了吧，居然要拆开2段来讲，导出带动画的模型也只要点一下就行了吧？



<img src="//upload-images.jianshu.io/upload_images/3575020-a5d200052eef9757.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-a5d200052eef9757.png?imageMogr2/auto-orient/strip" data-image-slug="a5d200052eef9757" data-width="304" data-height="376">


叮



<img src="//upload-images.jianshu.io/upload_images/3575020-029579fdc7a02289.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-029579fdc7a02289.png?imageMogr2/auto-orient/strip" data-image-slug="029579fdc7a02289" data-width="387" data-height="172">


叮



<img src="//upload-images.jianshu.io/upload_images/3575020-e73fb4d56ac06820.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e73fb4d56ac06820.png?imageMogr2/auto-orient/strip" data-image-slug="e73fb4d56ac06820" data-width="347" data-height="175">


叮



<img src="//upload-images.jianshu.io/upload_images/3575020-26eaf38ce0ea6c0a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-26eaf38ce0ea6c0a.png?imageMogr2/auto-orient/strip" data-image-slug="26eaf38ce0ea6c0a" data-width="1004" data-height="694">



<img src="//upload-images.jianshu.io/upload_images/3575020-5436d9fedb9bf563.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-5436d9fedb9bf563.png?imageMogr2/auto-orient/strip" data-image-slug="5436d9fedb9bf563" data-width="591" data-height="495">


懂了没？<b>带动画的模型</b>和<b>不带动画的模型</b>导出不是一个概念。

我们先看个视频，了解一下3dsmax中的简易动画模型的制作，以及导出threejs格式的过程。

<iframe class="player" src="//v.qq.com/iframe/player.html?vid=d0509a6yugn&amp;tiny=0&amp;auto=0" width="620" height="517" allowfullscreen="" frameborder="0"></iframe>


动画导出比不带动画的模型导出要严格很多，各种奇葩的情况都会在这个时候出现。

那么，模型里增加了动画，到底是增加了什么？

以视频里的圆柱体为例。

首先，增加了骨骼



<img src="//upload-images.jianshu.io/upload_images/3575020-43bbf4d20bbd8edc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-43bbf4d20bbd8edc.png?imageMogr2/auto-orient/strip" data-image-slug="43bbf4d20bbd8edc" data-width="289" data-height="240">


其次，增加蒙皮



<img src="//upload-images.jianshu.io/upload_images/3575020-35afd70a192a9827.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-35afd70a192a9827.png?imageMogr2/auto-orient/strip" data-image-slug="35afd70a192a9827" data-width="370" data-height="281">


最后，增加动画帧



<img src="//upload-images.jianshu.io/upload_images/3575020-8fea492d6d60df29.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-8fea492d6d60df29.png?imageMogr2/auto-orient/strip" data-image-slug="8fea492d6d60df29" data-width="723" data-height="169">


反应在导出的json代码上就是多了这几个属性



<img src="//upload-images.jianshu.io/upload_images/3575020-2f69507a1ef71b13.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-2f69507a1ef71b13.png?imageMogr2/auto-orient/strip" data-image-slug="2f69507a1ef71b13" data-width="367" data-height="250">


<b>bones：</b>

骨骼，是一个包含每段骨骼数据的数组



<img src="//upload-images.jianshu.io/upload_images/3575020-237ad9601b37688f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-237ad9601b37688f.png?imageMogr2/auto-orient/strip" data-image-slug="237ad9601b37688f" data-width="559" data-height="334">


<b>parent</b>：骨骼的父节点（实际作用类似于骨骼节点索引）

<b>name</b>：骨骼名称

<b>pos</b>：骨骼位置（xyz）

<b>scl</b>：骨骼缩放（xyz）

<b>rotq</b>：骨骼旋转（四元）

<b>skinIndices：</b>

蒙皮索引

<b>skinWeights：</b>

蒙皮权重，蒙皮的概念如下图



<img src="//upload-images.jianshu.io/upload_images/3575020-447400da59f1c7ca.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-447400da59f1c7ca.png?imageMogr2/auto-orient/strip" data-image-slug="447400da59f1c7ca" data-width="312" data-height="229">



<img src="//upload-images.jianshu.io/upload_images/3575020-7cdf33969f1aa44f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-7cdf33969f1aa44f.png?imageMogr2/auto-orient/strip" data-image-slug="7cdf33969f1aa44f" data-width="302" data-height="230">


每块骨骼进行变换的时候，控制的顶点数即受到蒙皮权重的影响。

不懂也没关系，反正就算懂了，真遇到蒙皮问题，我们还是要求助美术大佬~



<img src="//upload-images.jianshu.io/upload_images/3575020-2dd7a7491a13a2d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-2dd7a7491a13a2d0.png?imageMogr2/auto-orient/strip" data-image-slug="2dd7a7491a13a2d0" data-width="191" data-height="180">


<b>animations:</b>

通过时间控制每组骨骼状态。一般情况下，一个模型对应一组骨骼动画，但有些模型里，可能会同时存在多组骨骼动画，这也是动画模型事故多发地段。动画帧在软件里的呈现。



<img src="//upload-images.jianshu.io/upload_images/3575020-a8f815760308b16a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-a8f815760308b16a.png?imageMogr2/auto-orient/strip" data-image-slug="a8f815760308b16a" data-width="1699" data-height="445">


动画转换后的代码



<img src="//upload-images.jianshu.io/upload_images/3575020-f42bf0787b80b1a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-f42bf0787b80b1a8.png?imageMogr2/auto-orient/strip" data-image-slug="f42bf0787b80b1a8" data-width="651" data-height="465">


<b>name</b>：动画名称

<b>fps</b>：帧频

<b>hierarchy</b>：骨骼层级，包含各个骨骼的信息的数组

<b>length</b>：总时长

<b>parent</b>：骨骼父节点

<b>keys</b>：动画帧，每一帧都有当前骨骼的信息

<b>pos</b>：骨骼位置（xyz）

<b>scl</b>：骨骼缩放（xyz）

<b>rotq</b>：骨骼旋转（四元）

<b>time</b>：当前帧的时间（取决于导出时的帧频）

模型动画由<b>animations</b>开始，动画随着时间不断调整每个骨骼的属性，而骨骼通过蒙皮控制对应的顶点进行计算，而顶点上附着的颜色与法向量也相应的进行重新计算，因此整个模型就产生动画的联动。

那么，为什么增加这些东西后，模型导出就失败了呢？

<b>1）</b>首先，要导出动画模型，必须选中对应几何体，而且不能选到骨骼，否则就会出现这个错误



<img src="//upload-images.jianshu.io/upload_images/3575020-31d9a7d7a73308b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-31d9a7d7a73308b7.png?imageMogr2/auto-orient/strip" data-image-slug="31d9a7d7a73308b7" data-width="347" data-height="175">


<b>2）</b>导出的动画模型必须是<b>可编辑网格</b>，而大部分模型其实是<b>可编辑多边形</b>。因为可编辑多边形比可编辑网格屌很多，但是threejs的导出插件比较弱鸡，所以只能导出可编辑网格。



<img src="//upload-images.jianshu.io/upload_images/3575020-4bd92f59609b24bd.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-4bd92f59609b24bd.png?imageMogr2/auto-orient/strip" data-image-slug="4bd92f59609b24bd" data-width="434" data-height="416">



<img src="//upload-images.jianshu.io/upload_images/3575020-4678a8304ddb7cc8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-4678a8304ddb7cc8.png?imageMogr2/auto-orient/strip" data-image-slug="4678a8304ddb7cc8" data-width="176" data-height="198">



<img src="//upload-images.jianshu.io/upload_images/3575020-e478e4b28c707f04.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e478e4b28c707f04.png?imageMogr2/auto-orient/strip" data-image-slug="e478e4b28c707f04" data-width="176" data-height="194">


怎么转换呢？我也是折腾了几天后，最后通过给大佬们递茶，才了解到转换方法，所以我才不会告诉你们。想知道的同学，关注一下我的公众号<b>SignACG</b>，然后私信问我，当然，这个公众号跟这个文章没半毛钱关系。



<img src="//upload-images.jianshu.io/upload_images/3575020-c0867b6605f60a45.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-c0867b6605f60a45.png?imageMogr2/auto-orient/strip" data-image-slug="c0867b6605f60a45" data-width="523" data-height="530">


<b>3）</b>模型的蒙皮权重必须与整体骨骼保持一致，否则就会鬼畜（在3d模型里是不会有问题，但是threejs里不行），解决方法是把所有的几何体合并成同一个，并重新绑定骨骼动画。

这个没招了，去给美术大佬们递茶，让他们帮忙调整吧。



<img src="//upload-images.jianshu.io/upload_images/3575020-6f9c805ed3da996f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-6f9c805ed3da996f.png?imageMogr2/auto-orient/strip" data-image-slug="6f9c805ed3da996f" data-width="191" data-height="180">


<b>4）</b>还有个很常见的情况，就是动画模型里为了方便绘制角色的运动轨迹，通常会为角色添加一个 根节点，这个节点没有对应信息的绑定，会导致导出的模型的初始位置就出错

这里需要把当作质点的节点断开链接



<img src="//upload-images.jianshu.io/upload_images/3575020-e07637ae5480d47a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-e07637ae5480d47a.png?imageMogr2/auto-orient/strip" data-image-slug="e07637ae5480d47a" data-width="346" data-height="169">


找到容器资源管理器



<img src="//upload-images.jianshu.io/upload_images/3575020-eb7c43046d56a4a7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-eb7c43046d56a4a7.png?imageMogr2/auto-orient/strip" data-image-slug="eb7c43046d56a4a7" data-width="459" data-height="152">


找到根节点



<img src="//upload-images.jianshu.io/upload_images/3575020-682ad1973c99cc39.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-682ad1973c99cc39.png?imageMogr2/auto-orient/strip" data-image-slug="682ad1973c99cc39" data-width="195" data-height="72">


选择根节点的下级节点，断开其与根节点的链接



<img src="//upload-images.jianshu.io/upload_images/3575020-130f0f441dbd3621.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-130f0f441dbd3621.png?imageMogr2/auto-orient/strip" data-image-slug="130f0f441dbd3621" data-width="1680" data-height="891">


三、小结

可能上面列的这些情况还是没法罗列出所有动画模型导出时的会出现的问题，坑还是那个坑，走过的人还是要踩。

没了。

<hr>

<img src="//upload-images.jianshu.io/upload_images/3575020-979c7cd8271c1d58?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240" data-original-src="http://upload-images.jianshu.io/upload_images/3575020-979c7cd8271c1d58?imageMogr2/auto-orient/strip">

这里记录了另一个宇宙的故事
var list = {

	"手册": {
		"介绍": [
			[ "创建场景", "manual/introduction/Creating-a-scene" ],
			[ "矩阵变换", "manual/introduction/Matrix-transformations" ]
		]
	},

	"参考": {
		"常量": [
			[ "CustomBlendingEquation", "api/constants/CustomBlendingEquations"],
			[ "GLState", "api/constants/GLState"],
			[ "Materials", "api/constants/Materials"],
			[ "ShadowingTypes", "api/constants/ShadowingTypes"],
			[ "Textures", "api/constants/Textures"]
		],

		"相机": [
			[ "Camera", "api/cameras/Camera" ],
			[ "CubeCamera", "api/cameras/CubeCamera" ],
			[ "OrthographicCamera", "api/cameras/OrthographicCamera" ],
			[ "PerspectiveCamera", "api/cameras/PerspectiveCamera" ]
		],

		"核心": [
			[ "BufferAttribute", "api/core/BufferAttribute" ],
			[ "BufferGeometry", "api/core/BufferGeometry" ],
			[ "Clock", "api/core/Clock" ],
			[ "EventDispatcher", "api/core/EventDispatcher" ],
			[ "Face3", "api/core/Face3" ],
			[ "Geometry", "api/core/Geometry" ],
			[ "Object3D", "api/core/Object3D" ],
			[ "Raycaster", "api/core/Raycaster" ]
		],

		"光源": [
			[ "AmbientLight", "api/lights/AmbientLight" ],
			[ "DirectionalLight", "api/lights/DirectionalLight" ],
			[ "HemisphereLight", "api/lights/HemisphereLight" ],
			[ "Light", "api/lights/Light" ],
			[ "PointLight", "api/lights/PointLight" ],
			[ "SpotLight", "api/lights/SpotLight" ]
		],


		"加载器": [
			[ "BabylonLoader", "api/loaders/BabylonLoader" ],
			[ "BufferGeometryLoader", "api/loaders/BufferGeometryLoader" ],
			[ "Cache", "api/loaders/Cache" ],
			[ "ColladaLoader", "api/loaders/ColladaLoader" ],
			[ "glTFLoader", "api/loaders/glTFLoader" ],
			[ "ImageLoader", "api/loaders/ImageLoader" ],
			[ "JSONLoader", "api/loaders/JSONLoader" ],
			[ "Loader", "api/loaders/Loader" ],
			[ "LoadingManager", "api/loaders/LoadingManager" ],
			[ "MaterialLoader", "api/loaders/MaterialLoader" ],
			[ "MTLLoader", "api/loaders/MTLLoader" ],
			[ "OBJLoader", "api/loaders/OBJLoader" ],
			[ "OBJMTLLoader", "api/loaders/OBJMTLLoader" ],
			[ "ObjectLoader", "api/loaders/ObjectLoader" ],
			[ "PDBLoader", "api/loaders/PDBLoader" ],
			[ "SVGLoader", "api/loaders/SVGLoader" ],
			[ "TextureLoader", "api/loaders/TextureLoader" ],
			[ "TGALoader", "api/loaders/TGALoader" ],
			[ "XHRLoader", "api/loaders/XHRLoader" ]
		],

		"材质": [
			[ "LineBasicMaterial", "api/materials/LineBasicMaterial" ],
			[ "LineDashedMaterial", "api/materials/LineDashedMaterial" ],
			[ "Material", "api/materials/Material" ],
			[ "MeshBasicMaterial", "api/materials/MeshBasicMaterial" ],
			[ "MeshDepthMaterial", "api/materials/MeshDepthMaterial" ],
			[ "MeshFaceMaterial", "api/materials/MeshFaceMaterial" ],
			[ "MeshLambertMaterial", "api/materials/MeshLambertMaterial" ],
			[ "MeshNormalMaterial", "api/materials/MeshNormalMaterial" ],
			[ "MeshPhongMaterial", "api/materials/MeshPhongMaterial" ],
			[ "PointsMaterial", "api/materials/PointsMaterial" ],
			[ "RawShaderMaterial", "api/materials/RawShaderMaterial" ],
			[ "ShaderMaterial", "api/materials/ShaderMaterial" ],
			[ "SpriteCanvasMaterial", "api/materials/SpriteCanvasMaterial" ],
			[ "SpriteMaterial", "api/materials/SpriteMaterial" ]
		],

		"运算": [
			[ "Box2", "api/math/Box2" ],
			[ "Box3", "api/math/Box3" ],
			[ "Color", "api/math/Color" ],
			[ "Euler", "api/math/Euler" ],
			[ "Frustum", "api/math/Frustum" ],
			[ "Line3", "api/math/Line3" ],
			[ "Math", "api/math/Math" ],
			[ "Matrix3", "api/math/Matrix3" ],
			[ "Matrix4", "api/math/Matrix4" ],
			[ "Plane", "api/math/Plane" ],
			[ "Quaternion", "api/math/Quaternion" ],
			[ "Ray", "api/math/Ray" ],
			[ "Sphere", "api/math/Sphere" ],
			[ "Spline", "api/math/Spline" ],
			[ "Triangle", "api/math/Triangle" ],
			[ "Vector2", "api/math/Vector2" ],
			[ "Vector3", "api/math/Vector3" ],
			[ "Vector4", "api/math/Vector4" ]
		],

		"对象": [
			[ "Bone", "api/objects/Bone" ],
			[ "LensFlare", "api/objects/LensFlare" ],
			[ "Line", "api/objects/Line" ],
			[ "LineSegments", "api/objects/LineSegments" ],
			[ "LOD", "api/objects/LOD" ],
			[ "Mesh", "api/objects/Mesh" ],
			[ "MorphAnimMesh", "api/objects/MorphAnimMesh" ],
			[ "Points", "api/objects/Points" ],
			[ "SkinnedMesh", "api/objects/SkinnedMesh" ],
			[ "Skeleton", "api/objects/Skeleton" ],
			[ "Sprite", "api/objects/Sprite" ]
		],

		"渲染器": [
			[ "CanvasRenderer", "api/renderers/CanvasRenderer" ],
			[ "WebGLRenderer", "api/renderers/WebGLRenderer" ],
			[ "WebGLRenderTarget", "api/renderers/WebGLRenderTarget" ],
			[ "WebGLRenderTargetCube", "api/renderers/WebGLRenderTargetCube" ]
		],

		"渲染器 / 着色器": [
			[ "ShaderChunk", "api/renderers/shaders/ShaderChunk" ],
			[ "ShaderLib", "api/renderers/shaders/ShaderLib" ],
			[ "UniformsLib", "api/renderers/shaders/UniformsLib" ],
			[ "UniformsUtils", "api/renderers/shaders/UniformsUtils" ]
		],

		"渲染器 / WebGL": [
			[ "WebGLProgram", "api/renderers/webgl/WebGLProgram" ],
			[ "WebGLShader", "api/renderers/webgl/WebGLShader" ],
			[ "WebGLState", "api/renderers/webgl/WebGLState" ]
		],

		"渲染器 / WebGL / 插件": [
			[ "LensFlarePlugin", "api/renderers/webgl/plugins/LensFlarePlugin" ],
			[ "ShadowMapPlugin", "api/renderers/webgl/plugins/ShadowMapPlugin" ],
			[ "SpritePlugin", "api/renderers/webgl/plugins/SpritePlugin" ]
		],

		"场景": [
			[ "Fog", "api/scenes/Fog" ],
			[ "FogExp2", "api/scenes/FogExp2" ],
			[ "Scene", "api/scenes/Scene" ]
		],

		"纹理": [
			[ "CubeTexture", "api/textures/CubeTexture" ],
			[ "CompressedTexture", "api/textures/CompressedTexture" ],
			[ "DataTexture", "api/textures/DataTexture" ],
			[ "Texture", "api/textures/Texture" ]
		],

		"其他": [
			[ "FontUtils", "api/extras/FontUtils" ],
			[ "GeometryUtils", "api/extras/GeometryUtils" ],
			[ "ImageUtils", "api/extras/ImageUtils" ],
			[ "SceneUtils", "api/extras/SceneUtils" ]
		],

		"其他 / 动画": [
			[ "Animation", "api/extras/animation/Animation" ],
			[ "AnimationHandler", "api/extras/animation/AnimationHandler" ],
			[ "KeyFrameAnimation", "api/extras/animation/KeyFrameAnimation" ]
		],

		"其他 / 核心": [
			[ "Curve", "api/extras/core/Curve" ],
			[ "CurvePath", "api/extras/core/CurvePath" ],
			[ "Gyroscope", "api/extras/core/Gyroscope" ],
			[ "Path", "api/extras/core/Path" ],
			[ "Shape", "api/extras/core/Shape" ]
		],

		"其他 / 曲线": [
			[ "ArcCurve", "api/extras/curves/ArcCurve" ],
			[ "ClosedSplineCurve3", "api/extras/curves/ClosedSplineCurve3" ],
			[ "CubicBezierCurve", "api/extras/curves/CubicBezierCurve" ],
			[ "CubicBezierCurve3", "api/extras/curves/CubicBezierCurve3" ],
			[ "EllipseCurve", "api/extras/curves/EllipseCurve" ],
			[ "LineCurve", "api/extras/curves/LineCurve" ],
			[ "LineCurve3", "api/extras/curves/LineCurve3" ],
			[ "QuadraticBezierCurve", "api/extras/curves/QuadraticBezierCurve" ],
			[ "QuadraticBezierCurve3", "api/extras/curves/QuadraticBezierCurve3" ],
			[ "SplineCurve", "api/extras/curves/SplineCurve" ],
			[ "SplineCurve3", "api/extras/curves/SplineCurve3" ]
		],

		"其他 / 形状": [
			[ "BoxGeometry", "api/extras/geometries/BoxGeometry" ],
			[ "CircleGeometry", "api/extras/geometries/CircleGeometry" ],
			[ "CubeGeometry", "api/extras/geometries/CubeGeometry" ],
			[ "CylinderGeometry", "api/extras/geometries/CylinderGeometry" ],
			[ "DodecahedronGeometry", "api/extras/geometries/DodecahedronGeometry" ],
			[ "ExtrudeGeometry", "api/extras/geometries/ExtrudeGeometry" ],
			[ "IcosahedronGeometry", "api/extras/geometries/IcosahedronGeometry" ],
			[ "LatheGeometry", "api/extras/geometries/LatheGeometry" ],
			[ "OctahedronGeometry", "api/extras/geometries/OctahedronGeometry" ],
			[ "ParametricGeometry", "api/extras/geometries/ParametricGeometry" ],
			[ "PlaneGeometry", "api/extras/geometries/PlaneGeometry" ],
			[ "PolyhedronGeometry", "api/extras/geometries/PolyhedronGeometry" ],
			[ "RingGeometry", "api/extras/geometries/RingGeometry" ],
			[ "ShapeGeometry", "api/extras/geometries/ShapeGeometry" ],
			[ "SphereGeometry", "api/extras/geometries/SphereGeometry" ],
			[ "TetrahedronGeometry", "api/extras/geometries/TetrahedronGeometry" ],
			[ "TextGeometry", "api/extras/geometries/TextGeometry" ],
			[ "TorusGeometry", "api/extras/geometries/TorusGeometry" ],
			[ "TorusKnotGeometry", "api/extras/geometries/TorusKnotGeometry" ],
			[ "TubeGeometry", "api/extras/geometries/TubeGeometry" ]
		],

		"其他 / 辅助物": [
			[ "ArrowHelper", "api/extras/helpers/ArrowHelper" ],
			[ "AxisHelper", "api/extras/helpers/AxisHelper" ],
			[ "BoundingBoxHelper", "api/extras/helpers/BoundingBoxHelper" ],
			[ "BoxHelper", "api/extras/helpers/BoxHelper" ],
			[ "CameraHelper", "api/extras/helpers/CameraHelper" ],
			[ "DirectionalLightHelper", "api/extras/helpers/DirectionalLightHelper" ],
			[ "EdgesHelper", "api/extras/helpers/EdgesHelper" ],
			[ "FaceNormalsHelper", "api/extras/helpers/FaceNormalsHelper" ],
			[ "GridHelper", "api/extras/helpers/GridHelper" ],
			[ "HemisphereLightHelper", "api/extras/helpers/HemisphereLightHelper" ],
			[ "PointLightHelper", "api/extras/helpers/PointLightHelper" ],
			[ "SpotLightHelper", "api/extras/helpers/SpotLightHelper" ],
			[ "VertexNormalsHelper", "api/extras/helpers/VertexNormalsHelper" ],
			[ "WireframeHelper", "api/extras/helpers/WireframeHelper" ]
		],

		"其他 / 对象": [
			[ "ImmediateRenderObject", "api/extras/objects/ImmediateRenderObject" ],
			[ "MorphBlendMesh", "api/extras/objects/MorphBlendMesh" ]
		],

		"示例" : [
			[ "CombinedCamera", "api/examples/cameras/CombinedCamera" ],
			[ "LookupTable", "api/examples/Lut" ]

		]

	}

};

var pages = {};

for ( var section in list ) {

	pages[ section ] = {};

	for ( var category in list[ section ] ) {

		pages[ section ][ category ] = {};

		for ( var i = 0; i < list[ section ][ category ].length; i ++ ) {

			var page = list[ section ][ category ][ i ];
			pages[ section ][ category ][ page[ 0 ] ] = page[ 1 ];

		}

	}

}

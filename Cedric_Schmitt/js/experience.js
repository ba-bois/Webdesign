const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

const createScene = function () {
	var scene = new BABYLON.Scene(engine);
	scene.clearColor = new BABYLON.Color3(0.75, 0.56, 0.36);
	scene.ambientColor = new BABYLON.Color3(1, 1, 1);

	scene.fogMode = BABYLON.Scene.FOGMODE_EXP; scene.fogDensity = 0.01; scene.fogStart = 40.0;
	scene.fogEnd = 60.0; scene.fogColor = new BABYLON.Color3(0.7, 0.51, 0.31);

	const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
	camera.keysUp.push(87);    //W
	camera.keysDown.push(83)   //D
	camera.keysLeft.push(65);  //A
	camera.keysRight.push(68); //S

	camera.inputs.add(new BABYLON.FreeCameraGamepadInput());
	camera.gamepadMoveSensibility = .8;
	camera.gamepadAngularSensibility = .2;

	camera.attachControl(canvas);

	const hemiLight = new BABYLON.HemisphericLight("HemisphericLight",
		new BABYLON.Vector3(0, 1, 0), scene);
	hemiLight.intensity = 0.2;

	const directionalLight = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(.5, -.5, -.1), scene);

	var shadowGenerator = new BABYLON.ShadowGenerator(8192, directionalLight);

	directionalLight.shadowMinZ = 10;
	directionalLight.shadowMaxZ = 70;
	shadowGenerator.useBlurCloseExponentialShadowMap = true;
	shadowGenerator.forceBackFacesOnly = true;
	shadowGenerator.blurKernel = 32;
	shadowGenerator.useKernelBlur = true;

	console.log(shadowGenerator);
	var e = BABYLON.SceneLoader.ImportMesh(null, "", "https://ffa.ceschmitt.de/static/map.glb", scene, function (meshes, particleSystem, skeletons) {
		meshes.map(m => { shadowGenerator.getShadowMap().renderList.push(m); m.receiveShadows = true; });
	});

	return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
	scene.render();
});

window.addEventListener("resize", function () {
	engine.resize();
});
/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
var CScreen = config.Screen;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var cube;
var cube1;
var cube2;
var cube3;
var cube4;
var cube5;
var cube6;
var cube7;
var cube8;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var cubeGeometry;
var cubeGeometry1;
var cubeGeometry2;
var cubeGeometry3;
var cubeGeometry4;
var cubeGeometry5;
var cubeGeometry6;
var cubeGeometry7;
var cubeGeometry8;
var cubeMaterial;
function init() {
    // Instantiate a new Scene object
    scene = new Scene();
    setupRenderer(); // setup the default renderer
    setupCamera(); // setup the camera
    // add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added Axis Helper to scene...");
    //Add a Plane to the Scene
    plane = new gameObject(new PlaneGeometry(16, 16, 1, 1), new LambertMaterial({ color: 0xe79b61 }), 0, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    //Add a Cubes to the Scene
    //Adding Head
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(2.036, 2.315, 2);
    cube = new Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.x = 0.125;
    cube.position.y = 9.73;
    cube.position.z = 0.04;
    scene.add(cube);
    //Adding Neck
    cubeGeometry1 = new CubeGeometry(1, 1, 1);
    cube1 = new Mesh(cubeGeometry1, cubeMaterial);
    cube1.castShadow = true;
    cube1.receiveShadow = true;
    cube1.position.x = -0.02;
    cube1.position.y = 8.3;
    cube1.position.z = 0.045;
    scene.add(cube1);
    //Adding Body
    cubeGeometry2 = new CubeGeometry(1.7, 5, 4);
    cube2 = new Mesh(cubeGeometry2, cubeMaterial);
    cube2.castShadow = true;
    cube2.receiveShadow = true;
    cube2.position.x = 0.06;
    cube2.position.y = 5.5;
    cube2.position.z = 0.01;
    scene.add(cube2);
    //Adding left and right Arms
    cubeGeometry3 = new CubeGeometry(1.2, 0.8, 3.5);
    cube3 = new Mesh(cubeGeometry3, cubeMaterial);
    cube3.castShadow = true;
    cube3.receiveShadow = true;
    cube3.position.x = -0.21;
    cube3.position.y = 7.6;
    cube3.position.z = -3.71;
    scene.add(cube3);
    cubeGeometry4 = new CubeGeometry(1.2, 0.8, 3.5);
    cube4 = new Mesh(cubeGeometry4, cubeMaterial);
    cube4.castShadow = true;
    cube4.receiveShadow = true;
    cube4.position.x = -0.21;
    cube4.position.y = 7.6;
    cube4.position.z = 3.71;
    scene.add(cube4);
    //Adding Legs
    cubeGeometry5 = new CubeGeometry(1, 3, 1);
    cube5 = new Mesh(cubeGeometry5, cubeMaterial);
    cube5.castShadow = true;
    cube5.receiveShadow = true;
    cube5.position.x = -0.16;
    cube5.position.y = 1.5;
    cube5.position.z = -1.0;
    scene.add(cube5);
    cubeGeometry6 = new CubeGeometry(1, 3, 1);
    cube6 = new Mesh(cubeGeometry6, cubeMaterial);
    cube6.castShadow = true;
    cube6.receiveShadow = true;
    cube6.position.x = -0.16;
    cube6.position.y = 1.5;
    cube6.position.z = 1.0;
    scene.add(cube6);
    cubeGeometry7 = new CubeGeometry(1.6, 0.5, 1);
    cube7 = new Mesh(cubeGeometry7, cubeMaterial);
    cube7.castShadow = true;
    cube7.receiveShadow = true;
    cube7.position.x = 0.15;
    cube7.position.y = 0.25;
    cube7.position.z = -1.0;
    scene.add(cube7);
    cubeGeometry8 = new CubeGeometry(1.6, 0.5, 1);
    cube8 = new Mesh(cubeGeometry8, cubeMaterial);
    cube8.castShadow = true;
    cube8.receiveShadow = true;
    cube8.position.x = 0.15;
    cube8.position.y = 0.25;
    cube8.position.z = 1.0;
    scene.add(cube8);
    console.log("Added Cube Primitive to scene...");
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(5.6, 23.1, 5.4);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.05);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
function onResize() {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeed', -0.5, 0.5);
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
// Setup main game loop
function gameLoop() {
    stats.update();
    // cube.rotation.y += control.rotationSpeed;
    // cube1.rotation.y += control.rotationSpeed;
    // cube2.rotation.y += control.rotationSpeed;
    // cube3.rotation.y += control.rotationSpeed;
    // cube4.rotation.y += control.rotationSpeed;
    // cube5.rotation.y += control.rotationSpeed;
    // cube6.rotation.y += control.rotationSpeed;
    // cube7.rotation.y += control.rotationSpeed;
    // cube8.rotation.y += control.rotationSpeed;
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    // render the scene
    renderer.render(scene, camera);
}
// Setup default renderer
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}
// Setup main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 31.2;
    camera.position.y = 13.9;
    camera.position.z = -6.68;
    camera.lookAt(new Vector3(0, 0, 0));
    console.log("Finished setting up Camera...");
}
//# sourceMappingURL=game.js.map
/// <reference path="_reference.ts"/>

// MAIN GAME FILE

//Source file name      game.ts
//Last Modified by      Vinay Bhardwaj
//Date last Modified    February 5,2016
//Program description   COMP392-Assignment 1-CubeMan    
//Revision History      v10


// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;
import CScreen = config.Screen;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube: Mesh;
var cube1: Mesh;
var cube2: Mesh;
var cube3: Mesh;
var cube4: Mesh;
var cube5: Mesh;
var cube6: Mesh;
var cube7: Mesh;
var cube8: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry:CubeGeometry;
var cubeGeometry1:CubeGeometry;
var cubeGeometry2:CubeGeometry;
var cubeGeometry3:CubeGeometry;
var cubeGeometry4:CubeGeometry;
var cubeGeometry5:CubeGeometry;
var cubeGeometry6:CubeGeometry;
var cubeGeometry7:CubeGeometry;
var cubeGeometry8:CubeGeometry;
var cubeMaterialSkin:LambertMaterial;
var cubeMaterialBody:LambertMaterial;
var cubeMaterialLegs:LambertMaterial;
var cubeMaterialFeet:LambertMaterial;


var group = new THREE.Object3D();


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
    plane = new gameObject(
        new PlaneGeometry(40, 40, 1, 1),
        new LambertMaterial({ color: 0xABE79F }),
        -2.5, -5.35, 0);

    plane.rotation.x = -0.5 * Math.PI; //Plane Rotation

    scene.add(plane);
    console.log("Added Plane Primitive to scene...");
    
    //Add a Cubes to the Scene
    
    
    cubeMaterialSkin = new LambertMaterial({color:0x90EE90});
    cubeMaterialBody = new LambertMaterial({color:0x9ACD32});
    cubeMaterialLegs = new LambertMaterial({color:0x000000});
    cubeMaterialFeet = new LambertMaterial({color:0x614126});
    
    
    //Adding Head
    cubeGeometry = new CubeGeometry(2.036, 2.315, 2);
    cube = new Mesh(cubeGeometry, cubeMaterialSkin);
    cube.castShadow = true;
    cube.receiveShadow = true;
    cube.position.x = 0.125;
    cube.position.y = 4.73;
    cube.position.z = 0.04;
    group.add(cube); //Adding Cube to the group
    
    //Adding Neck
    cubeGeometry1 = new CubeGeometry(1, 1, 1);
    cube1 = new Mesh(cubeGeometry1, cubeMaterialSkin);
    cube1.castShadow = true;
    cube1.receiveShadow = true;
    cube1.position.x = -0.02;
    cube1.position.y = 3.3;
    cube1.position.z = 0.045;
    group.add(cube1); //Adding Cube to the group
    
    
    //Adding Body
    cubeGeometry2 = new CubeGeometry(1.7, 5,4);
    cube2 = new Mesh(cubeGeometry2, cubeMaterialBody);
    cube2.castShadow = true;
    cube2.receiveShadow = true;
    cube2.position.x = 0.06;
    cube2.position.y = 0.5;
    cube2.position.z = 0.01;
    group.add(cube2); //Adding Cube to the group
    
    
    //Adding right arm
    cubeGeometry3 = new CubeGeometry(1.2, 0.8, 3.5);
    cube3 = new Mesh(cubeGeometry3, cubeMaterialSkin);
    cube3.castShadow = true;
    cube3.receiveShadow = true;
    cube3.position.x = -0.21;
    cube3.position.y = 2.6;
    cube3.position.z = -3.71;
    group.add(cube3); //Adding Cube to the group
    
    //Adding left arm
    cubeGeometry4 = new CubeGeometry(1.2, 0.8, 3.5);
    cube4 = new Mesh(cubeGeometry4, cubeMaterialSkin);
    cube4.castShadow = true;
    cube4.receiveShadow = true;
    cube4.position.x = -0.21;
    cube4.position.y = 2.6;
    cube4.position.z = 3.71;
    group.add(cube4); //Adding Cube to the group
    
    //Adding right leg
    cubeGeometry5 = new CubeGeometry(1,3,1);
    cube5 = new Mesh(cubeGeometry5, cubeMaterialLegs);
    cube5.castShadow = true;
    cube5.receiveShadow = true;
    cube5.position.x = -0.16;
    cube5.position.y = -3.5;
    cube5.position.z = -1.0;
    group.add(cube5); //Adding Cube to the group
    
    //Adding left leg
    cubeGeometry6 = new CubeGeometry(1,3,1);
    cube6 = new Mesh(cubeGeometry6, cubeMaterialLegs);
    cube6.castShadow = true;
    cube6.receiveShadow = true;
    cube6.position.x = -0.16;
    cube6.position.y = -3.5;
    cube6.position.z = 1.0;
    group.add(cube6); //Adding Cube to the group
    
    //Adding right feet
    cubeGeometry7 = new CubeGeometry(1.6,0.5,1);
    cube7 = new Mesh(cubeGeometry7, cubeMaterialFeet);
    cube7.castShadow = true;
    cube7.receiveShadow = true;
    cube7.position.x = 0.15;
    cube7.position.y = -4.95;
    cube7.position.z = -1.0;
    group.add(cube7); //Adding Cube to the group
    
    //Adding left feet
    cubeGeometry8 = new CubeGeometry(1.6,0.5,1);
    cube8 = new Mesh(cubeGeometry8, cubeMaterialFeet);
    cube8.castShadow = true;
    cube8.receiveShadow = true;
    cube8.position.x = 0.15;
    cube8.position.y = -4.95;
    cube8.position.z = 1.0;
    group.add(cube8); //Adding Cube to the group
    
    scene.add(group);
    console.log("Added Group to scene...");
    
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x444444);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
	
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(21, 70, 19);
    //spotLight.rotation.set(37.261, 106.936, 3.164);
    spotLight.lookAt(new Vector3(0, 0, 0));
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    
    // add controls
    gui = new GUI();
    control = new Control(0.001,0.001,0.001,cubeMaterialSkin.color.getHex(),cubeMaterialBody.color.getHex(),cubeMaterialLegs.color.getHex(),cubeMaterialFeet.color.getHex());
    addControl(control);

    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene...");

    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    
    window.addEventListener('resize', onResize, false);
}

function onResize(): void {
    camera.aspect = CScreen.RATIO;
    //camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
}

function addControl(controlObject: Control): void {
    gui.add(controlObject, 'RotationXaxis',-0.05,0.05); //Adding control for rotation around X-Axis
    gui.add(controlObject, 'RotationYaxis',-0.05,0.05); //Adding control for rotation around Y-Axis
    gui.add(controlObject, 'RotationZaxis',-0.05,0.05); //Adding control for rotation around Z-Axis
    gui.addColor(controlObject,'BodyColor'); //Adding control for changing Face color
    gui.addColor(controlObject,'UpperColor'); //Adding control for changing UpperBody color
    gui.addColor(controlObject,'LowerColor'); //Adding control for changing Legs/Pants color
    gui.addColor(controlObject,'FeetColor'); //Adding control for changing Feet/Shoes color
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
function gameLoop(): void {
    stats.update();
    //Rotation around all three axis
    group.rotation.y += control.RotationXaxis; //Rotating the Group around Y-Azis
    group.rotation.x += control.RotationYaxis; //Rotating the Group around X-Azis
    group.rotation.z += control.RotationZaxis; //Rotating the Group around Z-Azis
    
    //assigning control object to each cube
    cube.material.color = new Color(control.BodyColor);
    cube1.material.color = new Color(control.BodyColor);
    cube2.material.color = new Color(control.UpperColor);
    cube3.material.color = new Color(control.BodyColor);
    cube4.material.color = new Color(control.BodyColor);
    cube5.material.color = new Color(control.LowerColor);
    cube6.material.color = new Color(control.LowerColor);
    cube7.material.color = new Color(control.BodyColor);
    cube8.material.color = new Color(control.BodyColor);
    
    // render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
	
    // render the scene
    renderer.render(scene, camera);
}

// Setup default renderer
function setupRenderer(): void {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(CScreen.WIDTH, CScreen.HEIGHT);
    //renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer...");
}

// Setup main camera for the scene
function setupCamera(): void {
    camera = new PerspectiveCamera(45, config.Screen.RATIO, 0.1, 1000);
    //camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 47.55813;
    camera.position.y = 30.19024;
    camera.position.z = 0.95559;
    camera.lookAt(new Vector3(0, -1, 1));
    console.log("Finished setting up Camera...");
}

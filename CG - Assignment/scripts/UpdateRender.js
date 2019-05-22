//Create Scene
var scene = new THREE.Scene();
var ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(45, ratio, 1, 5000);
camera.position.set(20, 0, 40);
camera.lookAt(0, 0, 0);
scene.add(camera);

//Create Renderer
var renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
});

//Set Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight);

//Listener Event for Resize Runction
window.addEventListener('resize', Resize);

//Add renderer to body
document.body.appendChild(renderer.domElement);

//
//FUNCTIONS//
//

//Update Render
function updateRender() {
    renderer.render(scene, camera);
}

//Resize window
var Resize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    //Update camera
    camera.aspect = width / height;
};

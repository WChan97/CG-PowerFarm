//Create renderer
var renderer = new THREE.WebGLRenderer({
    preserveDrawingBuffer: true
});

//Set Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight);

//Enable shadowMap
renderer.shadowMap.enabled = true;

//Resize window
var Resize = function () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    //Update renderer
    renderer.setSize(width, height);
    //Update camera
    camera.aspect = width / height;
};

//Link Event
window.addEventListener('resize', Resize);
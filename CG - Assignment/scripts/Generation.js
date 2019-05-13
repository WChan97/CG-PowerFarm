//This should handle terrain and object generation

function generation() {
    var cube_geometry = new THREE.BoxGeometry(3, 3, 3);
    var cube_material = new THREE.MeshBasicMaterial();
    cube_material.color = new THREE.Color(255, 0, 0);
    cube_material.wireframe = true;

    // Torus
    var torus_geometry = new THREE.TorusGeometry(3, 1, 4, 100);
    var torus_material = new THREE.MeshBasicMaterial();
    torus_material.color = new THREE.Color(0, 0, 255);
    torus_material.wireframe = true;

    // Torus Knot
    var torusKnot_geometry = new THREE.TorusKnotGeometry(3, 1, 100, 4);
    var torusKnot_material = new THREE.MeshBasicMaterial();
    torusKnot_material.color = new THREE.Color(0, 255, 0);
    torusKnot_material.wireframe = true;

    // Cone
    var cone_geometry = new THREE.ConeGeometry(2, 8, 32);
    var cone_material = new THREE.MeshBasicMaterial();
    cone_material.color = new THREE.Color(255, 255, 255);
    cone_material.wireframe = true;

    // Define Object
    var cube = new THREE.Mesh(cube_geometry, cube_material);
    var torus = new THREE.Mesh(torus_geometry, torus_material);
    var torusKnot = new THREE.Mesh(torusKnot_geometry, torusKnot_material);
    var cone = new THREE.Mesh(cone_geometry, cone_material);

    // Location of Objects
    cube.position.x += 10;
    torus.position.y += 10;
    torusKnot.position.y -= 10;
    cone.position.x -= 10;


    //cube.rotation.x += 2;

    scene.add(cube);
    scene.add(torus);
    scene.add(torusKnot);
    scene.add(cone);
}
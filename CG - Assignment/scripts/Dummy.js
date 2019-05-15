//This should handle terrain and object generation
function dummy() {
  /*  var width = window.innerWidth;
    var height = window.innerHeight;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    var scene = new THREE.Scene();

    //var camera = new THREE.OrthographicCamera(-width/4, width/4, -height/4, height/4, 0.1, 1000);

    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(20, 0, 40);
    camera.lookAt(0, 0, 0); */


    // Cube
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

    /* terrain
    var geometry = new THREE.PlaneBufferGeometry( 20, 20, 10, 10 );
    geometry.rotateX( - Math.PI / 2 );
    var vertices = geometry.attributes.position.array;
    for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
      vertices[ j + 1 ] = (Math.random()*2);
    }
    var material = new THREE.MeshBasicMaterial( {color: 0x99cc00, side: THREE.DoubleSide} );
    material.color = new THREE.Color(0, 255, 0);
    material.wireframe = true;
    var plane = new THREE.Mesh( geometry, material );
    scene.add( plane ); */


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

  //  renderer.render(scene, camera);
};

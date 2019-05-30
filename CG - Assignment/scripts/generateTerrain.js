function generateTerrain(){

  var geometry = new THREE.PlaneBufferGeometry( 20, 20, 100, 100 );
  geometry.rotateX( - Math.PI / 2 );

  var loader = new THREE.TextureLoader();
  var displacement_map = loader.load('img/' + THREE.Math.randInt(1, 12) + '.jpg');

  var material_ground = new THREE.MeshPhongMaterial({
      color: 0x99cc00,
      displacementMap: displacement_map,
      displacementScale: 5,
      side: THREE.DoubleSide
  });

  var material_ground_wire = new THREE.MeshPhongMaterial({
      color: 0x204c09,
      displacementMap: displacement_map,
      displacementScale: 5,
      side: THREE.DoubleSide
  });
  material_ground_wire.wireframe = true;


  var mesh = new THREE.Mesh(
      geometry,
      material_ground
    );


  var meshWire = new THREE.Mesh(
      geometry,
      material_ground_wire
    );
  meshWire.position.set(0,0.01,0);


  var basegeometry = new THREE.BoxGeometry(20, 10, 20);
  var material = new THREE.MeshBasicMaterial( {color: 0x443b25} );
  var base = new THREE.Mesh( basegeometry, material );
  base.position.set(0,-5.01,0);


  scene.add( base );
  scene.add( mesh );
  scene.add(meshWire);
}

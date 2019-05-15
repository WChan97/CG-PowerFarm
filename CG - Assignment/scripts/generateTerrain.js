function generateTerrain(){
  var geometry = new THREE.PlaneBufferGeometry( 30, 30, 10, 10 );
  geometry.rotateX( - Math.PI / 2 );
  var vertices = geometry.attributes.position.array;
  for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {
    vertices[ j + 1 ] = (Math.random()*2);
  }
  var material = new THREE.MeshBasicMaterial( {color: 0x99cc00, side: THREE.DoubleSide} );
  material.color = new THREE.Color(0, 255, 0);
  material.wireframe = true;
  var plane = new THREE.Mesh( geometry, material );
  scene.add( plane );

}

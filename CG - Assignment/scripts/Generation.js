//This should handle terrain and object generation
//Regenerates Terrain - Callum/Walter
function reGen() {
    //Terrain
    geometry = new THREE.PlaneBufferGeometry(20, 20, 100, 100);
    geometry.rotateX(-Math.PI / 2);

    loader = new THREE.TextureLoader();
    displacement_map = loader.load('img/' + THREE.Math.randInt(1, 12) + '.jpg');

    material_ground = new THREE.MeshPhongMaterial({
        displacementMap: displacement_map,
        displacementScale: 2,
        side: THREE.DoubleSide
    });
    material_ground.castShadow = true;

    material_ground_wire = new THREE.MeshPhongMaterial({
        displacementMap: displacement_map,
        displacementScale: 2,
        side: THREE.DoubleSide
    });
    material_ground_wire.wireframe = true;


    mesh = new THREE.Mesh(
        geometry,
        material_ground
    );


    meshWire = new THREE.Mesh(
        geometry,
        material_ground_wire
    );
    meshWire.position.set(0, 0.01, 0);

    //Recolour
    setSeason();
}
//


//Objects downloaded from www.kenney.nl
//Inspiration from https://www.learnthreejs.com/load-3d-model-using-three-js-obj-loader/
// - Natalie
function generate_objects(objs, mtls, amount) {
    var count = 0;
    while (count < amount) {
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load(mtls, function (material) {
            material.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(material);
            objLoader.load(objs, function (object) { // Loads obj file from the file path and passes loaded texture. Returns texture object directly used for material creation.
                object.traverse(function (child) { //'Traverse' iterates through loaded object. Passes function to be called for every child of object being traversed.
                    if (child instanceof THREE.Mesh) { //Tests whether child is of type THREE.Mesh
                        child.scale.set(0.5, THREE.Math.randFloat(0.3, 0.7), 0.5); //Random scaling of object

                        child.position.x = THREE.Math.randInt(-8, 8); //Generates the object at a random integer number from -8 to 8 on the x and z axis.
                        child.position.z = THREE.Math.randInt(-8, 8);
                        child.position.y -= 0;

                        child.castShadow = true;
                        child.receiveShadow = true;

                    }
                    object.name = "object";
                    scene.add(object); //Places object onto the scene.


                });
            });
        });
        count++; //Increases count for every object added (every single loop) to only load the specified number of objects.
    }
}

//Just take a look through the models folder and see what model you want to include.
//To include model just copy the "generate objects" line down below
//Paste it in whichever function down below and change the name of the file to the file-name of the model you want to use
//Change the green number for the number you want generated onto the terrain :)

//Generate Clouds - Natalie/Walter
function createCloud() {
    geo = new THREE.Geometry();

    tuft1 = new THREE.SphereGeometry(THREE.Math.randFloat(0.8, 1.4), 7, 8);
    tuft1.translate(-2, 0, 0);
    geo.merge(tuft1);
    tuft2 = new THREE.SphereGeometry(THREE.Math.randFloat(1.0, 1.5), 7, 8);
    tuft2.translate(2, 0, 0);
    geo.merge(tuft2);
    tuft3 = new THREE.SphereGeometry(THREE.Math.randFloat(1.5, 2.0), 7, 8);
    tuft3.translate(0, 0.5, 0);
    geo.merge(tuft3);

    geo.computeFlatVertexNormals();

    cloud = new THREE.Mesh(
        geo,
        new THREE.MeshLambertMaterial({
            color: 'white',
            flatShading: true,
        })
    );
    cloud.scale.set(THREE.Math.randFloat(0.3, 0.8), THREE.Math.randFloat(0.5, 0.6), THREE.Math.randFloat(0.7, 1.0));
    cloud.position.set(THREE.Math.randInt(-10, 10), THREE.Math.randInt(5, 10), THREE.Math.randInt(-10, 10));
    cloud.castShadow = true;
    cloud.receiveShadow = true;
    cloud.rotation = Math.PI / 2;
    cloud.name = "cloud";
    scene.add(cloud);
}

//Generate Trees - Natalie/Walter
function createTree() {

    if (seasonControl.Season == "Summer") {
        generate_objects("models/naturePack_140.obj", "models/naturePack_140.mtl", treeCount);
        generate_objects("models/Windmill_01.obj", "models/Windmill_01.mtl", 1);
    } else if (seasonControl.Season == "Autumn") {
        generate_objects("models/naturePack_139.obj", "models/naturePack_139.mtl", treeCount);
        generate_objects("models/Windmill_01.obj", "models/Windmill_01.mtl", 1);
    } else if (seasonControl.Season == "Winter") {
        generate_objects("models/naturePack_159.obj", "models/naturePack_159.mtl", treeCount);
        generate_objects("models/Windmill_01.obj", "models/Windmill_01.mtl", 1);
    } else if (seasonControl.Season == "Spring") {
        generate_objects("models/naturePack_150.obj", "models/naturePack_150.mtl", treeCount);
        generate_objects("models/Windmill_01.obj", "models/Windmill_01.mtl", 1);
    }
}


//Remove All Objects - Walter
function removeObjects() {
    for (var i = scene.children.length - 1; i >= 0; i--) {
        var selectCloud = scene.getObjectByName("object");
        scene.remove(selectCloud);
    }
    for (var i = scene.children.length - 1; i >= 0; i--) {
        var selectCloud = scene.getObjectByName("cloud");
        scene.remove(selectCloud);
    }
}

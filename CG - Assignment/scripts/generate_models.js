//Objects downloaded from www.kenney.nl
//Inspiration from https://www.learnthreejs.com/load-3d-model-using-three-js-obj-loader/

function generate_objects(objs, mtls, amount){
    var count = 0;
    while(count < amount){
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load(mtls, function(material){
            material.preload();

            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(material);
            objLoader.load(objs, function(object){ // Loads obj file from the file path and passes loaded texture. Returns texture object directly used for material creation.
                object.traverse(function(child){   //'Traverse' iterates through loaded object. Passes function to be called for every child of object being traversed.
                    if(child instanceof THREE.Mesh){ //Tests whether child is of type THREE.Mesh
                        child.scale.set(THREE.Math.randFloat(0.3,0.8),THREE.Math.randFloat(0.9,1.5),THREE.Math.randFloat(0.3,0.8)); //Random scaling of object

                        child.position.x = THREE.Math.randInt(-8, 8); //Generates the object at a random integer number from -8 to 8 on the x and z axis.
                        child.position.z = THREE.Math.randInt(-8, 8);
                        child.position.y -= 0;

                        child.castShadow = true;
                        child.receiveShadow = true;
                    }

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

//Possible functions we can use for different seasons.
function generate_summer_models(){
    generate_objects("models/naturePack_151.obj", "models/naturePack_151.mtl", 8);
}

function generate_autumn_models(){

}

function generate_winter_models(){

}

function generate_spring_models(){

}

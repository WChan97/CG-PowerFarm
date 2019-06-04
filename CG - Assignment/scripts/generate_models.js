var objects = [];

function generate_objects(objs, mtls, amount){
    var count = 0;
    while(count < amount){
        var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load(mtls, function(material){
            material.preload();
            
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(material);
            objLoader.load(objs, function(object){
                object.traverse(function(child){    
                    if(child instanceof THREE.Mesh){
                        child.scale.set(THREE.Math.randFloat(0.3,0.8),THREE.Math.randFloat(0.3,0.8),THREE.Math.randFloat(0.3,0.8));
                        
                        child.geometry.computeVertexNormals();
                        child.position.x = THREE.Math.randInt(-8, 8);
                        child.position.z = THREE.Math.randInt(-8, 8);
                        child.position.y -= 0;
                        
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }   
                    
                    objects.push(object);
                    scene.add(object);

                    
                });
            });
        });
        count++;
    }
}

//Just take a look through the models folder and see what model you want to include.
//To include model just copy the "generate objects" line down below
//Paste it in whichever function down below and change the name of the file to the file-name of the model you want to use
//Change the green number for the number you want generated onto the terrain :)

function generate_summer_models(){
    generate_objects("models/naturePack_151.obj", "models/naturePack_151.mtl", 5);
}

function generate_autumn_models(){
    
}

function generate_winter_models(){
    
}

function generate_spring_models(){
    
}
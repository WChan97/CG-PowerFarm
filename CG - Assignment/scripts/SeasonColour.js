//This should handle Seasonal Changes
// Walter's Script, no touchie
function setSeason() {
    removeObjects();
    if (seasonControl.Season == "Summer") {
        //Change Color
        material_ground.color.setHex(0x597D27);
        material_ground_wire.color.setHex(0x344916);
        material_base.color.setHex(0x976d4d);
        material_water.color.setHex(0x1852af);
        renderer.setClearColor(0xc4efff);
        scene.fog = new THREE.Fog(0xffffff, 10, 100);


        //Change Models
    } else if (seasonControl.Season == "Autumn") {
        material_ground.color.setHex(0x727C27);
        material_ground_wire.color.setHex(0x3D4215);
        material_base.color.setHex(0x6a4c36);
        material_water.color.setHex(0x0b515d);
        renderer.setClearColor(0xffcfaf);
        scene.fog = new THREE.Fog(0xffffff, 0.5, 75);


    } else if (seasonControl.Season == "Winter") {
        material_ground.color.setHex(0x274e42);
        material_ground_wire.color.setHex(0x1a312a);
        material_base.color.setHex(0x4F3928);
        material_water.color.setHex(0x4a7bcb);
        renderer.setClearColor(0x676f72);
        scene.fog = new THREE.Fog(0xffffff, 0.1, 50);


    } else if (seasonControl.Season == "Spring") {
        material_ground.color.setHex(0x7FB238);
        material_ground_wire.color.setHex(0x344916);
        material_base.color.setHex(0x825e42);
        material_water.color.setHex(0x1852af);
        renderer.setClearColor(0xffface);
        scene.fog = new THREE.Fog(0xffffff, 10, 100);

    }

    for (var i = cloudCount - 1; i >= 0; i--) {
        createCloud();
    };
    createTree();
}

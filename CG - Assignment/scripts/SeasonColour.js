//This should handle Seasonal Changes
function setSeason() {
    if (seasonControl.Season == "Summer") {
        material_ground.color.setHex(0x597D27);
        material_ground_wire.color.setHex(0x344916);
        material_base.color.setHex(0x976d4d);
    } else if (seasonControl.Season == "Autumn") {
        material_ground.color.setHex(0x727C27);
        material_ground_wire.color.setHex(0x3D4215);
        material_base.color.setHex(0x6a4c36);
    } else if (seasonControl.Season == "Winter") {
        material_ground.color.setHex(0x40826D);
        material_ground_wire.color.setHex(0x1f3f35);
        material_base.color.setHex(0x4F3928);
    } else if (seasonControl.Season == "Spring") {
        material_ground.color.setHex(0x7FB238);
        material_ground_wire.color.setHex(0x344916);
        material_base.color.setHex(0x825e42);
    }
}

//Declarative Purposes
let seasons = [
    Summer = {
        material_ground: 0x597D27,
        material_ground_wire: 0x344916,
        material_base: 0x976d4d,
    },
    Autumn = {
        material_ground: 0x727C27,
        material_ground_wire: 0x3D4215,
        material_base: 0x6a4c36,
    },
    Winter = {
        material_ground: 0x40826D,
        material_ground_wire: 0x1f3f35,
        material_base: 0x4F3928,
    },
    Spring = {
        material_ground: 0x7FB238,
        material_ground_wire: 0x344916,
        material_base: 0x825e42,
    }
];

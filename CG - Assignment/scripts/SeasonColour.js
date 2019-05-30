//This should handle Seasonal Changes
let seasons = [
    Summer = {
        material_ground: 0x30ec2a,
        material_ground_wire: 0x204c09,
        material_base: 0x443b25,
    },
    Autumn = {
        material_ground: 0x30ec2a,
        material_ground_wire: 0x204c09,
        material_base: 0x443b25,
    },
    Winter = {
        material_ground: 0x30ec2a,
        material_ground_wire: 0x204c09,
        material_base: 0x443b25,
    },
    Spring = {
        material_ground: 0x30ec2a,
        material_ground_wire: 0x204c09,
        material_base: 0x443b25,
    }
];

function setSeason() {
    if (updateSeason.Season == "Summer") {
        material_ground.color.setHex(0x30ec2a);       
    } else if (updateSeason.Season == "Autumn") {  
        material_ground.color.setHex(0xffffff);  
    } else if (updateSeason.Season == "Winter") {   
        material_ground.color.setHex(0x000000);  
    } else if (updateSeason.Season == "Spring") {   
        material_ground.color.setHex(0x30ec2a);  
    }
}

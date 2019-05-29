//This should handle both keyboard and mouse inputs
        function BuildGui() {
            var gui = new dat.GUI();

            var param = {
                //color: material_tissue.color.getHex(),
                wireframe : material_ground.wireframe
            }
            //gui.addColor(param, 'color').onChange(function(val) {
            //    material_tissue.color.setHex(val);
            //});
            gui.add(param, 'wireframe').onChange(function(bool) {
                material_ground.wireframe=bool;
            });
            gui.open();
        }

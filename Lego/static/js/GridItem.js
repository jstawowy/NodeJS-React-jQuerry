console.log("wczytano plik Griditem.js")
class GridItem {

    constructor(x,z){
        console.log("konstruktor klasy GridItem")
                
        var pgeometry = new THREE.PlaneGeometry(50, 50, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
        var plane = new THREE.Mesh(pgeometry, material);
        plane.rotation.x = 90 * (Math.PI) / 180
        console.log("dodałem")
        plane.name="plane-"+x+"-"+z
        var lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 5 });
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(-20, 0, -20));
        geometry.vertices.push(new THREE.Vector3(30, 0, -20));
        geometry.vertices.push(new THREE.Vector3(30, 0, 30));
        geometry.vertices.push(new THREE.Vector3(-20, 0, 30));
        var line = new THREE.Line(geometry, lineMaterial);
        var kontener = new THREE.Object3D()
        kontener.add(line)
        kontener.add(plane)
        kontener.name="plane-"+x+"-"+z
       
        return kontener
    }
   
        
    }
 
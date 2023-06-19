class Block extends THREE.Object3D {

   constructor(rozmiar) {
      super()
      console.log("uhsdgxjkhg "+rozmiar)
      var merdz = new THREE.Geometry();
      this.rozmiar = rozmiar;
      var blocks = []
      var geometry = new THREE.BoxGeometry(50, 50, 50);
      this.material = new THREE.MeshBasicMaterial({ color: 0x32CD32, side: THREE.DoubleSide });
      //var box= new THREE.Mesh(geometry);
      //box.name="box"
      //return box;

      var geometryblob = new THREE.CylinderGeometry(5, 5, 8, 15)
      //var materialblob = new THREE.MeshBasicMaterial({ color: 0x32CD32, side: THREE.DoubleSide });
      //var blob = new THREE.Mesh(geometryblob, materialblob);
      //var container = new THREE.Object3D()
      //container.add(box)
      //container.add(blob)

      for (let i = 0; i < this.rozmiar; i++) {
         //console.log('leci')
         var block = new THREE.Mesh(geometry)
         block.position.set(i * 50, 0, 0)
         //this.blocks.
         blocks.push(block)
         block.updateMatrix();
         merdz.merge(block.geometry, block.matrix);
      }


      for (let i = 0; i < this.rozmiar; i++) {
         var blob1 = new THREE.Mesh(geometryblob)
         var blob2 = new THREE.Mesh(geometryblob)
         var blob3 = new THREE.Mesh(geometryblob)
         var blob4 = new THREE.Mesh(geometryblob)

         //var x = this.blocks[i].position.x
         //var z = this.blocks[i].position.z

         blob1.position.set((i) * 50 + 15, 30, 15)
         blob2.position.set((i) * 50 + 15, 30, -15)
         blob3.position.set((i) * 50 - 15, 30, 15)
         blob4.position.set((i) * 50 - 15, 30, -15)


         blob1.updateMatrix();
         merdz.merge(blob1.geometry, blob1.matrix);

         blob2.updateMatrix();
         merdz.merge(blob2.geometry, blob2.matrix);

         blob3.updateMatrix();
         merdz.merge(blob3.geometry, blob3.matrix);

         blob4.updateMatrix();
         merdz.merge(blob4.geometry, blob4.matrix);


      }


      this.ret = new THREE.Mesh(merdz, this.material);
      this.ret.name = "box"
      return this.ret
      // budowa elementów klocka (prostopadłościan i odpowiednia ilość cylindrów)
   }

   changecolor(color) {
      this.ret.material = new THREE.MeshBasicMaterial({ color: color, side: THREE.DoubleSide });
   }

   getrozmiar() {
      return this.rozmiar
   }

}
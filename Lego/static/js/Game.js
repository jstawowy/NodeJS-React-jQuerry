console.log("wczytano plik Game.js")

class Game {
    constructor() {
        console.log("konstruktor klasy Game")
        this.active = ""
        this.size = 1
        this.scene=""

    }


    tworzeniesceny() {
        var that = this
        var colors = [0x32CD32, 0x00FFFF, 0x000080, 0xFF00FF, 0xC71585, 0x2F4F4F]
        var licznik = 0;
        var scene = new THREE.Scene();
        this.scene=scene

        var camera = new THREE.OrthographicCamera(
            window.innerWidth / -2,
            window.innerWidth / 2,
            window.innerHeight / 2,
            window.innerHeight / -2,
            0, // minimalny zasięg musi być >= 0
            10000);

        camera.position.set(1000, 1000, 1000)

        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(0xd3d3d3);
        renderer.setSize(window.innerWidth, window.innerHeight);
        $("body").append(renderer.domElement);




        function render() {


            //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
            //np zmieniająca się wartość rotacji obiektu

            //mesh.rotation.y += 0.01;

            //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny

            requestAnimationFrame(render);

            // potwierdzenie w konsoli, że render się wykonuje

            // console.log("render leci")

            //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą

            renderer.render(scene, camera);
        }
        render()
        var axes = new THREE.AxesHelper(1000)
        scene.add(axes)

        camera.lookAt(scene.position)

        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
                var grid = new GridItem(i, j)
                scene.add(grid)
                grid.position.x = i * 50
                grid.position.z = j * 50
                grid.name = "plane-"
            }

        }
        // var block = new Block()
        // scene.add(block)


        $(document).mousedown(function (event) {

            var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
            var mouseVector = new THREE.Vector2() // ten wektor czyli pozycja w przestrzeni 2D na ekranie(x,y) wykorzystany będzie do określenie pozycji myszy na ekranie a potem przeliczenia na pozycje 3D

            mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
            mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;

            raycaster.setFromCamera(mouseVector, camera);

            var intersects = raycaster.intersectObjects(scene.children, true);

            console.log(intersects.length)


            if (intersects.length > 0) {
                for (var i = 0; i < intersects.length; i++) {
                    console.log(intersects[i].object);
                    if (intersects[i].object.name.includes("plane")) {
                        console.log(intersects[i].object.name)
                        this.size = 1
                        var x = parseInt(intersects[i].object.name.split("-")[1])
                        var z = parseInt(intersects[i].object.name.split("-")[2])
                        console.log(x, z)
                        var block = new Block(1)
                        block.position.x = x * 50
                        block.position.z = z * 50
                        block.position.y = 25
                        scene.add(block)
                        console.log(block.position)
                        that.active = block
                    }
                    else if (intersects[i].object.name.includes("box")) {
                        var block = new Block(1);
                        console.log(intersects[i].object.name)
                        this.size = 1
                        var x = parseInt(intersects[i].object.position.x)
                        var z = parseInt(intersects[i].object.position.z)
                        var y = parseInt(intersects[i].object.position.y)
                        block.position.x = x
                        block.position.z = z
                        block.position.y = y + 50
                        scene.add(block)
                        console.log("sssss:" + block.name)
                        that.active = block
                    }
                }


            }

        })
        $(document).keydown(function (event) {
            if (event.ctrlKey) {
                console.log(that.active)

                var object = that.active
                object.material.color.setHex(colors[licznik])
                console.log(that.active.material.color)
            }
            licznik++
            if (licznik >= 6) {
                licznik = 0;
            }
            if (event.keyCode == 66) {
                console.log(that.size)
                that.size++
                if(that.size>4) that.size=1
                var b = new Block(that.size)
                b.position.set(that.active.position)
                that.scene.add(b)
                //console.log(dodaj)
            }



            if (event.keyCode == 37) {
                console.log("dziala")
                that.active.position.x = that.active.position.x - 50
            }
            if (event.keyCode == 39) {
                console.log("dziala")
                that.active.position.x = that.active.position.x + 50
            }
            if (event.keyCode == 38) {
                console.log("dziala")
                that.active.position.z = that.active.position.z - 50
            }
            if (event.keyCode == 40) {
                console.log("dziala")
                that.active.position.z = that.active.position.z + 50
            }
        })



    }
}
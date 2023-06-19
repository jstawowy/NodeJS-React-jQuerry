var http = require("http");
var fs = require("fs")
var qs = require("querystring")
var obj = {
    dirs: [],
    files: [],
}
var i = 0;

fs.readdir(__dirname + "/static/mp3", function (err, files) {
    if (err) {
        return console.log(err);
    }

    files.forEach(function (fileName) {
        obj.dirs.push(fileName)

    });


    fs.readdir("static/mp3/" + obj.dirs[0], function (err, files) {
        if (err) {
            return console.log(err);
        }

        files.forEach(function (fileName) {
            obj.files.push(fileName)

            // console.log(obj)
        });
        console.log(obj)


    });


});





var server = http.createServer(function (req, res) {

    // parametr res oznacza obiekt odpowiedzi serwera (res)
    // parametr req oznacza obiekt żądania klienta (req)
    console.log(req.url)
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                fs.readFile("static/index.html", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();

                })

            }
            else if (req.url === "/style.css") {
                fs.readFile("static/style.css", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Main.js") {
                fs.readFile("static/main.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Ui.js") {
                fs.readFile("static/ui.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Net.js") {
                fs.readFile("static/net.js", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Origins") {
                fs.readFile("static/okladki/Origins.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Trench") {
                fs.readFile("static/okladki/Trench.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Gold_coast") {
                fs.readFile("static/okladki/Gold_coast.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.write(data);
                    res.end();
                })
            }
            else if (req.url === "/Runaway") {
                fs.readFile("static/okladki/runaway.jpg", function (error, data) {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.write(data);
                    res.end();
                })
            }
            else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("<h1>404 - brak takiej strony</h1>");
                res.end();

            }

            // załaduj pliki html, js, css, jpg, png etc;
            break;
        case "POST":
            // res.end(JSON.stringify(obj, null, 4)); // przy starcie, na żądanie klienta, zwróć JSON-a z nazwami katalogów zczytane z serwera
            // servResponse(req, res)


            servResponse(req, res)
            break;
        default: break;
    }


})

function servResponse(req, res) {
    var allData = "";

    //kiedy przychodzą dane POSTEM, w postaci pakietów,
    //łącza się po kolei do jednej zmiennej "allData"
    // w poniższej funkcji nic nie modyfikujemy

    req.on("data", function (data) {
        // console.log("data: " + data)
        allData += data;
    })

    //kiedy przyjdą już wszystkie dane
    //parsujemy je do obiektu "finish"
    //i odsyłamy do przeglądarki

    req.on("end", function (data) {
        // console.log(JSON.stringify(obj, null, 4))
        // console.log("Melejtetejtej tejtej telej")
        var finish = qs.parse(allData)
        console.log(finish)
        if (finish.a == "1") {
            res.end(JSON.stringify(finish))
        }
        else {
            res.end(JSON.stringify(finish))
        }
        //res.end("odsyłam do przeglądarki" + JSON.stringify(finish));
    })
}

server.listen(3000, function () {
    console.log("serwer startuje na porcie 3000")
});



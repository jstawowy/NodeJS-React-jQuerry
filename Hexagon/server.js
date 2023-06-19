var http = require("http")
var express = require("express")
var app = express()
var path = require("path")
const PORT = 3000;

//nasłuch na określonym porcie

app.use(express.static('static'))
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
    console.log(__dirname)
})



app.listen(PORT, function () { 
    console.log("start serwera na porcie " + PORT )
})
var http = require("http")
var express = require("express")
var app = express()
const PORT = 3000;

//nasłuch na określonym porcie
app.use(express.static('static'))
app.listen(PORT, function () { 
    console.log("start serwera na porcie " + PORT )
})

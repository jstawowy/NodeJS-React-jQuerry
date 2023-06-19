var net;
var ui;
$(document).ready(function () {

    ui = new Ui() // utworzenie obiektu klasy Ui
    net = new Net() // utworzenie obiektu klasy Net

    ui.prawydiv();
    ui.okladki();
    ui.kliki();
    net.start();
})
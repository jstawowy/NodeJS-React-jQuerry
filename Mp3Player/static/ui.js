class Ui {

    constructor() {
        this.zmienna = 1;
        console.log("konstruktor klasy Ui")
        // net.nastart(); // wywołanie funkcji z innej klasy
        // this.clicks()
    }

    prawydiv() {
        var divek = $("<div>")
        divek.attr("width", "100%")
        divek.attr("height", "100px")
        $("#prawa").append(divek) // dodajemy go do wcześniej istniejącego na stronie pustego diva z id="mainDiv"
    }

    getX() {
        return this.zmienna;
    }

    kliki() {
        $("#jeden").on("click", function () {
            this.zmienna = 1;
            console.log(this.zmienna)
        })

        $("#dwa").on("click", function () {
            this.zmienna = 2;
            console.log(this.zmienna)
        })

        $("#trzy").on("click", function () {
            this.zmienna = 3;
            console.log(this.zmienna)
        })

        $("#cztery").on("click", function () {
            this.zmienna = 4;
            console.log(this.zmienna)
        })
    }





    okladki() {
        console.log("main")
        var okladka1 = $("<img>") // tworzymy dowolny element html, tutaj button
        okladka1.attr("src", "/Origins");
        okladka1.attr("width", "300px")
        okladka1.attr("height", "300px")
        okladka1.attr("id", "jeden")
        $("#lewa").append(okladka1) // dodajemy go do wcześniej istniejącego na stronie pustego diva z id="mainDiv"

        var okladka2 = $("<img>") // tworzymy dowolny element html, tutaj button
        okladka2.attr("src", "/Trench");
        okladka2.attr("width", "300px")
        okladka2.attr("height", "300px")
        okladka2.attr("id", "dwa")
        $("#lewa").append(okladka2) // dodajemy go do wcześniej istniejącego na stronie pustego diva z id="mainDiv"

        var okladka3 = $("<img>") // tworzymy dowolny element html, tutaj button
        okladka3.attr("src", "/Runaway");
        okladka3.attr("width", "300px")
        okladka3.attr("height", "300px")
        okladka3.attr("id", "trzy")
        $("#lewa").append(okladka3) // dodajemy go do wcześniej istniejącego na stronie pustego diva z id="mainDiv"

        var okladka4 = $("<img>") // tworzymy dowolny element html, tutaj button
        okladka4.attr("src", "/Gold_coast");
        okladka4.attr("width", "300px")
        okladka4.attr("height", "300px")
        okladka4.attr("id", "cztery")
        $("#lewa").append(okladka4) // dodajemy go do wcześniej istniejącego na stronie pustego diva z id="mainDiv"
    }

}


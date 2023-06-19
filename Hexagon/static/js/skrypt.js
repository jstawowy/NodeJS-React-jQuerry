$(document).ready(function () {
    var tab = [];
    // var wartosc = $("#select").val()
    // console.log(wartosc)
    $("#select").on("input", function () {
        var wartosc = $("#select").val()
        ccc(wartosc)
    })

    function ccc(wartosc) {
        $("#prawy").empty()
        console.log(wartosc)
        for (i = 0; i < wartosc; i++) {
            for (j = 0; j < wartosc; j++) {
                numer = (i * 10 + j);
                console.log(numer)
                var divek = $("<div>") // tworzymy dowolny element html, tutaj button
                divek.addClass("klocek")
                divek.css("left", j * 100)
                divek.attr("data-x", i)
                divek.attr("data-y", j)
                if (j % 2 == 1) {
                    divek.css("top", (i * 100) + 50 + i * 10)
                }
                else {
                    divek.css("top", i * 100 + i * 10)
                }

                divek.attr("id", numer)
                divek.on("click", kliczek);
                $("#prawy").append(divek)

            }

        }
    }

    ccc(3)
    var i = 0;
    function kliczek() {
        //   console.log("Melejtejtejtej tejtej telej")
        if (($(this).children().length) == 0) {
            let img = $("<img>").attr("src", "gfx/arrow.png");
            img.addClass('strzalka')
            $(this).append(img)
            let numer = $("<div>").addClass("numer").text(0);
            $(this).append(numer)
        }
        else {
            //  console.log("Nietworzetego")
            if (i < 5) {
                i++
                $(this).children().text(i)
                $(this).children('.strzalka').css("transform", "rotate(" + $(this).find(".numer")[0].textContent * 60 + "deg)")
            }
            else {
                i = 0;
                $(this).children().text(i)
                $(this).children('.strzalka').css("transform", "rotate(" + $(this).find(".numer")[0].textContent * 60 + "deg)")
            }

        }

        var d = this.id;
        var px = $(this).attr("data-x")
        var py = $(this).attr("data-y")

        var tekst = $(this).children().text()
        if (tekst != 0) {
            var tekst = $(this).children().text().substring(1)
        }

        var level = {
            id: d,
            x: px,
            y: py,
            dirout: tekst
        }
        tab.push(level)
        console.log(level)

        for (var a = 0; a < tab.length; a++) {

            if (tab[a].id == level.id) {
                tab.pop()
                tab[a] = level
                // console.log("TAJAAAKK")
            }



        }

        console.log(tab)
    }

    $("#bt1").on("click", function () {
        console.log(tab)
    })


})
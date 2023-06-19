class Net {

    constructor() {
        console.log(ui.getX())
    }
    start() {
        $.ajax({
            url: "/",
            data: { a: ui.getX() },
            type: "POST",
            success: function (data) {
                //czytamy odesłane z serwera dane
                var obj = JSON.parse(data)

                //  alert("odebrałem obliczenia z serwera")
                console.log(obj)

                //tu wypisz sumę w div-ie na stronie

            },
            error: function (xhr, status, error) {
                console.log(xhr);
            },
        });

    }
}

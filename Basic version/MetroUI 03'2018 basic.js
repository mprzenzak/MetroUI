//var title = "testinputa";
//document.getElementById('titleInput').value;
function createGrid(x, y) {
    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {
            $('#container').append("<div class='grid'></div>");
        };
    };
    $('.grid').width(800 / x);
    $('.grid').height(800 / x);
};
function refreshGrid() {
    var x = document.getElementById('colsNumber').value;
    var y = document.getElementById('rowsNumber').value;
    var count = x * y;

    $('.grid').remove();
    createGrid(x, y);
};
$(document).ready(function () {
    $(".startBtn").click(function () {
        refreshGrid();
    });
});
function getData(count) {
    var names = ["Michał", "Jan", "Katarzyna", "Andrzej", "Józef", "Bartek", "Mikołaj", "Tomasz", "Julian", "Brajan", "Dżesika"];
    var surnames = ["Noga", "Kowalski", "Nowak", "Pazura", "Duda", "Komorowski", "Tomczyk", "Józefowicz", "Lechicki", "Goldberg"];
    var result = [];

    for (var i = 0; i < count; i++) {
        var randomNameIndex = Math.floor(Math.random() * names.length);
        var randomSurnameIndex = Math.floor(Math.random() * surnames.length);
        var name = names[randomNameIndex];
        var surname = surnames[randomSurnameIndex];
        result.push({
            name: name,
            surname: surname
        });
        //$("grid").css("content", "500");////////////////////////////////////////////////////////////////////////////////////////////////////
        var a ="test";
        $("data-name") = a;
    }

    return result
}
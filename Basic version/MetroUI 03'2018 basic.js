function createGrid(x, y) {
    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {
            $('#container').append("<div class='grid'>\
            <div class='nameDisplay'>defaultUsername<span id='usernameSpan'> unchanged</span></div>\
            </div>");
            //$('.nameDisplay').append('#container');
        };
    };
    $('.grid').width(800 / x);
    $('.grid').height(800 / x);
};
function refreshGrid() {
    var x = $("#colsNumber")[0].value;
    var y = $("#rowsNumber")[0].value;
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
    var names = ["Michal", "Jan", "Katarzyna", "Andrzej", "Jozef", "Bartek", "Mikolaj", "Tomasz", "Julian", "Brajan", "Dzesika"];
    var surnames = ["Noga", "Kowalski", "Nowak", "Pazura", "Duda", "Komorowski", "Tomczyk", "Jozefowicz", "Lechicki", "Goldberg"];
    var result = [];

    for (var i = 0; i < count; i++) {
        var randomNameIndex = Math.floor(Math.random() * names.length);
        var randomSurnameIndex = Math.floor(Math.random() * surnames.length);
        name = names[randomNameIndex];
        var surname = surnames[randomSurnameIndex];
        result.push({
            name: name,
            surname: surname
        });
    }
    return result
}
function textDisplay() {
    var data = getData(1);
    var username = "";
    $.each(data, function (i, { name, surname }) {
        username += ` ${name} ${surname}`;
    });
    $(".nameDisplay").html(username);
}
//$('.nameDisplay').innerHTML = changedUsername;
//$('#usernameSpan').text('changedUsername');
//$('#usernameSpan').html('changedUsername');

function createGrid(x, y) {
    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {
            $('#container').append("<div class='grid'><div id = 'usernameSpace'></div></div>");
        };
    };
    $('.grid').width(800 / x);
    $('.grid').height(800 / x);
};
function refreshGrid() {
    var x = $("#colsNumber")[0].value;
    var y = $("#rowsNumber")[0].value;
    count = x * y;

    $('.grid').remove();
    createGrid(x, y);
};
$(document).ready(function () {
    $(".startBtn").click(function () {
        refreshGrid();
        AssignUsername('usernameSpace', username);
        textDisplay();
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
    var x = $("#colsNumber")[0].value;
    var y = $("#rowsNumber")[0].value;
    var numberOfTiles = x * y;
    console.log(numberOfTiles);
    var data = getData(numberOfTiles);
    //var username = "";
    username = "";
    $.each(data, function (i, { name, surname }) {
        username += ` ${name} ${surname}`;
    });
    //$(".nameDisplay").html(username);
}

function AssignUsername(id, content) {/////////////////////////////////////nie moge zastąpić id klasa
    var container = document.getElementById(id);
    //var container = $('.Class');
    //var container = $('#id');///////////////////////////////nie działa
    container.innerHTML = content;
}
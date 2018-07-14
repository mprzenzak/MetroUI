function createGrid(x, y) {
    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {
            numberOfTiles = x * y;
            $('#container').append("<div class='grid'><div class = 'usernameSpace'></div></div>");
        };
    };
    $('.grid').width(800 / x);
    $('.grid').height(800 / x);
};
function refreshGrid() {
    var x = $("#colsNumber")[0].value;
    var y = $("#rowsNumber")[0].value;
    $('.grid').remove();
    createGrid(x, y);
};

function getData(count) {
    var names = ["Michal ", "Jan ", "Katarzyna ", "Andrzej ", "Jozef ", "Bartek ", "Mikolaj ", "Tomasz ", "Julian ", "Brajan ", "Dzesika "];
    var surnames = ["Noga ", "Kowalski ", "Nowak ", "Pazura ", "Duda ", "Komorowski ", "Tomczyk ", "Jozefowicz ", "Lechicki ", "Goldberg "];
    result = [];

    for (var i = 0; i < count; i++) {
        var randomNameIndex = Math.floor(Math.random() * names.length);
        var randomSurnameIndex = Math.floor(Math.random() * surnames.length);
        var name = names[randomNameIndex];
        var surname = surnames[randomSurnameIndex];
        result.push({
            name: name,
            surname: surname
        });
    }
    return result
}

function textDisplay() {
    var data = getData(numberOfTiles);
    var username = [];
    
    $.each(data, function (i, { name, surname }) {
        username.push(` ${name} ${surname}`);
    });

    $(".usernameSpace").each(function (index) {
        $(this).html(username[index]);
    })
}
function AssignUsername(Class, content) {
    var container = document.getElementsByClassName(Class);
    $(container).html(content);
}

$(document).ready(function () {
    $(".startBtn").click(function () {
        refreshGrid();
        textDisplay();
    });
});
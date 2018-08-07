function createGrid(x, y) {
    $('.grid').remove();
    for (var cols = 0; cols < x; cols++) {
        for (var rows = 0; rows < y; rows++) {
            numberOfTiles = x * y;
            $('#container').append("<div class='grid'><div class = 'usernameSpace'></div></div>");
        };
    };
    $('.grid').width(800 / x);
    $('.grid').height(800 / x);
};

function refreshGrid(x, y) {
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

function getOptions(options) {
    var settings = $.extend({
        columns: 2,
        data: 0,
        backgroundColor: "#212121",
        columnCount: 1
    }, options);
    return settings;
}

function renderGrid(abcd, settings) {
    var x = settings.columns;
    var y = result.length / x;
    refreshGrid(x, y);
}

function colorTiles(grid, options) {
    $(".grid").each(function (index) {
        $(this).css('backgroundColor', getOptions(options).backgroundColor);
        return this;
    })
}

function fillTilesWithContent(abcd, options) {
    var data = getData(numberOfTiles);
    var username = [];

    $.each(data, function (i, { name, surname }) {
        username.push(` ${name} ${surname}`);
    });

    $(".usernameSpace").each(function (index) {
        var namesTab = [];
        for (i = 0; i <= result.length - 1; i++) {
            namesTab.push(username[index]);
        }
        $(this).html(namesTab);
        return this;
    })
}

function columnCountSet(abcd,options){
    $(".grid").each(function (index) {
        $(this).css('columnCount', getOptions(options).columnCount);
        return this;
    })
}

(function ($) {
    $.fn.tiles = function (options) {
     
        var settings = getOptions(options);

        return this.each(function () {

            var grid = renderGrid(this, options);

            fillTilesWithContent(this, options);

            colorTiles(this, options);

            columnCountSet(this,options);
            
            return grid;
        });
    }
})(jQuery);
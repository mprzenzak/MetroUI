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

(function ($) {
    $.fn.customizeTile = function (options) {
        var settings = $.extend({
            backgroundColor: "#212121",
            columnCount:1
        }, options);
        return this.each(function () {

            if (settings.backgroundColor) {
                $(this).css('backgroundColor', settings.backgroundColor);
            }

            if (settings.columnCount) {
                $(this).css('columnCount', settings.columnCount);
            }

            // if (settings.data) {
            //     $(this).text(getData(4), settings.data);
            // }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    }
})(jQuery);

(function($){
    $.fn.customizeText = function(options){
        var settings=$.extend({
            text: getData(numberOfTiles) 
        },options);
        return this.each(function(){

            // if (settings.text) {
            //     $(this).html('text', settings.text);
            // }

            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        })
    }

    // $(".usernameSpace").each(function () {
    //     $(this).html(getData(10));
    //         //+"michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel"+" michal pierdziel");
    // })
})(jQuery); 

$(document).ready(function () {
    $(".startBtn").click(function () {
        refreshGrid();
        textDisplay();
        $('.grid').customizeTile();
        $('.usernameSpace').customizeText();
    });
});
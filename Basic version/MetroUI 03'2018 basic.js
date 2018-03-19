//var title = "testinputa";
//document.getElementById('titleInput').value;
function createGrid(x,y) {
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
    $('.grid').remove();
    createGrid(x,y);
};
$(document).ready(function () {
    $(".startBtn").click(function () {
        refreshGrid();
    });
});
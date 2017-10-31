function createGrid() {
    myGrid = $('<tileBox>');
    var rows = 5;
    var cols = 10;
    for (var i = 0; i < rows; i++) {
        var row = $('<tr>').appendTo(myGrid);
        for (var j = 0; j < cols; j++) {
            $('<tile>').appendTo(row);
        }
    }
    myGrid.appendTo("#container");
}
function createGrid() {
    myGrid = $('<tileBox>');
    var rows = 1;
    var cols = 10;
    var tiles = { "Message": "Hello world!" }

    var tileContainer = '<div class="tileContainer">                \
   <h1>"default message"</h1>\
   <button id="addTilebutton">Dodaj kafel</button>                          \
    </div>';
    var tileTemplate = '<div class="tile" data-id="{id}"><div> \
    <h1 style="float:rigth"> {Message} </h1> \
   </div></div> ';
    function transform(template, obiekt) {
        var result = template.replace("{Message}", obiekt.Message);
        return result;
    }
    function render(selector) {
        container = $(selector);
        container.html(tileContainer)
        tileGenerate()
        $("#addTilebutton").click(function (e) {
            addTile();
        })
        $.get("tiles").then(function (data) {
            tiles = data;
            tileGenerate()
        });
    };
    // for (var i = 0; i < rows; i++) {
    //     var row = $('<tr>').appendTo(myGrid);
    //     for (var j = 0; j < cols; j++) {

    //         $('<tile>').appendTo(row);
    //     }
    // }
    // myGrid.appendTo("#container");

    function tileGenerate() {
        for (i = tiles.length; i >= 0; i++) {
            container.append(transform(tileTemplate, tiles[i]))
        }
    }
    function addTile() {
            var newTile = {Message : "default message"}
        $.post("tiles", newTile, function (data) {
            tiles.push(data);
            tileGenerate()
        })
    }
    return {
        "render": render
    };

}
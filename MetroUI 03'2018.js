// $("div#tile-box").tilebox([
//     {
//         title: "Tile 1",
//         description: "Example of configurable tile",
//         background: "red",
//         link: "https://google.com",
//         size: "small"
//     },
//     {
//         title: "Tile 2",
//         description: "Another example of configurable tile",
//         background: "blue",
//         link: "https://onet.pl",
//         size: "wide"
//     }
// ]);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var GridComponent = (function () {
    //var title = "testinputa";
    tile = {
        "title": "title1",
    };
    tileTitle = tile.title[0];
    var container;
    var grid = []
    var postContainer = '<div class="postsTabContainer"></div>';
    var tileTemplate = '<div id="tileContainer" ><div> \
<p>   {title}   </p>\
</div>';

    function transform(template, object) {
        var result = template.replace("{title}", object.title);
        return result;
    }
    function render(selector) {
        container = $(selector);
        container.html(tileContainer)
        tileGenerate()
        $(".startBtn").click(function (e) {
            addTile();
        })
        grid = tile;
        tileGenerate()
    };
    function tileGenerate() {
        $(".tileContainer").remove()
        for (i = grid.length; i >= 0; i++) {
            container.append(transform(tileTemplate, grid[i]))
        }
    }
    function addTile() {
        var newPost = {
            //title: $("#titleInput").val(),
            title: tileTitle
        }
        tileGenerate()
    }
})



//BASIC VERSION:
/////////////////////////////////////////////////////////////////////////////////////////////////
// function createGrid(x, y) {
//     for (var cols = 0; cols < x; cols++) {
//         for (var rows = 0; rows < y; rows++) {
//             $('#container').append("<div class='grid'></div>");
//         };
//     };
//     $('.grid').width(800 / x);
//     $('.grid').height(800 / x);
// };
// function refreshGrid() {
//     var x = document.getElementById('colsNumber').value;
//     var y = document.getElementById('rowsNumber').value;
//     //var title = document.getElementById('titleInput').value;
//     var title = document.getElementById('titleInput').text;

//     $('.grid').remove();
//     createGrid(x, y);
// };
// $(document).ready(function () {
//     $(".startBtn").click(function () {
//         refreshGrid();
//     });
// });
////////////////////////////////////////////////////////////////////////
return {
    "render": render
};

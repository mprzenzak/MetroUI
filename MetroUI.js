var rows = 0;
var columns = 0;

//mozna tu przyporzadkowac wprowadzone wartosci
x = 7;
y = 5;

//function createGrid()
$(document).ready(function () {
for (rows = 0; rows < x; rows++) {
    for (columns = 0; columns < y; columns++) {
        //var Tile = $("<div class='Tile' style='position:absolute'></div>");
   // Tile.appendTo('#container');
        $("<div>").addClass("Tile").appendTo("#TileBox");
        //var Tile = $("<div class='Tile'></div>").append("#TileBox");
      //  Tile
        //var Tile = $("div class='Tile'style='position:absolute'></div>");
        //Tile.appendTo('#TileBox');
        //$("#TileBox").append("<div class = 'Tile'></div>");
    }
}
}
)
// $(".Tile").width(y);
// $(".Tile").height(x);
// $(document).ready(function () {
//     createGrid();
// })


















































































































//     //add columns to the the temp row object
//     for (var i = 0; i < columns; i++) {
//         $row.append($square.clone());
//     }
//     //clone the temp row object with the columns to the wrapper
//     for (var i = 0; i < rows; i++) {
//         $("#wrapper").append($row.clone());
//     }
//});


























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










// $(function() {
//     for (var x = 0; x < 16; x++) {
//         for (var y = 0; y < 16; y++) {
//             $("<div>").addClass("unit").appendTo("TileBox");
//         }
//     }
// });















// var TileComponent = (function () {
//     var Title = localStorage.getItem('Title');
//     var CustomDescription = localStorage.getItem("CustomDescription");
//     var CustomColour = localStorage.getItem("CustomColour");
//     var Link = localStorage.getItem("CustomLink");
//     var Size = localStorage.getItem("CustomSize");
//     var tileTemplate = '<div class="tilebox"></div>'
//     function transform(template, obiekt) {
//         var result = template.replace("{Title}", obiekt.CustomTitle);
//         result = result.replace("{Description}", CustomDescription);
//         result = result.replace("{Colour}", obiekt.CustomColour);
//         result = result.replace("{Link}", obiekt.CustomLink);
//         result = result.replace("{Size}", obiekt.CustomSize);
//         return result;
//     }
//     function render(selector) {
//         container = $(selector);
//         container.html(tilebox);
//     if (CustomSize == small) {
//         <div class="TileBoxSmall"></div>
//         // CustomWidth = 80 px;
//         // CustomHeight = 80 px;
//     }
//     if (CustomSize == medium) {
//         <div class="TileBoxMedium"></div>
//         // CustomWidth = 110 px;
//         // CustomHeight = 110 px;
//     }
//     if (CustomSize == big) {
//         <div class="TileBoxBig"></div>
//         // CustomWidth = 180 px;
//         // CustomHeight = 180 px;
//     }
//     return {
//         "render": render
//     };
//     }
// }

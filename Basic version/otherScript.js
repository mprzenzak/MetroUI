var OTHER_SCRIPT = function(){
function renderGrid() {
    $("body > .grid").text("It works!");
}

$(document).ready(function() { renderGrid(); });
}();
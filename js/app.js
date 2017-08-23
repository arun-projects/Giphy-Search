$(document).ready(function() {

    //Initialize Masonry for grid layout

    $(".grid").masonry({
        itemSelector: ".grid-item",
        percentPosition: true,
        gutter: 10
    });

});

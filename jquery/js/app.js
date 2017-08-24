$(document).ready(function() {

    function gifTemplate(url) {
        return `
            <div class="grid-item">
                <img src="${url}" />
            </div>
        `;
    }

    var $grid = $(".grid");

    $.ajax({
        type: "GET",
        url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
    })
    .then(function(response) {
        response.data.forEach(function(datum) {
            $grid.append(gifTemplate(datum.images.fixed_width.url));
        });
    })
    .catch(function(err) {
        console.log(err);
    });

    $("#search-form").on("submit", function(event) {
        event.preventDefault();

        var userInput = encodeURIComponent($("#search-field").val());

        $.ajax({
            type: "GET",
            url: `http://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=dc6zaTOxFJmzC`
        })
        .then(function(response) {
            //Clear original HTML
            $grid.html("");

            response.data.forEach(function(datum) {
                $grid.append(gifTemplate(datum.images.fixed_width.url));
            });
        })
        .catch(function(err) {
            console.log(err);
        });
    });

});

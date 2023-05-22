$(document).ready(function() {
    $("#loader").hide();

    $(document).ajaxStart(function() {
        $("#loader").show();
    }).ajaxStop(function() {
        $("#loader").hide();
    });

    $("#btn").click(fetch);
});

function fetch() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "IdVHUxSca8QkQTefVJCiAYq3gti3voLfzISYKyVa",
            date: $("#date").val(),
        },
        dataType: "json",
        success: showPicture,
        error: handleError,
    });
}

function showPicture(data) {
    $("#picture").attr("src", data.url);
    $(".title").text(data.title);
}

function handleError(error) {
    alert(error.responseText);
}
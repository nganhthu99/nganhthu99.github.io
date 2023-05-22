$(document).ready(function() {
    $("#loader").hide();

    $(document).ajaxStart(function() {
        $("#loader").show();
    }).ajaxStop(function() {
        $("#loader").hide();
    });

    $("#btn").click(fetchData);
});

function fetchData() {
    var url = "https://api.nasa.gov/planetary/apod";
    var apiKey = "IdVHUxSca8QkQTefVJCiAYq3gti3voLfzISYKyVa";
    var date = $("#date").val();

    fetch(`${url}?api_key=${apiKey}&date=${date}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            showPicture(data);
        })
        .catch(error => {
            handleError(error);
        });
}

function showPicture(data) {
    $("#picture").attr("src", data.url);
    $(".title").text(data.title);
}

function handleError(error) {
    alert(error.message);
}
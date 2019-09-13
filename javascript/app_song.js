$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();

    function callSongs() {
        let queryURL = XXXXXXXXXX

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

        });
    };

    callSongs();
});
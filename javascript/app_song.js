$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    $('.add-song').on('click', function(){
        $('#add-to-queue-modal').modal('open');
    })
    

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
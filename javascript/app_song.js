$(document).ready(function () {
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    $('.add-song').on('click', function(){
        $('#add-to-queue-modal').modal('open');
    })
    

    function callSongs() {
        //let type = $(this).attr("data-type");
        //let queryURL = "https://api.genius.com/search?access_token=0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn&q=" + type;
        let token = "0JAdOqbjDowpcohj8tFFZNaINIzaPLciE_i7JiXoaqzrvIMqMXtgTPZU87HJnuDn"
        let queryURL = "https://api.genius.com/search?access_token=" + token + "&q=weezer";

        $.ajax({
            url:queryURL,
            method: "GET",
            dataType: 'json',
        }).then(function(response) {
            $(".collection").text(JSON.stringify(response));
            //then(function(data) {
                // fetch(response.hits.map(function(hit) {
                // }));
            //});
            console.log(response);
        });
    };
    callSongs();
})
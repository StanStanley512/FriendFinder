$(document).ready(function () {
    localStorage.clear()

    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let Ava = this
        
        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
        }); 

        // modal btn listeners
        $('#add-to-queue-modal').modal('open');
        //on click no
        $('#no-add-song').on('click', function(){
            $('#add-to-queue-modal').modal('close')
        });
        //on click remove
        $('#remove-add-song').on('click', function(){
            console.log('yes');
            console.log(Ava['data-song'])
            //remove Avatar
        });

        //on click adds song to queue page
        $('#yes-add-song').on('click', function(){
            console.log('yes');
            //remove Avatar
            $("queue-collection").prepend("<div class='row'>"+spotifySong+"</div>");
        }); 
    })
    
    //LIST SONGS PSUEDOCODE
    // function callSongs() {
    //     let queryURL = ' '
    //     let genres ="XXXXXXX"

    //      create genre button
    //      call API based on X

    //      on click, data search
    //      append songs

    // TO CALL SPOTIFY
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     }).then(function(response) {

    //     });
    // };

    // callSongs();
});
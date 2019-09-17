$(document).ready(function () {
    localStorage.clear()

    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let Ava= $(this).attr('id')
        let song = $(this).attr('data-song');
        let artist = $(this).attr('data-artist');
        let cover = $(this).attr('data-cover');

        console.log('yes');
            console.log(Ava)
            console.log(song);
            console.log(artist);
            console.log(cover);
        
        //add to UpNext on close
        $('.add-to-queue-modal').modal({
            dismissible: false,
            onCloseEnd: function(){
            

            }
        }); 
        $('#add-to-queue-modal').modal('open');
        $(this).detach() //removes from song-collection need to hold in an array
   
    });

        // modal btn listeners
        //on click remove
        $('#cancel-add-song').on('click', function(){
            
            
        });

        //on click adds song to queue page
        $('#okay-add-song').on('click', function(){
          
            //send Avatar to upnext with firebase
           
        }); 
    
    
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
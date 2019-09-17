$(document).ready(function () {


    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('#add-to-queue-modal').modal();

    //populate by song
    $('#song-search').change(function(){
        let urlSong =`https://deezerdevs-deezer.p.rapidapi.com/track/${song}`;
        $.ajax({
        url: urlSong,
        method: 'GET',
        headers: {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "7e5a34b3cfmshc5b7f554f6185efp1d35edjsna7c7811d870d"
        }
        }).then(function(response){
        console.log(response)
        })

    })
      
    

    

    //populate by artist
   

    // open modal
    $('#song-collection').on('click', '.avatar', function(){
        let song = $(this).attr('data-song');
        let artist = $(this).attr('data-artist');
       console.log(song);
       console.log(artist);

        //add to UpNext on close
        $('#add-to-queue-modal').modal({
            dismissible: false,
            onCloseEnd: function(){ 
            //send data to database
            console.log(song)
              
        }

    }); 
        $('#add-to-queue-modal').modal('open');  
    })
});